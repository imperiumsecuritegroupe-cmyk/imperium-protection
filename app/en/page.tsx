import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

const teamSilhouette = (
  <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-silhouette">
    <circle cx="60" cy="50" r="28" fill="#2a2a2a" stroke="#b8975a" strokeWidth="1.5"/>
    <path d="M10 160C10 120 30 100 60 100C90 100 110 120 110 160" fill="#2a2a2a" stroke="#b8975a" strokeWidth="1.5"/>
  </svg>
)

export default function EnHomePage() {
  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80"
            alt="Global protection"
            className="hero-img"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
        <div className="hero-content">
          <Image src="/assets/logo.svg" alt="Imperium Private Protection" width={420} height={308} className="hero-logo" priority />
          <p className="hero-tag">Excellence · Discretion · Security</p>
          <h1>Physical integrity protection<br /><span>at your level of excellence</span></h1>
          <p className="hero-desc">We protect individuals, public figures and families against targeting, harassment and personal threats — in France and internationally.</p>
          <div className="hero-actions">
            <a href="javascript:void(0)" data-scroll="contact" className="btn btn-gold">Request an Assessment</a>
            <a href="javascript:void(0)" data-scroll="services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
        <div className="hero-badges">
          <div className="badge"><span className="badge-num">15+</span><span>Years of Experience</span></div>
          <div className="badge"><span className="badge-num">40+</span><span>Countries Covered</span></div>
          <div className="badge"><span className="badge-num">500+</span><span>Successful Missions</span></div>
        </div>
        <a href="javascript:void(0)" data-scroll="services" className="scroll-down" aria-label="Scroll down">
          <span></span>
        </a>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">What we offer</p>
            <h2>Our Protection Services</h2>
            <p className="section-desc">Bespoke solutions for every risk profile, designed by CNAPS-certified professionals with proven operational experience.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none"><path d="M32 4L8 16V32C8 46 18 58 32 62C46 58 56 46 56 32V16L32 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M22 32l7 7 13-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Close Protection" width={600} height={400} />
              </div>
              <h3>Close Protection</h3>
              <p>Experienced, discreet and responsive protection agents to accompany you in all circumstances — travel, events, residence.</p>
              <Link href="/en/close-protection" className="service-link">Learn more →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none"><path d="M32 8C23.2 8 16 15.2 16 24C16 35.2 32 56 32 56C32 56 48 35.2 48 24C48 15.2 40.8 8 32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><circle cx="32" cy="24" r="6" stroke="currentColor" strokeWidth="2.5"/></svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" alt="VIP Protection" width={600} height={400} />
              </div>
              <h3>VIP &amp; Public Figure Protection</h3>
              <p>Dedicated service for public figures, executives, artists and officials. Exposure management, interaction filtering and advanced security protocols.</p>
              <Link href="/en/vip-protection" className="service-link">Learn more →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none"><path d="M12 48L24 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M40 12L52 24L28 48L16 36L40 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M24 16L20 8L28 12L24 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/></svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" alt="International Escort" width={600} height={400} />
              </div>
              <h3>International Escort</h3>
              <p>Rapid deployment in 40+ countries. Secure management of high-risk travel, conflict zones, sensitive business trips and expatriation.</p>
              <Link href="/en/international-escort" className="service-link">Learn more →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none"><rect x="8" y="20" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2.5"/><path d="M20 20V16C20 10.477 24.477 6 30 6H34C39.523 6 44 10.477 44 16V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><circle cx="32" cy="38" r="5" stroke="currentColor" strokeWidth="2.5"/></svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Residence Security" width={600} height={400} />
              </div>
              <h3>Residence Security</h3>
              <p>Audit, equipment installation and physical presence for the protection of your home, property or business premises. 24/7 protocols.</p>
              <Link href="/en/residence-security" className="service-link">Learn more →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none"><path d="M32 8L8 24V40L32 56L56 40V24L32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M32 8V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M8 24L56 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M8 40L56 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&q=80" alt="Intelligence & Risk Analysis" width={600} height={400} />
              </div>
              <h3>Intelligence &amp; Risk Analysis</h3>
              <p>Human and technical intelligence to anticipate threats. Proactive monitoring, risk profiling and personalised strategic recommendations.</p>
              <Link href="/en/intelligence-risk" className="service-link">Learn more →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none"><rect x="10" y="20" width="44" height="32" rx="4" stroke="currentColor" strokeWidth="2.5"/><path d="M22 20V16C22 10.477 26.477 6 32 6C37.523 6 42 10.477 42 16V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><circle cx="32" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/><path d="M32 41v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Cyber Security" width={600} height={400} />
              </div>
              <h3>Cyber Security</h3>
              <p>Digital protection for exposed individuals: device audits, communications security, espionage detection and online identity protection.</p>
              <Link href="/en/cyber-security" className="service-link">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section id="transport">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Mobility &amp; Security</p>
            <h2>Secure Transport &amp; Trained Drivers</h2>
            <p className="section-desc">Imperium Private Protection provides a fleet of premium vehicles with qualified security drivers, bilingual and trilingual on request.</p>
          </div>
          <div className="transport-wrap">
            <div className="transport-img">
              <Image src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80" alt="Mercedes protection vehicle" width={1200} height={500} style={{ objectFit: 'cover' }} />
              <div className="transport-img-badge">Fleet available 24/7</div>
            </div>
            <div className="transport-info">
              <h3>A fleet that matches your standards</h3>
              <p>Every journey is a mission in its own right. Our vehicles are selected for comfort, discretion and operational capability. Our drivers are security-trained professionals, mastering close-protection protocols.</p>
              <div className="vehicles-grid">
                <div className="vehicle-card">
                  <div className="vehicle-icon"><svg viewBox="0 0 64 24" fill="none"><path d="M4 16H60M4 16L8 8H48L60 16M4 16V20H10M60 16V20H54M10 20A4 4 0 0 0 18 20M18 20H46M46 20A4 4 0 0 0 54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <div><strong>Mercedes V-Class (Viano)</strong><span>Spacious, groups up to 6, tinted windows, maximum discretion</span></div>
                </div>
                <div className="vehicle-card">
                  <div className="vehicle-icon"><svg viewBox="0 0 64 24" fill="none"><path d="M4 16H60M4 16L10 8H54L60 16M4 16V20H10M60 16V20H54M10 20A4 4 0 0 0 18 20M18 20H46M46 20A4 4 0 0 0 54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <div><strong>Mercedes S-Class</strong><span>Prestige saloon, VIP protection, top-level comfort for official travel</span></div>
                </div>
                <div className="vehicle-card">
                  <div className="vehicle-icon"><svg viewBox="0 0 64 24" fill="none"><path d="M4 16H60M4 16L9 7H55L60 16M4 16V20H10M60 16V20H54M10 20A4 4 0 0 0 18 20M18 20H46M46 20A4 4 0 0 0 54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <div><strong>Armoured &amp; Unmarked SUVs</strong><span>Suited for sensitive areas, high manoeuvrability and full discretion</span></div>
                </div>
                <div className="vehicle-card">
                  <div className="vehicle-icon"><svg viewBox="0 0 64 24" fill="none"><path d="M4 16H60M4 16L8 9H56L60 16M4 16V20H10M60 16V20H54M10 20A4 4 0 0 0 18 20M18 20H46M46 20A4 4 0 0 0 54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <div><strong>Other vehicles on request</strong><span>Adapted to each mission: convoy, backup vehicles, custom configuration</span></div>
                </div>
              </div>
              <div className="chauffeur-badges">
                <div className="chauf-badge"><span className="chauf-icon">🗣</span><div><strong>Bilingual drivers</strong><span>French – English · French – Arabic · French – Spanish</span></div></div>
                <div className="chauf-badge"><span className="chauf-icon">🌐</span><div><strong>Trilingual drivers on request</strong><span>French – English – Arabic · French – English – Russian · and other languages</span></div></div>
                <div className="chauf-badge"><span className="chauf-icon">🛡</span><div><strong>Security-trained drivers</strong><span>Defensive driving, counter-surveillance, emergency extraction, CNAPS certified</span></div></div>
              </div>
              <a href="javascript:void(0)" data-scroll="contact" className="btn btn-gold">Book a Vehicle</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-bg">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80" alt="Imperium Team" fill style={{ objectFit: 'cover' }} />
          <div className="about-overlay"></div>
        </div>
        <div className="container about-container">
          <div className="about-content">
            <p className="section-tag light">Our identity</p>
            <h2 className="light">Who is<br /><span>Imperium Private Protection?</span></h2>
            <p>Founded by seasoned private security professionals, <strong>Imperium Private Protection</strong> is an elite private protection company, holding CNAPS authorisations, operating from Paris.</p>
            <p>We combine operational rigour, absolute discretion and cutting-edge technology to provide our clients with flawless protection — whatever the complexity of the threat.</p>
            <p>Our philosophy: <em>anticipate rather than react</em>. Every mission is prepared with surgical precision; every agent is selected for their excellence and impeccable ethics.</p>
            <div className="about-values">
              <div className="val"><span className="val-icon">◆</span> Absolute discretion</div>
              <div className="val"><span className="val-icon">◆</span> 24/7 responsiveness</div>
              <div className="val"><span className="val-icon">◆</span> Operational excellence</div>
              <div className="val"><span className="val-icon">◆</span> Guaranteed confidentiality</div>
            </div>
            <a href="javascript:void(0)" data-scroll="contact" className="btn btn-gold">Contact Us</a>
          </div>
          <div className="about-img-wrap">
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="Imperium management team" width={800} height={1000} style={{ objectFit: 'cover', borderRadius: '8px' }} />
            <div className="about-cert">
              <span>Certified</span>
              <strong>CNAPS &amp; APS</strong>
              <span>National authorisation</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Why choose us</p>
            <h2>Excellence in the service of your security</h2>
          </div>
          <div className="why-grid">
            <div className="why-card"><div className="why-num">01</div><h4>Elite certified agents</h4><p>All our agents hold CNAPS professional cards, trained in protection protocols with solid operational field experience.</p></div>
            <div className="why-card"><div className="why-num">02</div><h4>Total confidentiality</h4><p>Every mission is governed by a strict non-disclosure agreement. Your identity, movements and information remain absolutely confidential.</p></div>
            <div className="why-card"><div className="why-num">03</div><h4>Immediate response</h4><p>Crisis unit available 24/7. Team deployment in under 2 hours across Paris and Île-de-France, 6 hours anywhere in France.</p></div>
            <div className="why-card"><div className="why-num">04</div><h4>Global coverage</h4><p>Network of certified partners in over 40 countries to ensure continuity of protection during your international travel.</p></div>
            <div className="why-card"><div className="why-num">05</div><h4>Bespoke &amp; personalised</h4><p>No mission is standard. Every security arrangement is designed after a thorough analysis of your risk profile and specific needs.</p></div>
            <div className="why-card"><div className="why-num">06</div><h4>Legality &amp; ethics</h4><p>All our operations strictly comply with French and international law. We refuse any mission contrary to our ethical standards.</p></div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Our reach</p>
            <h2>France &amp; International</h2>
            <p className="section-desc">Whether you are in Paris, the provinces or abroad, Imperium Private Protection accompanies you wherever you need us.</p>
          </div>
          <div className="coverage-wrap">
            <div className="coverage-map">
              <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="Imperium worldwide coverage" width={1200} height={420} style={{ objectFit: 'cover', filter: 'saturate(.6) brightness(.7)' }} />
              <div className="map-overlay">
                <div className="map-pin pin-paris">Paris<span>HQ</span></div>
                <div className="map-pin pin-lyon">Lyon</div>
                <div className="map-pin pin-nice">Nice</div>
                <div className="map-pin pin-dubai">Dubai</div>
                <div className="map-pin pin-london">London</div>
                <div className="map-pin pin-newyork">New York</div>
              </div>
            </div>
            <div className="coverage-info">
              <div className="cov-item"><div className="cov-icon">🇫🇷</div><div><h4>In France</h4><p>Paris, Lyon, Marseille, Nice, Bordeaux, Toulouse, Strasbourg. Nationwide response within 6 hours.</p></div></div>
              <div className="cov-item"><div className="cov-icon">🇪🇺</div><div><h4>Europe</h4><p>London, Geneva, Monaco, Madrid, Rome, Dubai, Brussels — network of certified partners.</p></div></div>
              <div className="cov-item"><div className="cov-icon">🌍</div><div><h4>Worldwide</h4><p>Americas, Asia, Africa, Middle East. Coordinated deployment in 40+ countries, including high-risk zones.</p></div></div>
              <a href="javascript:void(0)" data-scroll="contact" className="btn btn-dark">Assess my mission →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Our team</p>
            <h2>Exceptional profiles</h2>
            <p className="section-desc">Every member of our team has been selected for their expertise, integrity and commitment to excellence.</p>
          </div>
          <div className="team-grid">
            <div className="team-card"><div className="team-photo team-photo-anon">{teamSilhouette}<div className="team-badge-role">CEO</div></div><div className="team-info"><h4>Chief Executive Officer</h4><p className="team-role">Director &amp; Founder</p><p>Private security expert, 18 years of experience in close protection and management of sensitive situations across Europe and the Middle East.</p></div></div>
            <div className="team-card"><div className="team-photo team-photo-anon">{teamSilhouette}<div className="team-badge-role">OPS</div></div><div className="team-info"><h4>Director of Operations</h4><p className="team-role">Operational coordination</p><p>Specialist in threat assessment and operational management. Coordinator of complex international missions with recognised expertise in security analysis.</p></div></div>
            <div className="team-card"><div className="team-photo team-photo-anon">{teamSilhouette}<div className="team-badge-role">INT</div></div><div className="team-info"><h4>International Director</h4><p className="team-role">Overseas missions</p><p>Experienced operator in high-risk environments. Expert in secure international travel management and protection in sensitive zones.</p></div></div>
            <div className="team-card"><div className="team-photo team-photo-anon">{teamSilhouette}<div className="team-badge-role">ANA</div></div><div className="team-info"><h4>Senior Analyst</h4><p className="team-role">Intelligence &amp; risk analysis</p><p>Graduate in international security, specialist in digital and physical threat analysis. Proactive monitoring and behavioural assessment.</p></div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="testi-bg">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80" alt="" fill style={{ objectFit: 'cover' }} />
          <div className="testi-overlay"></div>
        </div>
        <div className="container">
          <div className="section-head">
            <p className="section-tag light">Testimonials</p>
            <h2 className="light">Trusted by our clients</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card"><div className="testi-stars">★★★★★</div><p>&quot;Outstanding professionalism. The Imperium team handled a sensitive situation with exemplary discretion and efficiency. I owe them my peace of mind.&quot;</p><div className="testi-author"><div className="testi-avatar"></div><div><strong>Confidential client</strong><span>Business executive — France</span></div></div></div>
            <div className="testi-card featured"><div className="testi-stars">★★★★★</div><p>&quot;During a business trip to a sensitive region in the Middle East, the Imperium team ensured our safety from departure to arrival. An impeccable service I recommend to all executives.&quot;</p><div className="testi-author"><div className="testi-avatar"></div><div><strong>Confidential client</strong><span>International executive — Europe</span></div></div></div>
            <div className="testi-card"><div className="testi-stars">★★★★★</div><p>&quot;I needed protection that understood the subtleties of my public exposure. Imperium created a completely adapted arrangement for my lifestyle, with absolute discretion.&quot;</p><div className="testi-author"><div className="testi-avatar"></div><div><strong>Confidential client</strong><span>Public figure — confidential</span></div></div></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-wrap">
            <div className="contact-info">
              <p className="section-tag">Contact us</p>
              <h2>Let&apos;s discuss your protection</h2>
              <p>Every situation is unique. Our experts are available to freely and confidentially assess your risk profile and propose the right solution.</p>
              <div className="contact-details">
                <div className="contact-item"><div className="c-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/></svg></div><div><strong>Headquarters</strong><span>10 rue de la Bourse, 75002 Paris, France</span></div></div>
                <div className="contact-item"><div className="c-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/></svg></div><div><strong>Secure line 24/7</strong><span>06 52 62 40 91</span></div></div>
                <div className="contact-item"><div className="c-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/></svg></div><div><strong>Confidential email</strong><span>contact@imperiumprotection.fr</span></div></div>
              </div>
              <div className="emergency-box">
                <div className="emerg-pulse"></div>
                <div><strong>Security emergency?</strong><p>Our crisis unit responds immediately, 24/7.</p></div>
              </div>
            </div>
            <ContactForm lang="en" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container footer-grid">
            <div className="footer-brand">
              <Link href="/en" className="logo logo-footer">
                <span className="logo-text">IMPERIUM<span>PRIVATE PROTECTION</span></span>
              </Link>
              <p>Experts in physical integrity protection and secure personal escort in France and internationally.</p>
              <div className="footer-certs">
                <span className="cert-badge">CNAPS</span>
                <span className="cert-badge">APS Certified</span>
                <span className="cert-badge">ISO 9001</span>
              </div>
            </div>
            <div className="footer-links">
              <h5>Services</h5>
              <ul>
                <li><Link href="/en/close-protection">Close Protection</Link></li>
                <li><Link href="/en/vip-protection">VIP Protection</Link></li>
                <li><Link href="/en/international-escort">International Escort</Link></li>
                <li><Link href="/en/residence-security">Residence Security</Link></li>
                <li><Link href="/en/intelligence-risk">Intelligence &amp; Analysis</Link></li>
                <li><Link href="/en/cyber-security">Cyber Security</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h5>Company</h5>
              <ul>
                <li><a href="javascript:void(0)" data-scroll="about">About us</a></li>
                <li><a href="javascript:void(0)" data-scroll="team">Our team</a></li>
                <li><a href="javascript:void(0)" data-scroll="coverage">Coverage zones</a></li>
                <li><a href="javascript:void(0)" data-scroll="contact">Careers</a></li>
                <li><a href="javascript:void(0)" data-scroll="contact">Partners</a></li>
              </ul>
            </div>
            <div className="footer-contact-col">
              <h5>Contact</h5>
              <p>10 rue de la Bourse<br />75002 Paris, France</p>
              <p>06 52 62 40 91</p>
              <p>contact@imperiumprotection.fr</p>
              <div className="footer-social">
                <a href="javascript:void(0)" aria-label="LinkedIn" className="soc-link">in</a>
                <a href="javascript:void(0)" aria-label="Twitter/X" className="soc-link">𝕏</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>© 2026 Imperium Private Protection. All rights reserved.</p>
            <div className="footer-legal">
              <a href="javascript:void(0)">Legal notice</a>
              <a href="javascript:void(0)">Privacy policy</a>
              <a href="javascript:void(0)">T&amp;Cs</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
