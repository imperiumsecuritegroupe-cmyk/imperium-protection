import Link from 'next/link'

export default function FrFooter() {
  return (
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
              <li><Link href="/#about">À propos</Link></li>
              <li><Link href="/#team">Notre équipe</Link></li>
              <li><Link href="/#coverage">Zones d&apos;intervention</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
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
  )
}
