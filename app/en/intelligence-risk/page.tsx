import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnFooter from '@/components/EnFooter'

export const metadata: Metadata = {
  title: 'Intelligence & Risk Analysis | Imperium Private Protection',
  description: 'Human and technical intelligence to anticipate threats. Proactive monitoring, risk profiling and personalised strategic recommendations. CNAPS certified agents.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/en/intelligence-risk',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/intelligence-analyse-risque',
      'en': 'https://www.imperiumprotection.fr/en/intelligence-risk',
    },
  },
}

export default function IntelligenceRisk() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=1800&q=80" alt="Intelligence & Risk Analysis" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/en">Home</Link><span>›</span>
            <Link href="/en#services">Services</Link><span>›</span>
            <span className="bc-current">Intelligence &amp; Risk Analysis</span>
          </nav>
          <p className="hero-tag">Service · Intelligence</p>
          <h1>Intelligence &amp; <span>Risk Analysis</span></h1>
          <p className="svc-hero-desc">Human and technical intelligence to anticipate threats before they materialise. Proactive monitoring and personalised strategic recommendations.</p>
          <Link href="/en#contact" className="btn btn-gold">Request an Assessment</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Overview</p>
            <h2>Anticipate to better protect</h2>
            <p>The best protection is one that neutralises the threat before it becomes real. Our intelligence service combines human intelligence (HUMINT) and technical analysis to build an accurate picture of your security environment.</p>
            <p>Our specialist analysts monitor weak signals, identify suspicious behaviour, assess your digital and physical exposure, and provide you with concrete, actionable recommendations.</p>
            <p>This service feeds into all security decisions: it informs decision-making and optimises the allocation of protection resources.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Risk analysis" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">What&apos;s included</p>
            <h2>Our intelligence services</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Personalised threat assessment</h4><p>Analysis of your specific exposure: activities, relationships, public presence and incident history.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>360° proactive monitoring</h4><p>Continuous surveillance of networks, open sources (OSINT), forums and private channels to detect emerging threats.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Risk profiling</h4><p>Identification and assessment of individuals or groups likely to represent a threat to your security.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>OSINT &amp; darknet analysis</h4><p>Monitoring of open sources and clandestine digital spaces to detect information leaks, malicious plans and preparatory targeting.</p><div className="feat-tags"><span>OSINT</span><span>Darknet</span><span>HUMINT</span><span>SIGINT</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Strategic reports</h4><p>Actionable summary documents with prioritised recommendations, risk metrics and security action plan.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Behavioural analysis</h4><p>Assessment of behaviours within your professional and personal circle to detect internal risks (insider threat).</p></div>
          </div>
        </div>
      </section>

      <section className="svc-levels">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Risk levels</p>
            <h2>Our assessment framework</h2>
          </div>
          <div className="levels-grid">
            <div className="level-card level-1"><span className="level-badge">Level 1 – Low</span><h4>Standard vigilance</h4><p>Limited public exposure, no identified threat. Preventive protocols and team training.</p></div>
            <div className="level-card level-2"><span className="level-badge">Level 2 – Moderate</span><h4>Heightened vigilance</h4><p>Notable exposure, weak signals detected. Enhanced monitoring and arrangement adjustment.</p></div>
            <div className="level-card level-3"><span className="level-badge">Level 3 – High</span><h4>Active protection</h4><p>Identified and credible threat. Activation of close protection and emergency measures.</p></div>
            <div className="level-card level-4"><span className="level-badge">Level 4 – Critical</span><h4>Immediate crisis</h4><p>Imminent or ongoing threat. Emergency deployment, extraction and coordination with authorities.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="process-bg">
          <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" alt="" fill style={{ objectFit: 'cover' }} />
          <div className="process-overlay"></div>
        </div>
        <div className="container">
          <div className="section-head">
            <p className="section-tag light">Our method</p>
            <h2 className="light">Our analysis process</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Data collection</h4><p>Aggregation of information from open sources, closed networks and reliable human intelligence.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Analysis &amp; correlation</h4><p>Processing and cross-referencing of data to identify patterns, weak signals and emerging threats.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Assessment &amp; scoring</h4><p>Objective risk level assignment with probability of occurrence and potential impact.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Recommendations</h4><p>Prioritised action plan with concrete measures to reduce exposure and strengthen resilience.</p></div>
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
            <details className="faq-item"><summary>How does risk analysis differ from conventional protection?</summary><p>Conventional protection is reactive: it intervenes against a present threat. Risk analysis is proactive: it identifies and assesses threats before they materialise, enabling optimisation of the security arrangement.</p></details>
            <details className="faq-item"><summary>What sources do you use for monitoring?</summary><p>Open sources (OSINT), social networks, specialist forums, closed networks, human intelligence (HUMINT) and technical data (SIGINT). All strictly within the bounds of legality.</p></details>
            <details className="faq-item"><summary>Are the analyses confidential?</summary><p>Absolutely. All our reports are encrypted, transmitted via secure channels and never shared with third parties without your explicit agreement.</p></details>
            <details className="faq-item"><summary>Do you offer a continuous monitoring service?</summary><p>Yes. We can implement continuous surveillance with real-time alerts when an emerging threat is detected.</p></details>
            <details className="faq-item"><summary>Can this service be combined with physical protection?</summary><p>This is our recommended approach. Risk analysis directly informs and optimises the physical protection arrangement, making it more effective and better targeted.</p></details>
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
            <Link href="/en/cyber-security" className="related-card">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Cyber Security" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Cyber Security</h4><span>Discover →</span></div>
            </Link>
            <Link href="/en/international-escort" className="related-card">
              <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" alt="International Escort" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>International Escort</h4><span>Discover →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>Assess your risk level</h2>
            <p>Contact us for a confidential analysis. Available 24/7.</p>
          </div>
          <Link href="/en#contact" className="btn btn-gold">Request an analysis</Link>
        </div>
      </section>

      <EnFooter />
    </main>
  )
}
