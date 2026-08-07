import React, { useState, useMemo } from 'react';
import { SEOHead } from '../components/SEOHead';
import { blogPosts } from '../data/blogData';
import { PageRoute } from '../types';

interface BlogPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ navigate, onOpenCalendly }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = useMemo(
    () => ['All', '3PL Operations', 'WISMO Reduction', 'WMS API', 'ROI', 'Automation'],
    []
  );

  const filteredPosts = useMemo(() => {
    if (selectedTag === 'All') return blogPosts;
    return blogPosts.filter((post) => post.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <>
      <SEOHead
        title="3PL Customer Support & Automation Blog | Hation AI"
        description="Guides, benchmarks, and tactical articles on reducing WISMO email volume, 3PL customer service automation, and WMS API integrations."
        canonicalUrl="https://hation.xyz/blog"
      />

      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header & Hero */}
          <div className="max-w-3xl mx-auto text-center mb-16">
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

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-14">
            {allTags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:ring-offset-2 focus:ring-offset-[var(--ink-950)] ${
                    isActive
                      ? 'bg-[var(--orange)] text-[var(--ink-950)] shadow-[0_0_15px_rgba(249,115,22,0.3)] font-semibold scale-105'
                      : 'bg-[var(--ink-900)] text-[var(--steel-300)] border border-[var(--steel-700)] hover:border-[var(--steel-500)] hover:text-white hover:bg-[var(--ink-850)]'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Article Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="group relative bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 hover:border-[var(--steel-500)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Metadata Header */}
                    <div className="flex justify-between items-center text-xs font-mono text-[var(--steel-400)] mb-4">
                      <time dateTime={post.publishedDate}>{post.publishedDate}</time>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl text-white font-bold mb-3 tracking-tight group-hover:text-[var(--orange-tint)] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[var(--steel-300)] text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-[var(--ink-800)] border border-[var(--steel-700)] text-[11px] font-mono text-[var(--steel-300)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[var(--steel-700)] flex justify-between items-center text-xs font-medium">
                      <span className="text-[var(--steel-400)]">{post.author.name}</span>
                      <span className="text-[var(--orange-tint)] font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read article
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl mb-20">
              <p className="text-[var(--steel-300)] text-base">No articles found matching this tag.</p>
              <button
                type="button"
                onClick={() => setSelectedTag('All')}
                className="mt-4 text-xs font-mono text-[var(--orange-tint)] hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* CTA Callout Box */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            {/* Soft Ambient Light inside CTA */}
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