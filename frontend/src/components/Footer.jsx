import React, { useState } from 'react';
import { MessageSquare, ShieldCheck, Check, Send, X } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export function Footer({ setCurrentPage, openDemoModal }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: 'Hello! Welcome to AIDCEVVPP. How can we assist with your AI Data Center or Liquid Cooling requirements today?' }
  ]);

  const { addToast } = useToast();

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatMsg.trim()) return;

    const userText = chatMsg;
    setChatHistory((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatMsg('');

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        { sender: 'bot', text: 'Thank you for reaching out! An AIDCEVVPP Systems Engineer has received your query and will connect shortly. You can also request an immediate 1-on-1 demo facility walkthrough!' }
      ]);
    }, 1000);
  };

  return (
    <footer style={{
      backgroundColor: '#000000',
      borderTop: '1px solid #1E293B',
      color: '#94A3B8',
      padding: '48px 24px 36px 24px',
      position: 'relative',
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        textAlign: 'center'
      }}>
        {/* Copyright Text (Center) */}
        <p style={{
          fontSize: '14px',
          color: '#94A3B8',
          margin: 0,
          fontWeight: 400
        }}>
          Copyright © 2026 AIDCEVVPP - All Rights Reserved.
        </p>

        {/* Centered Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '16px 24px',
          marginTop: '4px'
        }}>

          <button
            onClick={() => handleNavClick('mission')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#00C4EE'}
            onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
          >
            Our Mission
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#00C4EE'}
            onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom-Left TrustedSite Badge Replica */}
      <div style={{
        position: 'fixed',
        bottom: '16px',
        left: '16px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          borderRadius: '4px',
          padding: '4px 10px',
          fontSize: '12px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: '#16A34A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}>
            <Check size={12} strokeWidth={3} />
          </div>
          <span style={{ color: '#000000', fontFamily: 'sans-serif' }}>TrustedSite</span>
          <span style={{ color: '#16A34A', fontSize: '10px' }}>SECURE</span>
        </div>
      </div>

      {/* Bottom-Right Speech Bubble Chat Widget */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999
      }}>
        {chatOpen ? (
          <div style={{
            width: '340px',
            height: '420px',
            backgroundColor: '#0B111E',
            border: '1px solid #1E293B',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Chat Header */}
            <div style={{
              backgroundColor: '#0F172A',
              padding: '14px 16px',
              borderBottom: '1px solid #1E293B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span style={{ fontWeight: 700, fontSize: '14px', color: '#FFFFFF' }}>AIDCEVVPP Support</span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {chatHistory.map((m, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                    backgroundColor: m.sender === 'user' ? '#00C4EE' : '#1E293B',
                    color: m.sender === 'user' ? '#000000' : '#F8FAFC',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    maxWidth: '85%',
                    lineHeight: '1.4'
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendChat} style={{
              padding: '12px',
              borderTop: '1px solid #1E293B',
              display: 'flex',
              gap: '8px'
            }}>
              <input
                type="text"
                placeholder="Ask a question..."
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: '#090D14',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#00C4EE',
                  border: 'none',
                  borderRadius: '8px',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000000',
                  cursor: 'pointer'
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: '#000000',
              border: '2px solid #00C4EE',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 196, 238, 0.4)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
          >
            <MessageSquare size={24} color="#FFFFFF" />
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;

