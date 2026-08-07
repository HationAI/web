import React from 'react';

export const ManifestTicket: React.FC = () => {
  return (
    <div className="ticket-wrap" aria-hidden="true">
      <div className="ticket">
        <div className="ticket-head">
          <div className="barcode" aria-hidden="true"></div>
          <span className="ticket-head-label">Order Lookup · Auto-Reply</span>
        </div>
        <div className="ticket-tear" aria-hidden="true"></div>
        <div className="ticket-body">
          <div className="ticket-row">
            <span className="tk">FROM</span>
            <span className="tv">client@shopbrand.com</span>
          </div>
          <div className="ticket-row">
            <span className="tk">RE</span>
            <span className="tv">Order #48213 — hasn't shipped yet?</span>
          </div>

          <div className="ticket-log" role="log" aria-live="polite" aria-label="Ticket processing log">
            <p>&gt; parsing order number…</p>
            <p>&gt; querying shipstation api…</p>
            <p className="ok">&gt; match found ✓</p>
          </div>

          <div className="ticket-tear" aria-hidden="true"></div>

          <div className="ticket-result">
            <div className="ticket-row">
              <span className="tk">ORDER</span>
              <span className="tv strong">#48213</span>
            </div>
            <div className="ticket-row">
              <span className="tk">CARRIER</span>
              <span className="tv strong">UPS</span>
            </div>
            <div className="ticket-row">
              <span className="tk">TRACKING</span>
              <span className="tv strong">1Z999AA10123456789</span>
            </div>
            <div className="ticket-row">
              <span className="tk">ETA</span>
              <span className="tv strong">Jul 31</span>
            </div>
          </div>
        </div>
        <div className="ticket-stamp">Replied in 6s</div>
      </div>
    </div>
  );
};
