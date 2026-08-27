import React from 'react';
import { Check, ShieldCheck, Zap, Server, Droplets, Globe, Lock, CheckCircle2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export function PricingPage({ user, activeSubscription, openCheckoutModal, openAuthModal }) {
  const { addToast } = useToast();

  const plans = [
    {
      id: 'basic',
      name: 'Basic AIDC Agent',
      monthlyPrice: 100,
      yearlyPrice: 80,
      description: 'Ideal for small AI factory deployments & modular facilities up to 5MW.',
      features: [
        'Facilities up to 5 MW capacity',
        'Baseline 2D thermal simulator access',
        'Rack temperature telemetry logging',
        'Standard CDU liquid flow control',
        'Email engineering support (24h SLA)'
      ],
      popular: false,
      color: '#00C4EE'
    },
    {
      id: 'pro',
      name: 'Professional AIDC & Liquid Cooling',
      monthlyPrice: 150,
      yearlyPrice: 120,
      description: 'Designed for high-density GPU clusters up to 25MW with liquid CDU & VPP integration.',
      features: [
        'Facilities up to 25 MW capacity',
        'Dynamic PUE + Liquid CDU optimization',
        'Direct-to-chip micro-channel telemetry',
        'Automated EV VPP peak shaving agent',
        'Real-time MongoDB Cloud Atlas sync',
        'Priority 24/7 technical hotline'
      ],
      popular: true,
      color: '#10B981'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Global Fleet & VPP Grid',
      monthlyPrice: 200,
      yearlyPrice: 160,
      description: 'Unlimited MW hyperscale fleet orchestration with dedicated AI thermal engineer.',
      features: [
        'Unlimited MW capacity & global fleet',
        'Multi-site microgrid VPP orchestration',
        'Custom AI neural model training',
        'Executive Passcode analytics console',
        'Dedicated 24/7 SLA Systems Engineer',
        'Custom SLA & uptime guarantee'
      ],
      popular: false,
      color: '#FFD100'
    }
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '40px 16px 80px 16px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ color: '#00C4EE', fontWeight: 800, fontSize: '13px', letterSpacing: '1px' }}>
            TRANSPARENT PRICING TIERS
          </span>
          <h1 style={{ fontSize: '32px', fontFamily: "'Archivo Black', sans-serif", marginTop: '8px' }}>
            Activate Autonomous AI Agent Control
          </h1>

          <p style={{ color: '#94A3B8', fontSize: '18px', maxWidth: '650px', margin: '16px auto 0 auto' }}>
            {user ? (
              <span style={{ color: '#10B981', fontWeight: 600 }}>
                Logged in as {user.full_name} ({user.email}). Select a plan to enable active AI control.
              </span>
            ) : (
              <span style={{ color: '#F59E0B', fontWeight: 600 }}>
                * Account authentication is required prior to payment. Sign in or register to proceed.
              </span>
            )}
          </p>
        </div>

        {/* Active Subscription Callout if subscribed */}
        {user && activeSubscription && activeSubscription.is_active && (
          <div style={{
            backgroundColor: '#064E3B',
            border: '1px solid #10B981',
            borderRadius: '16px',
            padding: '20px 32px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <CheckCircle2 size={24} color="#10B981" />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                  Active Subscription: {activeSubscription.plan_tier}
                </h3>
                <p style={{ fontSize: '13px', color: '#A7F3D0', marginTop: '2px' }}>
                  Your monthly plan is active (${activeSubscription.monthly_price || 150}/mo). You do not need to pay again for this period.
                </p>
              </div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#042F2E', backgroundColor: '#6EE7B7', padding: '6px 14px', borderRadius: '20px' }}>
              PAID & ACTIVE
            </span>
          </div>
        )}

        {/* Free Simulator Callout Banner */}
        <div style={{
          backgroundColor: '#0F172A',
          border: '1px solid #00C4EE',
          borderRadius: '16px',
          padding: '20px 32px',
          marginBottom: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0, 196, 238, 0.1)', border: '1px solid #00C4EE', display: 'flex', alignItems: 'center', justify: 'center' }}>
              <Zap size={20} color="#00C4EE" />
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                AIDCEVVPP 2D Telemetry Simulator is 100% Free!
              </h3>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '2px' }}>
                Test interactive sliders anytime for public evaluation. Upgrade below to connect active AI agents to live physical CDUs.
              </p>
            </div>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '6px 14px', borderRadius: '20px' }}>
            FREE EVALUATION POLICY
          </span>
        </div>

        {/* 3 Pricing Tier Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>

          {plans.map((p) => {
            const isCurrentActive = user && activeSubscription && activeSubscription.is_active && activeSubscription.plan_tier === p.name;

            return (
              <div
                key={p.id}
                style={{
                  backgroundColor: '#090D14',
                  border: `1px solid ${isCurrentActive ? '#10B981' : (p.popular ? p.color : '#1E293B')}`,
                  borderRadius: '20px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: isCurrentActive ? `0 0 30px rgba(16, 185, 129, 0.3)` : (p.popular ? `0 0 30px rgba(16, 185, 129, 0.15)` : 'none')
                }}
              >
                {isCurrentActive ? (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    right: '24px',
                    backgroundColor: '#10B981',
                    color: '#000000',
                    fontWeight: 800,
                    fontSize: '11px',
                    letterSpacing: '1px',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    textTransform: 'uppercase'
                  }}>
                    ● ACTIVE PLAN
                  </div>
                ) : p.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    right: '24px',
                    backgroundColor: p.color,
                    color: '#000000',
                    fontWeight: 800,
                    fontSize: '11px',
                    letterSpacing: '1px',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    textTransform: 'uppercase'
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>{p.name}</h3>
                <p style={{ color: '#94A3B8', fontSize: '13px', marginTop: '8px', minHeight: '36px' }}>
                  {p.description}
                </p>

                <div style={{ margin: '24px 0', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '42px', fontWeight: 800, color: isCurrentActive ? '#10B981' : p.color }}>${p.monthlyPrice}</span>
                  <span style={{ fontSize: '14px', color: '#94A3B8' }}>/ month</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {p.features.map((f, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
                      <Check size={16} color={isCurrentActive ? '#10B981' : p.color} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {isCurrentActive ? (
                  <button
                    onClick={() => addToast(`You already have an active subscription for ${p.name} for this month!`, 'info')}
                    style={{
                      marginTop: 'auto',
                      backgroundColor: '#10B981',
                      color: '#000000',
                      border: 'none',
                      fontWeight: 800,
                      fontSize: '13px',
                      padding: '14px',
                      borderRadius: '10px',
                      cursor: 'default',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <CheckCircle2 size={16} /> ✓ CURRENT ACTIVE PLAN (PAID)
                  </button>
                ) : !user ? (
                  <button
                    onClick={() => openCheckoutModal(p)}
                    style={{
                      marginTop: 'auto',
                      backgroundColor: 'transparent',
                      color: '#00C4EE',
                      border: '1px solid #00C4EE',
                      fontWeight: 800,
                      fontSize: '13px',
                      padding: '14px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Lock size={14} /> SIGN IN TO SUBSCRIBE
                  </button>
                ) : (
                  <button
                    onClick={() => openCheckoutModal(p)}
                    style={{
                      marginTop: 'auto',
                      backgroundColor: p.popular ? p.color : 'transparent',
                      color: p.popular ? '#000000' : p.color,
                      border: `1px solid ${p.color}`,
                      fontWeight: 800,
                      fontSize: '14px',
                      padding: '14px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    SUBSCRIBE ${p.monthlyPrice}/MO
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
