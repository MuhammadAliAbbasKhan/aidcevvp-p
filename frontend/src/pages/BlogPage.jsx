import React, { useState } from 'react';
import { Calendar, User, ArrowRight, BookOpen, Mail } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export function BlogPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { addToast } = useToast();

  const posts = [
    {
      id: 1,
      title: 'Why 120kW+ Per Rack Demands Direct-to-Chip Liquid Cooling',
      category: 'Thermal Architecture',
      date: 'August 24, 2026',
      author: 'Dr. Aris Vance, Chief Thermal Systems Architect',
      excerpt: 'Traditional air conditioning fails when GPU rack power exceeds 30kW. Inspect how micro-channel cold plates maintain silicon junction temperatures below 75°C under continuous Blackwell workloads.',
      readTime: '6 min read'
    },
    {
      id: 2,
      title: 'Integrating Modular AI Data Centers with EV Virtual Power Plants',
      category: 'Power & Microgrid',
      date: 'August 18, 2026',
      author: 'Elena Rostova, VPP Control Engineer',
      excerpt: 'How bidirectional ISO 15118 EV fleet charging algorithms allow data center operators to offset utility demand spikes by discharging stored vehicle energy during peak training hours.',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Bypassing Construction Delays: The 90-Day Factory AIDC Blueprint',
      category: 'Modular Systems',
      date: 'August 10, 2026',
      author: 'Marcus Sterling, VP of Infrastructure Deployment',
      excerpt: 'Examining the off-site manufacturing methodologies behind 10MW scalable modular blocks built in Texas and deployed globally with plug-and-play CDU connections.',
      readTime: '5 min read'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      addToast('Please enter a valid email address.', 'warning');
      return;
    }
    addToast('Successfully subscribed to the AIDCEVVPP Systems Control Blog!', 'success');
    setNewsletterEmail('');
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '40px 16px 80px 16px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#00C4EE', fontWeight: 800, fontSize: '13px', letterSpacing: '1px' }}>
            AISPEX INSIGHTS & ENGINEERING BLOG
          </span>
          <h1 style={{ fontSize: '32px', fontFamily: "'Archivo Black', sans-serif", marginTop: '8px' }}>
            Systems Control & AI Infrastructure Technical Insights
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '16px', maxWidth: '650px', margin: '16px auto 0 auto' }}>
            Deep dives into liquid cooling mechanics, modular data center logistics, and virtual power plant grid optimization.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>

          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: '#090D14',
                border: '1px solid #1E293B',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ backgroundColor: 'rgba(0, 196, 238, 0.1)', color: '#00C4EE', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '12px', color: '#64748B' }}>{post.readTime}</span>
              </div>

              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', lineHeight: '1.4' }}>
                {post.title}
              </h2>

              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6' }}>
                {post.excerpt}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#64748B' }}>
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Box */}
        <div style={{
          backgroundColor: '#0F172A',
          border: '1px solid #00C4EE',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <Mail size={32} color="#00C4EE" style={{ marginBottom: '12px' }} />
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF' }}>Subscribe to our Technical Blog</h2>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '8px 0 24px 0' }}>
            Stay connected with our latest publications on high-density liquid cooling, PUE optimization, and microgrid power strategy.
          </p>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your Email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              style={{
                backgroundColor: '#090D14',
                border: '1px solid #334155',
                borderRadius: '9999px',
                padding: '12px 24px',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none',
                width: '300px'
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#00C4EE',
                color: '#000000',
                fontWeight: 800,
                padding: '12px 28px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              SUBSCRIBE
            </button>
          </form>
          <p style={{ fontSize: '12px', color: '#64748B', marginTop: '14px' }}>
            You can unsubscribe at any time. For details, review our <a href="#privacy" style={{ color: '#00C4EE' }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

