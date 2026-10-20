export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  philosophy: string;
  bio: string;
  photo: string;
  specialties: string[];
}

export const team: TeamMember[] = [
  {
    id: 'elena-rossi',
    name: 'Elena Rossi',
    role: 'Osteopata D.O.',
    specialization: 'Osteopatia strutturale e cranio-sacrale',
    philosophy:
      'Il corpo racconta una storia: imparo ad ascoltarla prima di intervenire.',
    bio: 'Laureata in Fisioterapia e diplomata in Osteopatia presso un istituto riconosciuto dal Registro Europeo degli Osteopati. Ha maturato esperienza clinica in centri specializzati in Italia e all\'estero, approfondendo l\'approccio cranio-sacrale e le tecniche fasciali. Lavora integrando la valutazione strutturale con l\'ascolto della storia clinica di ogni persona.',
    photo: 'https://images.pexels.com/photos/4098289/pexels-photo-4098289.jpeg?auto=compress&cs=tinysrgb&w=1200',
    specialties: ['Osteopatia', 'Terapia Cranio-Sacrale', 'Tecniche Fasciali'],
  },
  {
    id: 'marco-bianchi',
    name: 'Marco Bianchi',
    role: 'Fisioterapista',
    specialization: 'Riabilitazione post-operatoria e terapia sportiva',
    philosophy:
      'Il recupero non è tornare come prima: è arrivare più consapevoli di prima.',
    bio: 'Laureato in Fisioterapia con un Master in Riabilitazione Sportiva. Ha lavorato presso centri di riabilitazione convenzionati con società sportive, seguendo atleti amatori e agonisti in percorsi di riatletizzazione. Il suo approccio combina esercizio terapeutico, valutazione funzionale e educazione al movimento per restituire autonomia e fiducia.',
    photo: 'https://images.pexels.com/photos/4100482/pexels-photo-4100482.jpeg?auto=compress&cs=tinysrgb&w=1200',
    specialties: ['Fisioterapia', 'Terapia Sportiva', 'Riabilitazione Post-Operatoria'],
  },
  {
    id: 'giulia-conti',
    name: 'Giulia Conti',
    role: 'Fisioterapista',
    specialization: 'Rieducazione posturale e riabilitazione pelvica',
    philosophy:
      'La postura non si corregge: si educa, un gesto alla volta.',
    bio: 'Laureata in Fisioterapia con formazione in Rieducazione Posturale Globale e specializzazione in riabilitazione del pavimento pelvico. Si occupa di squilibri posturali legati a vita sedentaria, periodo perinatale e post-operatorio. Lavora sull\'integrazione tra respiro, postura e movimento per costruire percorsi sostenibili nel tempo.',
    photo: 'https://images.pexels.com/photos/8313426/pexels-photo-8313426.jpeg?auto=compress&cs=tinysrgb&w=1200',
    specialties: ['Riabilitazione Posturale', 'RPG', 'Riabilitazione Pelvica'],
  },
];
