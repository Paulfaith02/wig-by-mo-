import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEye, faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { formatPrice } from '../data/products'

export default function ProductCard({ product, wished, onWish, onQuick }) {
  return (
    <motion.article className="product-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} loading="lazy" /></Link>
        {product.badge && <span className="badge">{product.badge}</span>}
        <button className={`wish-btn ${wished ? 'wished' : ''}`} onClick={() => onWish(product.id)} aria-label="Add to wishlist"><FontAwesomeIcon icon={wished ? heartSolid : faHeart} /></button>
        <button className="quick-btn" onClick={() => onQuick(product)}><FontAwesomeIcon icon={faEye} /> Quick view</button>
      </div>
      <div className="product-info">
        <div><p>{product.length}</p><h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3></div>
        <span className="price">{formatPrice(product.price)}</span>
      </div>
      <Link className="product-link" to={`/product/${product.id}`}>View details <FontAwesomeIcon icon={faArrowRight} /></Link>
    </motion.article>
  )
}
