import React, { useEffect } from 'react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type) {
        onClose();
      }
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="legal-overlay open"
      role="dialog"
      aria-modal="true"
      aria-labelledby={type === 'privacy' ? 'privacy-title' : 'terms-title'}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="legal-box">
        <div className="legal-head">
          <h2 id={type === 'privacy' ? 'privacy-title' : 'terms-title'}>
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h2>
          <button
            type="button"
            className="legal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="legal-content">
          <span className="legal-updated">Last updated: August 4, 2026</span>
          {type === 'privacy' ? (
            <>
              <p>
                This Privacy Policy explains how Hation AI ("we", "us", or "our") collects, uses, and protects your information when you visit our website or use our services.
              </p>
              <h3>Information We Collect</h3>
              <p>
                We may collect information you provide directly — such as your name, email address, and company details when you book a call or request a demo — as well as usage data collected automatically through cookies and similar technologies.
              </p>
              <h3>How We Use Your Information</h3>
              <ul>
                <li>To respond to your inquiries and schedule consultations.</li>
                <li>To provide, maintain, and improve our services.</li>
                <li>To send updates, marketing communications, and service notifications.</li>
                <li>To detect, prevent, and address technical issues or security concerns.</li>
              </ul>
              <h3>Data Sharing</h3>
              <p>
                We do not sell your personal information. We may share data with trusted service providers who assist us in operating our business under strict confidentiality agreements.
              </p>
              <h3>Data Security</h3>
              <p>
                We implement industry-standard encryption (TLS in transit, AES-256 at rest) and organizational controls to safeguard your data.
              </p>
              <h3>Contact</h3>
              <p>
                Questions about this policy? Email <a href="mailto:privacy@hation.xyz">privacy@hation.xyz</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                These Terms of Service govern your use of the Hation AI website and services. By accessing our site or booking a consultation, you agree to these terms.
              </p>
              <h3>Use of the Service</h3>
              <p>
                You agree to use our site and services only for lawful purposes. Unauthorized access, scraping, or attempts to disrupt the service are strictly prohibited.
              </p>
              <h3>Intellectual Property</h3>
              <p>
                All content on this site — including logos, text, design, and software — is the property of Hation AI or its licensors and is protected by applicable intellectual property laws.
              </p>

              <h3>Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, Hation AI shall not be liable for any indirect or consequential damages arising from your use of the service.
              </p>
              <h3>Contact</h3>
              <p>
                Questions about these Terms? Email <a href="mailto:legal@hation.xyz">legal@hation.xyz</a>.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
