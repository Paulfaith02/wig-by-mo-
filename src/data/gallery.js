const asset = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

export const gallery = [
  { image: asset('deep-wave.png'), label: 'Soft definition', className: 'gallery-tall' },
  { image: asset('blunt-bob.png'), label: 'The perfect bob' },
  { image: asset('hero-luxury.png'), label: 'Bone straight luxury', className: 'gallery-wide' },
  { image: asset('blunt-bob.png'), label: 'Ready to wear' },
  { image: asset('deep-wave.png'), label: 'Styled by Mo' },
]
