export const contactConfig = {
  phone: '+39 02 1234 5678',
  phoneHref: 'tel:+390212345678',
  email: 'info@asse-clinic.it',
  emailHref: 'mailto:info@asse-clinic.it',
  address: {
    street: 'Via Brera 12',
    city: '20121 Milano',
    full: 'Via Brera 12, 20121 Milano',
  },
  hours: [
    { day: 'Lun – Ven', time: '09:00 – 19:30' },
    { day: 'Sabato', time: '09:00 – 14:00' },
    { day: 'Domenica', time: 'Chiuso' },
  ],
  bookingCtaLabel: 'Prenota una visita',
} as const;
