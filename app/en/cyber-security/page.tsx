import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnFooter from '@/components/EnFooter'

export const metadata: Metadata = {
  title: 'Cyber Security & Digital Protection | Imperium Private Protection',
  description: 'Digital protection for exposed individuals: device audits, communications security, espionage detection and online identity protection.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/en/cyber-security',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/cyber-securite',
      'en': 'https://www.imperiumprotection.fr/en/cyber-security',
    },
  },
}

export default function CyberSecurity() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&q=80" alt="Cyber Security" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/en">Home</Link><span>›</span>
            <Link href="/en#services">Services</Link><span>›</span>
            <span className="bc-current">Cyber Security</span>
          </nav>
          <p className="hero-tag">Service · Digital Protection</p>
          <h1>Cyber <span>Security</span></h1>
          <p className="svc-hero-desc">Complete digital protection for exposed individuals: audit, communications security, espionage detection and online identity protection.</p>
          <Link href="/en#contact" className="btn btn-gold">Request an Audit</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Overview</p>
            <h2>Digital protection is a physical issue</h2>
            <p>Digital and physical threats are now inseparable. The compromise of your phone, a leak of your location data or surveillance of your communications can directly precede a physical attack or extortion attempt.</p>
            <p>Imperium Private Protection integrates cyber security as an essential component of all-round protection. Our experts analyse your devices, communications and digital footprint to eliminate vulnerabilities before they are exploited.</p>
            <p>Our approach is discreet, non-intrusive and targeted at the real risks you face as a high-value individual or public figure.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" alt="Cyber protection" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">What&apos;s included</p>
            <h2>Our cyber services</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Full device audit</h4><p>Forensic analysis of your smartphones, tablets, computers and connected watches to detect malware, spyware and vulnerabilities.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Communications security</h4><p>Implementation of end-to-end encrypted communication channels, secure messaging and protected communication protocols.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Espionage detection</h4><p>Search for bugs, telephone intercepts, hidden cameras and surveillance devices in your premises and vehicles.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Online identity protection</h4><p>Removal of personal information from public sources, protection of social accounts and management of your digital footprint.</p><div className="feat-tags"><span>Defensive OSINT</span><span>Doxing protection</span><span>Dark web</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Dark web monitoring</h4><p>Continuous monitoring of the dark web to detect the sale of your personal data, sensitive information or malicious plans concerning you.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Training &amp; awareness</h4><p>Training for you and your teams in digital best practices, phishing, social engineering and password management.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-cyber-threats">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Identified threats</p>
            <h2>Key digital threats</h2>
          </div>
          <div className="threats-grid">
            <div className="threat-card"><div className="threat-icon red">🎯</div><h4>Spyware &amp; Pegasus</h4><p>Spyware targeting exposed individuals: total smartphone compromise without victim interaction.</p></div>
            <div className="threat-card"><div className="threat-icon orange">📡</div><h4>Intercepts &amp; eavesdropping</h4><p>Surveillance of phone calls, emails and messaging by malicious or state actors.</p></div>
            <div className="threat-card"><div className="threat-icon red">🕵️</div><h4>Doxing &amp; targeting</h4><p>Publication of personal information online to facilitate harassment, threats or physical actions.</p></div>
            <div className="threat-card"><div className="threat-icon yellow">🔓</div><h4>Account breaches</h4><p>Hacking of email, social media and banking accounts for extortion, manipulation or identity theft.</p></div>
            <div className="threat-card"><div className="threat-icon orange">📍</div><h4>Malicious geolocation</h4><p>Tracking your movements via metadata, mobile apps or location devices installed without your knowledge.</p></div>
            <div className="threat-card"><div className="threat-icon red">🎭</div><h4>Deepfakes &amp; manipulation</h4><p>Creation of falsified content (videos, audio) to damage your reputation or facilitate fraud in your name.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="process-bg">
          <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80" alt="" fill style={{ objectFit: 'cover' }} />
          <div className="process-overlay"></div>
        </div>
        <div className="container">
          <div className="section-head">
            <p className="section-tag light">Our method</p>
            <h2 className="light">Our cyber process</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Initial audit</h4><p>Inventory of your devices, accounts, digital habits and assessment of your overall digital footprint.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Forensic analysis</h4><p>In-depth examination of devices, detection of active compromises and identification of vulnerabilities.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Securing &amp; hardening</h4><p>Cleaning of compromises, system reinforcement, implementation of secure protocols.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Continuous monitoring</h4><p>Permanent monitoring and real-time alerts when a new digital threat is detected.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-faq">
        <div className="container faq-wrap">
          <div className="section-head">
            <p className="section-tag">Frequently asked questions</p>
            <h2>Your questions, our answers</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item"><summary>How do I know if my phone has been compromised?</summary><p>Several signs may indicate this: battery draining abnormally fast, overheating without use, suspicious network activity, unusual behaviour. A forensic audit by our experts provides certain detection.</p></details>
            <details className="faq-item"><summary>Do you provide secure communication solutions?</summary><p>Yes. We implement end-to-end encrypted communication environments adapted to your usage: messaging, email, calls and video conferencing.</p></details>
            <details className="faq-item"><summary>Can you remove my information from search sites?</summary><p>Yes. We clean your digital footprint: removal of personal data from aggregators, data brokers and accessible public sources.</p></details>
            <details className="faq-item"><summary>Can cyber protection be combined with physical protection?</summary><p>This is the ideal approach. The two disciplines complement each other: cyber intelligence directly informs physical protection, and vice versa.</p></details>
            <details className="faq-item"><summary>Do you intervene during a crisis (ongoing hack)?</summary><p>Yes. We have a rapid response team available 24/7 to address ongoing digital security incidents.</p></details>
          </div>
        </div>
      </section>

      <section className="svc-related">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Also discover</p>
            <h2>Our other services</h2>
          </div>
          <div className="related-grid">
            <Link href="/en/intelligence-risk" className="related-card">
              <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&q=80" alt="Intelligence" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Intelligence &amp; Risk Analysis</h4><span>Discover →</span></div>
            </Link>
            <Link href="/en/close-protection" className="related-card">
              <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Close Protection" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Close Protection</h4><span>Discover →</span></div>
            </Link>
            <Link href="/en/residence-security" className="related-card">
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Residence Security" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Residence Security</h4><span>Discover →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>Protect your digital identity</h2>
            <p>Request a confidential cyber audit. Our experts operate in France and internationally.</p>
          </div>
          <Link href="/en#contact" className="btn btn-gold">Request a cyber audit</Link>
        </div>
      </section>

      <EnFooter />
    </main>
  )
}
