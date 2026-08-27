import React from 'react';

export function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '60px 24px 100px 24px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
        <h1 style={{ fontSize: '36px', fontFamily: "'Archivo Black', sans-serif", marginBottom: '24px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '20px' }}>
          Last Updated: August 27, 2026
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#00C4EE', marginBottom: '12px' }}>1. Data Collection & Telemetry</h2>
          <p style={{ color: '#CBD5E1' }}>
            AIDCEVVPP collects account registration data, facility megawatt capacity specifications, and real-time telemetry logs submitted through our 2D Telemetry Control Canvas. All telemetry logs are processed solely to calculate PUE optimization metrics.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#00C4EE', marginBottom: '12px' }}>2. Dual Database Sync Security</h2>
          <p style={{ color: '#CBD5E1' }}>
            User information and payment records are maintained in local SQLite datastores and synchronized over TLS 1.3 encrypted connections to MongoDB Cloud Atlas. We do not sell or lease facility operational data to third parties.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#00C4EE', marginBottom: '12px' }}>3. Contact & Opt-Out</h2>
          <p style={{ color: '#CBD5E1' }}>
            You may unsubscribe from technical blog updates or request complete account deletion by contacting our privacy officer at legal@aidcevvpp.com.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;


