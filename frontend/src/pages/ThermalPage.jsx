// src/pages/ThermalPage.jsx
import React, { useState, useEffect } from 'react';

export default function ThermalPage() {
  const [cardsVisible, setCardsVisible] = useState([]);
  const [dividerVisible, setDividerVisible] = useState(false);

  // Thermal systems data
  const thermalSystems = [
    {
      title: 'Liquid Cooling Systems',
      items: [
        'Rack-level CDU (Coolant Distribution Units)',
        'Facility-level CDU integration',
        'Manifold distribution systems',
        'Direct-to-chip liquid cooling capability'
      ]
    },
    {
      title: 'Heat Rejection Systems',
      items: [
        'High-efficiency dry coolers',
        'Chillers for hybrid systems',
        'Closed-loop cooling architecture',
        'Reduced water dependency'
      ]
    },
    {
      title: 'High-Density Optimization',
      items: [
        'Designed for >120kW racks',
        'Scalable to next-gen GPU requirements',
        'Stable thermal performance under extreme loads'
      ]
    }
  ];

  return (
    <div style={{
      background: '#000000',
      color: 'white',
      fontFamily: 'Montserrat, Arial, sans-serif',
      minHeight: '100vh'
    }}>
      <main>

        {/* ========== HERO SECTION ========== */}
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
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              alignItems: 'center'
            }}>
              {/* Left - Image */}
              <div style={{
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="//img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/ChatGPT%20Image%20Apr%201%2C%202026%2C%2012_57_18%20PM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:403,cg:true"
                  />
                  <source
                    media="(min-width: 451px)"
                    srcSet="//img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/ChatGPT%20Image%20Apr%201%2C%202026%2C%2012_57_18%20PM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                  />
                  <img
                    src="//img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/ChatGPT%20Image%20Apr%201%2C%202026%2C%2012_57_18%20PM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                    alt="Two sets of large industrial machinery units on a brown speckled background."
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '1.5 / 1',
                      objectFit: 'cover',
                      borderRadius: '0'
                    }}
                  />
                </picture>
              </div>

              {/* Right - Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: '30px',
                  fontWeight: '400',
                  fontFamily: "'Archivo Black', Arial, sans-serif",
                  textTransform: 'uppercase',
                  color: 'rgb(226, 226, 226)',
                  margin: 0,
                  lineHeight: '1.25'
                }}>
                  High-Performance Liquid Cooling Closed-Loop Systems Built for Next-Generation Compute Density
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* ========== COOLING-FIRST INFRASTRUCTURE ========== */}
        <section style={{
          padding: '100px 20px',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: 'auto',
          background: '#000'
        }}>
          <div style={{
            fontSize: '40px',
            fontWeight: '600',
            marginBottom: '20px',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            Cooling-First Infrastructure Design
          </div>

          <div style={{
            fontSize: '18px',
            color: '#aaa',
            marginBottom: '60px'
          }}>
            AISPEX redefines data center architecture by placing thermal systems at the core.
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px'
          }}>
            <div style={{
              fontSize: '22px',
              padding: '20px 40px',
              border: '1px solid #00a2db',
              borderRadius: '8px',
              minWidth: '280px'
            }}>
              <span style={{ color: '#00a2db', fontWeight: '600' }}>Cooling</span> determines density
            </div>

            <div style={{
              width: '2px',
              height: '40px',
              background: '#00a2db',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '-6px',
                left: '-4px',
                borderWidth: '6px',
                borderStyle: 'solid',
                borderColor: '#00a2db transparent transparent transparent'
              }} />
            </div>

            <div style={{
              fontSize: '22px',
              padding: '20px 40px',
              border: '1px solid #00a2db',
              borderRadius: '8px',
              minWidth: '280px'
            }}>
              <span style={{ color: '#00a2db', fontWeight: '600' }}>Density</span> determines compute
            </div>
          </div>
        </section>

        {/* ========== INTEGRATED THERMAL SYSTEMS ========== */}
        <section style={{
          padding: '100px 20px',
          maxWidth: '1100px',
          margin: 'auto',
          background: '#000',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
          <div style={{
            fontSize: '56px',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            Integrated Thermal Systems
          </div>

          <div style={{
            textAlign: 'center',
            color: '#aaa',
            fontSize: '22px',
            marginBottom: '80px'
          }}>
            AISPEX provides a complete liquid cooling stack engineered for AI workloads
          </div>

          {/* Divider */}
          <div style={{
            width: '0',
            height: '2px',
            background: '#00a2db',
            margin: '60px auto',
            transition: 'width 1s ease'
          }}
          id="divider"
          onMouseEnter={(e) => e.target.style.width = '120px'}
          onMouseLeave={(e) => e.target.style.width = '0'} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {thermalSystems.map((system, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid rgba(0,162,219,0.4)',
                  padding: '30px',
                  borderRadius: '12px',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00a2db';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0,162,219,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,162,219,0.4)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '26px',
                  color: '#00a2db',
                  marginBottom: '20px'
                }}>
                  {system.title}
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {system.items.map((item, idx) => (
                    <li key={idx} style={{
                      marginBottom: '12px',
                      color: '#ccc',
                      fontSize: '18px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '6px',
                        height: '6px',
                        background: '#00a2db',
                        borderRadius: '50%'
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
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
            <h2 style={{
              fontSize: '30px',
              fontWeight: '400',
              fontFamily: "'Archivo Black', Arial, sans-serif",
              textTransform: 'uppercase',
              color: 'white',
              margin: '0 0 40px 0'
            }}>
              Social
            </h2>

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

      {/* CSS for responsive */}
      <style>{`
        @media (max-width: 900px) {
          .thermal-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-title {
            text-align: center !important;
            align-items: center !important;
          }
        }
        @media (max-width: 600px) {
          .cooling-title {
            font-size: 28px !important;
          }
          .cooling-box {
            font-size: 18px !important;
            padding: 16px 24px !important;
            min-width: auto !important;
            width: 100% !important;
          }
          .thermal-title {
            font-size: 40px !important;
          }
          .thermal-subtitle {
            font-size: 18px !important;
          }
          .system-card {
            padding: 20px !important;
          }
          .system-card-title {
            font-size: 22px !important;
          }
          .system-item {
            font-size: 16px !important;
          }
        }
        @media (min-width: 768px) {
          .hero-image {
            margin-bottom: 0 !important;
          }
        }
        @media (max-width: 767px) {
          .hero-title h1 {
            font-size: 22px !important;
          }
        }
      `}</style>
    </div>
  );
}

export { ThermalPage };