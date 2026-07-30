import React, { useEffect, useState } from 'react';
import { List, ChevronRight } from 'lucide-react';

const TableOfContents = () => {
  const [activeId, setActiveId] = useState('');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'why-choose', title: 'Why Choose Best IPTV USA' },
    { id: 'features', title: 'Key Features' },
    { id: 'benefits', title: 'Benefits for Different Users' },
    { id: 'how-it-works', title: 'How It Works' },
    { id: 'pricing', title: 'Pricing Overview' },
    { id: 'faq', title: 'FAQ Section' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-secondary/50 border border-border p-6 rounded-2xl mb-12 sticky top-28 hidden lg:block w-64 shrink-0">
      <div className="flex items-center gap-2 mb-4">
        <List className="text-primary w-5 h-5" />
        <h3 className="font-bold text-lg m-0">Table of Contents</h3>
      </div>
      <nav className="flex flex-col gap-2">
        {sections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={`flex items-center gap-2 text-sm transition-all py-1 ${
              activeId === id 
                ? 'text-primary font-semibold translate-x-1' 
                : 'text-muted-foreground hover:text-foreground hover:translate-x-1'
            }`}
          >
            <ChevronRight className={`w-4 h-4 transition-opacity ${activeId === id ? 'opacity-100' : 'opacity-0'}`} />
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;