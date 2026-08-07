import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentPath: string;
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate, onOpenCalendly }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMobileOpen(false);
    setIsResourcesOpen(false);
    navigate(path);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-wrap container">
        <a
          href="/"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
        >
          HATION<em>.</em>
        </a>

        <ul className="nav-links">
          <li>
            <a
              href="/"
              className={currentPath === '/' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
            >
              Product
            </a>
          </li>

          <li>
            <a
              href="/pricing"
              className={currentPath === '/pricing' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/pricing');
              }}
            >
              Pricing
            </a>
          </li>

          <li className="relative" onMouseLeave={() => setIsResourcesOpen(false)}>
            <button
              type="button"
              className={`nav-dropdown-trigger ${
                currentPath.startsWith('/glossary') ||
                currentPath.startsWith('/integrations') ||
                currentPath.startsWith('/blog') ||
                currentPath.startsWith('/case-studies')
                  ? 'active'
                  : ''
              }`}
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              onMouseEnter={() => setIsResourcesOpen(true)}
              aria-expanded={isResourcesOpen}
            >
              Resources
              <svg
                className={`icon transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                style={{ width: 14, height: 14 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {isResourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-[var(--ink-900)] border border-[var(--steel-700)] p-2 shadow-2xl z-50">
                <a
                  href="/glossary"
                  className="block px-3 py-2 text-sm text-[var(--steel-300)] hover:text-white hover:bg-[var(--ink-850)] rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/glossary');
                  }}
                >
                  <div className="font-semibold">Logistics Glossary</div>
                  <div className="text-xs text-[var(--steel-400)]">WISMO, 3PL, WMS, TMS terms</div>
                </a>
                <a
                  href="/integrations"
                  className="block px-3 py-2 text-sm text-[var(--steel-300)] hover:text-white hover:bg-[var(--ink-850)] rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/integrations');
                  }}
                >
                  <div className="font-semibold">WMS Integrations</div>
                  <div className="text-xs text-[var(--steel-400)]">ShipStation, Extensiv, SkuVault</div>
                </a>
                <a
                  href="/blog"
                  className="block px-3 py-2 text-sm text-[var(--steel-300)] hover:text-white hover:bg-[var(--ink-850)] rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/blog');
                  }}
                >
                  <div className="font-semibold">Blog & Guides</div>
                  <div className="text-xs text-[var(--steel-400)]">3PL CS automation articles</div>
                </a>
                <a
                  href="/case-studies"
                  className="block px-3 py-2 text-sm text-[var(--steel-300)] hover:text-white hover:bg-[var(--ink-850)] rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/case-studies');
                  }}
                >
                  <div className="font-semibold">Case Studies</div>
                  <div className="text-xs text-[var(--steel-400)]">Future research & benchmarks</div>
                </a>
              </div>
            )}
          </li>

          <li>
            <a
              href="/about"
              className={currentPath === '/about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/about');
              }}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/security"
              className={currentPath === '/security' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/security');
              }}
            >
              Security
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <button type="button" className="btn btn-primary btn-sm" onClick={onOpenCalendly}>
            Book an Audit
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`} id="mobile-menu">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
        >
          Product (Home)
        </a>
        <a
          href="/pricing"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/pricing');
          }}
        >
          Pricing
        </a>
        <div className="py-2 border-b border-[var(--ink-800)]">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--orange-tint)] mb-1 px-1">
            Resources
          </div>
          <a
            href="/glossary"
            className="mobile-sublink block py-1"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/glossary');
            }}
          >
            Glossary
          </a>
          <a
            href="/integrations"
            className="mobile-sublink block py-1"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/integrations');
            }}
          >
            Integrations
          </a>
          <a
            href="/blog"
            className="mobile-sublink block py-1"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/blog');
            }}
          >
            Blog
          </a>
          <a
            href="/case-studies"
            className="mobile-sublink block py-1"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/case-studies');
            }}
          >
            Case Studies
          </a>
        </div>
        <a
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/about');
          }}
        >
          About
        </a>
        <a
          href="/security"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/security');
          }}
        >
          Security
        </a>
        <div className="pt-3">
          <button
            type="button"
            className="btn btn-primary w-full"
            onClick={() => {
              setIsMobileOpen(false);
              onOpenCalendly();
            }}
          >
            Book an Audit
          </button>
        </div>
      </div>
    </header>
  );
};
