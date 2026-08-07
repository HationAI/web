import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { blogPosts } from '../data/blogData';
import { PageRoute } from '../types';

interface BlogPostPageProps {
  postSlug: string;
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  postSlug,
  navigate,
  onOpenCalendly,
}) => {
  const post = blogPosts.find((p) => p.slug === postSlug);

  if (!post) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
        <div className="container max-w-md text-center py-12 px-6 bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[var(--ink-800)] border border-[var(--steel-700)] text-[var(--orange-tint)] flex items-center justify-center mx-auto mb-4 font-mono text-xl">
            404
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Article Not Found</h1>
          <p className="text-sm text-[var(--steel-300)] mb-6">
            The article you are looking for might have been moved or removed.
          </p>
          <button
            type="button"
            className="btn btn-primary px-6 py-2.5 text-xs font-semibold rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all"
            onClick={() => navigate('/blog')}
          >
            ← Back to All Articles
          </button>
        </div>
      </section>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hation AI',
      url: 'https://hation.xyz',
    },
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Hation AI Blog`}
        description={post.excerpt}
        canonicalUrl={`https://hation.xyz/blog/${post.slug}`}
        jsonLd={jsonLd}
      />

      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Ambient Top Light Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(249,115,22,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          
          {/* Top Bar Navigation & Actions */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--steel-700)]/50">
            <nav className="text-xs font-mono text-[var(--steel-400)] flex items-center gap-2">
              <a
                href="/blog"
                className="hover:text-white transition-colors flex items-center gap-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/blog');
                }}
              >
                <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
                <span>Blog</span>
              </a>
              <span className="text-[var(--steel-600)]">/</span>
              <span className="text-[var(--orange-tint)] truncate max-w-[180px] sm:max-w-[280px]">
                {post.slug}
              </span>
            </nav>

            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="text-xs font-mono text-[var(--steel-400)] hover:text-white transition-colors flex items-center gap-1"
            >
              All Articles
            </button>
          </div>

          {/* Article Header Header */}
          <header className="mb-12">
            {/* Tag Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-[var(--ink-900)] border border-[var(--steel-700)] text-[11px] font-mono text-[var(--steel-300)] shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
              {post.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-[var(--steel-400)] pt-6 border-t border-[var(--steel-700)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--orange)] to-[var(--ink-900)] border border-[var(--steel-700)] text-[var(--ink-950)] font-bold flex items-center justify-center text-sm font-mono shadow-inner">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <span className="text-white font-semibold block text-sm">{post.author.name}</span>
                  <span className="text-[var(--steel-400)] text-[11px] font-sans">{post.author.role}</span>
                </div>
              </div>

              <div className="text-right flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <time dateTime={post.publishedDate}>{post.publishedDate}</time>
                <span className="hidden sm:inline text-[var(--steel-600)]">•</span>
                <span className="flex items-center justify-end gap-1">
                  <svg className="w-3.5 h-3.5 text-[var(--steel-400)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Article Prose Content */}
          <article className="prose prose-invert max-w-none mb-16 text-[var(--steel-300)] text-base sm:text-lg leading-relaxed">
            {post.content.map((section, idx) => (
              <section key={idx} className="mb-12">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-8 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="mb-6 leading-relaxed">
                    {para}
                  </p>
                ))}
                {section.quote && (
                  <blockquote className="my-8 p-6 bg-[var(--ink-900)] border-l-4 border-[var(--orange)] rounded-r-xl text-white italic font-serif text-lg leading-relaxed shadow-md">
                    "{section.quote}"
                  </blockquote>
                )}
                {section.bulletPoints && (
                  <ul className="my-6 space-y-3 list-none pl-0">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-base text-[var(--steel-300)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] mt-2.5 shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          {/* Author Bio Box */}
          <div className="bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 sm:p-8 mb-16 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--orange)] to-[var(--ink-900)] border border-[var(--steel-700)] text-[var(--ink-950)] font-bold flex items-center justify-center text-xl font-mono shrink-0 shadow-sm">
              {post.author.name.charAt(0)}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-lg tracking-tight">{post.author.name}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--ink-800)] border border-[var(--steel-700)] text-[var(--steel-300)]">Author</span>
              </div>
              <p className="text-[var(--orange-tint)] text-xs font-mono">{post.author.role}</p>
              <p className="text-[var(--steel-300)] text-xs sm:text-sm pt-1 leading-relaxed">
                Writing about 3PL customer service engineering, WMS API integrations, and fulfillment logistics operations.
              </p>
            </div>
          </div>

          {/* Call-to-Action Card */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] p-8 sm:p-12 rounded-2xl text-center shadow-2xl">
            {/* Ambient Lighting in CTA */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[var(--orange)] opacity-10 blur-3xl pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-3 tracking-tight">
              Automate Your 3PL's WISMO Email Inbox
            </h2>
            <p className="text-[var(--steel-300)] text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Connect ShipStation, Extensiv, or SkuVault to Hation AI in 4 days.
            </p>
            <button
              type="button"
              className="btn btn-primary px-8 py-3.5 text-sm font-semibold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-0.5"
              onClick={onOpenCalendly}
            >
              Book a Workflow Audit
            </button>
          </div>

        </div>
      </section>
    </>
  );
};