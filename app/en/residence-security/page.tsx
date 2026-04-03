import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnFooter from '@/components/EnFooter'

export const metadata: Metadata = {
  title: 'Residence Security & Home Protection | Imperium Private Protection',
  description: 'Security audit, equipment installation and physical presence for the protection of your home, property or business premises. 24/7 protocols. CNAPS certified agents.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/en/residence-security',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/securisation-residence',
      'en': 'https://www.imperiumprotection.fr/en/residence-security',
    },
  },
}

export default function ResidenceSecurity() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80" alt="Residence Security" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/en">Home</Link><span>›</span>
            <Link href="/en#services">Services</Link><span>›</span>
            <span className="bc-current">Residence Security</span>
          </nav>
          <p className="hero-tag">Service · Home Protection</p>
          <h1>Residence <span>Security</span></h1>
          <p className="svc-hero-desc">Comprehensive audit, installation of protection systems and physical presence to secure your home, property or place of business.</p>
          <Link href="/en#contact" className="btn btn-gold">Request an Audit</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Overview</p>
            <h2>Your home, your fortress</h2>
            <p>The residence is where an individual is most vulnerable. It is where threats of burglary, intrusion, kidnapping or physical harm are most likely to materialise, particularly for exposed individuals.</p>
            <p>Imperium Private Protection offers a comprehensive approach to residential security: from the initial audit to permanent guards, including the installation of electronic systems and training for household staff.</p>
            <p>Whether a Parisian apartment, a villa on the Côte d&apos;Azur, a château or a super-yacht, we adapt our arrangement to every environment.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Secure residence" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">What&apos;s included</p>
            <h2>Our residential services</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Comprehensive security audit</h4><p>Assessment of all vulnerabilities in your residence: access points, perimeter, existing systems, staff behaviour.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>24/7 physical presence</h4><p>Residential security guards and agents performing patrols, access control and permanent surveillance.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Integrated electronic systems</h4><p>Installation and supervision of cameras, alarms, biometric access control, perimeter detection and video surveillance.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Super-yacht &amp; marine properties</h4><p>Arrangements adapted for yachts, prestige boats and waterfront properties: Monaco, Côte d&apos;Azur, Mediterranean.</p><div className="feat-tags"><span>Super-yacht</span><span>Port Hercule</span><span>Mediterranean</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Household staff training</h4><p>Awareness and training for butlers, domestic staff and drivers in security protocols.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Personalised evacuation plans</h4><p>Emergency exit protocols adapted to your residence, with withdrawal routes and secure assembly points.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-audit">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Our process</p>
            <h2>Residential audit steps</h2>
          </div>
          <div className="audit-grid">
            <div className="audit-item"><div className="audit-num">01</div><div><h4>Reconnaissance visit</h4><p>Full physical inspection of your residence, perimeter, access points and existing systems.</p></div></div>
            <div className="audit-item"><div className="audit-num">02</div><div><h4>Risk analysis</h4><p>Assessment of threat profile, identified vulnerabilities and overall risk level.</p></div></div>
            <div className="audit-item"><div className="audit-num">03</div><div><h4>Security plan</h4><p>Detailed report with prioritised recommendations and quotation for proposed improvements.</p></div></div>
            <div className="audit-item"><div className="audit-num">04</div><div><h4>Installation &amp; configuration</h4><p>Deployment of electronic systems, configuration and training of your teams.</p></div></div>
            <div className="audit-item"><div className="audit-num">05</div><div><h4>Human deployment</h4><p>Assignment of residential security agents, patrol schedule and intervention protocols.</p></div></div>
            <div className="audit-item"><div className="audit-num">06</div><div><h4>Follow-up &amp; review</h4><p>Periodic audits, arrangement adjustments and protocol updates as the threat evolves.</p></div></div>
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
            <details className="faq-item"><summary>How long does a residential security audit take?</summary><p>A standard audit takes 1 to 2 days depending on property size. For large residences or super-yachts, allow 3 to 5 days.</p></details>
            <details className="faq-item"><summary>Can you work with my existing security systems?</summary><p>Yes. We assess your current installations and integrate them into our arrangement, or recommend improvements where necessary.</p></details>
            <details className="faq-item"><summary>Do your agents live on site or operate externally?</summary><p>Both options are available: on-site residence (permanent guard) or regular patrols with rapid intervention, depending on your preferences.</p></details>
            <details className="faq-item"><summary>Do you secure yachts outside Monaco?</summary><p>Yes. We operate in all Mediterranean ports: Nice, Cannes, Antibes, Saint-Tropez, Marseille, and beyond.</p></details>
            <details className="faq-item"><summary>Will my household staff need training?</summary><p>We recommend minimal awareness training for household staff. This training is included in our standard arrangement.</p></details>
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
            <Link href="/en/cyber-security" className="related-card">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Cyber Security" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Cyber Security</h4><span>Discover →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>Secure your residence today</h2>
            <p>Request a confidential audit. Our experts travel throughout France and the Côte d&apos;Azur.</p>
          </div>
          <Link href="/en#contact" className="btn btn-gold">Request an audit</Link>
        </div>
      </section>

      <EnFooter />
    </main>
  )
}
