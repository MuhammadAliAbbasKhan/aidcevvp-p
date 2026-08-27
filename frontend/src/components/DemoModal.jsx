import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';
import { Zap, Building, Mail, User, Calendar, CheckCircle2 } from 'lucide-react';

export function DemoModal({ isOpen, onClose }) {
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [capacityMw, setCapacityMw] = useState(10);
  const [timeline, setTimeline] = useState('1-3 months');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactName || !email || !company) {
      addToast('Please complete all required contact fields.', 'warning');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/v1/demo/request/', {
        contact_name: contactName,
        email,
        company,
        facility_capacity_mw: capacityMw,
        deployment_timeline: timeline,
        notes
      });
      addToast(res.data.message || 'Demo request submitted successfully!', 'success');
      onClose();
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to submit demo request.';
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

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 196, 238, 0.1)',
            border: '1px solid #00C4EE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto'
          }}>
            <Zap size={22} color="#00C4EE" />
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>
            Book AIDCEVVPP Facility Demo
          </h2>
          <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '4px' }}>
            Schedule a 1-on-1 virtual walkthrough of our 120kW+ rack liquid cooling & EV VPP platform
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Marcus Vance"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#090D14',
                border: '1px solid #1E293B',
                borderRadius: '8px',
                padding: '10px 12px',
                color: '#FFFFFF',
                fontSize: '13px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="marcus@hyperscale.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#090D14',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="Apex Data Infrastructure"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#090D14',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
                Facility Capacity (MW)
              </label>
              <select
                value={capacityMw}
                onChange={(e) => setCapacityMw(Number(e.target.value))}
                style={{
                  width: '100%',
                  backgroundColor: '#090D14',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  outline: 'none'
                }}
              >
                <option value={5}>5 MW Modular Block</option>
                <option value={10}>10 MW Standard AI Hub</option>
                <option value={25}>25 MW High-Density Campus</option>
                <option value={50}>50 MW+ Hyperscale Fleet</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
                Target Deployment
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#090D14',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  outline: 'none'
                }}
              >
                <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6-12 months">6-12 months</option>
                <option value="Planning phase">Planning phase</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
              Specific Cooling or Power Requirements (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Immersion vs Direct-to-chip liquid cooling for Nvidia H100/H200 racks..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#090D14',
                border: '1px solid #1E293B',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#FFFFFF',
                fontSize: '13px',
                outline: 'none',
                resize: 'none'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '6px',
              backgroundColor: '#00C4EE',
              color: '#000000',
              fontWeight: 700,
              fontSize: '14px',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              cursor: loading ? 'wait' : 'pointer'
            }}
          >
            {loading ? 'Submitting Demo Request...' : 'CONFIRM DEMO RESERVATION'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DemoModal;

