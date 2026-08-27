// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(2);
  const [scrolled, setScrolled] = useState(false);

  // Hero slides data
  const heroSlides = [
    {
      id: 0,
      image: 'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/Image_20260418112413.jpg',
      title: 'Next Generation Modular AI Data Center and Cooling Solutions'
    },
    {
      id: 1,
      image: 'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/blob-4f9fb14.png',
      title: 'Next Generation Modular AI Data Center and Cooling Solutions'
    },
    {
      id: 2,
      image: 'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/Image_20260417155442.png',
      title: 'Next Generation Modular AI Data Center and Cooling Solutions'
    },
    {
      id: 3,
      image: 'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/ChatGPT%20Image%20Apr%201%2C%202026%2C%2010_09_06%20AM.png',
      title: 'Next Generation Modular AI Data Center and Cooling Solutions'
    }
  ];

  // Auto-play hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gallery images
  const galleryImages = [
    'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/Image_20260418112413.jpg',
    'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/blob-4f9fb14.png',
    'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/Image_20260417155442.png',
    'https://img1.wsimg.com/isteam/ip/94570b77-c95c-4318-9d04-08e8cc8b4463/ChatGPT%20Image%20Apr%201%2C%202026%2C%2010_09_06%20AM.png'
  ];

  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Navigation items
  const navItems = ['Home', 'AIDC', 'Thermal', 'Our Mission', 'Contact Us', 'Newsroom'];

  return (
    <div style={{
      background: '#000000',
      color: 'white',
      fontFamily: 'Montserrat, Arial, sans-serif',
      minHeight: '100vh'
    }}>

      {/* ========== MAIN CONTENT ========== */}
      <main>

        {/* ========== HERO SLIDER SECTION ========== */}
        <section style={{
          position: 'relative',
          minHeight: '70vh',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'relative',
            height: '560px',
            width: '100%',
            zIndex: 2,
            overflow: 'hidden'
          }}>
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: index === activeSlide ? 1 : 0,
                  transition: 'opacity 1000ms ease-in-out',
                  zIndex: index === activeSlide ? 1 : 0,
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.32) 100%), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '100%',
                  width: '100%'
                }}
              />
            ))}

            {/* Hero Content */}
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 2rem'
            }}>
              <div style={{
                maxWidth: '60%',
                textAlign: 'center',
                opacity: 1,
                transition: 'opacity 1.2s ease-in-out'
              }}>
                <h1 style={{
                  fontSize: '35px',
                  fontWeight: '400',
                  fontFamily: "'Archivo Black', Arial, sans-serif",
                  textTransform: 'uppercase',
                  color: 'white',
                  lineHeight: '1.2',
                  margin: 0,
                  wordWrap: 'break-word'
                }}>
                  Next Generation Modular AI Data Center and Cooling Solutions
                </h1>
              </div>
            </div>

            {/* Pagination Dots */}
            <div style={{
              position: 'absolute',
              bottom: '0px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 11,
              display: 'flex',
              gap: '10px',
              paddingBottom: '1rem'
            }}>
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: index === activeSlide ? 'white' : 'rgba(255,255,255,0.5)',
                    padding: 0,
                    margin: '4px 0'
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========== INTRODUCTION SECTION ========== */}
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
              gridTemplateColumns: '1fr',
              gap: '0'
            }}>
              <div style={{
                padding: '0'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                  padding: '24px 0'
                }}>
                  <h2 style={{
                    fontSize: '30px',
                    fontWeight: '400',
                    fontFamily: "'Archivo Black', Arial, sans-serif",
                    textTransform: 'uppercase',
                    color: 'rgb(226, 226, 226)',
                    margin: '0 0 24px 0',
                    letterSpacing: 'normal'
                  }}>
                    AISPEX Introduction
                  </h2>
                  <div style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    marginTop: '24px'
                  }}>
                    <div style={{
                      color: '#ffffff',
                      fontSize: '22px',
                      fontWeight: '400',
                      lineHeight: '1.4'
                    }}>
                      <p style={{ margin: 0 }}>
                        <strong>AISPEX</strong> delivers high-density modular data center solutions with a focus on advanced liquid cooling technology. Built for next-generation AI and compute workloads, our systems enable efficient thermal management, higher performance, and scalable deployment in increasingly power-intensive environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== GALLERY SECTION ========== */}
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
              gridTemplateColumns: '1fr',
              gap: '1.5rem'
            }}>
              <div>
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
            </div>
          </div>
        </section>

        {/* ========== MODULAR AI DATA CENTER ARCHITECTURE ========== */}
        <section style={{
          padding: '80px 20px',
          background: 'transparent',
          color: 'white',
          maxWidth: '900px',
          margin: 'auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '38px',
              fontWeight: '600',
              marginBottom: '20px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Modular AI Data Center Architecture
            </h2>
            <p style={{
              fontSize: '24px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.85)',
              margin: 0
            }}>
              A modular AI data center replaces traditional grid dependency with a flexible, energy-integrated approach. 
              This architecture enables faster deployment, scalability, and resilient, efficient operations.
            </p>
          </div>

          {/* Timeline */}
          <div style={{
            position: 'relative',
            paddingLeft: '20px'
          }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '12px',
              top: 0,
              width: '2px',
              height: '100%',
              background: 'rgba(255,255,255,0.3)'
            }} />

            {/* Node 1 - Grid-Connected */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '50px'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                flexShrink: 0,
                marginLeft: '4px'
              }} />
              <div style={{
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '25px',
                borderRadius: '14px',
                backdropFilter: 'blur(6px)',
                width: '100%',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}>
                <div style={{
                  fontSize: '26px',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Grid-Connected
                </div>
                <div style={{
                  fontSize: '24px',
                  lineHeight: '1.5',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  High- and medium-voltage skids, modular substations, and phased capacity expansion enable stable integration with existing grid infrastructure.
                </div>
              </div>
            </div>

            {/* Node 2 - Energy-Native / Islanded */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '50px'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                flexShrink: 0,
                marginLeft: '4px'
              }} />
              <div style={{
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '25px',
                borderRadius: '14px',
                backdropFilter: 'blur(6px)',
                width: '100%',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}>
                <div style={{
                  fontSize: '26px',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Energy-Native / Islanded
                </div>
                <div style={{
                  fontSize: '24px',
                  lineHeight: '1.5',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  Operates independently using on-site generation, microgrid control systems, and integration of renewables or small modular reactors (SMRs).
                </div>
              </div>
            </div>

            {/* Node 3 - Bridging Mode */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '50px'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                flexShrink: 0,
                marginLeft: '4px'
              }} />
              <div style={{
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '25px',
                borderRadius: '14px',
                backdropFilter: 'blur(6px)',
                width: '100%',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}>
                <div style={{
                  fontSize: '26px',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Bridging Mode
                </div>
                <div style={{
                  fontSize: '24px',
                  lineHeight: '1.5',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  Temporary gas or diesel power solutions enable rapid deployment and activation within 3–6 months while permanent infrastructure is developed.
                </div>
              </div>
            </div>
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
              color: '#ffffff',
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
                color: 'white',
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

        {/* ========== CONTACT SECTION ========== */}
        <section style={{
          padding: '56px 0',
          background: '#000000',
          position: 'relative'
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
              color: '#ffffff',
              textAlign: 'center',
              margin: '0 0 32px 0'
            }}>
              Contact Us
            </h2>

            <div style={{
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <form>
                  <input type="text" name="_app_id" autoComplete="off" tabIndex="-1" value="" style={{ display: 'none' }} />

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        placeholder="Name"
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

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="email"
                        placeholder="Email*"
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

                  <div style={{ marginBottom: '1rem' }}>
                    <textarea
                      rows="5"
                      placeholder="Tell us about your project"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '16px',
                        outline: 'none',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'white'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.6 11.6L17 13l-5.9 5.9c-1.3 1.3-2.9 1.9-4.6 1.9-1.7 0-3.2-.7-4.5-2-2.5-2.5-2.5-6.6 0-9.2l7.1-7.1.1-.1c1.9-2 5.1-2 7.1 0l.1.1c2 2 2 5.1 0 7.1l-6.9 6.6c-.7.7-1.6 1.1-2.5 1.2h-.3c-.9 0-1.7-.3-2.2-.9-.7-.7-1-1.6-.9-2.6.1-.9.5-1.8 1.2-2.5l5.5-5.8L11.7 7l-5.5 5.9c-.4.4-.6.8-.6 1.3 0 .2 0 .7.3 1 .3.3.7.3 1 .3.4 0 .9-.3 1.3-.6L15 8.2C16.2 7 16.2 5.1 15 4l-.1-.1c-1.2-1.2-3.1-1.2-4.3 0l-.7.7-6.5 6.5c-1.8 1.8-1.8 4.6 0 6.3 1.8 1.7 4.6 1.8 6.3 0l5.9-5.8z" />
                      </svg>
                      <span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>Attach Files</span>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginLeft: 'auto' }}>Attachments (0)</span>
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
                      width: '100%',
                      minHeight: '56px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#e0e0e0'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                  >
                    Send
                  </button>

                  <div style={{
                    marginTop: '1rem',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.4)',
                    textAlign: 'center'
                  }}>
                    This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Terms of Service</a> apply.
                  </div>
                </form>
              </div>
            </div>

            {/* Address Section */}
            <div style={{
              marginTop: '48px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{
                padding: '40px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.03)',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <h3 style={{
                  fontSize: '30px',
                  fontWeight: '400',
                  fontFamily: "'Archivo Black', Arial, sans-serif",
                  color: 'white',
                  margin: '0 0 16px 0'
                }}>
                  Texas
                </h3>
                <p style={{
                  color: 'rgb(145, 145, 145)',
                  fontSize: '22px',
                  margin: 0
                }}>
                  839 Farm to Market 1489, Brookshire, TX, USA
                </p>
              </div>

              <div style={{
                padding: '40px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.03)',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <h3 style={{
                  fontSize: '30px',
                  fontWeight: '400',
                  fontFamily: "'Archivo Black', Arial, sans-serif",
                  color: 'white',
                  margin: '0 0 16px 0'
                }}>
                  California
                </h3>
                <p style={{
                  color: 'rgb(145, 145, 145)',
                  fontSize: '22px',
                  margin: 0
                }}>
                  2216 O'Toole Avenue, San Jose, CA, USA
                </p>
              </div>
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

        {/* ========== FOOTER COPYRIGHT ========== */}
        <footer style={{
          padding: '24px 0',
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

        <style>{`
          @media (max-width: 768px) {
            h1 { font-size: 24px !important; line-height: 1.25 !important; }
            h2 { font-size: 20px !important; }
            section { padding: 36px 16px !important; }
            .hero-slider-container { height: 380px !important; }
          }
        `}</style>
      </main>
    </div>
  );
}


export { HomePage };