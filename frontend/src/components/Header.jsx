import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, Zap } from 'lucide-react';

export function Header({ currentPage, setCurrentPage, openAuthModal, openDemoModal, user, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'aidc', label: 'AIDC' },
    { id: 'thermal', label: 'THERMAL' },
    { id: 'mission', label: 'OUR MISSION' },
  ];

  const dropdownItems = [
    { id: 'evvpp', label: 'EV VPP Platform' },
    { id: 'pricing', label: 'Products & Pricing' },
    { id: 'blog', label: 'News & Blog' },
    { id: 'admin', label: 'Admin Analytics' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        backgroundColor: '#000000',
        borderBottom: '1px solid #1E293B',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        maxWidth: '100vw'
      }}>

        {/* Left: Brand Logo Replica */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <div style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: '28px',
            letterSpacing: '-1px',
            color: '#00C4EE',
            display: 'flex',
            alignItems: 'center',
            textTransform: 'lowercase'
          }}>
            aidcevvp
            <span style={{ color: '#FFD100', position: 'relative' }}>
              p
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-2px',
                width: '6px',
                height: '6px',
                backgroundColor: '#FFD100',
                borderRadius: '50%'
              }} />
            </span>
          </div>
        </div>

        {/* Right Navigation Links (Desktop) */}
        <nav style={{ display: 'none', mdDisplay: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  padding: '8px 4px',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                {item.label}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#FFFFFF'
                  }} />
                )}
              </button>
            );
          })}

          {/* MORE Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '8px 4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              MORE <ChevronDown size={14} style={{ transform: moreDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {moreDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '40px',
                right: 0,
                width: '220px',
                backgroundColor: '#0B111E',
                border: '1px solid #1E293B',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
                padding: '8px 0',
                zIndex: 1000
              }}>
                {dropdownItems.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleNavClick(d.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      background: 'transparent',
                      border: 'none',
                      color: currentPage === d.id ? '#00C4EE' : '#CBD5E1',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1E293B'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CONTACT US Link */}
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              padding: '8px 4px',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            CONTACT US
            {currentPage === 'contact' && (
              <div style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: '#FFFFFF'
              }} />
            )}
          </button>

          {/* Demo CTA Button */}
          <button
            onClick={openDemoModal}
            style={{
              background: 'linear-gradient(135deg, #00C4EE 0%, #0088AA 100%)',
              color: '#000000',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.5px',
              padding: '10px 20px',
              borderRadius: '9999px',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(0, 196, 238, 0.4)'
            }}
          >
            <Zap size={14} fill="#000000" />
            REQUEST DEMO
          </button>

          {/* User Auth state */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600 }}>Hi, {user.full_name}</span>
              <button
                onClick={onLogout}
                style={{
                  background: 'transparent',
                  border: '1px solid #334155',
                  color: '#CBD5E1',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              style={{
                background: 'transparent',
                border: '1px solid #00C4EE',
                color: '#00C4EE',
                borderRadius: '20px',
                padding: '8px 18px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <User size={14} />
              SIGN IN
            </button>
          )}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-toggle">
          <button
            onClick={openDemoModal}
            style={{
              background: '#00C4EE',
              color: '#000000',
              fontWeight: 700,
              fontSize: '11px',
              padding: '8px 14px',
              borderRadius: '9999px',
              border: 'none'
            }}
          >
            DEMO
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000000',
          zIndex: 998,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                color: currentPage === item.id ? '#00C4EE' : '#FFFFFF',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '1px'
              }}
            >
              {item.label}
            </button>
          ))}
          {dropdownItems.map((d) => (
            <button
              key={d.id}
              onClick={() => handleNavClick(d.id)}
              style={{
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                color: currentPage === d.id ? '#00C4EE' : '#CBD5E1',
                fontSize: '16px',
                fontWeight: 600,
                paddingLeft: '12px'
              }}
            >
              • {d.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              textAlign: 'left',
              background: 'transparent',
              border: 'none',
              color: currentPage === 'contact' ? '#00C4EE' : '#FFFFFF',
              fontSize: '18px',
              fontWeight: 700
            }}
          >
            CONTACT US
          </button>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); openDemoModal(); }}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '9999px',
                background: '#00C4EE',
                color: '#000000',
                fontWeight: 700,
                border: 'none'
              }}
            >
              REQUEST DEMO
            </button>
            {!user && (
              <button
                onClick={() => { setMobileMenuOpen(false); openAuthModal(); }}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '9999px',
                  background: 'transparent',
                  border: '1px solid #00C4EE',
                  color: '#00C4EE',
                  fontWeight: 700
                }}
              >
                SIGN IN
              </button>
            )}
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Navigation Display */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>

      {/* Header Spacer to avoid top content clipping */}
      <div style={{ height: '70px' }} />
    </>
  );
}

export default Header;

