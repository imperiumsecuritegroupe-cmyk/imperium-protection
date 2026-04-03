import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnFooter from '@/components/EnFooter'

export const metadata: Metadata = {
  title: 'VIP & Public Figure Protection | Imperium Private Protection',
  description: 'CNAPS-certified VIP protection for public figures, executives, artists and officials. Exposure management, interaction filtering and advanced security protocols. Available 24/7.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/en/vip-protection',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/protection-personnalite',
      'en': 'https://www.imperiumprotection.fr/en/vip-protection',
    },
  },
}

export default function VipProtection() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1800&q=80" alt="VIP Protection" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/en">Home</Link><span>›</span>
            <Link href="/en#services">Services</Link><span>›</span>
            <span className="bc-current">VIP Protection</span>
          </nav>
          <p className="hero-tag">Service · VIP Security</p>
          <h1>VIP &amp; Public Figure <span>Protection</span></h1>
          <p className="svc-hero-desc">A bespoke security service for public figures, executives, artists and officials. Discretion, responsiveness and professionalism at the highest level.</p>
          <Link href="/en#contact" className="btn btn-gold">Request an Assessment</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Overview</p>
            <h2>Protection for exposed individuals</h2>
            <p>VIP protection is tailored to individuals whose fame, function or wealth generates particular risk exposure. Politicians, heads of state, renowned artists, major executives, top athletes or wealthy heirs: their visibility makes them vulnerable to specific threats.</p>
            <p>Our approach integrates public exposure management, interaction filtering, travel planning and behavioural analysis of close associates. We do not merely protect — we anticipate.</p>
            <p>Every arrangement is built bespoke, taking into account your agenda, lifestyle and actual threat level.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1573164574001-518958af9be8?w=800&q=80" alt="VIP Protection" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">What&apos;s included</p>
            <h2>Our VIP services</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Public exposure management</h4><p>Analysis of your appearances, access and contact management, media filtering and coordination with your professional team.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Discreet close escort</h4><p>Plainclothes agents, integrated into your circle without disrupting your public image or private life.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Full event coverage</h4><p>Premieres, award ceremonies, concerts, public speeches, inaugurations: complete security management for every event.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Premium VIP transport</h4><p>Dedicated fleet with certified drivers. Mercedes S-Class, Viano, unmarked SUVs for all your movements in total discretion.</p><div className="feat-tags"><span>Mercedes S-Class</span><span>Viano</span><span>Armoured SUV</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Behavioural analysis</h4><p>Assessment of suspicious behaviours in your entourage, detection of internal threats and proactive monitoring for targeting risks.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Crisis protocol &amp; emergencies</h4><p>Emergency extraction, media incident management, coordination with authorities and crisis communication advisory.</p></div>
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
            <div className="profile-item"><span className="profile-dot"></span><strong>Political figures</strong><p>Elected officials, ministers, heads of state, candidates and their teams during campaigns or mandates.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Artists &amp; celebrities</strong><p>Singers, actors, renowned athletes exposed to stalking, aggressive fans or online threats.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Major executives</strong><p>CEOs of multinationals, investment fund presidents or leaders of sensitive institutions.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Heirs &amp; family fortunes</strong><p>Members of wealthy families exposed to kidnapping, extortion or manipulation risks.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Influencers &amp; media</strong><p>High-audience social media personalities exposed to digital and physical threats.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Ambassadors &amp; diplomats</strong><p>Official representatives requiring protection during their missions in France or abroad.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="process-bg">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" alt="" fill style={{ objectFit: 'cover' }} />
          <div className="process-overlay"></div>
        </div>
        <div className="container">
          <div className="section-head">
            <p className="section-tag light">Our method</p>
            <h2 className="light">Our VIP approach</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Profile audit</h4><p>Analysis of your exposure, public activities, agenda and potential threats identified.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Security strategy</h4><p>Development of a protection plan suited to your lifestyle, minimising constraints while maximising security.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Discreet integration</h4><p>Deployment of agents integrated into your environment, invisible to your circle when necessary.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Continuous adaptation</h4><p>Permanent reassessment of the arrangement according to the evolution of the threat and your public agenda.</p></div>
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
            <details className="faq-item"><summary>Will my protection agents be visible?</summary><p>According to your choice and context, our agents can be completely discreet (plainclothes, integrated into your entourage) or visible for deterrent effect.</p></details>
            <details className="faq-item"><summary>Can you protect my entire family?</summary><p>Yes. We deploy multi-agent arrangements to simultaneously cover several members of the same family.</p></details>
            <details className="faq-item"><summary>Do you offer continuous 24/7 service?</summary><p>Yes. We can deploy a permanent protection arrangement with team rotation, without any coverage interruption.</p></details>
            <details className="faq-item"><summary>Do you operate internationally during tours or trips?</summary><p>Absolutely. We coordinate international protection through our certified partner network in over 40 countries.</p></details>
            <details className="faq-item"><summary>Is confidentiality guaranteed?</summary><p>Every mission is governed by a strict NDA. Our clients&apos; identities are never communicated to any third party.</p></details>
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
            <Link href="/en/international-escort" className="related-card">
              <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" alt="International Escort" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>International Escort</h4><span>Discover →</span></div>
            </Link>
            <Link href="/en/intelligence-risk" className="related-card">
              <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&q=80" alt="Intelligence" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Intelligence &amp; Risk Analysis</h4><span>Discover →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>Need VIP protection?</h2>
            <p>Contact us for a confidential assessment. Available 24/7.</p>
          </div>
          <Link href="/en#contact" className="btn btn-gold">Contact us now</Link>
        </div>
      </section>

      <EnFooter />
    </main>
  )
}
