import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FrFooter from '@/components/FrFooter'

export const metadata: Metadata = {
  title: 'Protection de Personnalité & Sécurité VIP | Imperium Private Protection',
  description: 'Service de protection de personnalité et sécurité VIP certifié CNAPS. Pour politiques, artistes, dirigeants et personnalités publiques. Disponible 24h/24 en France et à l\'international.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/protection-personnalite',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/protection-personnalite',
      'en': 'https://www.imperiumprotection.fr/en/vip-protection',
    },
  },
  openGraph: {
    title: 'Protection de Personnalité & Sécurité VIP | Imperium Private Protection',
    description: 'Service de protection de personnalité et sécurité VIP certifié CNAPS. Pour politiques, artistes, dirigeants et personnalités publiques.',
    url: 'https://www.imperiumprotection.fr/protection-personnalite',
    locale: 'fr_FR',
  },
}

export default function ProtectionPersonnalite() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1800&q=80" alt="Protection de personnalité" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <Link href="/#services">Services</Link><span>›</span>
            <span className="bc-current">Protection de Personnalité</span>
          </nav>
          <p className="hero-tag">Service · Sécurité VIP</p>
          <h1>Protection de <span>Personnalité</span></h1>
          <p className="svc-hero-desc">Un service de sécurité sur mesure pour les personnalités publiques, dirigeants, artistes et élus. Discrétion, réactivité et professionnalisme au plus haut niveau.</p>
          <Link href="/#contact" className="btn btn-gold">Demander une évaluation</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Présentation</p>
            <h2>La protection des personnes exposées</h2>
            <p>La protection de personnalité s&apos;adresse aux individus dont la notoriété, la fonction ou la fortune génère une exposition particulière au risque. Politiques, chefs d&apos;État, artistes de renom, grands dirigeants, sportifs de haut niveau ou héritiers fortunés : leur visibilité les rend vulnérables à des menaces spécifiques.</p>
            <p>Notre approche intègre la gestion de l&apos;exposition publique, le filtrage des interactions, la planification des déplacements et l&apos;analyse comportementale de l&apos;entourage. Nous ne nous contentons pas de protéger : nous anticipons.</p>
            <p>Chaque dispositif est construit sur mesure, en tenant compte de votre agenda, de votre mode de vie et de votre niveau de menace réel.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1573164574001-518958af9be8?w=800&q=80" alt="Protection VIP" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Ce qui est inclus</p>
            <h2>Nos prestations VIP</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Gestion de l&apos;exposition publique</h4><p>Analyse de vos apparitions, gestion des accès et des contacts, filtrage des médias et coordination avec votre entourage professionnel.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Escorte rapprochée discrète</h4><p>Agents en civil, intégrés à votre cercle sans perturber votre image publique ni votre vie privée.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M16 36l-4 8M32 36l4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Couverture événementielle complète</h4><p>Avant-première, remise de prix, concert, discours public, inauguration : gestion sécuritaire complète de chaque événement.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Transport VIP haut de gamme</h4><p>Flotte dédiée avec chauffeurs certifiés. Mercedes Classe S, Viano, SUV banalisés pour tous vos déplacements en total discrétion.</p><div className="feat-tags"><span>Mercedes Classe S</span><span>Viano</span><span>SUV blindé</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Analyse comportementale</h4><p>Évaluation des comportements suspects dans votre entourage, détection de menaces internes et veille proactive sur les risques de ciblage.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Protocole de crise &amp; urgences</h4><p>Extraction d&apos;urgence, gestion des incidents médiatiques, coordination avec les autorités et conseil en communication de crise.</p></div>
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
            <div className="profile-item"><span className="profile-dot"></span><strong>Personnalités politiques</strong><p>Élus, ministres, chefs d&apos;État, candidats et leurs équipes lors de campagnes ou mandats.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Artistes &amp; célébrités</strong><p>Chanteurs, acteurs, sportifs de renom exposés au stalking, aux fans agressifs ou aux menaces en ligne.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Grands dirigeants</strong><p>PDG de multinationales, présidents de fonds d&apos;investissement ou dirigeants d&apos;institutions sensibles.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Héritiers &amp; fortunes familiales</strong><p>Membres de familles fortunées exposés aux risques d&apos;enlèvement, d&apos;extorsion ou de manipulation.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Influenceurs &amp; médias</strong><p>Personnalités des réseaux sociaux à forte audience exposées aux menaces numériques et physiques.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Ambassadeurs &amp; diplomates</strong><p>Représentants officiels nécessitant une protection pendant leurs missions en France ou à l&apos;étranger.</p></div>
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
            <p className="section-tag light">Notre méthode</p>
            <h2 className="light">Notre approche VIP</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Audit de profil</h4><p>Analyse de votre exposition, de vos activités publiques, de votre agenda et des menaces potentielles identifiées.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Stratégie sécuritaire</h4><p>Élaboration d&apos;un plan de protection adapté à votre mode de vie, minimisant les contraintes tout en maximisant la sécurité.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Intégration discrète</h4><p>Déploiement d&apos;agents intégrés à votre environnement, invisibles pour votre entourage si nécessaire.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Adaptation continue</h4><p>Réévaluation permanente du dispositif selon l&apos;évolution de la menace et de votre agenda public.</p></div>
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
            <details className="faq-item"><summary>Mes agents de protection seront-ils visibles ?</summary><p>Selon votre choix et le contexte, nos agents peuvent être totalement discrets (en civil, intégrés à votre entourage) ou visibles pour effet dissuasif.</p></details>
            <details className="faq-item"><summary>Pouvez-vous protéger toute ma famille ?</summary><p>Oui. Nous mettons en place des dispositifs multi-agents pour couvrir simultanément plusieurs membres d&apos;une même famille.</p></details>
            <details className="faq-item"><summary>Comment gérez-vous les situations médiatiques imprévues ?</summary><p>Nos agents sont formés à la gestion des situations médiatiques : extraction d&apos;un environnement hostile, gestion des caméras et coordination avec votre équipe de communication.</p></details>
            <details className="faq-item"><summary>Proposez-vous un service continu 24h/24 ?</summary><p>Oui. Nous pouvons déployer un dispositif de protection permanent avec rotation d&apos;équipes, sans interruption de la couverture.</p></details>
            <details className="faq-item"><summary>Intervenez-vous à l&apos;étranger lors de mes tournées ou déplacements ?</summary><p>Absolument. Nous coordonnons la protection internationale via notre réseau de partenaires certifiés dans plus de 40 pays.</p></details>
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
            <Link href="/accompagnement-international" className="related-card">
              <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" alt="Accompagnement international" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Accompagnement International</h4><span>Découvrir →</span></div>
            </Link>
            <Link href="/intelligence-analyse-risque" className="related-card">
              <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&q=80" alt="Intelligence" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Intelligence &amp; Analyse de Risque</h4><span>Découvrir →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <div className="emerg-pulse"></div>
          <div>
            <h2>Besoin d&apos;une protection VIP ?</h2>
            <p>Contactez-nous pour une évaluation confidentielle. Disponibles 24h/24, 7j/7.</p>
          </div>
          <Link href="/#contact" className="btn btn-gold">Nous contacter maintenant</Link>
        </div>
      </section>

      <FrFooter />
    </main>
  )
}
