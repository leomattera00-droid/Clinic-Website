export interface Treatment {
  id: string;
  name: string;
  category: 'osteopatia' | 'fisioterapia' | 'terapia-manuale' | 'riabilitazione' | 'terapia-sportiva';
  shortDescription: string;
  fullDescription: string;
  duration: string;
  whoItsFor: string;
  techniques: string[];
  image: string;
}

export const treatments: Treatment[] = [
  {
    id: 'osteopatia',
    name: 'Osteopatia',
    category: 'osteopatia',
    shortDescription:
      'Valutazione e trattamento manuale per ripristinare la mobilità di articolazioni, muscoli e tessuti.',
    fullDescription:
      'L\'osteopatia è un approccio terapeutico manuale che considera il corpo nella sua interezza. Attraverso test di mobilità e palpazione, l\'osteopata identifica le restrizioni di movimento nei tessuti e lavora per ripristinarne la funzione, agendo su articolazioni, muscoli, fascia e sistema cranio-sacrale.',
    duration: '50–60 minuti',
    whoItsFor:
      'Per chi avverte tensioni muscolari ricorrenti, rigidità articolare, cervicalgia, lombalgia o squilibri posturali.',
    techniques: [
      'Tecniche strutturali',
      'Mobilitazione articolare',
      'Tecniche fasciali',
      'Approccio cranio-sacrale',
    ],
    image: 'https://images.pexels.com/photos/5794024/pexels-photo-5794024.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    category: 'fisioterapia',
    shortDescription:
      'Riabilitazione funzionale post-infortunio o post-intervento, recupero della forza e del movimento.',
    fullDescription:
      'La fisioterapia si occupa del recupero della funzione motoria dopo un infortunio, un intervento chirurgico o un periodo di immobilizzazione. Il percorso combina esercizio terapeutico, mobilizzazione e, quando utile, terapie strumentali, con l\'obiettivo di restituire forza, escursione di movimento e fiducia nel proprio corpo.',
    duration: '45–60 minuti',
    whoItsFor:
      'Per chi sta affrontando un percorso di recupero post-operatorio, post-traumatico o dopo un periodo di inattività prolungata.',
    techniques: [
      'Esercizio terapeutico',
      'Mobilizzazione neuromeningea',
      'Terapia manuale integrata',
      'Rieducazione motoria',
    ],
    image: 'https://images.pexels.com/photos/20860622/pexels-photo-20860622.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'terapia-manuale',
    name: 'Terapia Manuale',
    category: 'terapia-manuale',
    shortDescription:
      'Tecniche mirate su punti di tensione, rigidità muscolare e mobilità articolare.',
    fullDescription:
      'La terapia manuale utilizza tecniche specifiche applicate direttamente sui tessuti molli e sulle articolazioni per ridurre la tensione, migliorare la mobilità e modulare il dolore. Ogni seduta è costruita sull\'esame clinico e sulle esigenze del momento, senza protocolli standardizzati.',
    duration: '40–50 minuti',
    whoItsFor:
      'Per chi presenta punti di tensione localizzati, trigger points, rigidità articolare o dolore muscolare acuto.',
    techniques: [
      'Massaggio trasverso profondo',
      'Release miotensivo',
      'Mobilizzazione articolare specifica',
      'Pompage connettivale',
    ],
    image: 'https://images.pexels.com/photos/5793786/pexels-photo-5793786.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'riabilitazione-posturale',
    name: 'Riabilitazione Posturale',
    category: 'riabilitazione',
    shortDescription:
      'Percorsi di correzione posturale per il mal di schiena cronico e gli squilibri muscolari.',
    fullDescription:
      'La riabilitazione posturale lavora sugli schemi di movimento e sulle abitudini posturali che generano dolore ricorrente. Attraverso un\'analisi della postura statica e dinamica, il terapista costruisce un percorso di esercizi mirati per riequilibrare i gruppi muscolari e migliorare la consapevolezza del corpo nello spazio.',
    duration: '50 minuti',
    whoItsFor:
      'Per chi soffre di mal di schiena cronico, posture prolungate da lavoro sedentario, squilibri muscolari o tensioni legate alla postura.',
    techniques: [
      'Analisi posturale statica e dinamica',
      'Esercizi di rieducazione posturale',
      'Stretching attivo e globale',
      'Propriocettività e core stability',
    ],
    image: 'https://images.pexels.com/photos/20860593/pexels-photo-20860593.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'terapia-sportiva',
    name: 'Terapia Sportiva',
    category: 'terapia-sportiva',
    shortDescription:
      'Prevenzione e recupero da infortuni per chi pratica sport, a qualsiasi livello.',
    fullDescription:
      'La terapia sportiva unisce riabilitazione e preparazione atletica per accompagnare il ritorno all\'attività dopo un infortunio o per prevenirne il verificarsi. Il percorso include valutazione funzionale specifica per lo sport praticato, esercizi di rinforzo e mobilizzazione, e una fase di riatletizzazione progressiva.',
    duration: '45–60 minuti',
    whoItsFor:
      'Per sportivi di qualsiasi livello — dal principiante all\'agonista — in fase di recupero da infortunio o di prevenzione.',
    techniques: [
      'Valutazione funzionale sport-specifica',
      'Riatletizzazione progressiva',
      'Taping neuromuscolare',
      'Programmi di prevenzione infortuni',
    ],
    image: 'https://images.pexels.com/photos/20860587/pexels-photo-20860587.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export const treatmentCategories = [
  { id: 'all', label: 'Tutti' },
  { id: 'osteopatia', label: 'Osteopatia' },
  { id: 'fisioterapia', label: 'Fisioterapia' },
  { id: 'terapia-manuale', label: 'Terapia Manuale' },
  { id: 'riabilitazione', label: 'Riabilitazione Posturale' },
  { id: 'terapia-sportiva', label: 'Terapia Sportiva' },
] as const;
