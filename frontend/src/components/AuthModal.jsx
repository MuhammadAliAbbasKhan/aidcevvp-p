import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';
import { User, Mail, Lock, Building, ArrowRight, CheckCircle2 } from 'lucide-react';

export function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || (isRegister && !fullName)) {
      addToast('Please fill in all required fields.', 'warning');
      return;
    }

    setLoading(true);
    try {
      const endpoint = isRegister ? '/api/v1/auth/register/' : '/api/v1/auth/login/';
      const payload = isRegister 
        ? { email, full_name: fullName, company_name: companyName } 
        : { email };

      const res = await axios.post(endpoint, payload);
      addToast(res.data.message || 'Authentication successful!', 'success');
      onAuthSuccess(res.data.user);
      onClose();
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Authentication failed. Please check your credentials.';
      addToast(errorMsg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Top-Right Circular Close Button */}
        <button className="close-btn" onClick={onClose} aria-label="Close modal">✕</button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: '24px',
            color: '#00C4EE',
            marginBottom: '8px'
          }}>
            aidcevvpp
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>
            {isRegister ? 'Create AIDCEVVPP Account' : 'Sign In to Control Console'}
          </h2>
          <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '4px' }}>
            {isRegister ? 'Access 2D Telemetry, CDUs & EV VPP Grid Optimizer' : 'Welcome back to your data center AI fleet'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {isRegister && (
            <>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: '#090D14',
                      border: '1px solid #1E293B',
                      borderRadius: '8px',
                      padding: '10px 12px 10px 38px',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                  Company / Organization
                </label>
                <div style={{ position: 'relative' }}>
                  <Building size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                  <input
                    type="text"
                    placeholder="e.g. Hyperscale Compute Corp"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: '#090D14',
                      border: '1px solid #1E293B',
                      borderRadius: '8px',
                      padding: '10px 12px 10px 38px',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
              Work Email Address *
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="email"
                required
                placeholder="name@datacenter.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#090D14',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '10px 12px 10px 38px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
              Password *
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#090D14',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '10px 12px 10px 38px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '8px',
              backgroundColor: '#00C4EE',
              color: '#000000',
              fontWeight: 700,
              fontSize: '14px',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: loading ? 'wait' : 'pointer'
            }}
          >
            {loading ? 'Processing...' : (isRegister ? 'Create Account' : 'Sign In')}
            <ArrowRight size={16} />
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => setIsRegister(!isRegister)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00C4EE',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {isRegister ? 'Already have an account? Sign In' : "Don't have an account? Register now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;

