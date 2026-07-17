import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'

export default function QuickView({ product, onClose }) {
  return <AnimatePresence>{product && (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
      <motion.div className="quick-modal" initial={{ opacity: 0, y: 30, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><FontAwesomeIcon icon={faTimes} /></button>
        <div className="quick-image"><img src={product.image} alt={product.name} /></div>
        <div className="quick-copy"><span className="eyebrow">Wig By Mo Collection</span><h2>{product.name}</h2><p className="quick-price">{formatPrice(product.price)}</p><p>{product.description}</p><div className="detail-line"><span>Length</span><strong>{product.length}</strong></div><div className="quick-actions"><a className="btn btn-gold" href={`https://wa.me/2348000000000?text=${encodeURIComponent(`Hello, I would like to order ${product.name}`)}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> Order on WhatsApp</a><Link className="text-link" to={`/product/${product.id}`} onClick={onClose}>Full details</Link></div></div>
      </motion.div>
    </motion.div>
  )}</AnimatePresence>
}
