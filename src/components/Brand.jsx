import { Link } from 'react-router-dom'

export default function Brand({ light = false }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Wig By Mo home">
      <span className="brand-mark">M<span className="strand" /></span>
      <span className="brand-copy"><strong>WIG BY MO</strong><small>Luxury Hair Collection</small></span>
    </Link>
  )
}
