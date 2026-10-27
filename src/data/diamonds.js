export const DIAMOND_SHAPES = [
  {
    id: 'round',
    name: 'Round Brilliant',
    shortName: 'Round',
    poetic: 'Eternal brilliance',
    image: '/assets/diamond-round.jpg',
    facets: '57 or 58 facets',
    ratio: '1.00 : 1.00',
    description: 'The pinnacle of optical physics and timeless fire. Crafted with mathematically perfected proportions to maximise total internal reflection.',
    characteristics: ['Maximum Light Dispersion', 'Classic Heritage Cut', 'Ideal Optical Symmetry']
  },
  {
    id: 'emerald',
    name: 'Emerald Cut',
    shortName: 'Emerald',
    poetic: 'Quiet confidence',
    image: '/assets/diamond-emerald.jpg',
    facets: 'Step cut (57 facets)',
    ratio: '1.35 - 1.50',
    description: 'An architectural silhouette defined by rectilinear facets and an iconic hall-of-mirrors reflection that highlights exceptional purity.',
    characteristics: ['Architectural Lines', 'Hall of Mirrors Effect', 'Accentuates Crystal Clarity']
  },
  {
    id: 'oval',
    name: 'Oval Cut',
    shortName: 'Oval',
    poetic: 'Modern romance',
    image: '/assets/diamond-oval.jpg',
    facets: '56 to 58 facets',
    ratio: '1.30 - 1.45',
    description: 'An elongated brilliant cut providing graceful finger coverage and an expansive surface area, blending vintage allure with contemporary fire.',
    characteristics: ['Elongating Silhouette', 'Expansive Face-Up Area', 'Soft Fluid Contours']
  },
  {
    id: 'pear',
    name: 'Pear Shape',
    shortName: 'Pear',
    poetic: 'A rare point of view',
    image: '/assets/diamond-pear.jpg',
    facets: '58 facets',
    ratio: '1.45 - 1.70',
    description: 'A singular union of the round brilliant and marquise cuts, culminating in a delicate teardrop silhouette that radiates bespoke individuality.',
    characteristics: ['Dramatic Teardrop Contour', 'Asymmetrical Elegance', 'Bespoke Presence']
  },
  {
    id: 'heart',
    name: 'Heart Shape',
    shortName: 'Heart',
    poetic: 'Sculpted devotion',
    image: '/assets/diamond-heart.jpg',
    facets: '56 to 59 facets',
    ratio: '0.90 - 1.05',
    description: 'A masterpiece of precision lapidary art requiring flawless cleft symmetry and curved lobes to embody authentic sentimental prestige.',
    characteristics: ['Master Lapidary Precision', 'Distinct Silhouette', 'Sentimental Radiance']
  },
  {
    id: 'princess',
    name: 'Princess Cut',
    shortName: 'Princess',
    poetic: 'Architectural fire',
    image: '/assets/diamond-princess.jpg',
    facets: '57 or 76 facets',
    ratio: '1.00 - 1.05',
    description: 'Sharp pyramid geometry meeting modern brilliance. Four chevron corners reflect sharp bursts of scintillation for the bold aesthetic.',
    characteristics: ['Pyramidal Geometry', 'Geometric Crispness', 'Intense Scintillation']
  }
];

export const ALL_SHAPES_LIST = [
  'Round',
  'Emerald',
  'Pear',
  'Oval',
  'Heart',
  'Princess',
  'Radiant',
  'Marquise',
  'Asscher',
  'Cushion',
  'Fancy'
];

export const FEATURED_DIAMONDS = [
  {
    id: 'sd-9042',
    sku: 'SD-9042-OV',
    title: '2.01 CT Oval Diamond',
    shape: 'Oval',
    carat: '2.01 CT',
    color: 'D',
    clarity: 'VVS1',
    cut: 'Super Ideal',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    cert: 'GIA Certified #74892019',
    price: '$28,450',
    image: '/assets/featured-oval.jpg',
    isPrimary: true,
    tag: 'Vault Reserve',
    measurements: '10.22 × 7.15 × 4.41 mm',
    tablePercent: '59.0%',
    depthPercent: '61.7%'
  },
  {
    id: 'sd-8831',
    sku: 'SD-8831-EM',
    title: '1.50 CT Emerald Cut Diamond',
    shape: 'Emerald',
    carat: '1.50 CT',
    color: 'E',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    cert: 'GIA Certified #63920144',
    price: '$16,800',
    image: '/assets/featured-emerald.jpg',
    isPrimary: false,
    tag: 'Bespoke Select',
    measurements: '7.85 × 5.42 × 3.58 mm',
    tablePercent: '64.0%',
    depthPercent: '66.1%'
  },
  {
    id: 'sd-7620',
    sku: 'SD-7620-RD',
    title: '1.20 CT Round Brilliant Diamond',
    shape: 'Round',
    carat: '1.20 CT',
    color: 'F',
    clarity: 'VVS2',
    cut: 'Hearts & Arrows Ideal',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'Faint',
    cert: 'IGI Certified #LG5892110',
    price: '$12,950',
    image: '/assets/featured-round.jpg',
    isPrimary: false,
    tag: 'Rare Scintillation',
    measurements: '6.84 × 6.87 × 4.22 mm',
    tablePercent: '57.0%',
    depthPercent: '61.5%'
  }
];

export const TRUST_PILLARS = [
  'EXPERTLY SELECTED',
  'CERTIFICATE-READY',
  'PRIVATE CONSULTATION',
  'PRECISION CUT',
  'WORLDWIDE ELEGANCE'
];
