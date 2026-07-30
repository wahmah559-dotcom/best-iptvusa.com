import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { User, Clock, Calendar, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { blogArticles } from '@/data/blogArticles';
import { Button } from '@/components/ui/button';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = blogArticles.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Button onClick={() => navigate('/blog')} className="btn-primary">Return to Resources</Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogArticles.filter(a => article.relatedArticles.includes(a.slug));

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-950 text-slate-300">
      <Helmet>
        <title>{article.title} | Premium Streaming Insights</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.featuredImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 font-semibold transition-colors">
          <ArrowLeft size={18} /> Back to Resources
        </Link>

        <header className="mb-10 text-center">
          <div className="mb-4">
            <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-600/30">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {article.h1}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><User size={16} className="text-blue-500" /> {article.author}</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-blue-500" /> {article.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-blue-500" /> {article.readTime}</span>
          </div>
        </header>

        <div className="rounded-2xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
          <img src={article.featuredImage} alt={article.title} className="w-full h-auto object-cover max-h-[500px]" />
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 lg:col-span-9">
            <div 
              className="blog-content prose prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-2 flex-wrap">
                {article.tags.map(tag => (
                  <span key={tag} className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-sm text-slate-400">#{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold flex items-center gap-2"><Share2 size={16} /> Share:</span>
                <button className="text-slate-400 hover:text-blue-400"><Twitter size={20} /></button>
                <button className="text-slate-400 hover:text-blue-600"><Facebook size={20} /></button>
                <button className="text-slate-400 hover:text-blue-500"><Linkedin size={20} /></button>
              </div>
            </div>
          </div>

          <aside className="md:col-span-4 lg:col-span-3 space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Ready for Premium Access?</h3>
              <p className="text-sm text-slate-400 mb-6">Experience massive libraries of live networks and on-demand content today.</p>
              <a href="https://wa.me/17867352904" target="_blank" rel="noopener noreferrer">
                <Button className="w-full btn-premium py-4">Get Started</Button>
              </a>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-20 border-t border-slate-800 pt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                  <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-colors h-full flex flex-col">
                    <img src={post.featuredImage} alt={post.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-slate-400 line-clamp-2 mt-auto">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogArticlePage;