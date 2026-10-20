import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle, Calendar, Phone, Mail, User, MessageSquare, ChevronDown } from 'lucide-react';
import { treatments } from '@/config/treatments';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

type FormState = {
  nome: string;
  email: string;
  telefono: string;
  trattamento: string;
  giorno: string;
  messaggio: string;
};

const initialForm: FormState = {
  nome: '',
  email: '',
  telefono: '',
  trattamento: '',
  giorno: '',
  messaggio: '',
};

const giorni = [
  'Lunedì',
  'Martedì',
  'Mercoledì',
  'Giovedì',
  'Venerdì',
  'Sabato',
];

export function BookingSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.nome || !form.email || !form.telefono || !form.trattamento) {
      setStatus('error');
      return;
    }

    // Simulated submission — when a backend is available, send the form data there
    setStatus('success');
    setForm(initialForm);
    setDropdownOpen(false);
  };

  const inputClass =
    'w-full bg-transparent border-b border-stone-200 px-0 py-3 text-sm font-light text-espresso-900 placeholder:text-stone-300 focus:border-sage-500 focus:outline-none transition-colors';
  const labelClass =
    'label-eyebrow text-stone-400 mb-1 block';

  return (
    <section id="contatti" className="relative bg-espresso-900 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: headline + intro */}
          <div className="lg:col-span-5">
            <span className="label-eyebrow text-sage-300">Prenota una visita</span>
            <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-ivory-50">
              Il tuo corpo merita<br />
              <span className="italic text-sage-200">attenzione.</span>
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory-100/45">
              Scrivici per prenotare una visita o richiedere informazioni.
              Ti risponderemo entro 24 ore per concordare giorno e orario.
            </p>

            {/* Alternative CTA */}
            <div className="mt-10 border-t border-ivory-100/10 pt-8">
              <p className="label-eyebrow text-ivory-100/30">Oppure</p>
              <a
                href="mailto:info@asse-clinic.it"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sage-300 transition-colors hover:text-sage-200"
              >
                <Mail size={16} strokeWidth={1.5} />
                Richiedi informazioni
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: easeOutExpo }}
                  className="flex flex-col items-center justify-center rounded-sm border border-sage-500/20 bg-espresso-800 p-12 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-500/20">
                    <Check size={24} strokeWidth={1.5} className="text-sage-300" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-light text-ivory-50">
                    Richiesta inviata.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-ivory-100/50">
                    Grazie per averci scritto. Ti contatteremo entro 24 ore
                    per confermare l'appuntamento.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 label-eyebrow text-sage-300 transition-colors hover:text-sage-200"
                  >
                    Invia un'altra richiesta
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  {/* Error message */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex items-start gap-3 rounded-sm border border-red-400/20 bg-red-400/10 p-4"
                    >
                      <AlertCircle size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-red-400" />
                      <p className="text-sm font-light text-red-300">
                        Compila almeno nome, email, telefono e tipo di
                        trattamento per inviare la richiesta.
                      </p>
                    </motion.div>
                  )}

                  {/* Nome + Email */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Nome</label>
                      <div className="flex items-center gap-2">
                        <User size={16} strokeWidth={1.5} className="shrink-0 text-stone-500" />
                        <input
                          type="text"
                          value={form.nome}
                          onChange={(e) => updateField('nome', e.target.value)}
                          placeholder="Il tuo nome"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <div className="flex items-center gap-2">
                        <Mail size={16} strokeWidth={1.5} className="shrink-0 text-stone-500" />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="email@esempio.it"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Telefono + Giorno preferito */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Telefono</label>
                      <div className="flex items-center gap-2">
                        <Phone size={16} strokeWidth={1.5} className="shrink-0 text-stone-500" />
                        <input
                          type="tel"
                          value={form.telefono}
                          onChange={(e) => updateField('telefono', e.target.value)}
                          placeholder="333 123 4567"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Giorno preferito</label>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} strokeWidth={1.5} className="shrink-0 text-stone-500" />
                        <input
                          type="text"
                          value={form.giorno}
                          onChange={(e) => updateField('giorno', e.target.value)}
                          placeholder="es. Mercoledì mattina"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tipo di trattamento — re-themed dropdown */}
                  <div className="relative">
                    <label className={labelClass}>Tipo di trattamento</label>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex w-full items-center justify-between border-b py-3 text-sm font-light transition-colors ${
                        dropdownOpen || form.trattamento
                          ? 'border-sage-500'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <span className={form.trattamento ? 'text-espresso-900' : 'text-stone-300'}>
                        {form.trattamento || 'Seleziona un trattamento'}
                      </span>
                      <ChevronDown
                        size={16}
                        strokeWidth={1.5}
                        className={`shrink-0 text-stone-400 transition-transform duration-300 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-40 mt-2 w-full overflow-hidden rounded-sm border border-stone-200 bg-ivory-50 shadow-lg"
                        >
                          {treatments.map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => {
                                updateField('trattamento', t.name);
                                setDropdownOpen(false);
                              }}
                              className={`block w-full px-4 py-3 text-left text-sm font-light transition-colors hover:bg-ivory-100 ${
                                form.trattamento === t.name
                                  ? 'text-sage-600'
                                  : 'text-espresso-800/70'
                              }`}
                            >
                              {t.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Messaggio */}
                  <div>
                    <label className={labelClass}>Messaggio</label>
                    <div className="flex items-start gap-2">
                      <MessageSquare size={16} strokeWidth={1.5} className="mt-3 shrink-0 text-stone-500" />
                      <textarea
                        rows={3}
                        value={form.messaggio}
                        onChange={(e) => updateField('messaggio', e.target.value)}
                        placeholder="Raccontaci brevemente il motivo della visita"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    type="submit"
                    className="group flex items-center gap-3 rounded-full bg-sage-500 px-7 py-4 text-sm font-medium text-ivory-50 transition-colors hover:bg-sage-600"
                  >
                    Prenota una visita
                    <Check
                      size={18}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
