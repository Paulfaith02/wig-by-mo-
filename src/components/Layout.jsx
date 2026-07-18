import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeart, faSearch, faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Brand from './Brand'

const links = [['/', 'Home'], ['/shop', 'Shop'], ['/gallery', 'Gallery'], ['/about', 'Our Story'], ['/faq', 'FAQ'], ['/contact', 'Contact']]

export default function Layout({ children, wishlistCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0) }, [location.pathname])

  return (
    <div>
      <div className="announcement"><span>Personal wig consultations via WhatsApp</span><span className="announcement-alt">Current unit photos available on request</span></div>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-shell">
          <Brand />
          <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`}>
            {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
          </nav>
          <div className="nav-actions">
            <Link to="/shop" aria-label="Search products"><FontAwesomeIcon icon={faSearch} /></Link>
            <Link to="/wishlist" className="count-icon" aria-label="Wishlist"><FontAwesomeIcon icon={faHeart} />{wishlistCount > 0 && <span>{wishlistCount}</span>}</Link>
            <Link to="/shop" aria-label="Shop"><FontAwesomeIcon icon={faShoppingBag} /></Link>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><FontAwesomeIcon icon={menuOpen ? faTimes : faBars} /></button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <a className="whatsapp-float" href="https://wa.me/2349070874278?text=Hello%20Wig%20By%20Mo%2C%20I%20would%20like%20help%20choosing%20a%20wig." target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /><span>Chat with Mo</span></a>
      <footer className="footer">
        <div className="footer-grid container">
          <div className="footer-brand"><Brand light /><p>Premium wigs, thoughtfully selected and beautifully finished for women who choose effortless confidence.</p><div className="socials"><a href="#instagram" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a><a href="#tiktok" aria-label="TikTok"><FontAwesomeIcon icon={faTiktok} /></a><a href="#facebook" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a></div></div>
          <div><h4>Explore</h4><Link to="/shop">Shop all</Link><Link to="/gallery">The gallery</Link><Link to="/about">Our story</Link><Link to="/contact">Book a consultation</Link></div>
          <div><h4>Client care</h4><Link to="/faq">Style enquiries</Link><Link to="/faq">Current photos</Link><Link to="/faq">Availability</Link><Link to="/faq">Quotes & delivery</Link></div>
          <div><h4>The Mo Edit</h4><p>Private drops, styling notes and first access.</p><form className="footer-form" onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Email address" aria-label="Email address"/><button>Join</button></form></div>
        </div>
        <div className="footer-bottom container"><span>© 2026 Wig By Mo. All rights reserved.</span><span>Nigeria · Enquiries via WhatsApp</span></div>
      </footer>
    </div>
  )
}
