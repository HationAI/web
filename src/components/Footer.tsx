import React from 'react';
import { PageRoute } from '../types';

interface FooterProps {
  navigate: (path: PageRoute | string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenPrivacy, onOpenTerms }) => {
  const handleNav = (path: string) => {
    navigate(path);
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <a
            href="/"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
          >
            HATION<em>.</em>
          </a>
          <ul className="footer-links">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/');
                }}
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/pricing');
                }}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/glossary"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/glossary');
                }}
              >
                Glossary
              </a>
            </li>
            <li>
              <a
                href="/integrations"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/integrations');
                }}
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/blog');
                }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/case-studies"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/case-studies');
                }}
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/security"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/security');
                }}
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPrivacy();
                }}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenTerms();
                }}
              >
                Terms
              </a>
            </li>
          </ul>
          <span className="footer-copy">© 2026 Hation AI. All rights reserved.</span>
        </div>
        <p className="footer-disclaimer">
          ShipStation, Extensiv, SkuVault, Gmail, Outlook, and Slack are trademarks of their respective owners. Hation AI is an independent automation provider and is not affiliated with or endorsed by these companies.
        </p>
      </div>
    </footer>
  );
};
