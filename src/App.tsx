import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CalendlyModal } from './components/CalendlyModal';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SecurityPage } from './pages/SecurityPage';
import { PricingPage } from './pages/PricingPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { GlossaryTermPage } from './pages/GlossaryTermPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { IntegrationDetailPage } from './pages/IntegrationDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [isCalendlyOpen, setIsCalendlyOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('/#') || path.startsWith('#')) {
      const hash = path.includes('#') ? path.substring(path.indexOf('#')) : path;
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/' + hash);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    const path = currentPath;

    if (path === '/') {
      return (
        <HomePage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path === '/about') {
      return (
        <AboutPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path === '/security') {
      return (
        <SecurityPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
          onOpenPrivacy={() => setLegalModalType('privacy')}
        />
      );
    }

    if (path === '/pricing') {
      return (
        <PricingPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path === '/privacy') {
      return (
        <PrivacyPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path === '/terms') {
      return (
        <TermsPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path === '/glossary') {
      return (
        <GlossaryPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path.startsWith('/glossary/')) {
      const slug = path.replace('/glossary/', '');
      return (
        <GlossaryTermPage
          termSlug={slug}
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path === '/integrations') {
      return (
        <IntegrationsPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path.startsWith('/integrations/')) {
      const slug = path.replace('/integrations/', '');
      return (
        <IntegrationDetailPage
          integrationSlug={slug}
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path === '/blog') {
      return (
        <BlogPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      return (
        <BlogPostPage
          postSlug={slug}
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    if (path === '/case-studies') {
      return (
        <CaseStudiesPage
          navigate={navigate}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }

    return (
      <NotFoundPage
        navigate={navigate}
        onOpenCalendly={() => setIsCalendlyOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ink-950)] text-[var(--steel-300)] selection:bg-[var(--orange)] selection:text-[var(--ink-950)]">
      <Header
        currentPath={currentPath}
        navigate={navigate}
        onOpenCalendly={() => setIsCalendlyOpen(true)}
      />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer
        navigate={navigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
