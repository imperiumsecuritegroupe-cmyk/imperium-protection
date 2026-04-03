import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnFooter from '@/components/EnFooter'

export const metadata: Metadata = {
  title: 'International Escort & Secure Travel | Imperium Private Protection',
  description: 'Rapid deployment in 40+ countries. Secure management of high-risk travel, conflict zones, sensitive business trips and expatriation. CNAPS certified agents.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/en/international-escort',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/accompagnement-international',
      'en': 'https://www.imperiumprotection.fr/en/international-escort',
    },
  },
}

export default function InternationalEscort() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80" alt="International Escort" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/en">Home</Link><span>›</span>
            <Link href="/en#services">Services</Link><span>›</span>
            <span className="bc-current">International Escort</span>
          </nav>
          <p className="hero-tag">Service · Secure Mobility</p>
          <h1>International <span>Escort</span></h1>
          <p className="svc-hero-desc">Rapid deployment in 40+ countries. Secure management of your high-risk travel, conflict zones, sensitive business trips and expatriation.</p>
          <Link href="/en#contact" className="btn btn-gold">Request an Assessment</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Overview</p>
            <h2>Protection without borders</h2>
            <p>Whether you are travelling to a conflict zone, a high-risk country or for a sensitive business mission, Imperium Private Protection ensures your safety from end to end. Our teams coordinate the entire arrangement: pre-departure briefing, reception at destination, on-site escort and repatriation.</p>
            <p>Our network of approved partners covers more than 40 countries. Each partner is selected according to strict criteria of competence, legality and ethics. You receive the same level of protection we deploy in France.</p>
            <p>We undertake missions ranging from short trips (business travel, official delegations) to long assignments (expatriation, overseas residence).</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="International mission" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">What&apos;s included</p>
            <h2>Our international services</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Pre-departure security briefing</h4><p>Destination risk analysis, briefing on sensitive points, emergency protocols and trusted local contacts.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Airport escort &amp; logistics</h4><p>Handover from your point of departure, VIP lounge accompaniment, secure transit and arrival transfers.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Certified local agents</h4><p>Coordination with our on-site partners: approved local agents, adapted vehicles and ground-level knowledge.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Conflict zone coverage</h4><p>Deployment in high-risk zones: Sub-Saharan Africa, Middle East, South-East Asia. Integrated emergency extraction protocols.</p><div className="feat-tags"><span>Red zone</span><span>Extraction</span><span>Repatriation</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Long-term expatriation missions</h4><p>Continuous escort for expatriate executives, with team rotation, permanent monitoring and adaptation to local threats.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>24/7 crisis centre</h4><p>Operations centre permanently available to coordinate any emergency intervention, regardless of time zone.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-zones">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Coverage zones</p>
            <h2>Our global network</h2>
          </div>
          <div className="zones-grid">
            <div className="zone-card"><div className="zone-flag">🇪🇺</div><h4>Europe</h4><p>Monaco, Geneva, London, Madrid, Brussels, Rome, Istanbul and all of Western and Eastern Europe.</p><span className="zone-level low">Low to moderate risk</span></div>
            <div className="zone-card"><div className="zone-flag">🌍</div><h4>Africa</h4><p>North Africa, Sub-Saharan Africa, mining and oil zones. Reinforced presence in unstable areas.</p><span className="zone-level high">High risk</span></div>
            <div className="zone-card"><div className="zone-flag">🌏</div><h4>Middle East</h4><p>Dubai, Qatar, Saudi Arabia, Lebanon, Iraq, conflict zones. Coordination with local forces.</p><span className="zone-level med">Variable risk</span></div>
            <div className="zone-card"><div className="zone-flag">🌎</div><h4>Americas &amp; Asia</h4><p>Latin America, United States, Canada, South-East Asia, China. Certified partner network on the ground.</p><span className="zone-level low">Low to moderate risk</span></div>
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
            <div className="profile-item"><span className="profile-dot"></span><strong>Expatriate executives</strong><p>Managers sent to high-risk countries for long missions or new postings.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Official delegations</strong><p>Diplomats, government representatives, commercial delegations on sensitive missions.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Journalists in conflict zones</strong><p>Reporters and media crews travelling to dangerous areas for their assignments.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Humanitarian &amp; NGO workers</strong><p>Field agents, NGO managers and security personnel in unstable zones.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>High-stakes business travel</strong><p>International negotiations with major stakes, transactions in complex geopolitical contexts.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Families travelling abroad</strong><p>Family trips to high-risk countries, holidays in sensitive zones or international relocations.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="process-bg">
          <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" alt="" fill style={{ objectFit: 'cover' }} />
          <div className="process-overlay"></div>
        </div>
        <div className="container">
          <div className="section-head">
            <p className="section-tag light">Our method</p>
            <h2 className="light">How an international mission unfolds</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Destination analysis</h4><p>Risk level assessment, country briefing, identification of specific threats and local trusted contacts.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Planning &amp; logistics</h4><p>Transport coordination, secure accommodation, validated itineraries and local network deployment.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Field deployment</h4><p>Continuous escort by trained agents, team rotation, secure communication with central operations.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Return &amp; debrief</h4><p>Secure repatriation, comprehensive debriefing and incident report to improve future missions.</p></div>
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
            <details className="faq-item"><summary>Do you operate in active conflict zones?</summary><p>Yes, with reinforced protocols. Our teams operate in conflict zones with emergency extraction procedures, encrypted communications and permanent coordination with our crisis centre.</p></details>
            <details className="faq-item"><summary>Can you organise the entire trip (transport, accommodation)?</summary><p>Yes. We offer full management: secure ticketing, protected accommodation, armoured vehicles on site and transfers throughout the stay.</p></details>
            <details className="faq-item"><summary>Are your local partners certified?</summary><p>Absolutely. Every partner is selected according to strict criteria: local certifications, verified references and regular audits by our teams.</p></details>
            <details className="faq-item"><summary>How far in advance should I contact you?</summary><p>Ideally 72 hours before departure for standard missions. For emergencies, we can deploy a team in under 24 hours to most destinations.</p></details>
            <details className="faq-item"><summary>Do you provide insurance for international missions?</summary><p>We work with brokers specialising in international security insurance and can guide you towards solutions suited to your risk profile.</p></details>
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
            <Link href="/en/close-protection" className="related-card">
              <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Close Protection" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Close Protection</h4><span>Discover →</span></div>
            </Link>
            <Link href="/en/intelligence-risk" className="related-card">
              <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&q=80" alt="Intelligence" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Intelligence &amp; Risk Analysis</h4><span>Discover →</span></div>
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
            <h2>Plan your international mission</h2>
            <p>Contact us for a confidential assessment. Crisis unit available 24/7.</p>
          </div>
          <Link href="/en#contact" className="btn btn-gold">Contact us now</Link>
        </div>
      </section>

      <EnFooter />
    </main>
  )
}
