const asset = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

const product = (id, name, category, length, image, extras = {}) => ({
  id,
  name,
  category,
  length,
  image,
  images: [image],
  available: true,
  availability: 'Enquire for availability',
  styleNote: 'Style reference image — request current unit photos on WhatsApp before ordering.',
  description: 'A polished Wig By Mo style selected for a natural finish, comfortable wear and effortless confidence. Message us to confirm the exact unit, available lengths, colours and current quote.',
  colors: ['Natural Black', 'Deep Brown'],
  ...extras,
})

export const products = [
  product(1, 'SDD Bone Straight', 'luxury', '10–28 inches', asset('sdd-bone-straight.png'), {
    featured: true, bestseller: true, badge: 'Bestseller', draw: 'Double Drawn',
  }),
  product(2, 'Blunt Cut Bob', 'bob', '8–12 inches', asset('blunt-cut-bob.png'), {
    featured: true, bestseller: true, badge: 'Signature',
  }),
  product(3, 'Deep Wave Luxe', 'curly', '18–24 inches', asset('deep-wave-luxe.png'), {
    featured: true, badge: 'New',
  }),
  product(4, 'Silky Straight', 'long', '20–28 inches', asset('silky-straight.png'), {
    featured: true, badge: 'New',
  }),
  product(5, 'Water Curl Closure', 'curly', '18 inches', asset('water-curl-closure.png'), {
    bestseller: true,
  }),
  product(6, 'Glueless T-Frontal Bob', 'glueless', '10 inches', asset('glueless-t-frontal-bob.png'), {
    badge: 'Easy Wear',
  }),
  product(7, 'Raw Donor Straight', 'luxury', '18–30 inches', asset('raw-donor-straight.png'), {
    badge: 'Rare Find',
  }),
  product(8, 'Classic Cornrow Wig', 'braided', 'Mid-back', asset('classic-cornrow-wig.png'), {
    colors: ['Natural Black'],
  }),
  product(9, 'Burgundy Ombre Bob', 'colored', '12 inches', asset('burgundy-ombre-bob.png'), {
    colors: ['Burgundy Ombre', 'Natural Black'],
  }),
  product(10, 'Headband Soft Straight', 'glueless', '20 inches', asset('headband-soft-straight.png'), {
    badge: 'Easy Wear',
  }),
  product(11, 'Kinky Curly', 'curly', '14–18 inches', asset('kinky-curly.png')),
  product(12, 'Awoof Fashion Bob', 'budget', 'Short', asset('awoof-fashion-bob.png'), {
    badge: 'Value Pick', colors: ['Espresso Brown', 'Natural Black'],
  }),
]
