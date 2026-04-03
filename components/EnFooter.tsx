import Link from 'next/link'

export default function EnFooter() {
  return (
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
              <li><Link href="/en#about">About us</Link></li>
              <li><Link href="/en#team">Our team</Link></li>
              <li><Link href="/en#coverage">Coverage zones</Link></li>
              <li><Link href="/en#contact">Contact</Link></li>
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
  )
}
