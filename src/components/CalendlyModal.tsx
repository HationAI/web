import React, { useEffect } from 'react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const CALENDLY_URL = 'https://calendly.com/hation-chatbot/new-meeting';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="calendly-overlay open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="calendly-box" id="calendly-box-inner">
        <div className="calendly-header-bar">
          <span className="calendly-title" id="calendly-title">
            Book a 15-Minute Workflow Audit
          </span>
          <div className="calendly-actions">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="calendly-ext-btn"
            >
              Open in New Tab ↗
            </a>
            <button
              type="button"
              className="calendly-close"
              onClick={onClose}
              aria-label="Close booking form"
            >
              ×
            </button>
          </div>
        </div>
        <div className="calendly-body">
          <iframe
            src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'hation.xyz'
            )}&embed_type=Inline`}
            title="Schedule a meeting with Hation AI"
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
