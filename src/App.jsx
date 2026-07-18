import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAward, faChevronDown, faClock, faFilter, faHeart, faMapMarkerAlt, faPhone, faSearch, faShieldAlt, faStar, faTimes, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Layout from './components/Layout'
import ProductCard from './components/ProductCard'
import QuickView from './components/QuickView'
import { useLocalStorage } from './hooks/useLocalStorage'
import { products } from './data/products'
import { categories } from './data/categories'
import { reviews } from './data/reviews'
import { faqs } from './data/faqs'
import { gallery } from './data/gallery'

const pageMotion = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: .45 } }
const whatsapp = '2349070874278'
const asset = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

function Seo({ title, description }) {
  return <Helmet><title>{title} | Wig By Mo</title><meta name="description" content={description} /></Helmet>
}

function SectionHead({ kicker, title, text, light = false }) {
  return <div className={`section-head ${light ? 'light' : ''}`}><span className="eyebrow">{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function Home({ wishlist, toggleWishlist, openQuick }) {
  const featured = products.filter((p) => p.featured)
  return <motion.div {...pageMotion}>
    <Seo title="Luxury Hair Collection" description="Premium human hair wigs, effortless glueless units and expert wig styling in Lagos, Nigeria." />
    <section className="hero">
      <img className="hero-bg" src={asset('hero-luxury.png')} alt="Wig By Mo bone straight luxury wig" />
      <div className="hero-shade" />
      <div className="hero-content container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>
          <span className="eyebrow gold">The new standard in effortless luxury</span>
          <h1>Wear the hair.<br/><em>Own the room.</em></h1>
          <p>Premium wigs, thoughtfully finished to look natural, feel effortless and move beautifully.</p>
          <div className="hero-actions"><Link to="/shop" className="btn btn-gold">Explore the collection <FontAwesomeIcon icon={faArrowRight} /></Link><Link to="/contact" className="btn btn-ghost">Book a private consultation</Link></div>
          <div className="hero-proof"><div><strong>12+</strong><span>Style inspirations</span></div><div><strong>1:1</strong><span>Personal guidance</span></div><div><strong>WA</strong><span>Direct enquiries</span></div></div>
        </motion.div>
      </div>
      <div className="scroll-cue"><span>Discover</span><i /></div>
    </section>

    <section className="trust-strip"><div className="container trust-grid"><div><FontAwesomeIcon icon={faSearch}/><span><strong>Browse by style</strong><small>Find your preferred look</small></span></div><div><FontAwesomeIcon icon={faShieldAlt}/><span><strong>Current photos</strong><small>Request before ordering</small></span></div><div><FontAwesomeIcon icon={faWandMagicSparkles}/><span><strong>Personal guidance</strong><small>Discuss your ideal finish</small></span></div><div><FontAwesomeIcon icon={faWhatsapp}/><span><strong>Direct support</strong><small>Chat with Wig By Mo</small></span></div></div></section>

    <section className="section container">
      <div className="split-heading"><SectionHead kicker="The Mo Edit" title="Chosen for your every mood." text="Signature textures and silhouettes designed to make getting ready the easiest part of your day."/><Link to="/shop" className="text-link">Shop all pieces <FontAwesomeIcon icon={faArrowRight}/></Link></div>
      <div className="product-grid home-products">{featured.map((item) => <ProductCard key={item.id} product={item} wished={wishlist.includes(item.id)} onWish={toggleWishlist} onQuick={openQuick} />)}</div>
    </section>

    <section className="editorial-section">
      <div className="editorial-image"><img src={asset('blunt-bob.png')} alt="Wig By Mo blunt cut bob" loading="lazy"/><span className="vertical-note">Precision · Polish · Presence</span></div>
      <div className="editorial-copy"><span className="eyebrow">The signature bob</span><h2>Quiet luxury.<br/><em>Sharp finish.</em></h2><p>The kind of hair that needs no introduction. Sleek, precision-cut and customized to frame you perfectly.</p><ul><li><FontAwesomeIcon icon={faAward}/> Premium human hair</li><li><FontAwesomeIcon icon={faClock}/> Five-minute install</li><li><FontAwesomeIcon icon={faShieldAlt}/> Natural, secure fit</li></ul><Link to="/product/2" className="btn btn-dark">Meet the signature bob <FontAwesomeIcon icon={faArrowRight}/></Link></div>
    </section>

    <section className="section testimonials"><SectionHead kicker="How it works" title="From inspiration to confirmation." text="A simple, honest way to find your preferred style without outdated prices or stock information."/>
      <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 4500 }} pagination={{ clickable: true }} spaceBetween={24} breakpoints={{ 800: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}>
        {reviews.map((review) => <SwiperSlide key={review.id}><article className="review-card"><span className="process-number">0{review.id}</span><blockquote>{review.quote}</blockquote><div><strong>{review.name}</strong><span>{review.city} · {review.product}</span></div></article></SwiperSlide>)}
      </Swiper>
    </section>

    <section className="instagram-section"><div className="container"><SectionHead kicker="@wigbymo" title="From our chair to your feed."/><div className="insta-row">{gallery.slice(0,4).map((g,i)=><Link to="/gallery" key={i} className="insta-item"><img src={g.image} alt={g.label} loading="lazy"/><span><FontAwesomeIcon icon={faInstagram}/> View look</span></Link>)}</div></div></section>
    <section className="closing-cta"><div><span className="eyebrow gold">Your perfect hair is waiting</span><h2>Let’s find your next<br/><em>signature look.</em></h2><p>Not sure where to begin? Tell us the look you love and we’ll guide you personally.</p><Link to="/contact" className="btn btn-gold">Talk to a wig expert <FontAwesomeIcon icon={faArrowRight}/></Link></div></section>
  </motion.div>
}

function Shop({ wishlist, toggleWishlist, openQuick }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const filtered = useMemo(() => products.filter(p => (category === 'all' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())).sort((a,b) => sort === 'az' ? a.name.localeCompare(b.name) : sort === 'za' ? b.name.localeCompare(a.name) : Number(b.featured)-Number(a.featured)), [query, category, sort])
  return <motion.div {...pageMotion}>
    <Seo title="Shop Premium Wigs" description="Shop luxury human hair, bob, curly, braided and glueless wigs from Wig By Mo." />
    <PageHero kicker="The collection" title="Hair that speaks before you do." text="Explore premium textures, flawless cuts and easy-wear units curated for every version of you." />
    <section className="shop-section container">
      <div className="shop-toolbar"><div className="search-box"><FontAwesomeIcon icon={faSearch}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search the collection" /></div><button className="filter-toggle" onClick={()=>setFiltersOpen(!filtersOpen)}><FontAwesomeIcon icon={faFilter}/> Categories</button><select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort products"><option value="featured">Featured first</option><option value="az">Name: A to Z</option><option value="za">Name: Z to A</option></select></div>
      <div className={`category-chips ${filtersOpen ? 'show' : ''}`}>{categories.map(c=><button key={c.id} className={category===c.id?'active':''} onClick={()=>setCategory(c.id)}>{c.name}</button>)}</div>
      <div className="results-line"><span>{filtered.length} pieces</span>{(query || category!=='all') && <button onClick={()=>{setQuery('');setCategory('all')}}>Clear filters <FontAwesomeIcon icon={faTimes}/></button>}</div>
      {filtered.length ? <div className="product-grid">{filtered.map(item=><ProductCard key={item.id} product={item} wished={wishlist.includes(item.id)} onWish={toggleWishlist} onQuick={openQuick}/>)}</div> : <div className="empty-state"><h3>No pieces found</h3><p>Try another search or browse the full collection.</p></div>}
    </section>
  </motion.div>
}

function ProductDetails({ wishlist, toggleWishlist }) {
  const { id } = useParams(); const product = products.find(p=>p.id===Number(id)); const [length, setLength] = useState(''); const [color, setColor] = useState('')
  const [, setRecent] = useLocalStorage('wigbymo-recent', [])
  useEffect(()=>{ if(product) setRecent(prev=>[product.id,...prev.filter(i=>i!==product.id)].slice(0,4)) },[product, setRecent])
  if(!product) return <Navigate to="/shop" replace/>
  const related = products.filter(p=>p.category===product.category && p.id!==product.id).slice(0,3)
  const orderUrl=`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hello Wig By Mo, I am interested in the ${product.name}${length?` (${length})`:''}${color?` in ${color}`:''}. Please send current unit photos, confirm availability and share a quote.`)}`
  return <motion.div {...pageMotion} className="product-page">
    <Seo title={product.name} description={`Shop ${product.name}, ${product.length}, from Wig By Mo.`}/>
    <div className="breadcrumbs container"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span><strong>{product.name}</strong></div>
    <section className="product-detail container"><div className="detail-gallery"><div className="main-detail-image"><img src={product.image} alt={product.name}/>{product.badge&&<span className="badge">{product.badge}</span>}</div><div className="thumbs"><button className="active"><img src={product.image} alt="Front view"/></button><button><img src={product.image} alt="Detail view"/></button></div></div>
      <div className="detail-copy"><span className="eyebrow">Premium collection</span><h1>{product.name}</h1><div className="rating"><span><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span> Style selected by Wig By Mo</div><div className="availability-panel"><strong>Available by enquiry</strong><span>Message us for current photos, options and a personal quote.</span></div><p className="detail-desc">{product.description}</p><p className="style-reference"><FontAwesomeIcon icon={faShieldAlt}/> {product.styleNote}</p>
        <div className="selector"><div><label>Preferred length</label><span>{product.length}</span></div><div className="option-row">{product.length.split('–').map(v=><button key={v} className={length===v?'active':''} onClick={()=>setLength(v)}>{v.trim()}</button>)}</div></div>
        <div className="selector"><div><label>Color</label><span>{color||'Select one'}</span></div><div className="option-row">{product.colors.map(v=><button key={v} className={color===v?'active':''} onClick={()=>setColor(v)}><i className={v.toLowerCase().includes('brown')?'brown':''}/>{v}</button>)}</div></div>
        <div className="detail-actions"><a className="btn btn-gold" href={orderUrl} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}/> Ask about this style</a><button className={`detail-wish ${wishlist.includes(product.id)?'active':''}`} onClick={()=>toggleWishlist(product.id)}><FontAwesomeIcon icon={faHeart}/></button></div>
        <div className="assurance"><div><FontAwesomeIcon icon={faWhatsapp}/><span><strong>Request current photos</strong><small>See the exact available unit</small></span></div><div><FontAwesomeIcon icon={faShieldAlt}/><span><strong>Confirm before ordering</strong><small>Options and quote shared directly</small></span></div></div>
        <details open><summary>Details & construction <FontAwesomeIcon icon={faChevronDown}/></summary><p>{product.draw||'Premium density'} · Natural hairline · Secure, comfortable cap · Professionally finished</p></details><details><summary>Care guide <FontAwesomeIcon icon={faChevronDown}/></summary><p>Detangle gently and store on a wig stand. Use lightweight products and minimal heat.</p></details>
      </div></section>
    {related.length>0&&<section className="section container"><SectionHead kicker="You may also love" title="More from this collection."/><div className="product-grid related-grid">{related.map(p=><ProductCard key={p.id} product={p} wished={wishlist.includes(p.id)} onWish={toggleWishlist} onQuick={()=>{}}/>)}</div></section>}
  </motion.div>
}

function PageHero({ kicker, title, text }) { return <section className="page-hero"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}><span className="eyebrow gold">{kicker}</span><h1>{title}</h1><p>{text}</p></motion.div></section> }

function Gallery() { return <motion.div {...pageMotion}><Seo title="Gallery" description="Explore Wig By Mo texture and styling references."/><PageHero kicker="The lookbook" title="Find the look that feels like you." text="Explore style references, then message us for current unit photos and available options."/><section className="section container"><p className="gallery-disclaimer"><FontAwesomeIcon icon={faShieldAlt}/> These are style-reference images. Request current product photos on WhatsApp before confirming an order.</p><div className="masonry">{gallery.map((g,i)=><motion.figure key={g.image} className={g.className||''} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><img src={g.image} alt={g.label}/><figcaption><span>{String(i+1).padStart(2,'0')}</span><strong>{g.label}</strong></figcaption></motion.figure>)}</div></section></motion.div> }

function About() { return <motion.div {...pageMotion}><Seo title="Our Story" description="Meet Wig By Mo, a Nigerian luxury wig brand built around quality, ease and confidence."/><PageHero kicker="Our story" title="Luxury should feel like you." text="Not a costume. Not a compromise. Just exceptional hair that lets your confidence take the lead."/><section className="story container"><div className="story-image"><img src={asset('deep-wave.png')} alt="Wig By Mo luxury curly wig"/></div><div className="story-copy"><span className="eyebrow">The woman behind the name</span><h2>Created with care.<br/><em>Curated with intention.</em></h2><p>Wig By Mo began with one simple belief: every woman deserves hair that feels as good as it looks. No uncertainty, no disappointing textures, no complicated installs.</p><p>We source thoughtfully, inspect every unit and finish each detail with the woman wearing it in mind. The result is a collection made for real life—beautifully.</p><div className="signature">Mo <span>Founder, Wig By Mo</span></div></div></section><section className="values"><div className="container"><SectionHead kicker="What guides us" title="The details are the difference." light/><div className="value-grid"><article><span>01</span><h3>Quality, always</h3><p>We select hair for softness, longevity, movement and a finish that remains beautiful.</p></article><article><span>02</span><h3>Made personal</h3><p>We listen first, then help you choose the fit, texture and finish that suits you.</p></article><article><span>03</span><h3>Effortless beauty</h3><p>Our units are designed to simplify your routine without compromising your standard.</p></article></div></div></section></motion.div> }

function FAQ() { const [open,setOpen]=useState(0); return <motion.div {...pageMotion}><Seo title="Frequently Asked Questions" description="Answers about Wig By Mo style enquiries, current photos, availability, quotes and care."/><PageHero kicker="Client care" title="Everything you need to know." text="Clear answers for browsing styles and confirming the exact unit directly with Wig By Mo."/><section className="faq-wrap container"><div className="faq-aside"><span className="eyebrow">Still curious?</span><h2>We’re here to help.</h2><p>Chat directly with our team for style guidance, current photos or availability.</p><a className="btn btn-dark" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}/> Ask us anything</a></div><div className="faq-list">{faqs.map((f,i)=><article key={f.q} className={open===i?'open':''}><button onClick={()=>setOpen(open===i?-1:i)}><span><small>{f.group}</small>{f.q}</span><FontAwesomeIcon icon={faChevronDown}/></button><AnimatePresence>{open===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{f.a}</motion.p>}</AnimatePresence></article>)}</div></section></motion.div> }

function Contact() {
  const { register, handleSubmit, reset, formState:{ errors } } = useForm({ defaultValues: JSON.parse(localStorage.getItem('wigbymo-contact-draft') || '{}') })
  const submit = (data) => {
    const message = `Hello Wig By Mo, my name is ${data.name}.\n\nI need help with: ${data.interest}.\nPhone: ${data.phone}${data.email ? `\nEmail: ${data.email}` : ''}${data.message ? `\n\nDetails: ${data.message}` : ''}`
    localStorage.removeItem('wigbymo-contact-draft')
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    toast.success('Opening your enquiry in WhatsApp.')
    reset()
  }
  return <motion.div {...pageMotion}>
    <Seo title="Contact" description="Contact Wig By Mo for wig consultations, current unit photos, availability and styling support."/>
    <PageHero kicker="Private client care" title="Let’s talk about your hair." text="For style advice, current unit photos and availability, our team is ready to help on WhatsApp."/>
    <section className="contact-wrap container">
      <div className="contact-details"><span className="eyebrow">Message us directly</span><h2>We’d love to help you choose.</h2><p>Tell us the look you want and we’ll share current photos, available options and a personal quote.</p><a className="contact-method" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}/><span><small>WhatsApp</small><strong>+234 907 087 4278</strong></span></a><a className="contact-method" href="tel:+2349070874278"><FontAwesomeIcon icon={faPhone}/><span><small>Phone</small><strong>+234 907 087 4278</strong></span></a><div className="contact-method"><FontAwesomeIcon icon={faMapMarkerAlt}/><span><small>Service area</small><strong>Nigeria · Delivery details on request</strong></span></div><div className="contact-method"><FontAwesomeIcon icon={faClock}/><span><small>Response</small><strong>Message us for current availability</strong></span></div></div>
      <form className="contact-form" onSubmit={handleSubmit(submit)} onChange={e=>localStorage.setItem('wigbymo-contact-draft',JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))))}><div className="form-head"><span>01</span><h3>Tell us what you’re looking for</h3></div><label>Full name<input {...register('name',{required:true})} placeholder="Your name"/>{errors.name&&<small>Please enter your name</small>}</label><label>Phone / WhatsApp<input {...register('phone',{required:true})} placeholder="+234"/>{errors.phone&&<small>Please enter your phone number</small>}</label><label>Email address (optional)<input type="email" {...register('email')} placeholder="you@example.com"/></label><label>How can we help?<select {...register('interest')}><option>Help choosing a wig</option><option>Request current unit photos</option><option>Check availability and quote</option><option>Custom request</option></select></label><label>Tell us more<textarea {...register('message')} rows="5" placeholder="The style, length or occasion you have in mind..."/></label><button className="btn btn-gold">Continue on WhatsApp <FontAwesomeIcon icon={faWhatsapp}/></button></form>
    </section>
  </motion.div>
}

function Wishlist({ wishlist, toggleWishlist, openQuick }) { const saved=products.filter(p=>wishlist.includes(p.id)); return <motion.div {...pageMotion}><Seo title="Your Wishlist" description="Your saved Wig By Mo styles."/><PageHero kicker="Saved for later" title="Your private edit." text="The pieces that caught your eye, all in one place."/><section className="section container">{saved.length?<div className="product-grid">{saved.map(p=><ProductCard key={p.id} product={p} wished onWish={toggleWishlist} onQuick={openQuick}/>)}</div>:<div className="empty-state"><FontAwesomeIcon icon={faHeart}/><h3>Your edit is waiting</h3><p>Save any piece you love and it will appear here.</p><Link to="/shop" className="btn btn-dark">Explore the collection</Link></div>}</section></motion.div> }

function App() {
  const [wishlist, setWishlist] = useLocalStorage('wigbymo-wishlist', [])
  const [quick, setQuick] = useState(null)
  const toggleWishlist=id=>setWishlist(prev=>{const exists=prev.includes(id);toast(exists?'Removed from your wishlist':'Saved to your wishlist',{icon:exists?'♡':'♥'});return exists?prev.filter(x=>x!==id):[...prev,id]})
  return <Layout wishlistCount={wishlist.length}><Toaster position="bottom-center" toastOptions={{style:{background:'#121212',color:'#fff',borderRadius:'2px'}}}/><Routes><Route path="/" element={<Home wishlist={wishlist} toggleWishlist={toggleWishlist} openQuick={setQuick}/>}/><Route path="/shop" element={<Shop wishlist={wishlist} toggleWishlist={toggleWishlist} openQuick={setQuick}/>}/><Route path="/product/:id" element={<ProductDetails wishlist={wishlist} toggleWishlist={toggleWishlist}/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/about" element={<About/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/contact" element={<Contact/>}/><Route path="/wishlist" element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} openQuick={setQuick}/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes><QuickView product={quick} onClose={()=>setQuick(null)}/></Layout>
}

export default App
