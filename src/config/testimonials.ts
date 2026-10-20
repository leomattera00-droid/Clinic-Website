export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Dopo alcune settimane di trattamento ho ritrovato una mobilità che pensavo di aver perso. Mi sento più in contatto con il mio corpo.',
    author: 'M.R.',
    context: 'Percorso di osteopatia',
  },
  {
    id: 't2',
    quote:
      'L\'ascolto è la prima cosa che mi ha colpito. Nessuna risposta generica, ma un percorso costruito davvero su di me.',
    author: 'S.B.',
    context: 'Riabilitazione posturale',
  },
  {
    id: 't3',
    quote:
      'Ho recuperato pienamente dopo un infortunio. La fase di riatletizzazione mi ha restituito fiducia nel movimento.',
    author: 'A.T.',
    context: 'Terapia sportiva',
  },
];
