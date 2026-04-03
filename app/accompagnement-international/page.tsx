import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FrFooter from '@/components/FrFooter'

export const metadata: Metadata = {
  title: 'Accompagnement International & Sécurité Voyage | Imperium Private Protection',
  description: 'Déploiement rapide dans 40+ pays pour vos déplacements sensibles. Gestion sécurisée des voyages à risque, zones de conflit et expatriation. Agents CNAPS certifiés.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/accompagnement-international',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/accompagnement-international',
      'en': 'https://www.imperiumprotection.fr/en/international-escort',
    },
  },
}

export default function AccompagnementInternational() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80" alt="Accompagnement international" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <Link href="/#services">Services</Link><span>›</span>
            <span className="bc-current">Accompagnement International</span>
          </nav>
          <p className="hero-tag">Service · Mobilité Sécurisée</p>
          <h1>Accompagnement <span>International</span></h1>
          <p className="svc-hero-desc">Déploiement rapide dans 40+ pays. Gestion sécurisée de vos déplacements à risque, zones de conflit, voyages d&apos;affaires sensibles et expatriation.</p>
          <Link href="/#contact" className="btn btn-gold">Demander une évaluation</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Présentation</p>
            <h2>Protection sans frontières</h2>
            <p>Que vous vous rendiez en zone de conflit, dans un pays à haut risque ou pour une mission d&apos;affaires sensible, Imperium Private Protection assure votre sécurité de bout en bout. Nos équipes coordonnent l&apos;ensemble du dispositif : briefing pré-départ, accueil à destination, escorte sur place et rapatriement.</p>
            <p>Notre réseau de partenaires homologués couvre plus de 40 pays. Chaque partenaire est sélectionné selon des critères stricts de compétence, de légalité et d&apos;éthique. Vous bénéficiez d&apos;un niveau de protection identique à celui que nous déployons en France.</p>
            <p>Nous intervenons pour des missions ponctuelles (voyage d&apos;affaires, délégation officielle) comme pour des assignations longues (expatriation, résidence à l&apos;étranger).</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Mission internationale" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Ce qui est inclus</p>
            <h2>Nos prestations internationales</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Briefing sécurité pré-départ</h4><p>Analyse de risque du pays de destination, briefing des points sensibles, protocoles d&apos;urgence et contacts locaux de confiance.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Escorte aéroportuaire &amp; logistique</h4><p>Prise en charge dès votre départ, accompagnement en salle VIP, transit sécurisé et transferts à l&apos;arrivée.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Agents locaux certifiés</h4><p>Coordination avec nos partenaires sur place : agents locaux agréés, véhicules adaptés et connaissance du terrain.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Couverture zones de conflit</h4><p>Déploiement en zones à haut risque : Afrique subsaharienne, Moyen-Orient, Asie du Sud-Est. Protocoles d&apos;extraction d&apos;urgence intégrés.</p><div className="feat-tags"><span>Zone rouge</span><span>Extraction</span><span>Rapatriement</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M16 36l-4 8M32 36l4 8M12 44h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Missions d&apos;expatriation longue durée</h4><p>Accompagnement continu pour les cadres expatriés, avec relève d&apos;équipe, suivi permanent et adaptation aux menaces locales.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Cellule de crise 24h/24</h4><p>Centre opérationnel disponible en permanence pour coordonner toute intervention d&apos;urgence, quel que soit le fuseau horaire.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-zones">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Zones couvertes</p>
            <h2>Notre réseau mondial</h2>
          </div>
          <div className="zones-grid">
            <div className="zone-card"><div className="zone-flag">🇪🇺</div><h4>Europe</h4><p>Monaco, Genève, Londres, Madrid, Bruxelles, Rome, Istanbul et toute l&apos;Europe occidentale et orientale.</p><span className="zone-level low">Risque faible à modéré</span></div>
            <div className="zone-card"><div className="zone-flag">🌍</div><h4>Afrique</h4><p>Afrique du Nord, Afrique subsaharienne, zones minières et pétrolières. Présence renforcée en zones instables.</p><span className="zone-level high">Risque élevé</span></div>
            <div className="zone-card"><div className="zone-flag">🌏</div><h4>Moyen-Orient</h4><p>Dubaï, Qatar, Arabie Saoudite, Liban, Irak, zones de conflit. Coordination avec forces locales.</p><span className="zone-level med">Risque variable</span></div>
            <div className="zone-card"><div className="zone-flag">🌎</div><h4>Amériques &amp; Asie</h4><p>Amérique latine, États-Unis, Canada, Asie du Sud-Est, Chine. Réseau de partenaires certifiés sur place.</p><span className="zone-level low">Risque faible à modéré</span></div>
          </div>
        </div>
      </section>

      <section className="svc-profiles">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">À qui s&apos;adresse ce service</p>
            <h2>Profils concernés</h2>
          </div>
          <div className="profiles-grid">
            <div className="profile-item"><span className="profile-dot"></span><strong>Cadres &amp; dirigeants expatriés</strong><p>Responsables envoyés en pays à risque pour des missions longues ou des prises de poste.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Délégations officielles</strong><p>Diplomates, représentants gouvernementaux, délégations commerciales en missions sensibles.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Journalistes en zone de conflit</strong><p>Reporters et équipes médias se rendant dans des zones dangereuses pour leurs reportages.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Humanitaires &amp; ONG</strong><p>Agents de terrain, responsables d&apos;ONG et personnels de sécurité en zones instables.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Hommes d&apos;affaires sensibles</strong><p>Négociations internationales à enjeux élevés, transactions dans des contextes géopolitiques complexes.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Familles en déplacement</strong><p>Voyages familiaux dans des pays à risque, vacances en zones sensibles ou déménagements à l&apos;international.</p></div>
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
            <p className="section-tag light">Notre méthode</p>
            <h2 className="light">Comment se déroule une mission internationale ?</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Analyse de destination</h4><p>Évaluation du niveau de risque, briefing pays, identification des menaces spécifiques et contacts locaux.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Planification &amp; logistique</h4><p>Coordination transport, hébergement sécurisé, itinéraires validés et mise en place du réseau local.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Déploiement terrain</h4><p>Escorte continue par agents formés, rotation des équipes, communication sécurisée avec la cellule centrale.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Retour &amp; debriefing</h4><p>Rapatriement sécurisé, debriefing complet et rapport d&apos;incident pour améliorer les missions futures.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-faq">
        <div className="container faq-wrap">
          <div className="section-head">
            <p className="section-tag">Questions fréquentes</p>
            <h2>Vos questions, nos réponses</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item"><summary>Intervenez-vous dans des zones de conflit actives ?</summary><p>Oui, avec des protocoles renforcés. Nos équipes opèrent en zones de conflit avec des procédures d&apos;extraction d&apos;urgence, des communications chiffrées et une coordination permanente avec notre cellule de crise.</p></details>
            <details className="faq-item"><summary>Pouvez-vous organiser tout le déplacement (transport, hébergement) ?</summary><p>Oui. Nous proposons une prise en charge complète : billetterie sécurisée, hébergement protégé, véhicules blindés sur place et transferts tout au long du séjour.</p></details>
            <details className="faq-item"><summary>Vos partenaires locaux sont-ils certifiés ?</summary><p>Absolument. Chaque partenaire est sélectionné selon des critères stricts : certifications locales, références vérifiées et audit régulier par nos équipes.</p></details>
            <details className="faq-item"><summary>Combien de temps à l&apos;avance dois-je vous contacter ?</summary><p>Idéalement 72 heures avant le départ pour les missions standard. Pour les urgences, nous pouvons déployer une équipe en moins de 24 heures dans la plupart des destinations.</p></details>
            <details className="faq-item"><summary>Proposez-vous des assurances pour les missions à l&apos;étranger ?</summary><p>Nous travaillons avec des courtiers spécialisés en assurance sécurité internationale. Nous pouvons vous orienter vers des solutions adaptées à votre profil de risque.</p></details>
          </div>
        </div>
      </section>

      <section className="svc-related">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">À découvrir aussi</p>
            <h2>Nos autres services</h2>
          </div>
          <div className="related-grid">
            <Link href="/protection-rapprochee" className="related-card">
              <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Protection rapprochée" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Protection Rapprochée</h4><span>Découvrir →</span></div>
            </Link>
            <Link href="/intelligence-analyse-risque" className="related-card">
              <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&q=80" alt="Intelligence" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Intelligence &amp; Analyse de Risque</h4><span>Découvrir →</span></div>
            </Link>
            <Link href="/securisation-residence" className="related-card">
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Sécurisation résidence" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Sécurisation de Résidence</h4><span>Découvrir →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>Planifiez votre mission internationale</h2>
            <p>Contactez-nous pour une évaluation confidentielle. Cellule disponible 24h/24, 7j/7.</p>
          </div>
          <Link href="/#contact" className="btn btn-gold">Nous contacter maintenant</Link>
        </div>
      </section>

      <FrFooter />
    </main>
  )
}
