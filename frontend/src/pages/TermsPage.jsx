import React from 'react';

export function TermsPage() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '60px 24px 100px 24px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
        <h1 style={{ fontSize: '36px', fontFamily: "'Archivo Black', sans-serif", marginBottom: '24px' }}>
          Terms of Use
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '20px' }}>
          Last Updated: August 27, 2026
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#00C4EE', marginBottom: '12px' }}>1. Platform License & Usage</h2>
          <p style={{ color: '#CBD5E1' }}>
            By accessing the AIDCEVVPP 2D Telemetry Simulator or subscribing to our AI Control Agents, you agree to comply with all operational guidelines. The free 2D Telemetry canvas is provided for evaluation purposes.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#00C4EE', marginBottom: '12px' }}>2. Subscription & Billing</h2>
          <p style={{ color: '#CBD5E1' }}>
            Subscriptions auto-renew monthly unless cancelled prior to the next billing cycle. Payments are processed securely via our Stripe integration.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsPage;


