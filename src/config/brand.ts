export const brandConfig = {
  name: 'ASSE',
  fullName: 'ASSE — Osteopatia & Fisioterapia',
  tagline: 'Rimettiti in asse.',
  supportingLine:
    'Osteopatia · Fisioterapia · Terapia Manuale · Riabilitazione Posturale',
  accentColor: 'sage' as const,
  heroImage: {
    src: '/images/Trattamento_rilassante_in_studio_wellness.png',
    alt: 'Trattamento rilassante in uno studio wellness luminoso',
  },
} as const;

export const navLinks = [
  { label: 'Trattamenti', href: '#trattamenti' },
  { label: 'Il Percorso', href: '#percorso' },
  { label: 'Il Team', href: '#team' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contatti', href: '#contatti' },
] as const;
