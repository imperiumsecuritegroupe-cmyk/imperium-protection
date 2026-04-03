import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FrFooter from '@/components/FrFooter'

export const metadata: Metadata = {
  title: 'Cyber Sécurité & Protection Numérique | Imperium Private Protection',
  description: 'Protection numérique des personnes exposées : audit des appareils, sécurisation des communications, détection d\'espionnage et protection de l\'identité en ligne.',
  alternates: {
    canonical: 'https://www.imperiumprotection.fr/cyber-securite',
    languages: {
      'fr': 'https://www.imperiumprotection.fr/cyber-securite',
      'en': 'https://www.imperiumprotection.fr/en/cyber-security',
    },
  },
}

export default function CyberSecurite() {
  return (
    <main>
      <section className="svc-hero">
        <div className="svc-hero-bg">
          <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&q=80" alt="Cyber sécurité" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link><span>›</span>
            <Link href="/#services">Services</Link><span>›</span>
            <span className="bc-current">Cyber Sécurité</span>
          </nav>
          <p className="hero-tag">Service · Protection Numérique</p>
          <h1>Cyber <span>Sécurité</span></h1>
          <p className="svc-hero-desc">Protection numérique complète pour les personnes exposées : audit, sécurisation des communications, détection d&apos;espionnage et protection de l&apos;identité en ligne.</p>
          <Link href="/#contact" className="btn btn-gold">Demander un audit</Link>
        </div>
      </section>

      <section className="svc-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <p className="section-tag">Présentation</p>
            <h2>La protection numérique, un enjeu physique</h2>
            <p>Les menaces numériques et physiques sont aujourd&apos;hui indissociables. La compromission de votre téléphone, la fuite de vos données de localisation ou la surveillance de vos communications peuvent directement précéder une attaque physique ou une extorsion.</p>
            <p>Imperium Private Protection intègre la cyber sécurité comme composante essentielle de toute protection globale. Nos experts analysent vos appareils, vos communications et votre empreinte numérique pour éliminer les vulnérabilités avant qu&apos;elles ne soient exploitées.</p>
            <p>Notre approche est discrète, non intrusive et ciblée sur les risques réels auxquels vous êtes exposé en tant que personne à haute valeur ou personnalité publique.</p>
          </div>
          <div className="svc-intro-img">
            <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" alt="Cyber protection" width={800} height={600} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      <section className="svc-features">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Ce qui est inclus</p>
            <h2>Nos prestations cyber</h2>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L6 13V24C6 34.5 13.5 44.1 24 47C34.5 44.1 42 34.5 42 24V13L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Audit complet des appareils</h4><p>Analyse forensique de vos smartphones, tablettes, ordinateurs et montres connectées pour détecter malwares, logiciels espions et vulnérabilités.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 40C8 32 15.2 26 24 26s16 6 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Sécurisation des communications</h4><p>Mise en place de canaux de communication chiffrés de bout en bout, messageries sécurisées et protocoles de communication protégée.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M16 36l-4 8M32 36l4 8M12 44h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Détection d&apos;espionnage</h4><p>Recherche de mouchards, écoutes téléphoniques, caméras cachées et dispositifs de surveillance dans vos locaux et véhicules.</p></div>
            <div className="feat-card feat-highlight"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M40 20C40 32 24 44 24 44C24 44 8 32 8 20C8 11.2 15.2 4 24 4C32.8 4 40 11.2 40 20Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2"/></svg></div><h4>Protection de l&apos;identité en ligne</h4><p>Suppression d&apos;informations personnelles des sources publiques, protection des comptes sociaux et gestion de votre empreinte numérique.</p><div className="feat-tags"><span>OSINT défensif</span><span>Doxing protection</span><span>Dark web</span></div></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M6 36L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 6L42 18L22 38L10 26L30 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Surveillance dark web</h4><p>Monitoring continu du dark web pour détecter la mise en vente de vos données personnelles, d&apos;informations sensibles ou de plans malveillants vous concernant.</p></div>
            <div className="feat-card"><div className="feat-icon"><svg viewBox="0 0 48 48" fill="none"><path d="M24 4L4 16V28C4 38 12 46 24 50C36 46 44 38 44 28V16L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Formation &amp; sensibilisation</h4><p>Formation de vous et de vos équipes aux bonnes pratiques numériques, phishing, ingénierie sociale et gestion des mots de passe.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-cyber-threats">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Menaces identifiées</p>
            <h2>Les principales menaces numériques</h2>
          </div>
          <div className="threats-grid">
            <div className="threat-card"><div className="threat-icon red">🎯</div><h4>Spyware &amp; Pegasus</h4><p>Logiciels espions ciblant les personnalités exposées : compromission totale du smartphone sans interaction de la victime.</p></div>
            <div className="threat-card"><div className="threat-icon orange">📡</div><h4>Écoutes &amp; interceptions</h4><p>Surveillance des communications téléphoniques, emails et messageries par des acteurs malveillants ou étatiques.</p></div>
            <div className="threat-card"><div className="threat-icon red">🕵️</div><h4>Doxing &amp; ciblage</h4><p>Publication d&apos;informations personnelles en ligne pour faciliter le harcèlement, les menaces ou les actions physiques.</p></div>
            <div className="threat-card"><div className="threat-icon yellow">🔓</div><h4>Violation de comptes</h4><p>Piratage de comptes email, réseaux sociaux et services bancaires pour extorsion, manipulation ou vol d&apos;identité.</p></div>
            <div className="threat-card"><div className="threat-icon orange">📍</div><h4>Géolocalisation malveillante</h4><p>Tracking de vos déplacements via métadonnées, applications mobiles ou dispositifs de localisation installés à votre insu.</p></div>
            <div className="threat-card"><div className="threat-icon red">🎭</div><h4>Deepfakes &amp; manipulation</h4><p>Création de contenus falsifiés (vidéos, audios) pour nuire à votre réputation ou faciliter des fraudes en votre nom.</p></div>
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
            <div className="profile-item"><span className="profile-dot"></span><strong>Chefs d&apos;entreprise &amp; cadres</strong><p>Risques d&apos;espionnage industriel, de compromission des négociations et de vol de données stratégiques.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Personnalités politiques</strong><p>Ciblage par des adversaires, groupes activistes ou services de renseignement étrangers.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Célébrités &amp; artistes</strong><p>Protection contre le harcèlement en ligne, les fuites privées et le piratage de comptes à forte audience.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Avocats &amp; médecins</strong><p>Confidentialité des dossiers clients, protection des communications sensibles et secret professionnel.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Familles fortunées</strong><p>Protection contre le ciblage basé sur l&apos;exposition financière et les tentatives d&apos;extorsion numérique.</p></div>
            <div className="profile-item"><span className="profile-dot"></span><strong>Journalistes &amp; lanceurs d&apos;alerte</strong><p>Sécurisation des sources, des communications et des données dans des contextes à haut risque.</p></div>
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="process-bg">
          <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80" alt="" fill style={{ objectFit: 'cover' }} />
          <div className="process-overlay"></div>
        </div>
        <div className="container">
          <div className="section-head">
            <p className="section-tag light">Notre méthode</p>
            <h2 className="light">Notre processus cyber</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">01</div><h4>Audit initial</h4><p>Inventaire de vos appareils, comptes, habitudes numériques et évaluation de votre empreinte digitale globale.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">02</div><h4>Analyse forensique</h4><p>Examen approfondi des appareils, détection de compromissions actives et identification des vulnérabilités.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">03</div><h4>Sécurisation &amp; hardening</h4><p>Nettoyage des compromissions, renforcement des systèmes, mise en place de protocoles sécurisés.</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">04</div><h4>Surveillance continue</h4><p>Monitoring permanent et alertes en temps réel en cas de détection d&apos;une nouvelle menace numérique.</p></div>
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
            <details className="faq-item"><summary>Comment savoir si mon téléphone est compromis ?</summary><p>Plusieurs signes peuvent l&apos;indiquer : batterie se déchargeant anormalement vite, surchauffe sans utilisation, activité réseau suspecte, comportements inhabituels. Un audit forensique de nos experts permet une détection certaine.</p></details>
            <details className="faq-item"><summary>Proposez-vous des solutions de communication sécurisée ?</summary><p>Oui. Nous mettons en place des environnements de communication chiffrés de bout en bout adaptés à votre utilisation : messageries, emails, appels et vidéoconférences.</p></details>
            <details className="faq-item"><summary>Pouvez-vous supprimer mes informations des sites de recherche ?</summary><p>Oui. Nous procédons au nettoyage de votre empreinte numérique : suppression des données personnelles des agrégateurs, brokers de données et sources publiques accessibles.</p></details>
            <details className="faq-item"><summary>La cyber protection peut-elle être combinée avec la protection physique ?</summary><p>C&apos;est l&apos;approche idéale. Les deux disciplines se complètent : les informations recueillies en cyber renseignent directement la protection physique, et inversement.</p></details>
            <details className="faq-item"><summary>Intervenez-vous en cas de crise (piratage en cours) ?</summary><p>Oui. Nous disposons d&apos;une équipe d&apos;intervention rapide disponible 24h/24 pour répondre aux incidents de sécurité numérique en cours.</p></details>
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
            <Link href="/intelligence-analyse-risque" className="related-card">
              <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&q=80" alt="Intelligence" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Intelligence &amp; Analyse de Risque</h4><span>Découvrir →</span></div>
            </Link>
            <Link href="/protection-rapprochee" className="related-card">
              <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Protection rapprochée" width={600} height={200} style={{ objectFit: 'cover' }} />
              <div className="related-info"><h4>Protection Rapprochée</h4><span>Découvrir →</span></div>
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
            <h2>Protégez votre identité numérique</h2>
            <p>Demandez un audit cyber confidentiel. Nos experts interviennent en France et à l&apos;international.</p>
          </div>
          <Link href="/#contact" className="btn btn-gold">Demander un audit cyber</Link>
        </div>
      </section>

      <FrFooter />
    </main>
  )
}
