import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';
import { Lock, Shield, Server, Users, DollarSign, Database, Activity, CheckCircle2, AlertCircle } from 'lucide-react';

export function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passcode) return;

    setLoading(true);
    try {
      const res = await axios.get('/api/v1/admin/analytics/', {
        headers: { 'X-Admin-Passcode': passcode }
      });
      setAnalytics(res.data);
      setAuthenticated(true);
      addToast('Admin authorization successful!', 'success');
    } catch (err) {
      addToast('Unauthorized access. Invalid Admin Passcode.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{
          backgroundColor: '#090D14',
          border: '1px solid #1E293B',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '450px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0, 196, 238, 0.1)'
        }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(0, 196, 238, 0.1)', border: '1px solid #00C4EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
            <Lock size={24} color="#00C4EE" />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF' }}>AIDCEVVPP Admin Console</h2>
          <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '6px', marginBottom: '24px' }}>
            Enter your Executive Security Passcode to inspect server telemetry and DB sync logs.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <input
              type="password"
              placeholder="Enter Admin Passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#060A12',
                border: '1px solid #1E293B',
                borderRadius: '8px',
                padding: '12px 16px',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none',
                textAlign: 'center',
                letterSpacing: '2px'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: '#00C4EE',
                color: '#000000',
                fontWeight: 800,
                fontSize: '14px',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                cursor: loading ? 'wait' : 'pointer'
              }}
            >
              {loading ? 'Verifying Authorization...' : 'AUTHORIZE ADMIN ACCESS'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const { summary, recent_demos, recent_subscriptions } = analytics || {};

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '60px 24px 100px 24px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ color: '#10B981', fontWeight: 800, fontSize: '12px', letterSpacing: '1px', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '4px 10px', borderRadius: '20px' }}>
              ● EXECUTIVE AUTHENTICATED
            </span>
            <h1 style={{ fontSize: '32px', fontWeight: 800, marginTop: '8px', color: '#FFFFFF' }}>
              AIDCEVVPP Fleet Analytics & Dual DB Sync
            </h1>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            style={{
              backgroundColor: '#1E293B',
              color: '#CBD5E1',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Lock Admin Console
          </button>
        </div>

        {/* Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>

          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
              <Users size={16} color="#00C4EE" /> Registered Accounts
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#00C4EE', marginTop: '8px' }}>
              {summary?.registered_users || 0}
            </div>
          </div>

          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
              <Server size={16} color="#FFD100" /> Demo Reservations
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#FFD100', marginTop: '8px' }}>
              {summary?.demo_requests || 0}
            </div>
          </div>

          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
              <DollarSign size={16} color="#10B981" /> Active Subscriptions
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#10B981', marginTop: '8px' }}>
              {summary?.active_subscriptions || 0}
            </div>
          </div>

          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '13px' }}>
              <Activity size={16} color="#F43F5E" /> Monthly Revenue (MRR)
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#F43F5E', marginTop: '8px' }}>
              ${summary?.monthly_recurring_revenue_usd || 0}
            </div>
          </div>
        </div>

        {/* Database Sync Status */}
        <div style={{ backgroundColor: '#090D14', border: '1px solid #10B981', borderRadius: '16px', padding: '24px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Database size={24} color="#10B981" />
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Dual Database Synchronizer Status</h3>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '2px' }}>{summary?.database_status}</p>
            </div>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '6px 14px', borderRadius: '20px' }}>
            100% OPERATIONAL
          </span>
        </div>

        {/* Tables */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>

          {/* Table 1: Recent Demos */}
          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: '#FFFFFF' }}>Recent Facility Demo Requests</h3>
            {recent_demos?.length ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {recent_demos.map((d, i) => (
                  <div key={i} style={{ backgroundColor: '#060A12', padding: '12px', borderRadius: '8px', border: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: '#FFFFFF' }}>{d.company} ({d.capacity_mw}MW)</div>
                      <div style={{ fontSize: '12px', color: '#94A3B8' }}>{d.email}</div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#00C4EE', fontWeight: 600 }}>{d.date}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#64748B', fontSize: '14px' }}>No demo bookings recorded yet.</p>
            )}
          </div>

          {/* Table 2: Recent Subscriptions */}
          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: '#FFFFFF' }}>Recent Stripe Subscriptions</h3>
            {recent_subscriptions?.length ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {recent_subscriptions.map((s, i) => (
                  <div key={i} style={{ backgroundColor: '#060A12', padding: '12px', borderRadius: '8px', border: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: '#FFFFFF' }}>{s.plan}</div>
                      <div style={{ fontSize: '12px', color: '#94A3B8' }}>{s.email} • Card ending **** {s.card_last4}</div>
                    </div>
                    <span style={{ fontSize: '14px', color: '#10B981', fontWeight: 800 }}>${s.mrr}/mo</span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#64748B', fontSize: '14px' }}>No active paid subscriptions recorded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

