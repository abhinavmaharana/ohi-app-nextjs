import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image 
            src="/assets/img/logo.png" 
            alt="Ohi Logo"
            width={40}
            height={40}
            style={{ borderRadius: '6px' }}
          />
        </div>

        <ul className="footer-links">
          <li><Link href="/terms">Terms & Conditions</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* Instagram Icon */}
        <div className="footer-social">
          <a 
            href="https://www.instagram.com/ohiapp_official?igsh=MWV1ODc1eDhjOXd6Nw==" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image 
              src="/assets/img/insta.png" 
              alt="Instagram Icon" 
              className="insta-icon"
              width={28}
              height={28}
            />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Right Reserved. Copyright 2025-26 Saorsa Technocrat Pvt. Ltd</p>
      </div>
    </footer>
  )
}

