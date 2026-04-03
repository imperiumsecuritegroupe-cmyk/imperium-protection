import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ScrollLink from '@/components/ScrollLink'

const teamSilhouette = (
  <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-silhouette">
    <circle cx="60" cy="50" r="28" fill="#2a2a2a" stroke="#b8975a" strokeWidth="1.5"/>
    <path d="M10 160C10 120 30 100 60 100C90 100 110 120 110 160" fill="#2a2a2a" stroke="#b8975a" strokeWidth="1.5"/>
  </svg>
)

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80"
            alt="Protection mondiale"
            className="hero-img"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
        <div className="hero-content">
          <Image src="/assets/logo.svg" alt="Imperium Private Protection" width={420} height={308} className="hero-logo" priority />
          <p className="hero-tag">Excellence · Discrétion · Sécurité</p>
          <h1>Protection de l&apos;intégrité physique<br /><span>à votre niveau d&apos;exigence</span></h1>
          <p className="hero-desc">Nous protégeons les individus, les personnalités et les familles face aux menaces de ciblage, harcèlement et atteintes à la personne — en France et à l&apos;international.</p>
          <div className="hero-actions">
            <ScrollLink to="contact" className="btn btn-gold">Demander une évaluation</ScrollLink>
            <ScrollLink to="services" className="btn btn-outline">Nos services</ScrollLink>
          </div>
        </div>
        <div className="hero-badges">
          <div className="badge"><span className="badge-num">15+</span><span>Ans d&apos;expérience</span></div>
          <div className="badge"><span className="badge-num">40+</span><span>Pays couverts</span></div>
          <div className="badge"><span className="badge-num">500+</span><span>Missions réussies</span></div>
        </div>
        <ScrollLink to="services" className="scroll-down" aria-label="Défiler vers le bas">
          <span></span>
        </ScrollLink>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Ce que nous offrons</p>
            <h2>Nos Services de Protection</h2>
            <p className="section-desc">Des solutions sur mesure pour chaque profil de risque, conçues par des professionnels certifiés CNAPS disposant d&apos;une solide expérience opérationnelle.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 4L8 16V32C8 46 18 58 32 62C46 58 56 46 56 32V16L32 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M22 32l7 7 13-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Protection rapprochée" width={600} height={400} />
              </div>
              <h3>Protection Rapprochée</h3>
              <p>Agents de protection expérimentés, discrets et réactifs pour vous accompagner en toutes circonstances — déplacements, événements, résidence.</p>
              <Link href="/protection-rapprochee" className="service-link">En savoir plus →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8C23.2 8 16 15.2 16 24C16 35.2 32 56 32 56C32 56 48 35.2 48 24C48 15.2 40.8 8 32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  <circle cx="32" cy="24" r="6" stroke="currentColor" strokeWidth="2.5"/>
                </svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" alt="Protection personnalité" width={600} height={400} />
              </div>
              <h3>Protection de Personnalité</h3>
              <p>Service dédié aux personnalités publiques, dirigeants, artistes et élus. Gestion de l&apos;exposition, filtrage des interactions et protocoles de sécurité avancés.</p>
              <Link href="/protection-personnalite" className="service-link">En savoir plus →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 48L24 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M40 12L52 24L28 48L16 36L40 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M24 16L20 8L28 12L24 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" alt="Accompagnement international" width={600} height={400} />
              </div>
              <h3>Accompagnement International</h3>
              <p>Déploiement rapide sur 40+ pays. Gestion sécurisée des déplacements à risque, zones de conflit, voyages d&apos;affaires sensibles et expatriation.</p>
              <Link href="/accompagnement-international" className="service-link">En savoir plus →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="20" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M20 20V16C20 10.477 24.477 6 30 6H34C39.523 6 44 10.477 44 16V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="32" cy="38" r="5" stroke="currentColor" strokeWidth="2.5"/>
                </svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Sécurité résidence" width={600} height={400} />
              </div>
              <h3>Sécurisation de Résidence</h3>
              <p>Audit, installation de dispositifs et présence physique pour la protection de votre domicile, propriété ou lieu d&apos;activité. Protocoles 24h/24.</p>
              <Link href="/securisation-residence" className="service-link">En savoir plus →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8L8 24V40L32 56L56 40V24L32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M32 8V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M8 24L56 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M8 40L56 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&q=80" alt="Intelligence et analyse" width={600} height={400} />
              </div>
              <h3>Intelligence &amp; Analyse de Risque</h3>
              <p>Renseignement humain et technique pour anticiper les menaces. Veille proactive, profilage des risques et recommandations stratégiques personnalisées.</p>
              <Link href="/intelligence-analyse-risque" className="service-link">En savoir plus →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="20" width="44" height="32" rx="4" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M22 20V16C22 10.477 26.477 6 32 6C37.523 6 42 10.477 42 16V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="32" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M32 41v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="service-img-wrap">
                <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Cyber sécurité" width={600} height={400} />
              </div>
              <h3>Cyber Sécurité</h3>
              <p>Protection numérique des personnes exposées : audit des appareils, sécurisation des communications, détection d&apos;espionnage et protection de l&apos;identité en ligne.</p>
              <Link href="/cyber-securite" className="service-link">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT SÉCURISÉ */}
      <section id="transport">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Mobilité &amp; Sécurité</p>
            <h2>Transport Sécurisé &amp; Chauffeurs Formés</h2>
            <p className="section-desc">Imperium Private Protection met à disposition une flotte de véhicules haut de gamme avec des chauffeurs de sécurité qualifiés, bilingues et trilingues sur demande.</p>
          </div>
          <div className="transport-wrap">
            <div className="transport-img">
              <Image src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80" alt="Véhicule de protection Mercedes" width={1200} height={500} style={{ objectFit: 'cover', objectPosition: 'center 60%' }} />
              <div className="transport-img-badge">Flotte disponible 24h/24</div>
            </div>
            <div className="transport-info">
              <h3>Une flotte au niveau de vos exigences</h3>
              <p>Chaque déplacement est une mission à part entière. Nos véhicules sont sélectionnés pour leur confort, leur discrétion et leur capacité opérationnelle. Nos chauffeurs sont des professionnels formés à la conduite de sécurité, maîtrisant les protocoles de protection rapprochée.</p>
              <div className="vehicles-grid">
                <div className="vehicle-card">
                  <div className="vehicle-icon">
                    <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16H60M4 16L8 8H48L60 16M4 16V20H10M60 16V20H54M10 20A4 4 0 0 0 18 20M18 20H46M46 20A4 4 0 0 0 54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Mercedes Classe V (Viano)</strong>
                    <span>Grand espace, groupes jusqu&apos;à 6 personnes, vitres teintées, discrétion maximale</span>
                  </div>
                </div>
                <div className="vehicle-card">
                  <div className="vehicle-icon">
                    <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16H60M4 16L10 8H54L60 16M4 16V20H10M60 16V20H54M10 20A4 4 0 0 0 18 20M18 20H46M46 20A4 4 0 0 0 54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Mercedes Classe S</strong>
                    <span>Berline de prestige, protection VIP, confort de haut niveau pour déplacements officiels</span>
                  </div>
                </div>
                <div className="vehicle-card">
                  <div className="vehicle-icon">
                    <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16H60M4 16L9 7H55L60 16M4 16V20H10M60 16V20H54M10 20A4 4 0 0 0 18 20M18 20H46M46 20A4 4 0 0 0 54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>SUV blindés &amp; banalisés</strong>
                    <span>Véhicules adaptés aux zones sensibles, haute capacité de manœuvre et discrétion</span>
                  </div>
                </div>
                <div className="vehicle-card">
                  <div className="vehicle-icon">
                    <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16H60M4 16L8 9H56L60 16M4 16V20H10M60 16V20H54M10 20A4 4 0 0 0 18 20M18 20H46M46 20A4 4 0 0 0 54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Autres véhicules sur demande</strong>
                    <span>Adaptation à chaque mission : convoi, véhicules de repli, configuration personnalisée</span>
                  </div>
                </div>
              </div>
              <div className="chauffeur-badges">
                <div className="chauf-badge">
                  <span className="chauf-icon">🗣</span>
                  <div>
                    <strong>Chauffeurs bilingues</strong>
                    <span>Français – Anglais · Français – Arabe · Français – Espagnol</span>
                  </div>
                </div>
                <div className="chauf-badge">
                  <span className="chauf-icon">🌐</span>
                  <div>
                    <strong>Chauffeurs trilingues sur demande</strong>
                    <span>Français – Anglais – Arabe · Français – Anglais – Russe · et autres langues</span>
                  </div>
                </div>
                <div className="chauf-badge">
                  <span className="chauf-icon">🛡</span>
                  <div>
                    <strong>Chauffeurs formés à la sécurité</strong>
                    <span>Conduite de sécurité, gestion de filature, extraction d&apos;urgence, certifiés CNAPS</span>
                  </div>
                </div>
              </div>
              <ScrollLink to="contact" className="btn btn-gold">Réserver un véhicule</ScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-bg">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80" alt="Équipe Imperium" fill style={{ objectFit: 'cover' }} />
          <div className="about-overlay"></div>
        </div>
        <div className="container about-container">
          <div className="about-content">
            <p className="section-tag light">Notre identité</p>
            <h2 className="light">Qui est<br /><span>Imperium Private Protection ?</span></h2>
            <p>Fondée par des professionnels aguerris de la sécurité privée, <strong>Imperium Private Protection</strong> est une société de protection privée d&apos;élite, titulaire des autorisations CNAPS, opérant depuis Paris.</p>
            <p>Nous combinons rigueur opérationnelle, discrétion absolue et technologies de pointe pour offrir à nos clients une protection sans faille — quelle que soit la complexité de la menace.</p>
            <p>Notre philosophie : <em>anticiper plutôt que réagir</em>. Chaque mission est préparée avec une précision chirurgicale, chaque agent est sélectionné pour son excellence et sa déontologie irréprochable.</p>
            <div className="about-values">
              <div className="val"><span className="val-icon">◆</span> Discrétion absolue</div>
              <div className="val"><span className="val-icon">◆</span> Réactivité 24h/24</div>
              <div className="val"><span className="val-icon">◆</span> Excellence opérationnelle</div>
              <div className="val"><span className="val-icon">◆</span> Confidentialité garantie</div>
            </div>
            <ScrollLink to="contact" className="btn btn-gold">Nous contacter</ScrollLink>
          </div>
          <div className="about-img-wrap">
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="Équipe de direction Imperium" width={800} height={1000} style={{ objectFit: 'cover', borderRadius: '8px' }} />
            <div className="about-cert">
              <span>Certifié</span>
              <strong>CNAPS &amp; APS</strong>
              <span>Autorisation nationale</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Pourquoi nous choisir</p>
            <h2>L&apos;excellence au service de votre sécurité</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-num">01</div>
              <h4>Agents d&apos;élite certifiés</h4>
              <p>Tous nos agents sont titulaires de la carte professionnelle CNAPS, formés aux protocoles de protection et dotés d&apos;une solide expérience opérationnelle sur le terrain.</p>
            </div>
            <div className="why-card">
              <div className="why-num">02</div>
              <h4>Confidentialité totale</h4>
              <p>Chaque mission est encadrée par un accord de non-divulgation strict. Votre identité, vos déplacements et vos informations restent absolument confidentiels.</p>
            </div>
            <div className="why-card">
              <div className="why-num">03</div>
              <h4>Réponse immédiate</h4>
              <p>Cellule de crise disponible 24h/24, 7j/7. Déploiement d&apos;une équipe en moins de 2 heures sur Paris et Île-de-France, 6 heures partout en France.</p>
            </div>
            <div className="why-card">
              <div className="why-num">04</div>
              <h4>Couverture mondiale</h4>
              <p>Réseau de partenaires homologués dans plus de 40 pays pour garantir une continuité de protection lors de vos déplacements internationaux.</p>
            </div>
            <div className="why-card">
              <div className="why-num">05</div>
              <h4>Sur-mesure &amp; personnalisé</h4>
              <p>Aucune mission n&apos;est standard. Chaque dispositif est conçu après une analyse approfondie de votre profil de risque et de vos besoins spécifiques.</p>
            </div>
            <div className="why-card">
              <div className="why-num">06</div>
              <h4>Légalité &amp; éthique</h4>
              <p>Toutes nos interventions s&apos;inscrivent strictement dans le cadre légal français et international. Nous refusons toute mission contraire à l&apos;éthique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Notre présence</p>
            <h2>France &amp; International</h2>
            <p className="section-desc">Que vous soyez à Paris, en province ou à l&apos;étranger, Imperium Private Protection vous accompagne partout où vous en avez besoin.</p>
          </div>
          <div className="coverage-wrap">
            <div className="coverage-map">
              <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="Couverture mondiale Imperium" width={1200} height={420} style={{ objectFit: 'cover', filter: 'saturate(.6) brightness(.7)' }} />
              <div className="map-overlay">
                <div className="map-pin pin-paris">Paris<span>Siège</span></div>
                <div className="map-pin pin-lyon">Lyon</div>
                <div className="map-pin pin-nice">Nice</div>
                <div className="map-pin pin-dubai">Dubaï</div>
                <div className="map-pin pin-london">Londres</div>
                <div className="map-pin pin-newyork">New York</div>
              </div>
            </div>
            <div className="coverage-info">
              <div className="cov-item">
                <div className="cov-icon">🇫🇷</div>
                <div>
                  <h4>En France</h4>
                  <p>Paris, Lyon, Marseille, Nice, Bordeaux, Toulouse, Strasbourg. Intervention nationale sous 6 heures.</p>
                </div>
              </div>
              <div className="cov-item">
                <div className="cov-icon">🇪🇺</div>
                <div>
                  <h4>Europe</h4>
                  <p>Londres, Genève, Monaco, Madrid, Rome, Dubaï, Bruxelles — réseau de partenaires certifiés.</p>
                </div>
              </div>
              <div className="cov-item">
                <div className="cov-icon">🌍</div>
                <div>
                  <h4>Monde entier</h4>
                  <p>Amériques, Asie, Afrique, Moyen-Orient. Déploiement coordonné sur 40+ pays, y compris zones à risque.</p>
                </div>
              </div>
              <ScrollLink to="contact" className="btn btn-dark">Évaluer ma mission →</ScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="container">
          <div className="section-head">
            <p className="section-tag">Notre équipe</p>
            <h2>Des profils d&apos;exception</h2>
            <p className="section-desc">Chaque membre de notre équipe a été sélectionné pour son expertise, son intégrité et son engagement envers l&apos;excellence.</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo team-photo-anon">
                {teamSilhouette}
                <div className="team-badge-role">DG</div>
              </div>
              <div className="team-info">
                <h4>Directeur Général</h4>
                <p className="team-role">Direction &amp; Fondateur</p>
                <p>Expert en sécurité privée, 18 ans d&apos;expérience en protection de personnes exposées et gestion de situations sensibles en Europe et au Moyen-Orient.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo team-photo-anon">
                {teamSilhouette}
                <div className="team-badge-role">OPS</div>
              </div>
              <div className="team-info">
                <h4>Directrice des Opérations</h4>
                <p className="team-role">Coordination opérationnelle</p>
                <p>Spécialiste en évaluation des menaces et gestion opérationnelle. Coordinatrice de missions internationales complexes avec une expertise reconnue en analyse sécuritaire.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo team-photo-anon">
                {teamSilhouette}
                <div className="team-badge-role">INT</div>
              </div>
              <div className="team-info">
                <h4>Responsable International</h4>
                <p className="team-role">Missions à l&apos;étranger</p>
                <p>Opérateur expérimenté en environnements à risque. Expert en gestion sécurisée de déplacements internationaux et protection en zones sensibles.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo team-photo-anon">
                {teamSilhouette}
                <div className="team-badge-role">ANA</div>
              </div>
              <div className="team-info">
                <h4>Analyste Senior</h4>
                <p className="team-role">Intelligence &amp; analyse de risque</p>
                <p>Diplômée en sécurité internationale, spécialiste en analyse de menaces numériques et physiques. Veille proactive et évaluation comportementale.</p>
              </div>
            </div>
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
            <p className="section-tag light">Témoignages</p>
            <h2 className="light">La confiance de nos clients</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>&quot;Un professionnalisme hors pair. L&apos;équipe d&apos;Imperium a géré une situation délicate avec une discrétion et une efficacité exemplaires. Je leur dois ma tranquillité d&apos;esprit.&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar"></div>
                <div>
                  <strong>Client confidentiel</strong>
                  <span>Chef d&apos;entreprise — France</span>
                </div>
              </div>
            </div>
            <div className="testi-card featured">
              <div className="testi-stars">★★★★★</div>
              <p>&quot;Lors d&apos;un déplacement professionnel en zone sensible au Moyen-Orient, l&apos;équipe d&apos;Imperium a assuré notre sécurité du départ à l&apos;arrivée. Un service irréprochable que je recommande à tous les dirigeants.&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar"></div>
                <div>
                  <strong>Client confidentiel</strong>
                  <span>Dirigeant international — Europe</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>&quot;J&apos;avais besoin d&apos;une protection qui comprenne les subtilités de mon exposition publique. Imperium a su créer un dispositif totalement adapté à mon mode de vie, avec une discrétion absolue.&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar"></div>
                <div>
                  <strong>Client confidentiel</strong>
                  <span>Personnalité publique — confidentiel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-wrap">
            <div className="contact-info">
              <p className="section-tag">Nous contacter</p>
              <h2>Parlons de votre protection</h2>
              <p>Chaque situation est unique. Nos experts sont disponibles pour évaluer gratuitement et confidentiellement votre profil de risque et vous proposer la solution adaptée.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="c-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/></svg>
                  </div>
                  <div>
                    <strong>Siège social</strong>
                    <span>10 rue de la Bourse, 75002 Paris, France</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="c-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/></svg>
                  </div>
                  <div>
                    <strong>Ligne sécurisée 24h/24</strong>
                    <span>06 52 62 40 91</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="c-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/></svg>
                  </div>
                  <div>
                    <strong>Email confidentiel</strong>
                    <span>contact@imperiumprotection.fr</span>
                  </div>
                </div>
              </div>
              <div className="emergency-box">
                <div className="emerg-pulse"></div>
                <div>
                  <strong>Urgence sécurité ?</strong>
                  <p>Notre cellule de crise répond immédiatement, 24h/24, 7j/7.</p>
                </div>
              </div>
            </div>
            <ContactForm lang="fr" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo logo-footer">
                <span className="logo-text">IMPERIUM<span>PRIVATE PROTECTION</span></span>
              </Link>
              <p>Experts en protection de l&apos;intégrité physique et accompagnement sécurisé des personnes en France et à l&apos;international.</p>
              <div className="footer-certs">
                <span className="cert-badge">CNAPS</span>
                <span className="cert-badge">APS Certifié</span>
                <span className="cert-badge">ISO 9001</span>
              </div>
            </div>
            <div className="footer-links">
              <h5>Services</h5>
              <ul>
                <li><Link href="/protection-rapprochee">Protection rapprochée</Link></li>
                <li><Link href="/protection-personnalite">Protection personnalité</Link></li>
                <li><Link href="/accompagnement-international">Missions internationales</Link></li>
                <li><Link href="/securisation-residence">Sécurisation de résidence</Link></li>
                <li><Link href="/intelligence-analyse-risque">Intelligence &amp; analyse</Link></li>
                <li><Link href="/cyber-securite">Cyber sécurité</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h5>Société</h5>
              <ul>
                <li><ScrollLink to="about">À propos</ScrollLink></li>
                <li><ScrollLink to="team">Notre équipe</ScrollLink></li>
                <li><ScrollLink to="coverage">Nos zones d&apos;intervention</ScrollLink></li>
                <li><ScrollLink to="contact">Recrutement</ScrollLink></li>
                <li><ScrollLink to="contact">Partenaires</ScrollLink></li>
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
            <p>© 2026 Imperium Private Protection. Tous droits réservés.</p>
            <div className="footer-legal">
              <a href="javascript:void(0)">Mentions légales</a>
              <a href="javascript:void(0)">Politique de confidentialité</a>
              <a href="javascript:void(0)">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
