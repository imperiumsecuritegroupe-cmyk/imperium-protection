import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnFooter from '@/components/EnFooter'

export const metadata: Metadata = {
  title: 'Close Protection & Bodyguard Services | Imperium Private Protection',
  description: 'CNAPS-certified close protection and bodyguard services in Paris, Nice, Monaco, Cannes, Saint-Tropez. Discreet and responsive agents available 24/7. Free assessment.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/en/close-protection',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/protection-rapprochee',
      'en': 'https://www.imperiumprotection.fr/en/close-protection',
    },
  },
}

export default function CloseProtection() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80" alt="Close Protection" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/en">Home</Link><span>›</span>
            <Link href="/en#services">Services</Link><span>›</span>
            <span className="bc-current">Close Protection</span>
          </nav>
          <p className="hero-tag">Service · Physical Protection</p>
          <h1>Close <span>Protection</span></h1>
          <p className="svc-hero-desc">CNAPS-certified, discreet and highly qualified agents to accompany you in complete safety — in France and internationally.</p>
          <Link href="/en#contact" className="btn btn-gold">Request an Assessment</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Overview</p>
            <h2>What is close protection?</h2>
            <p>Close protection involves ensuring the physical safety of an individual through the presence of one or more qualified agents at their side. It aims to prevent and neutralise any direct threat to the physical integrity of the protected person.</p>
            <p>At Imperium Private Protection, every close protection mission is preceded by a threat level assessment, route analysis and a comprehensive team briefing. We do not improvise — we anticipate.</p>
            <p>Our agents operate with maximum discretion. Their presence is adaptable: visible for deterrent effect, or completely discreet depending on your preferences and the mission context.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80" alt="Protection agent" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">What&apos;s included</p>
            <h2>Our close protection services</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Individual escort</h4><p>A dedicated agent accompanies you during daily movements, professional appointments, private outings or public events.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Family protection</h4><p>Multi-agent arrangement for the protection of spouse, children and close relatives. School escort, outings and secure residence.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M16 36l-4 8M32 36l4 8M12 44h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Events &amp; outings</h4><p>Presence at galas, conferences, public speeches or any event exposing the protected person to elevated risk.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Bilingual &amp; trilingual security drivers</h4><p>Our drivers are security-trained and CNAPS-certified. Bilingual (FR/EN, FR/AR, FR/ES…) and trilingual on request for international clients.</p><div className="feat-tags"><span>Mercedes Viano</span><span>Mercedes S-Class</span><span>Armoured SUV</span><span>Bilingual</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>24/7 missions</h4><p>Permanent protection with team rotation to ensure constant vigilance without coverage gaps.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Immediate crisis management</h4><p>Emergency evacuation protocols, secure extraction and coordination with law enforcement when necessary.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-profiles">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Who is this service for</p>
            <h2>Target profiles</h2>
          </div>
          <div className="profiles-grid">
            <div className="profile-item"><span className="profile-dot"></span><strong>Business executives &amp; CEOs</strong><p>Leaders exposed to risks of kidnapping, extortion or retaliation.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Public figures</strong><p>Politicians, artists, influencers exposed to the public or victims of harassment.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Wealthy families</strong><p>Protection of spouses and children against risks linked to high-profile status or wealth.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Witnesses &amp; threatened individuals</strong><p>Individuals who have received direct threats requiring immediate coverage.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Foreign visitors in France</strong><p>Senior officials, delegations or foreign personalities travelling on French territory.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Travellers in sensitive areas</strong><p>Professionals or private individuals travelling to high-risk countries or regions.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="process-bg">
          <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=1600&q=80" alt="" fill style={{ objectFit: 'cover' }} />
          <div className="process-overlay"></div>
        </div>
        <div className="container">
          <div className="section-head">
            <p className="section-tag light">Our method</p>
            <h2 className="light">How does a mission unfold?</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Risk assessment</h4><p>Confidential interview to analyse your exposure profile, identify real threats and define the appropriate level of protection.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Operational planning</h4><p>Venue reconnaissance, route analysis, team briefing and implementation of protocols specific to your situation.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Team deployment</h4><p>Deployment of certified, equipped agents briefed on all mission instructions.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Monitoring &amp; adaptation</h4><p>Daily reporting, real-time adjustment of the arrangement according to threat evolution and post-mission debriefing.</p></div>
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
            <details className="faq-item"><summary>How many agents are needed for my protection?</summary><p>The number of agents depends on your risk profile, activities and environment. A preliminary assessment defines the optimal arrangement — from a single discreet agent to a full team.</p></details>
            <details className="faq-item"><summary>Are agents in uniform or undercover?</summary><p>Depending on your preferences and threat level, our agents can operate in professional attire (deterrent effect) or completely undercover in civilian clothing for invisible protection.</p></details>
            <details className="faq-item"><summary>Can I have protection for a single event?</summary><p>Yes. We offer punctual protection missions for a single event, trip or period of elevated risk, with no long-term commitment.</p></details>
            <details className="faq-item"><summary>Are your agents authorised to carry firearms?</summary><p>Our agents operate strictly within French law. Carrying firearms is subject to specific prefectoral authorisation. We scrupulously respect all applicable legal provisions.</p></details>
            <details className="faq-item"><summary>Is the confidentiality of my situation guaranteed?</summary><p>Absolutely. Every mission is governed by a strict non-disclosure agreement (NDA). Our clients&apos; identities are never communicated to third parties.</p></details>
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
            <Link href="/en/vip-protection" className="related-card">
              <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" alt="VIP Protection" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>VIP Protection</h4><span>Discover →</span></div>
            </Link>
            <Link href="/en/international-escort" className="related-card">
              <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" alt="International Escort" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>International Escort</h4><span>Discover →</span></div>
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
            <h2>Need close protection?</h2>
            <p>Contact us for a confidential assessment. Available 24/7.</p>
          </div>
          <Link href="/en#contact" className="btn btn-gold">Contact us now</Link>
        </div>
      </section>

      <EnFooter />
    </main>
  )
}
