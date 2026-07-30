import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProduct, getProductQuantities } from '@/api/EcommerceApi';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, Loader2, ArrowLeft, CheckCircle, Minus, Plus, XCircle, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = useCallback(async () => {
    if (product && selectedVariant) {
      const availableQuantity = selectedVariant.inventory_quantity;
      try {
        await addToCart(product, selectedVariant, quantity, availableQuantity);
        toast({
          title: "Added to Cart! 🛒",
          description: `${quantity} x ${product.title} (${selectedVariant.title}) added.`,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message,
        });
      }
    }
  }, [product, selectedVariant, quantity, addToCart, toast]);

  const handleQuantityChange = useCallback((amount) => {
    setQuantity(prevQuantity => {
        const newQuantity = prevQuantity + amount;
        if (newQuantity < 1) return 1;
        return newQuantity;
    });
  }, []);

  const handlePrevImage = useCallback(() => {
    if (product?.images?.length > 1) {
      setCurrentImageIndex(prev => prev === 0 ? product.images.length - 1 : prev - 1);
    }
  }, [product?.images?.length]);

  const handleNextImage = useCallback(() => {
    if (product?.images?.length > 1) {
      setCurrentImageIndex(prev => prev === product.images.length - 1 ? 0 : prev + 1);
    }
  }, [product?.images?.length]);

  const handleVariantSelect = useCallback((variant) => {
    setSelectedVariant(variant);

    if (variant.image_url && product?.images?.length > 0) {
      const imageIndex = product.images.findIndex(image => image.url === variant.image_url);

      if (imageIndex !== -1) {
        setCurrentImageIndex(imageIndex);
      }
    }
  }, [product?.images]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProduct = await getProduct(id);

        try {
          const quantitiesResponse = await getProductQuantities({
            fields: 'inventory_quantity',
            product_ids: [fetchedProduct.id]
          });

          const variantQuantityMap = new Map();
          quantitiesResponse.variants.forEach(variant => {
            variantQuantityMap.set(variant.id, variant.inventory_quantity);
          });

          const productWithQuantities = {
            ...fetchedProduct,
            variants: fetchedProduct.variants.map(variant => ({
              ...variant,
              inventory_quantity: variantQuantityMap.get(variant.id) ?? variant.inventory_quantity
            }))
          };

          setProduct(productWithQuantities);

          if (productWithQuantities.variants && productWithQuantities.variants.length > 0) {
            setSelectedVariant(productWithQuantities.variants[0]);
          }
        } catch (quantityError) {
          throw quantityError;
        }
      } catch (err) {
        setError(err.message || 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex justify-center items-center">
        <Loader2 className="h-16 w-16 text-[#0C0BBD] animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Link to="/store" className="inline-flex items-center gap-2 text-white hover:text-[#0C0BBD] transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Store
          </Link>
          <div className="text-red-400 p-12 glass-card rounded-2xl">
            <XCircle className="mx-auto h-20 w-20 mb-6 text-red-500" />
            <h1 className="text-2xl font-bold text-white mb-4">Error loading product</h1>
            <p className="text-gray-300">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const price = selectedVariant?.sale_price_formatted ?? selectedVariant?.price_formatted;
  const originalPrice = selectedVariant?.price_formatted;
  const availableStock = selectedVariant ? selectedVariant.inventory_quantity : 0;
  const isStockManaged = selectedVariant?.manage_inventory ?? false;
  const canAddToCart = !isStockManaged || quantity <= availableStock;

  const currentImage = product.images[currentImageIndex];
  const hasMultipleImages = product.images.length > 1;

  const breadcrumbItems = [
    { label: 'Store', path: '/store' },
    { label: product.title, path: `/product/${id}` }
  ];

  return (
    <>
      <Helmet>
        <title>{product.title} | Premium IPTV USA Store</title>
        <meta name="description" content={`Get the ${product.title} to enhance your best IPTV subscription USA experience. ${product.subtitle || ''}`} />
      </Helmet>
      
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
             <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 glass-card p-8 rounded-3xl border border-white/10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative flex flex-col">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] h-[400px] md:h-[550px] bg-black/40">
                <img
                  src={!currentImage?.url ? placeholderImage : currentImage.url}
                  alt={`${product.title} - View from IPTV USA Premium Store`}
                  loading="lazy"
                  className="w-full h-full object-contain p-4"
                />

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#0C0BBD] text-white p-3 rounded-full transition-colors shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#0C0BBD] text-white p-3 rounded-full transition-colors shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {product.ribbon_text && (
                  <div className="absolute top-6 left-6 bg-[#0C0BBD] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-white/20">
                    {product.ribbon_text}
                  </div>
                )}
              </div>

              {hasMultipleImages && (
                <div className="flex gap-4 mt-6 overflow-x-auto pb-4 scrollbar-hide">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? 'border-[#0C0BBD] scale-105' : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <img
                        src={!image.url ? placeholderImage : image.url}
                        alt={`${product.title} detailed view ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col pt-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{product.title}</h1>
              <p className="text-xl text-[#0C0BBD] font-medium mb-6">{product.subtitle}</p>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <span className="text-5xl font-bold text-white">{price}</span>
                {selectedVariant?.sale_price_in_cents && (
                  <span className="text-2xl text-gray-500 line-through">{originalPrice}</span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">Product Description</h2>
              <div className="prose prose-lg prose-invert text-gray-300 mb-10" dangerouslySetInnerHTML={{ __html: product.description }} />

              {product.additional_info?.length > 0 && (
                <div className="mb-10 space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">Specifications & Details</h2>
                  {product.additional_info
                    .sort((a, b) => a.order - b.order)
                    .map((info) => (
                      <div key={info.id} className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                           <Shield size={20} className="text-[#0C0BBD]" />
                           {info.title}
                        </h3>
                        <div className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: info.description }} />
                      </div>
                    ))}
                </div>
              )}

              {product.variants.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Select Option</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map(variant => (
                      <Button
                        key={variant.id}
                        variant={selectedVariant?.id === variant.id ? 'default' : 'outline'}
                        onClick={() => handleVariantSelect(variant)}
                        className={`transition-all text-base py-6 ${selectedVariant?.id === variant.id ? 'bg-[#0C0BBD] border-[#0C0BBD] hover:bg-[#0C0BBD]/90' : 'border-white/20 text-white hover:bg-white/10'}`}
                      >
                        {variant.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto bg-black/20 p-6 rounded-2xl border border-white/5">
                 <div className="flex flex-col sm:flex-row items-center gap-6">
                   <div className="flex items-center border border-white/20 rounded-full bg-black/40 h-14 w-full sm:w-auto">
                     <button onClick={() => handleQuantityChange(-1)} className="w-14 h-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 rounded-l-full transition-colors"><Minus size={20} /></button>
                     <span className="w-12 text-center text-white font-bold text-lg">{quantity}</span>
                     <button onClick={() => handleQuantityChange(1)} className="w-14 h-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 rounded-r-full transition-colors"><Plus size={20} /></button>
                   </div>
                   
                   <Button 
                      onClick={handleAddToCart} 
                      size="lg" 
                      className="w-full btn-primary h-14 text-xl disabled:opacity-50 disabled:cursor-not-allowed" 
                      disabled={!canAddToCart || !product.purchasable}
                   >
                     <ShoppingCart className="mr-3 h-6 w-6" /> Add to Order
                   </Button>
                 </div>

                 <div className="mt-4 text-center sm:text-left">
                    {isStockManaged && canAddToCart && product.purchasable && (
                      <p className="text-sm text-green-400 flex items-center justify-center sm:justify-start gap-2">
                        <CheckCircle size={16} /> Instant delivery available ({availableStock} available)
                      </p>
                    )}

                    {isStockManaged && !canAddToCart && product.purchasable && (
                       <p className="text-sm text-yellow-400 flex items-center justify-center sm:justify-start gap-2">
                        <XCircle size={16} /> Stock limit reached
                      </p>
                    )}

                    {!product.purchasable && (
                        <p className="text-sm text-red-400 flex items-center justify-center sm:justify-start gap-2">
                          <XCircle size={16} /> Currently unavailable
                        </p>
                    )}
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;