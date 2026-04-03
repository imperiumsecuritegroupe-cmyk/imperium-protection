import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FrFooter from '@/components/FrFooter'

export const metadata: Metadata = {
  title: 'Intelligence & Analyse de Risque | Imperium Private Protection',
  description: 'Renseignement humain et technique pour anticiper les menaces. Veille proactive, profilage des risques et recommandations stratégiques personnalisées. Agents CNAPS certifiés.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/intelligence-analyse-risque',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/intelligence-analyse-risque',
      'en': 'https://www.imperiumprotection.fr/en/intelligence-risk',
    },
  },
}

export default function IntelligenceAnalyseRisque() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=1800&q=80" alt="Intelligence et analyse de risque" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <Link href="/#services">Services</Link><span>›</span>
            <span className="bc-current">Intelligence &amp; Analyse de Risque</span>
          </nav>
          <p className="hero-tag">Service · Renseignement</p>
          <h1>Intelligence &amp; <span>Analyse de Risque</span></h1>
          <p className="svc-hero-desc">Renseignement humain et technique pour anticiper les menaces avant qu&apos;elles ne se matérialisent. Veille proactive et recommandations stratégiques personnalisées.</p>
          <Link href="/#contact" className="btn btn-gold">Demander une évaluation</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Présentation</p>
            <h2>Anticiper pour mieux protéger</h2>
            <p>La meilleure protection est celle qui neutralise la menace avant qu&apos;elle ne devienne réelle. Notre service d&apos;intelligence combine renseignement humain (HUMINT) et analyse technique pour construire une image fidèle de votre environnement sécuritaire.</p>
            <p>Nos analystes spécialisés surveillent les signaux faibles, identifient les comportements suspects, évaluent votre exposition numérique et physique, et vous fournissent des recommandations concrètes et actionnables.</p>
            <p>Ce service s&apos;inscrit en amont de toute décision sécuritaire : il éclaire la prise de décision et optimise l&apos;allocation des ressources de protection.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Analyse de risque" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Ce qui est inclus</p>
            <h2>Nos prestations d&apos;intelligence</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Évaluation de menace personnalisée</h4><p>Analyse de votre exposition spécifique : activités, relations, présence publique et antécédents d&apos;incidents.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Veille proactive 360°</h4><p>Surveillance continue des réseaux, sources ouvertes (OSINT), forums et canaux privés pour détecter les menaces émergentes.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M16 36l-4 8M32 36l4 8M12 44h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Profilage des risques</h4><p>Identification et évaluation des individus ou groupes susceptibles de représenter une menace pour votre sécurité.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Analyse OSINT &amp; darknet</h4><p>Surveillance des sources ouvertes et des espaces numériques clandestins pour détecter les fuites d&apos;information, les plans malveillants et les ciblages préparatoires.</p><div className="feat-tags"><span>OSINT</span><span>Darknet</span><span>HUMINT</span><span>SIGINT</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Rapports stratégiques</h4><p>Documents de synthèse actionnables avec recommandations priorisées, métriques de risque et plan d&apos;action sécuritaire.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Analyse comportementale</h4><p>Évaluation des comportements de l&apos;entourage professionnel et personnel pour détecter les risques internes (menace interne).</p></div>
          </div>
        </div>
      </section>

      <section className="svc-levels">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Niveaux de risque</p>
            <h2>Notre grille d&apos;évaluation</h2>
          </div>
          <div className="levels-grid">
            <div className="level-card level-1"><span className="level-badge">Niveau 1 – Faible</span><h4>Vigilance standard</h4><p>Exposition publique limitée, aucune menace identifiée. Protocoles préventifs et formation des équipes.</p></div>
            <div className="level-card level-2"><span className="level-badge">Niveau 2 – Modéré</span><h4>Vigilance accrue</h4><p>Exposition notable, signaux faibles détectés. Surveillance renforcée et ajustement du dispositif.</p></div>
            <div className="level-card level-3"><span className="level-badge">Niveau 3 – Élevé</span><h4>Protection active</h4><p>Menace identifiée et crédible. Activation du dispositif de protection rapprochée et mesures d&apos;urgence.</p></div>
            <div className="level-card level-4"><span className="level-badge">Niveau 4 – Critique</span><h4>Crise immédiate</h4><p>Menace imminente ou acte en cours. Déploiement d&apos;urgence, extraction et coordination avec les autorités.</p></div>
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
            <div className="profile-item"><span className="profile-dot"></span><strong>Dirigeants &amp; PDG</strong><p>Analyse des menaces concurrentielles, d&apos;espionnage industriel et des risques personnels liés à leur fonction.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Personnalités politiques</strong><p>Surveillance des menaces à l&apos;intégrité physique, des campagnes de déstabilisation et du ciblage organisé.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Familles fortunées</strong><p>Évaluation des risques d&apos;enlèvement, d&apos;extorsion et des approches malveillantes ciblant la famille.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Entreprises &amp; institutions</strong><p>Analyse des menaces concurrentielles, d&apos;espionnage, de sabotage et de manipulation.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Avocats &amp; experts judiciaires</strong><p>Identification des risques liés aux affaires sensibles, témoignages ou décisions juridiques impactantes.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Célébrités &amp; influenceurs</strong><p>Surveillance des stalkers, des menaces de fans et des campagnes de harcèlement organisées en ligne.</p></div>
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
            <p className="section-tag light">Notre méthode</p>
            <h2 className="light">Notre processus d&apos;analyse</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Collecte de données</h4><p>Agrégation d&apos;informations depuis sources ouvertes, réseaux fermés et renseignements humains fiables.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Analyse &amp; corrélation</h4><p>Traitement et mise en relation des données pour identifier patterns, signaux faibles et menaces émergentes.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Évaluation &amp; scoring</h4><p>Attribution d&apos;un niveau de risque objectif avec probabilités d&apos;occurrence et impact potentiel.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Recommandations</h4><p>Plan d&apos;action priorisé avec mesures concrètes pour réduire l&apos;exposition et renforcer la résilience.</p></div>
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
            <details className="faq-item"><summary>En quoi l&apos;analyse de risque diffère-t-elle d&apos;une protection classique ?</summary><p>La protection classique est réactive : elle intervient face à une menace présente. L&apos;analyse de risque est proactive : elle identifie et évalue les menaces avant qu&apos;elles ne se matérialisent, permettant d&apos;optimiser le dispositif.</p></details>
            <details className="faq-item"><summary>Quelles sources utilisez-vous pour votre veille ?</summary><p>Sources ouvertes (OSINT), réseaux sociaux, forums spécialisés, réseaux fermés, renseignements humains (HUMINT) et données techniques (SIGINT). Tout dans le cadre strict de la légalité.</p></details>
            <details className="faq-item"><summary>Les analyses sont-elles confidentielles ?</summary><p>Absolument. Tous nos rapports sont chiffrés, transmis par canaux sécurisés et ne sont jamais partagés avec des tiers sans votre accord explicite.</p></details>
            <details className="faq-item"><summary>Proposez-vous un service de veille continue ?</summary><p>Oui. Nous pouvons mettre en place une surveillance continue avec alertes en temps réel en cas de détection d&apos;une menace émergente.</p></details>
            <details className="faq-item"><summary>Peut-on combiner ce service avec une protection physique ?</summary><p>C&apos;est notre approche recommandée. L&apos;analyse de risque nourrit et optimise directement le dispositif de protection physique, le rendant plus efficace et mieux ciblé.</p></details>
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
            <Link href="/cyber-securite" className="related-card">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Cyber sécurité" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Cyber Sécurité</h4><span>Découvrir →</span></div>
            </Link>
            <Link href="/accompagnement-international" className="related-card">
              <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" alt="International" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Accompagnement International</h4><span>Découvrir →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>Évaluez votre niveau de risque</h2>
            <p>Contactez-nous pour une analyse confidentielle de votre situation. Disponibles 24h/24, 7j/7.</p>
          </div>
          <Link href="/#contact" className="btn btn-gold">Demander une analyse</Link>
        </div>
      </section>

      <FrFooter />
    </main>
  )
}
