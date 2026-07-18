const asset = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

export const gallery = [
  { image: asset('sdd-bone-straight.png'), label: 'Bone-straight finish', className: 'gallery-tall' },
  { image: asset('blunt-cut-bob.png'), label: 'Precision bob' },
  { image: asset('deep-wave-luxe.png'), label: 'Deep-wave movement', className: 'gallery-wide' },
  { image: asset('water-curl-closure.png'), label: 'Water-curl texture' },
  { image: asset('classic-cornrow-wig.png'), label: 'Classic cornrows' },
  { image: asset('burgundy-ombre-bob.png'), label: 'Burgundy dimension', className: 'gallery-tall' },
  { image: asset('headband-soft-straight.png'), label: 'Easy headband style' },
  { image: asset('kinky-curly.png'), label: 'Kinky-curly volume', className: 'gallery-wide' },
]
