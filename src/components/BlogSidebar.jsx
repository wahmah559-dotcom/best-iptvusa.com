import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const BlogSidebar = ({ author, relatedArticles, categories, popularArticles }) => {
  const { toast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "Subscribed Successfully! 🎉",
      description: "You've been added to our IPTV newsletter.",
    });
  };

  return (
    <div className="space-y-10">
      {/* Author Bio */}
      {author && (
        <div className="glass p-6 rounded-2xl border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg glow-cyan">
              {author.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white">{author}</h3>
              <p className="text-[#00D9FF] text-sm font-medium">IPTV Expert & Writer</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Streaming tech enthusiast dedicated to helping users cut the cord and optimize their home entertainment setup with premium IPTV solutions.
          </p>
        </div>
      )}

      {/* Newsletter */}
      <div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9D4EDD]/20 blur-[40px] rounded-full"></div>
        <h3 className="text-xl font-heading font-bold text-white mb-2 relative z-10">Stay Updated</h3>
        <p className="text-gray-400 text-sm mb-4 relative z-10">Get the latest IPTV news, guides, and exclusive offers delivered to your inbox.</p>
        <form onSubmit={handleSubscribe} className="relative z-10 flex flex-col gap-3">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            required 
            className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl"
          />
          <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-white font-bold rounded-xl shadow-lg">
            <Mail className="mr-2" size={16} /> Subscribe
          </Button>
        </form>
      </div>

      {/* Categories */}
      <div className="glass p-6 rounded-2xl border border-white/10">
        <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center pb-3 border-b border-white/10">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <Link 
                to={`/blog?category=${cat.name}`} 
                className="flex items-center justify-between text-gray-400 hover:text-[#00D9FF] group transition-colors py-1"
              >
                <span className="flex items-center gap-2">
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                  {cat.name}
                </span>
                <span className="bg-white/5 text-xs px-2 py-1 rounded-md">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Articles */}
      {popularArticles && popularArticles.length > 0 && (
        <div className="glass p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center pb-3 border-b border-white/10">
            Popular Reads
          </h3>
          <div className="space-y-4">
            {popularArticles.map((article, idx) => (
              <Link key={idx} to={`/blog/${article.slug}`} className="flex gap-4 group">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={article.featuredImage} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-gray-200 group-hover:text-[#00D9FF] transition-colors line-clamp-2 leading-snug mb-1">
                    {article.title}
                  </h4>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSidebar;