import React from 'react';
import { Zap, Battery, Car, RefreshCw, BarChart } from 'lucide-react';

export function EvVppPage({ openDemoModal }) {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '40px 16px 80px 16px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#FFD100', fontWeight: 800, fontSize: '13px', letterSpacing: '1px' }}>
            EV VPP POWER EXCHANGE
          </span>
          <h1 style={{ fontSize: '32px', fontFamily: "'Archivo Black', sans-serif", marginTop: '8px' }}>
            EV Virtual Power Plant & Battery Storage Integration
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '16px', maxWidth: '750px', margin: '16px auto 0 auto' }}>
            Transforming peak data center power draw into a responsive grid asset using distributed EV batteries, BESS storage, and AI-driven load shaving.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>

          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '32px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(255, 209, 0, 0.1)', border: '1px solid #FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Zap size={20} color="#FFD100" />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>Grid Peak Shaving</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6' }}>
              When utility electricity prices spike, the AIDCEVVPP controller automatically draws up to 5,000 kW from local BESS and connected EV fleet chargers to shave peak data center loads.
            </p>
          </div>

          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '32px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(0, 196, 238, 0.1)', border: '1px solid #00C4EE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Car size={20} color="#00C4EE" />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>Vehicle-to-Grid (V2G) Protocol</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6' }}>
              Bidirectional ISO 15118 chargers allow commercial EV fleets parked at AI data center facilities to feed power back into the microgrid during high GPU training bursts.
            </p>
          </div>

          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '32px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Battery size={20} color="#10B981" />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>Zero-Downtime Microgrid</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6' }}>
              Sub-millisecond static transfer switches guarantee uninterrupted power delivery to critical GPU racks even during utility grid sags or complete brownouts.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={openDemoModal}
            style={{
              backgroundColor: '#FFD100',
              color: '#000000',
              fontWeight: 800,
              padding: '14px 32px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            REQUEST EV VPP ARCHITECTURE SPECS
          </button>
        </div>
      </div>
    </div>
  );
}

export default EvVppPage;

