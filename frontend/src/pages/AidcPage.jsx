// src/pages/AIDCPage.jsx
import React, { useState, useEffect } from 'react';

export default function AIDCPage() {
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Gallery images
  const galleryImages = [
    'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/newest.jpg',
    'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/Image_20260419104440.jpg'
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

        {/* ========== HERO BANNER ========== */}
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
              background: 'transparent',
              padding: '24px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <h1 style={{
                fontSize: '30px',
                fontWeight: '400',
                fontFamily: "'Archivo Black', Arial, sans-serif",
                textTransform: 'uppercase',
                color: 'rgb(226, 226, 226)',
                margin: 0,
                lineHeight: '1.125'
              }}>
                MODERN TOKEN FACTORY BUILT FOR THE NEXT ERA OF COMPUTE
              </h1>
            </div>
          </div>
        </section>

        {/* ========== GALLERY CAROUSEL ========== */}
        <section style={{
          padding: 0,
          background: 'transparent'
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
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: index === galleryIndex ? 1 : 0,
                    transition: 'opacity 1000ms ease-in-out',
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%'
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========== THE AISPEX APPROACH ========== */}
        <section style={{
          padding: '120px 20px',
          background: 'transparent',
          color: 'white',
          maxWidth: '1100px',
          margin: 'auto',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Grid background overlay */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -2,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />

          {/* Light core */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08), transparent 60%)'
          }} />

          <h1 style={{
            fontSize: '56px',
            fontWeight: '600',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            marginBottom: '20px'
          }}>
            The AISPEX Approach
          </h1>
          <h2 style={{
            fontSize: '24px',
            color: '#aaa',
            marginBottom: '100px',
            fontWeight: '400'
          }}>
            Re-Architecting AI Infrastructure Around Energy and Thermal
          </h2>

          {/* Flow Diagram */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>

            {/* Power Systems */}
            <div style={{
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '40px 30px',
              width: '260px',
              position: 'relative',
              transition: '0.4s',
              cursor: 'pointer',
              animation: 'breathe 4s ease-in-out infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'white';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.05)';
            }}>
              <h3 style={{ fontSize: '26px', marginBottom: '12px' }}>Power Systems</h3>
              <p style={{ fontSize: '18px', color: '#aaa', margin: 0 }}>Power becomes a first-class architectural layer.</p>
            </div>

            {/* Line */}
            <div style={{
              width: '100px',
              height: '2px',
              background: 'rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: 'white',
                borderRadius: '50%',
                top: '-2px',
                left: '-10px',
                animation: 'flow 3s linear infinite'
              }} />
            </div>

            {/* Thermal Infrastructure */}
            <div style={{
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '40px 30px',
              width: '260px',
              position: 'relative',
              transition: '0.4s',
              cursor: 'pointer',
              animation: 'breathe 4s ease-in-out infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'white';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.05)';
            }}>
              <h3 style={{ fontSize: '26px', marginBottom: '12px' }}>Thermal Infrastructure</h3>
              <p style={{ fontSize: '18px', color: '#aaa', margin: 0 }}>Cooling defines density, performance, and scale.</p>
            </div>

            {/* Line */}
            <div style={{
              width: '100px',
              height: '2px',
              background: 'rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: 'white',
                borderRadius: '50%',
                top: '-2px',
                left: '-10px',
                animation: 'flow 3s linear infinite'
              }} />
            </div>

            {/* AI Compute */}
            <div style={{
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '40px 30px',
              width: '260px',
              position: 'relative',
              transition: '0.4s',
              cursor: 'pointer',
              animation: 'breathe 4s ease-in-out infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'white';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.05)';
            }}>
              <h3 style={{ fontSize: '26px', marginBottom: '12px' }}>AI Compute</h3>
              <p style={{ fontSize: '18px', color: '#aaa', margin: 0 }}>Workloads deployed where energy and cooling exist.</p>
            </div>
          </div>
        </section>

        {/* ========== GALLERY SECTION 2 ========== */}
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
                  backgroundImage: `url(https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/Image_20260419104440.jpg)`,
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

        {/* ========== WHAT IS AN AISPEX MODULAR DATA CENTER ========== */}
        <section style={{
          padding: '120px 20px',
          background: 'transparent',
          color: 'white',
          maxWidth: '1200px',
          margin: 'auto',
          position: 'relative'
        }}>
          {/* Moving grid */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '200%',
            height: '200%',
            zIndex: -2,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
            animation: 'gridMove 40s linear infinite'
          }} />

          {/* Energy particles */}
          <div style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none'
          }}>
            {[
              { left: '10%', duration: '12s' },
              { left: '25%', duration: '15s' },
              { left: '40%', duration: '18s' },
              { left: '60%', duration: '14s' },
              { left: '75%', duration: '16s' },
              { left: '90%', duration: '20s' }
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  background: '#00a2db',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #00a2db',
                  left: p.left,
                  animation: `floatUp ${p.duration} linear infinite`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>

          <h1 style={{
            fontSize: '56px',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontFamily: '"Helvetica Neue", Arial, sans-serif'
          }}>
            What is an AISPEX Modular Data Center?
          </h1>

          <div style={{
            fontSize: '28px',
            color: '#ccc',
            maxWidth: '900px',
            marginBottom: '80px'
          }}>
            AISPEX AIDC is a <span style={{ color: 'white', fontWeight: '600' }}>factory-built, modular AI infrastructure system</span> that integrates compute, energy, and cooling into a unified deployment platform.
          </div>

          {/* Feature grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                title: 'Rapid Deployment',
                desc: '1MW+ scalable blocks enabling fast, phased expansion.'
              },
              {
                title: 'High-Density Compute',
                desc: '>120kW racks designed for AI-scale workloads.'
              },
              {
                title: 'Flexible Energy Integration',
                desc: 'Seamless connection to grid and on-site generation.'
              },
              {
                title: 'Cooling-First Architecture',
                desc: 'Thermal constraints define system performance.'
              }
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '30px',
                  position: 'relative',
                  transition: '0.4s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00a2db';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0,162,219,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: '#00a2db',
                  transition: '0.4s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
                onMouseLeave={(e) => e.currentTarget.style.width = '0%'} />
                <h3 style={{ fontSize: '26px', marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ fontSize: '24px', color: '#aaa', margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div style={{
            marginTop: '100px',
            fontSize: '26px',
            color: '#ccc',
            maxWidth: '900px',
            lineHeight: '1.6',
            position: 'relative',
            paddingLeft: '20px'
          }}>
            <div style={{
              position: 'absolute',
              left: '-20px',
              top: '10px',
              width: '3px',
              height: '80%',
              background: 'linear-gradient(to bottom, transparent, #00a2db, transparent)'
            }} />
            Each module is pre-engineered and delivered as a deployable unit—reducing time, cost, and risk while enabling infrastructure to scale with demand.
          </div>
        </section>

        {/* ========== CORE ARCHITECTURE ========== */}
        <section style={{
          padding: '100px 20px',
          background: 'radial-gradient(circle at center, #050505 0%, #000 70%)',
          color: '#fff',
          maxWidth: '1400px',
          margin: 'auto'
        }}>
          <div style={{
            fontSize: '64px',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: '600',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            Core Architecture
          </div>

          <div style={{
            textAlign: 'center',
            color: '#888',
            fontSize: '20px',
            marginBottom: '80px'
          }}>
            Energy, thermal, and compute — engineered as one system
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            alignItems: 'stretch',
            position: 'relative'
          }}>
            {/* Flow line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              width: '80%',
              height: '1px',
              background: 'linear-gradient(to right, transparent, #00a2db, transparent)',
              opacity: 0.25
            }}>
              <div style={{
                position: 'absolute',
                width: '180px',
                height: '100%',
                background: 'linear-gradient(to right, transparent, #00a2db, transparent)',
                animation: 'flow 4s linear infinite'
              }} />
            </div>

            {[
              {
                title: 'Power',
                icon: (
                  <svg viewBox="0 0 64 64" style={{ width: '100%', height: '100%', stroke: '#00a2db', fill: 'none', strokeWidth: 2 }}>
                    <polygon points="34,4 14,34 30,34 24,60 50,26 34,26" />
                  </svg>
                ),
                items: ['Grid connection (HV/MV)', 'BESS integration', 'On-site generation', 'EMS / VPP optimization']
              },
              {
                title: 'Thermal',
                icon: (
                  <svg viewBox="0 0 64 64" style={{ width: '100%', height: '100%', stroke: '#00a2db', fill: 'none', strokeWidth: 2 }}>
                    <path d="M10 32 Q20 20, 30 32 T50 32" />
                    <path d="M10 42 Q20 30, 30 42 T50 42" />
                  </svg>
                ),
                items: ['Liquid cooling systems', 'CDU & manifold architecture', 'Dry coolers & chillers', 'GPU-density optimized']
              },
              {
                title: 'Compute',
                icon: (
                  <svg viewBox="0 0 64 64" style={{ width: '100%', height: '100%', stroke: '#00a2db', fill: 'none', strokeWidth: 2 }}>
                    <rect x="16" y="16" width="32" height="32" />
                    <line x1="8" y1="20" x2="16" y2="20" />
                    <line x1="8" y1="32" x2="16" y2="32" />
                    <line x1="8" y1="44" x2="16" y2="44" />
                    <line x1="48" y1="20" x2="56" y2="20" />
                    <line x1="48" y1="32" x2="56" y2="32" />
                    <line x1="48" y1="44" x2="56" y2="44" />
                  </svg>
                ),
                items: ['>120kW AI racks', 'Hyperscale workloads', 'Modular deployment']
              }
            ].map((box, i) => (
              <div
                key={i}
                style={{
                  padding: '50px 40px',
                  borderRadius: '18px',
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,162,219,0.5)',
                  boxShadow: '0 0 40px rgba(0,162,219,0.15)',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 60px rgba(0,162,219,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0,162,219,0.15)';
                }}
              >
                <div style={{ width: '64px', height: '64px', marginBottom: '25px' }}>
                  {box.icon}
                </div>
                <div style={{
                  fontSize: '30px',
                  color: '#00a2db',
                  marginBottom: '20px',
                  fontFamily: 'Arial, Helvetica, sans-serif'
                }}>
                  {box.title}
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginTop: 'auto'
                }}>
                  {box.items.map((item, j) => (
                    <li key={j} style={{
                      fontSize: '19px',
                      marginBottom: '14px',
                      color: '#bbb',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '10px',
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

          <div style={{
            textAlign: 'center',
            marginTop: '120px',
            fontSize: '24px',
            color: '#888',
            fontStyle: 'italic'
          }}>
            <span style={{ color: '#00a2db' }}>Cooling</span> defines density.  
            <span style={{ color: '#00a2db', marginLeft: '4px' }}>Power</span> defines scale.
          </div>
        </section>

        {/* ========== DEPLOYMENT MODELS ========== */}
        <section style={{
          padding: '140px 20px',
          background: 'radial-gradient(circle at center, #050505 0%, #000 70%)',
          color: '#fff',
          maxWidth: '1300px',
          margin: 'auto'
        }}>
          <div style={{
            fontSize: '72px',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: '600',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            Deployment Models
          </div>

          <div style={{
            textAlign: 'center',
            fontSize: '24px',
            color: '#888',
            marginBottom: '100px'
          }}>
            AISPEX enables flexible deployment depending on site conditions
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '50px',
            alignItems: 'stretch'
          }}>
            {[
              {
                title: 'Grid-Connected Mode',
                items: ['Integrates with existing infrastructure', 'Scales capacity in phases']
              },
              {
                title: 'Energy-Native (Islanded) Mode',
                items: ['Operates independently', 'Powered by on-site generation and microgrid control']
              },
              {
                title: 'Bridging Mode',
                items: ['Immediate deployment using temporary power', 'Enables operation while waiting for grid access']
              }
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  padding: '50px 40px',
                  borderRadius: '18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,162,219,0.4)',
                  boxShadow: '0 0 40px rgba(0,162,219,0.12)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00a2db';
                  e.currentTarget.style.boxShadow = '0 0 60px rgba(0,162,219,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,162,219,0.4)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0,162,219,0.12)';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '2px',
                  background: '#00a2db',
                  marginBottom: '20px'
                }} />
                <div style={{
                  fontSize: '34px',
                  color: '#00a2db',
                  marginBottom: '20px',
                  fontFamily: 'Arial, Helvetica, sans-serif'
                }}>
                  {card.title}
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginTop: 'auto'
                }}>
                  {card.items.map((item, j) => (
                    <li key={j} style={{
                      fontSize: '20px',
                      color: '#bbb',
                      marginBottom: '14px',
                      paddingLeft: '18px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '10px',
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

          <div style={{
            textAlign: 'center',
            marginTop: '120px',
            fontSize: '28px',
            color: '#888',
            fontStyle: 'italic'
          }}>
            AI infrastructure no longer needs to <span style={{ color: '#00a2db' }}>wait for the grid</span>.
          </div>
        </section>

        {/* ========== SUBSCRIBE SECTION ========== */}
        <section style={{
          padding: '56px 0',
          background: '#000000'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <h2 style={{
              fontSize: '30px',
              fontWeight: '400',
              fontFamily: "'Archivo Black', Arial, sans-serif",
              textTransform: 'uppercase',
              color: 'rgb(226, 226, 226)',
              textAlign: 'center',
              margin: '0 0 32px 0'
            }}>
              Subscribe
            </h2>

            <div style={{
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '16px',
                textAlign: 'center',
                marginBottom: '24px'
              }}>
                Sign up to hear from us about specials, sales, and events.
              </p>

              <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    position: 'relative'
                  }}>
                    <input
                      type="email"
                      placeholder="Email"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'white'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '12px 24px',
                    background: 'white',
                    color: 'rgb(48, 48, 48)',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                    minHeight: '56px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e0e0e0'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                >
                  Sign up
                </button>
              </form>
            </div>
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
              margin: '0 0 24px 0'
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

      {/* CSS animations */}
      <style>{`
        @keyframes breathe {
          0%, 100% { box-shadow: 0 0 10px rgba(255,255,255,0.05); }
          50% { box-shadow: 0 0 25px rgba(255,255,255,0.12); }
        }
        @keyframes flow {
          0% { left: -10px; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 110%; opacity: 0; }
        }
        @keyframes gridMove {
          from { transform: translate(0, 0); }
          to { transform: translate(-70px, -70px); }
        }
        @keyframes floatUp {
          from {
            transform: translateY(100vh);
            opacity: 0;
          }
          20% { opacity: 1; }
          80% { opacity: 1; }
          to {
            transform: translateY(-10vh);
            opacity: 0;
          }
        }
        @media (max-width: 900px) {
          .flow-container {
            flex-direction: column !important;
          }
          .flow-line {
            width: 2px !important;
            height: 60px !important;
          }
          .flow-node {
            width: 100% !important;
          }
          .grid-3col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export { AIDCPage as AidcPage, AIDCPage };