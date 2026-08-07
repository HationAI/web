import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { blogPosts } from '../data/blogData';
import { PageRoute } from '../types';

interface BlogPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ navigate, onOpenCalendly }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', '3PL Operations', 'WISMO Reduction', 'WMS API', 'ROI', 'Automation'];

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedTag === 'All') return true;
    return post.tags.includes(selectedTag);
  });

  return (
    <>
      <SEOHead
        title="3PL Customer Support & Automation Blog | Hation AI"
        description="Guides, benchmarks, and tactical articles on reducing WISMO email volume, 3PL customer service automation, and WMS API integrations."
        canonicalUrl="https://hation.xyz/blog"
      />

      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Hero Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ink-900)] border border-[var(--steel-700)] text-xs font-mono text-[var(--orange-tint)] mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse" />
              3PL Support Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Logistics &amp; Customer Support Insights
            </h1>
            <p className="text-[var(--steel-300)] text-lg sm:text-xl font-normal leading-relaxed">
              Tactical guides and financial analyses for 3PL warehouse owners and customer service directors.
            </p>
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {allTags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 border ${
                    isActive
                      ? 'bg-[var(--orange)] text-[var(--ink-950)] border-[var(--orange)] shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                      : 'bg-[var(--ink-900)] text-[var(--steel-300)] border-[var(--steel-700)] hover:border-[var(--steel-500)] hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="group relative bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 sm:p-7 hover:border-[var(--steel-500)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-[var(--steel-400)] mb-4">
                    <span>{post.publishedDate}</span>
                    <span className="bg-[var(--ink-800)] px-2 py-0.5 rounded border border-[var(--steel-700)] text-[11px]">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl text-white font-bold mb-3 tracking-tight group-hover:text-[var(--orange-tint)] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[var(--steel-300)] text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="bg-[var(--ink-800)] border border-[var(--steel-700)] text-[10px] font-mono text-[var(--steel-300)] px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[var(--steel-700)] flex justify-between items-center text-xs">
                    <span className="text-[var(--steel-400)] font-medium">{post.author.name}</span>
                    <span className="text-[var(--orange-tint)] font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Callout Box */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[var(--orange)] opacity-10 blur-3xl pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl text-white font-bold mb-3 tracking-tight">
              Want to Apply These Strategies?
            </h3>
            <p className="text-[var(--steel-300)] text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Schedule a 15-minute audit to see how Hation AI can automate your specific WISMO inbox workflows.
            </p>
            <button
              type="button"
              className="btn btn-primary px-8 py-3.5 text-sm font-semibold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-0.5"
              onClick={onOpenCalendly}
            >
              Book an Audit
            </button>
          </div>

        </div>
      </section>
    </>
  );
};