// src/pages/OurMissionPage.jsx
import React, { useState, useEffect } from 'react';

export default function OurMissionPage() {
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Gallery images
  const galleryImages = [
    'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/blob-08be880.png',
    'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/Image_20260419111216.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div style={{
      background: '#000000',
      color: 'white',
      fontFamily: 'Montserrat, Arial, sans-serif',
      minHeight: '100vh'
    }}>
      <main>

        {/* ========== HERO GALLERY / BANNER ========== */}
        <section style={{
          padding: 0,
          background: 'rgb(22, 22, 22)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              overflow: 'hidden',
              borderRadius: '0'
            }}>
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: index === galleryIndex ? 1 : 0,
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    transform: 'scale(1)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease'
                  }}

                />
              ))}
            </div>
          </div>
        </section>

        {/* ========== MISSION STATEMENT ========== */}
        <section style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '140px 20px',
          textAlign: 'center',
          background: '#000'
        }}>
          <div style={{
            fontSize: '36px',
            lineHeight: '1.5',
            fontWeight: '400',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            To transform <span style={{ fontWeight: '600' }}>power and thermal constraints</span> 
            into scalable, deployable AI infrastructure—enabling intelligence 
            to grow <span style={{ fontWeight: '600' }}>without limits</span>.
          </div>
        </section>

        {/* ========== GALLERY CAROUSEL ========== */}
        <section style={{
          padding: '56px 0',
          background: '#000000'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              overflow: 'hidden'
            }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/Image_20260419111216.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>
        </section>

        {/* ========== DECENTRALIZED AI COMPUTE ========== */}
        <section style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '120px 20px',
          textAlign: 'center',
          background: 'transparent',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
          <div style={{
            fontSize: '42px',
            marginBottom: '80px'
          }}>
            Decentralized AI Compute
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
          }}>
            {[
              {
                heading: 'Energy & Compute',
                text: 'AI infrastructure is no longer just about servers. It is about how energy is generated, distributed, and optimized.'
              },
              {
                heading: 'Cooling is Foundational',
                text: 'Thermal management becomes the primary constraint. Cooling is foundational infrastructure.'
              },
              {
                heading: 'Speed Wins',
                text: 'The ability to deploy infrastructure quickly will define leaders in the AI era.'
              },
              {
                heading: 'Modular & Scalable',
                items: ['Flexible', 'Rapidly deployable', 'Built to scale with demand']
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  aspectRatio: '1 / 1',
                  border: '1.5px solid #00a2db',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backdropFilter: 'blur(6px)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,162,219,0.4)';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid #00a2db',
                  opacity: 0.2,
                  animation: 'pulse 3s infinite',
                  pointerEvents: 'none'
                }} />
                <div style={{
                  fontSize: '26px',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  {item.heading}
                </div>
                {item.text && (
                  <div style={{
                    fontSize: '24px',
                    lineHeight: '1.5',
                    color: '#ddd'
                  }}>
                    {item.text}
                  </div>
                )}
                {item.items && (
                  <div style={{
                    fontSize: '24px',
                    lineHeight: '1.5',
                    color: '#ddd'
                  }}>
                    {item.items.map((subItem, idx) => (
                      <div key={idx} style={{ margin: '6px 0' }}>{subItem}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========== WHAT WE BUILD ========== */}
        <section style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '120px 20px',
          textAlign: 'center',
          background: 'rgb(22, 22, 22)',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
          <div style={{
            fontSize: '42px',
            marginBottom: '80px'
          }}>
            What We Build
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
          }}>
            {[
              {
                heading: 'Energy-Integrated Systems',
                text: 'Designed to seamlessly combine generation, storage, and distribution into one system.'
              },
              {
                heading: 'Modular AI Data Centers',
                text: 'Scalable, rapidly deployable infrastructure built for high-density AI workloads.'
              },
              {
                heading: 'Advanced Liquid Cooling',
                text: 'High-efficiency thermal management designed for next-generation compute density.'
              },
              {
                heading: 'Intelligent Energy Platforms',
                text: 'EMS & VPP systems that optimize, control, and orchestrate energy in real time.'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  aspectRatio: '1 / 1',
                  border: '1.5px solid #00a2db',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backdropFilter: 'blur(6px)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,162,219,0.4)';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid #00a2db',
                  opacity: 0.2,
                  animation: 'pulse 3s infinite',
                  pointerEvents: 'none'
                }} />
                <div style={{
                  fontSize: '26px',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  {item.heading}
                </div>
                <div style={{
                  fontSize: '24px',
                  lineHeight: '1.5',
                  color: '#ddd'
                }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '80px',
            fontSize: '24px',
            color: '#ddd'
          }}>
            All designed to work together as a unified system.
          </div>
        </section>

        {/* ========== HOW WE MAKE IT HAPPEN ========== */}
        <section style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '140px 20px',
          textAlign: 'center',
          background: 'transparent',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
          <div style={{
            fontSize: '42px',
            marginBottom: '100px'
          }}>
            How We Make It Happen
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '60px'
          }}>
            {[
              'AI infrastructure can be deployed <span style="color:white;font-weight:400;">anywhere.</span>',
              'Power is <span style="color:white;font-weight:400;">orchestrated</span>, not constrained.',
              'Cooling enables <span style="color:white;font-weight:400;">unlimited compute density.</span>',
              'Infrastructure evolves as fast as <span style="color:white;font-weight:400;">AI itself.</span>'
            ].map((text, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  fontSize: '28px',
                  lineHeight: '1.6',
                  color: '#ddd',
                  paddingTop: '30px'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '2px',
                  background: '#00a2db',
                  opacity: 0.6
                }} />
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        </section>

        {/* ========== SOCIAL SECTION ========== */}
        <section style={{
          padding: '56px 0',
          background: '#000000'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: '30px',
              fontWeight: '400',
              fontFamily: "'Archivo Black', Arial, sans-serif",
              textTransform: 'uppercase',
              color: 'white',
              margin: '0 0 40px 0'
            }}>
              Social
            </h1>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://www.linkedin.com/company/aispex"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  color: 'rgb(226, 226, 226)',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(226, 226, 226)'}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path fillRule="evenodd" d="M22 12c0-5.524-4.477-10-10-10C6.478 2 2 6.478 2 12c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10zm-5.074-6H6.871C6.391 6 6 6.38 6 6.85v10.098c0 .47.39.852.871.852h10.056a.864.864 0 00.873-.852V6.85a.863.863 0 00-.874-.85zm-8.3 1.621a1.015 1.015 0 11-.003 2.03 1.015 1.015 0 01.002-2.03zm-.876 2.803h1.753v5.63H7.75v-5.63zm2.85 0h-.002l.002-.002v.002zm0 0h1.677v.77h.023c.233-.443.804-.91 1.66-.91 1.771 0 2.098 1.166 2.098 2.682v3.089H14.31v-2.74c0-.652-.011-1.493-.909-1.493-.91 0-1.05.712-1.05 1.446v2.785H10.6v-5.63z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer style={{
          padding: '32px 0',
          background: '#000000',
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center'
          }}>
            <p style={{
              color: 'rgb(150, 150, 150)',
              fontSize: '14px',
              margin: '0'
            }}>
              Copyright © 2026 AISPEX - All Rights Reserved.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '1rem',
              flexWrap: 'wrap'
            }}>
              <a
                href="/our-mission"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Our Mission
              </a>
              <a
                href="/contact-us-1"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Contact Us
              </a>
            </div>
          </div>
        </footer>

      </main>

      {/* CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 768px) {
          .mission-grid {
            grid-template-columns: 1fr !important;
          }
          .mission-card {
            aspect-ratio: auto !important;
            padding: 40px 20px !important;
          }
          .mission-title {
            font-size: 34px !important;
          }
          .mission-statement {
            font-size: 28px !important;
          }
          .mission-item {
            font-size: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}

export { OurMissionPage };