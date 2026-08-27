import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';
import { CreditCard, Lock, ShieldCheck, CheckCircle2, AlertCircle, UserCheck } from 'lucide-react';

export function CheckoutModal({ isOpen, onClose, selectedPlan, user, onSubscriptionSuccess }) {
  const [email, setEmail] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
      if (user.full_name) {
        setCardHolder(user.full_name);
      }
    }
  }, [user, isOpen]);

  if (!isOpen || !selectedPlan) return null;

  // Enforce Authentication Check
  if (!user) {
    onClose();
    addToast('Authentication Required: Please Sign In or Create an Account before subscribing.', 'warning');
    return null;
  }

  const handleCardNumberChange = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 16) val = val.slice(0, 16);
    const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length >= 3) {
      val = `${val.slice(0, 2)}/${val.slice(2)}`;
    }
    setExpiry(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanCard = cardNumber.replace(/\s/g, '');
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address.', 'warning');
      return;
    }
    if (cardHolder.trim().length < 3) {
      addToast('Cardholder name must be at least 3 characters.', 'warning');
      return;
    }
    if (cleanCard.length < 15) {
      addToast('Please enter a valid 15 or 16 digit card number.', 'warning');
      return;
    }
    if (expiry.length < 5) {
      addToast('Please enter a valid expiration date (MM/YY).', 'warning');
      return;
    }
    if (cvc.length < 3) {
      addToast('Please enter a 3 or 4 digit CVC code.', 'warning');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/v1/subscriptions/checkout/', {
        email,
        plan_tier: selectedPlan.name,
        monthly_price: selectedPlan.monthlyPrice,
        card_number: cleanCard
      });

      addToast(res.data.message || 'Subscription activated successfully!', 'success');

      if (onSubscriptionSuccess) {
        onSubscriptionSuccess(res.data.subscription || { plan: selectedPlan.name, price: selectedPlan.monthlyPrice });
      }

      onClose();
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Payment authorization failed. Please check your credentials or try another card.';
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(0, 196, 238, 0.1)',
            color: '#00C4EE',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 700,
            marginBottom: '8px'
          }}>
            <Lock size={12} /> SECURE 256-BIT ENCRYPTED CHECKOUT
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>
            Subscribe to {selectedPlan.name}
          </h2>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#00C4EE', marginTop: '4px' }}>
            ${selectedPlan.monthlyPrice} <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 400 }}>/ month</span>
          </div>
        </div>

        {/* Authenticated User Badge */}
        <div style={{
          backgroundColor: '#0F172A',
          border: '1px solid #10B981',
          borderRadius: '8px',
          padding: '10px 14px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13px'
        }}>
          <UserCheck size={18} color="#10B981" />
          <div>
            <span style={{ color: '#94A3B8' }}>Authenticated Account: </span>
            <strong style={{ color: '#FFFFFF' }}>{user.email}</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
              Account Email Address (Authenticated)
            </label>
            <input
              type="email"
              required
              readOnly
              value={email}
              style={{
                width: '100%',
                backgroundColor: '#060A12',
                border: '1px solid #334155',
                borderRadius: '8px',
                padding: '10px 12px',
                color: '#10B981',
                fontWeight: 600,
                fontSize: '13px',
                outline: 'none',
                cursor: 'not-allowed'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
              Cardholder Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="As printed on card"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
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
              Card Number *
            </label>
            <div style={{ position: 'relative' }}>
              <CreditCard size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="text"
                required
                placeholder="4532 8901 2345 6789"
                value={cardNumber}
                onChange={handleCardNumberChange}
                style={{
                  width: '100%',
                  backgroundColor: '#090D14',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '10px 12px 10px 38px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  outline: 'none',
                  letterSpacing: '1px'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
                Expiration Date (MM/YY) *
              </label>
              <input
                type="text"
                required
                placeholder="08/28"
                value={expiry}
                onChange={handleExpiryChange}
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
                Security Code (CVC) *
              </label>
              <input
                type="password"
                required
                maxLength={4}
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
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

          <div style={{
            backgroundColor: '#060A12',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #1E293B',
            fontSize: '12px',
            color: '#94A3B8',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <ShieldCheck size={18} color="#10B981" />
            <span>Instant activation upon payment. One monthly charge per account.</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '4px',
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
            {loading ? 'Authorizing Payment...' : `AUTHORIZE PAYMENT $${selectedPlan.monthlyPrice}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;
