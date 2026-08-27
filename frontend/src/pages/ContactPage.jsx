import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Building, Clock } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export function ContactPage({ openDemoModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      addToast('Please complete all required fields.', 'warning');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      addToast('Inquiry sent successfully! An AIDCEVVPP Systems Engineer will respond within 4 business hours.', 'success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(false);
    }, 800);
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '40px 16px 80px 16px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#00C4EE', fontWeight: 800, fontSize: '13px', letterSpacing: '1px' }}>
            CONNECT WITH OUR ENGINEERING TEAM
          </span>
          <h1 style={{ fontSize: '32px', fontFamily: "'Archivo Black', sans-serif", marginTop: '8px' }}>
            Contact AIDCEVVPP Headquarters
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '16px', maxWidth: '650px', margin: '16px auto 0 auto' }}>
            Our engineering offices in Texas and California are ready to discuss factory capacity, liquid CDU specs, and EV VPP deployments.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>

          {/* Left: Office Locations & Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Texas Location */}
            <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <MapPin size={22} color="#00C4EE" />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>Texas Manufacturing & Engineering</h3>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: '1.6' }}>
                839 Farm to Market 1489<br />
                Brookshire, TX 77423, United States
              </p>
              <div style={{ marginTop: '14px', fontSize: '13px', color: '#94A3B8' }}>
                Manufacturing Facility • Modular Block Assembly
              </div>
            </div>

            {/* California Location */}
            <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <Building size={22} color="#10B981" />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>California AI R&D Center</h3>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: '1.6' }}>
                2216 O'Toole Avenue<br />
                San Jose, CA 95131, United States
              </p>
              <div style={{ marginTop: '14px', fontSize: '13px', color: '#94A3B8' }}>
                AI Systems Control Center • EV VPP Testbed
              </div>
            </div>

            {/* General Inquiries Card */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #334155', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>Schedule a Direct Walkthrough</h4>
                <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '2px' }}>Request a 1-on-1 session with our CTO.</p>
              </div>
              <button
                onClick={openDemoModal}
                style={{
                  backgroundColor: '#00C4EE',
                  color: '#000000',
                  fontWeight: 800,
                  fontSize: '12px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                BOOK DEMO
              </button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{ backgroundColor: '#090D14', border: '1px solid #1E293B', borderRadius: '20px', padding: '36px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px' }}>
              Send an Engineering Inquiry
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#060A12',
                    border: '1px solid #1E293B',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                  Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="david@datacenter.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#060A12',
                    border: '1px solid #1E293B',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g. 25MW CDU Capacity Quote"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#060A12',
                    border: '1px solid #1E293B',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your data center megawatt capacity, liquid cooling preferences, or deployment schedule..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#060A12',
                    border: '1px solid #1E293B',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: '#00C4EE',
                  color: '#000000',
                  fontWeight: 800,
                  fontSize: '14px',
                  padding: '14px',
                  borderRadius: '8px',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: loading ? 'wait' : 'pointer'
                }}
              >
                {loading ? 'Sending Message...' : 'SEND INQUIRY'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

