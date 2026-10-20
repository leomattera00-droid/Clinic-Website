export interface Condition {
  id: string;
  name: string;
  description: string;
}

export const conditions: Condition[] = [
  {
    id: 'mal-di-schiena',
    name: 'Mal di schiena',
    description:
      'Lombalgia acuta o cronica, tensioni a carico della colonna dorsale e lombare.',
  },
  {
    id: 'cervicalgia',
    name: 'Cervicalgia',
    description:
      'Rigidità e dolore al collo, spesso legati a posture prolungate o stress.',
  },
  {
    id: 'sciatalgia',
    name: 'Sciatalgia',
    description:
      'Irritazione del nervo sciatico, con dolore che irradiato lungo la gamba.',
  },
  {
    id: 'tensioni-muscolari',
    name: 'Tensioni muscolari',
    description:
      'Rigidità localizzata, trigger points e tensioni da stress o sovraccarico.',
  },
  {
    id: 'squilibri-posturali',
    name: 'Squilibri posturali',
    description:
      'Asimmetrie, atteggiamenti posturali errati e squilibri muscolari nel tempo.',
  },
  {
    id: 'recupero-post-infortunio',
    name: 'Recupero post-infortunio',
    description:
      'Percorsi di riabilitazione dopo traumi, interventi o periodi di immobilizzazione.',
  },
];
