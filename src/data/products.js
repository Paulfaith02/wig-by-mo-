const product = (id, name, category, length, price, image, extras = {}) => ({
  id, name, category, length, price, image, images: [image, image], available: true,
  description: 'Premium, carefully selected hair with a natural finish, comfortable construction and effortless movement. Styled and quality-checked by Wig By Mo.',
  colors: ['Natural Black', 'Deep Brown'],
  ...extras,
})

const asset = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

export const products = [
  product(1, 'SDD Bone Straight', 'luxury', '10–28 inches', 285000, asset('hero-luxury.png'), { featured: true, bestseller: true, badge: 'Bestseller', draw: 'Double Drawn' }),
  product(2, 'Blunt Cut Bob', 'bob', '8–12 inches', 145000, asset('blunt-bob.png'), { featured: true, bestseller: true, badge: 'Signature' }),
  product(3, 'Deep Wave Luxe', 'curly', '18–24 inches', 235000, asset('deep-wave.png'), { featured: true, badge: 'New' }),
  product(4, 'Silky Straight', 'long', '20–28 inches', 265000, asset('hero-luxury.png'), { featured: true, badge: 'New' }),
  product(5, 'Water Curl Closure', 'curly', '18 inches', 198000, asset('deep-wave.png'), { bestseller: true }),
  product(6, 'Glueless T-Frontal Bob', 'glueless', '10 inches', 168000, asset('blunt-bob.png'), { badge: 'Easy Wear' }),
  product(7, 'Raw Donor Straight', 'luxury', '18–30 inches', 420000, asset('hero-luxury.png'), { badge: 'Rare Find' }),
  product(8, 'Classic Cornrow Wig', 'braided', 'Mid-back', 95000, asset('deep-wave.png')),
  product(9, 'Burgundy Ombre Bob', 'colored', '12 inches', 135000, asset('blunt-bob.png'), { colors: ['Burgundy Ombre', 'Natural Black'] }),
  product(10, 'Headband Soft Straight', 'glueless', '20 inches', 118000, asset('hero-luxury.png')),
  product(11, 'Kinky Curly', 'curly', '14–18 inches', 184000, asset('deep-wave.png')),
  product(12, 'Awoof Fashion Bob', 'budget', 'Short', 48000, asset('blunt-bob.png'), { badge: 'Value Pick' }),
]

export const formatPrice = (price) => `₦${price.toLocaleString('en-NG')}`
