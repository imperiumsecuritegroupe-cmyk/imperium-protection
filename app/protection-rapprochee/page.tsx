import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FrFooter from '@/components/FrFooter'

export const metadata: Metadata = {
  title: 'Protection Rapprochée & Garde du Corps | Imperium – Paris, Nice, Monaco, Cannes',
  description: 'Service de protection rapprochée et garde du corps certifié CNAPS à Paris, Nice, Monaco, Cannes, Saint-Tropez. Agents discrets et réactifs 24h/24. Évaluation gratuite.',
  keywords: ['protection rapprochée', 'garde du corps', 'bodyguard Paris', 'agent de sécurité Nice', 'protection rapprochée Monaco', 'garde du corps Cannes', 'sécurité VIP', 'CNAPS'],
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/protection-rapprochee',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/protection-rapprochee',
      'en': 'https://www.imperiumprotection.fr/en/close-protection',
    },
  },
  openGraph: {
    title: 'Protection Rapprochée & Garde du Corps | Imperium Private Protection',
    description: 'Service de protection rapprochée et garde du corps certifié CNAPS à Paris, Nice, Monaco, Cannes, Saint-Tropez. Agents discrets et réactifs 24h/24.',
    url: 'https://www.imperiumprotection.fr/protection-rapprochee',
    locale: 'fr_FR',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Protection Rapprochée',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Imperium Private Protection',
    url: 'https://www.imperiumprotection.fr',
    telephone: '+33652624091',
  },
  areaServed: ['Paris', 'Nice', 'Cannes', 'Monaco', 'Saint-Tropez', 'Courchevel', 'France'],
  url: 'https://www.imperiumprotection.fr/protection-rapprochee',
}

const shieldIcon = <svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M16 24l6 6 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>

export default function ProtectionRapprochee() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* HERO */}
        <section className="svc-hero">
          <div className="svc-hero-bg">
            <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80" alt="Protection rapprochée" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
            <div className="svc-hero-overlay"></div>
          </div>
          <div className="container svc-hero-content">
            <nav className="breadcrumb">
              <Link href="/">Accueil</Link><span>›</span>
              <Link href="/#services">Services</Link><span>›</span>
              <span className="bc-current">Protection Rapprochée</span>
            </nav>
            <p className="hero-tag">Service · Protection Physique</p>
            <h1>Protection <span>Rapprochée</span></h1>
            <p className="svc-hero-desc">Des agents certifiés CNAPS, discrets et hautement qualifiés pour vous accompagner en toute sécurité — en France comme à l&apos;international.</p>
            <Link href="/#contact" className="btn btn-gold">Demander une évaluation</Link>
          </div>
        </section>

        {/* INTRO */}
        <section className="svc-intro">
          <div className="container svc-intro-grid">
            <div className="svc-intro-text">
              <p className="section-tag">Présentation</p>
              <h2>Qu&apos;est-ce que la protection rapprochée ?</h2>
              <p>La protection rapprochée consiste à assurer la sécurité physique d&apos;une personne grâce à la présence d&apos;un ou plusieurs agents qualifiés à ses côtés. Elle vise à prévenir et neutraliser toute menace directe pouvant atteindre l&apos;intégrité physique de la personne protégée.</p>
              <p>Chez Imperium Private Protection, chaque mission de protection rapprochée est précédée d&apos;une évaluation du niveau de menace, d&apos;une analyse des itinéraires et d&apos;un briefing complet de l&apos;équipe. Nous n&apos;improvisons pas — nous anticipons.</p>
              <p>Nos agents opèrent avec discrétion maximale. Leur présence est adaptable : visible pour effet dissuasif, ou totalement discrète selon vos préférences et le contexte de la mission.</p>
            </div>
            <div className="svc-intro-img">
              <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80" alt="Agent de protection" width={800} height={600} style={{ borderRadius: '10px' }} />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="svc-features">
          <div className="container">
            <div className="section-head">
              <p className="section-tag">Ce qui est inclus</p>
              <h2>Nos prestations de protection rapprochée</h2>
            </div>
            <div className="features-grid">
              <div className="feat-card">
                <div className="feat-icon">{shieldIcon}</div>
                <h4>Accompagnement individuel</h4>
                <p>Un agent dédié vous accompagne lors de vos déplacements quotidiens, rendez-vous professionnels, sorties privées ou événements publics.</p>
              </div>
              <div className="feat-card">
                <div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <h4>Protection familiale</h4>
                <p>Dispositif multi-agents pour la protection du conjoint, des enfants et des proches. Accompagnement scolaire, sorties et résidence sécurisée.</p>
              </div>
              <div className="feat-card">
                <div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M16 36l-4 8M32 36l4 8M12 44h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <h4>Événements &amp; sorties</h4>
                <p>Présence lors de soirées, galas, conférences, meetings politiques ou tout événement public exposant la personne protégée à un risque accru.</p>
              </div>
              <div className="feat-card">
                <div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div>
                <h4>Déplacements sécurisés</h4>
                <p>Planification et escorte de vos trajets en <strong>Mercedes Classe V (Viano)</strong>, <strong>Mercedes Classe S</strong>, SUV blindés ou banalisés. Reconnaissance des itinéraires, gestion des points sensibles et conduite de sécurité.</p>
              </div>
              <div className="feat-card feat-highlight">
                <div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M4 32H44M4 32L8 22H40L44 32M4 32V37H10M44 32V37H38M10 37A5 5 0 0 0 20 37M20 37H28M28 37A5 5 0 0 0 38 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h4>Chauffeurs de sécurité bilingues &amp; trilingues</h4>
                <p>Nos chauffeurs sont formés à la conduite de sécurité et certifiés CNAPS. Bilingues (FR/EN, FR/AR, FR/ES…) et trilingues sur demande pour accompagner toute clientèle internationale.</p>
                <div className="feat-tags"><span>Mercedes Viano</span><span>Mercedes Classe S</span><span>SUV blindé</span><span>Bilingue</span><span>Trilingue</span></div>
              </div>
              <div className="feat-card">
                <div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div>
                <h4>Missions 24h/24 – 7j/7</h4>
                <p>Dispositif de protection permanent avec rotation des équipes pour garantir une vigilance constante sans rupture de couverture.</p>
              </div>
              <div className="feat-card">
                <div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M24 14V28M17 22l7 6 7-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h4>Gestion de crise immédiate</h4>
                <p>Protocoles d&apos;évacuation d&apos;urgence, extraction sécurisée et coordination avec les forces de l&apos;ordre si nécessaire.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROFILES */}
        <section className="svc-profiles">
          <div className="container">
            <div className="section-head">
              <p className="section-tag">À qui s&apos;adresse ce service</p>
              <h2>Profils concernés</h2>
            </div>
            <div className="profiles-grid">
              <div className="profile-item"><span className="profile-dot"></span><strong>Chefs d&apos;entreprise &amp; PDG</strong><p>Dirigeants exposés à des risques d&apos;enlèvement, d&apos;extorsion ou de représailles.</p></div>
              <div className="profile-item"><span className="profile-dot"></span><strong>Personnalités publiques</strong><p>Politiques, artistes, influenceurs exposés au public ou victimes de harcèlement.</p></div>
              <div className="profile-item"><span className="profile-dot"></span><strong>Familles fortunées</strong><p>Protection des conjoints et enfants face aux risques liés à une forte notoriété ou richesse.</p></div>
              <div className="profile-item"><span className="profile-dot"></span><strong>Témoins &amp; personnes menacées</strong><p>Individus ayant reçu des menaces directes nécessitant une couverture immédiate.</p></div>
              <div className="profile-item"><span className="profile-dot"></span><strong>Visiteurs étrangers en France</strong><p>Hauts responsables, délégations ou personnalités étrangères en déplacement sur le territoire.</p></div>
              <div className="profile-item"><span className="profile-dot"></span><strong>Voyageurs en zone sensible</strong><p>Professionnels ou privés se rendant dans des pays ou régions à risque élevé.</p></div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="svc-process">
          <div className="process-bg">
            <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=1600&q=80" alt="" fill style={{ objectFit: 'cover' }} />
            <div className="process-overlay"></div>
          </div>
          <div className="container">
            <div className="section-head">
              <p className="section-tag light">Notre méthode</p>
              <h2 className="light">Comment se déroule une mission ?</h2>
            </div>
            <div className="process-steps">
              <div className="step"><div className="step-num">01</div><h4>Évaluation des risques</h4><p>Entretien confidentiel pour analyser votre profil d&apos;exposition, identifier les menaces réelles et définir le niveau de protection adapté.</p></div>
              <div className="step-arrow">→</div>
              <div className="step"><div className="step-num">02</div><h4>Planification opérationnelle</h4><p>Reconnaissance des lieux, analyse des itinéraires, briefing de l&apos;équipe et mise en place des protocoles spécifiques à votre situation.</p></div>
              <div className="step-arrow">→</div>
              <div className="step"><div className="step-num">03</div><h4>Déploiement de l&apos;équipe</h4><p>Mise en place du dispositif avec des agents certifiés, équipés et briefés sur toutes les consignes de la mission.</p></div>
              <div className="step-arrow">→</div>
              <div className="step"><div className="step-num">04</div><h4>Suivi &amp; adaptation</h4><p>Rapport quotidien, ajustement du dispositif en temps réel selon l&apos;évolution de la menace et debriefing post-mission.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="svc-faq">
          <div className="container faq-wrap">
            <div className="section-head">
              <p className="section-tag">Questions fréquentes</p>
              <h2>Vos questions, nos réponses</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item"><summary>Combien d&apos;agents sont nécessaires pour ma protection ?</summary><p>Le nombre d&apos;agents dépend de votre profil de risque, de vos activités et de l&apos;environnement. Une évaluation préalable permet de définir le dispositif optimal — d&apos;un seul agent discret à une équipe complète.</p></details>
              <details className="faq-item"><summary>Les agents sont-ils en uniforme ou discrets ?</summary><p>Selon vos préférences et le niveau de menace, nos agents peuvent opérer en tenue professionnelle visible (effet dissuasif) ou en civil totalement discret pour une protection invisible.</p></details>
              <details className="faq-item"><summary>Puis-je bénéficier d&apos;une protection ponctuelle (un seul événement) ?</summary><p>Oui. Nous proposons des missions de protection ponctuelles pour un événement, un déplacement ou une période de risque accru, sans engagement long terme.</p></details>
              <details className="faq-item"><summary>Vos agents sont-ils autorisés à porter des armes ?</summary><p>Nos agents opèrent dans le cadre strict de la législation française. Le port d&apos;arme est soumis à autorisation préfectorale spécifique. Nous respectons scrupuleusement toutes les dispositions légales en vigueur.</p></details>
              <details className="faq-item"><summary>La confidentialité de ma situation est-elle garantie ?</summary><p>Absolument. Chaque mission est encadrée par un accord de non-divulgation (NDA) strict. L&apos;identité de nos clients n&apos;est jamais communiquée à des tiers.</p></details>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="svc-related">
          <div className="container">
            <div className="section-head">
              <p className="section-tag">À découvrir aussi</p>
              <h2>Nos autres services</h2>
            </div>
            <div className="related-grid">
              <Link href="/protection-personnalite" className="related-card">
                <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" alt="Protection personnalité" width={600} height={200} style={{ objectFit: 'cover' }} />
                <div className="related-info"><h4>Protection de Personnalité</h4><span>Découvrir →</span></div>
              </Link>
              <Link href="/accompagnement-international" className="related-card">
                <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" alt="Accompagnement international" width={600} height={200} style={{ objectFit: 'cover' }} />
                <div className="related-info"><h4>Accompagnement International</h4><span>Découvrir →</span></div>
              </Link>
              <Link href="/securisation-residence" className="related-card">
                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Sécurisation résidence" width={600} height={200} style={{ objectFit: 'cover' }} />
                <div className="related-info"><h4>Sécurisation de Résidence</h4><span>Découvrir →</span></div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="svc-cta">
          <div className="container svc-cta-inner">
            <div className="emerg-pulse"></div>
            <div>
              <h2>Besoin d&apos;une protection rapprochée ?</h2>
              <p>Contactez-nous pour une évaluation confidentielle de votre situation. Disponibles 24h/24, 7j/7.</p>
            </div>
            <Link href="/#contact" className="btn btn-gold">Nous contacter maintenant</Link>
          </div>
        </section>

        <FrFooter />
      </main>
    </>
  )
}
