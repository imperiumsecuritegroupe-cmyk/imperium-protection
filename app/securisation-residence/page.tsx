import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FrFooter from '@/components/FrFooter'

export const metadata: Metadata = {
  title: 'Sécurisation de Résidence & Protection Domicile | Imperium Private Protection',
  description: 'Audit sécurité, installation de dispositifs et présence physique pour la protection de votre domicile, propriété ou lieu d\'activité. Protocoles 24h/24. Agents CNAPS certifiés.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/securisation-residence',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/securisation-residence',
      'en': 'https://www.imperiumprotection.fr/en/residence-security',
    },
  },
}

export default function SecurisationResidence() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80" alt="Sécurisation résidence" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <Link href="/#services">Services</Link><span>›</span>
            <span className="bc-current">Sécurisation de Résidence</span>
          </nav>
          <p className="hero-tag">Service · Protection du Domicile</p>
          <h1>Sécurisation de <span>Résidence</span></h1>
          <p className="svc-hero-desc">Audit complet, installation de dispositifs de protection et présence physique pour sécuriser votre domicile, propriété ou lieu d&apos;activité.</p>
          <Link href="/#contact" className="btn btn-gold">Demander un audit</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Présentation</p>
            <h2>Votre domicile, votre forteresse</h2>
            <p>La résidence est le lieu où l&apos;individu est le plus vulnérable. C&apos;est là que les menaces de cambriolage, d&apos;intrusion, d&apos;enlèvement ou d&apos;atteinte physique sont les plus susceptibles de se matérialiser, notamment pour les personnes exposées.</p>
            <p>Imperium Private Protection propose une approche globale de la sécurisation résidentielle : de l&apos;audit initial à la mise en place de gardiens permanents, en passant par l&apos;installation de systèmes électroniques et la formation du personnel de maison.</p>
            <p>Qu&apos;il s&apos;agisse d&apos;un appartement parisien, d&apos;une villa sur la Côte d&apos;Azur, d&apos;un château ou d&apos;un super-yacht, nous adaptons notre dispositif à chaque environnement.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Résidence sécurisée" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Ce qui est inclus</p>
            <h2>Nos prestations résidentielles</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Audit de sécurité complet</h4><p>Évaluation de toutes les vulnérabilités de votre résidence : accès, périmètre, systèmes existants, comportements du personnel.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Présence physique 24h/24</h4><p>Gardiens et agents de sécurité résidentiels formés, assurant rondes, contrôle des accès et surveillance permanente.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M16 36l-4 8M32 36l4 8M12 44h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Systèmes électroniques intégrés</h4><p>Installation et supervision de caméras, alarmes, contrôle d&apos;accès biométrique, détection périmétrique et vidéosurveillance.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Sécurité super-yacht &amp; propriétés marines</h4><p>Dispositifs adaptés aux yachts, bateaux de prestige et propriétés en bord de mer : Monaco, Côte d&apos;Azur, Méditerranée.</p><div className="feat-tags"><span>Super-yacht</span><span>Port Hercule</span><span>Méditerranée</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Formation du personnel de maison</h4><p>Sensibilisation et formation des majordomes, personnels domestiques et chauffeurs aux protocoles de sécurité.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Plans d&apos;évacuation personnalisés</h4><p>Protocoles de sortie d&apos;urgence adaptés à votre résidence, avec itinéraires de repli et points de rassemblement sécurisés.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-audit">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Notre processus</p>
            <h2>Les étapes de l&apos;audit résidentiel</h2>
          </div>
          <div className="audit-grid">
            <div className="audit-item"><div className="audit-num">01</div><div><h4>Visite de reconnaissance</h4><p>Inspection physique complète de votre résidence, périmètre, accès et systèmes existants.</p></div></div>
            <div className="audit-item"><div className="audit-num">02</div><div><h4>Analyse des risques</h4><p>Évaluation du profil de menace, des vulnérabilités identifiées et du niveau de risque global.</p></div></div>
            <div className="audit-item"><div className="audit-num">03</div><div><h4>Plan de sécurisation</h4><p>Rapport détaillé avec recommandations priorisées et devis pour les améliorations proposées.</p></div></div>
            <div className="audit-item"><div className="audit-num">04</div><div><h4>Installation &amp; paramétrage</h4><p>Mise en place des systèmes électroniques, paramétrage et formation de vos équipes.</p></div></div>
            <div className="audit-item"><div className="audit-num">05</div><div><h4>Déploiement humain</h4><p>Affectation des agents de sécurité résidentiels, planning des rondes et protocoles d&apos;intervention.</p></div></div>
            <div className="audit-item"><div className="audit-num">06</div><div><h4>Suivi &amp; révision</h4><p>Audits périodiques, ajustements du dispositif et mise à jour des protocoles selon l&apos;évolution de la menace.</p></div></div>
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
            <div className="profile-item"><span className="profile-dot"></span><strong>Résidences principales</strong><p>Domiciles de personnalités exposées, familles fortunées ou individus ayant reçu des menaces.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Propriétés secondaires</strong><p>Villas sur la Côte d&apos;Azur, chalets à Courchevel, maisons de vacances dans des zones prisées.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Super-yachts &amp; bateaux</strong><p>Sécurité maritime pour yachts de prestige en Méditerranée, port Hercule Monaco.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Bureaux &amp; lieux d&apos;affaires</strong><p>Sièges sociaux, cabinets d&apos;avocats, salles de conseil ou locaux nécessitant une sécurisation renforcée.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Châteaux &amp; domaines</strong><p>Propriétés historiques, vignobles, haras et grandes propriétés agricoles de valeur.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Appartements de prestige</strong><p>Penthouse, appartements en immeubles de luxe à Paris, Monaco, Cannes ou Nice.</p></div>
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
            <details className="faq-item"><summary>Combien de temps dure un audit de sécurité résidentielle ?</summary><p>Un audit standard prend 1 à 2 jours selon la taille de la propriété. Pour les grandes résidences ou super-yachts, comptez 3 à 5 jours.</p></details>
            <details className="faq-item"><summary>Pouvez-vous travailler avec mes systèmes de sécurité existants ?</summary><p>Oui. Nous évaluons vos installations actuelles et les intégrons à notre dispositif, ou recommandons des améliorations si nécessaire.</p></details>
            <details className="faq-item"><summary>Vos agents résident-ils sur place ou interviennent-ils de l&apos;extérieur ?</summary><p>Les deux options sont disponibles : résidence sur place (gardien permanent) ou rondes régulières avec intervention rapide, selon vos préférences.</p></details>
            <details className="faq-item"><summary>Proposez-vous la sécurisation de yachts en dehors de Monaco ?</summary><p>Oui. Nous intervenons dans tous les ports méditerranéens : Nice, Cannes, Antibes, Saint-Tropez, Marseille, et au-delà.</p></details>
            <details className="faq-item"><summary>Les membres de ma maison devront-ils être formés ?</summary><p>Nous recommandons une sensibilisation minimale pour le personnel de maison. Cette formation est incluse dans notre dispositif standard.</p></details>
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
            <Link href="/cyber-securite" className="related-card">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Cyber sécurité" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Cyber Sécurité</h4><span>Découvrir →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>Sécurisez votre résidence dès aujourd&apos;hui</h2>
            <p>Demandez un audit confidentiel. Nos experts se déplacent partout en France et sur la Côte d&apos;Azur.</p>
          </div>
          <Link href="/#contact" className="btn btn-gold">Demander un audit</Link>
        </div>
      </section>

      <FrFooter />
    </main>
  )
}
