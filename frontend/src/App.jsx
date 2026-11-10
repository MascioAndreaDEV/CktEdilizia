// === SEZIONE 1: IMPORT DEI COMPONENTI E DELLE ICONE ===
import { Award, PaintRoller, Hammer, MessageCircle } from 'lucide-react';
import ThemeSwitcher from './components/ThemeSwitcher';

// === SEZIONE 2: COMPONENTE PRINCIPALE APP (LAYOUT MOBILE-FIRST) ===
export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-body">
      {/* === SEZIONE 3: ANTEPRIMA DIDATTICA DEL DESIGN SYSTEM === */}
      {/* Mobile-First: px-4 py-8 e colonna singola su smartphone, espanso con md: su tablet/desktop */}
      <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8 md:py-14">
        {/* Card Hero di Test per verificare Palette e Font */}
        <section className="rounded-3xl bg-primary p-6 text-white shadow-xl md:p-10">
          {/* Badge 10+ Anni di Esperienza */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-on-accent">
            <Award className="h-4 w-4" />
            <span>10+ Anni di Esperienza sul Campo</span>
          </div>

          {/* Titolo che usa dinamicamente font-heading */}
          <h1 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            CktEdilizia: Cartongesso, Tinteggiatura &amp; Ristrutturazioni
          </h1>

          {/* Paragrafo che usa dinamicamente font-body */}
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            Precisione artigianale, cantieri puliti e tempi certi. Invia la
            metratura della tua stanza o carica la planimetria per ricevere il
            tuo preventivo dettagliato entro 24 ore.
          </p>

          {/* Pulsanti Touch-Friendly Mobile-First (min-h-[48px], impilati su mobile con flex-col, affiancati da sm:flex-row) */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-on-accent shadow-md transition active:scale-95"
            >
              <PaintRoller className="h-4 w-4" />
              Richiedi Preventivo in 24h
            </button>

            <a
              href="#whatsapp"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              Scrivici su WhatsApp
            </a>
          </div>
        </section>

        {/* Card Superficie (bg-surface) per testare il contrasto secondario della palette */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/10 bg-surface p-5">
            <div className="mb-2 flex items-center gap-2 font-heading text-lg font-bold uppercase text-primary">
              <Hammer className="h-5 w-5 text-accent" />
              <span>Specialisti del Cartongesso</span>
            </div>
            <p className="text-sm text-muted">
              Controsoffitti, pareti divisorie isolanti, velette luminose LED e
              nicchie su misura realizzate a regola d&apos;arte.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-surface p-5">
            <div className="mb-2 flex items-center gap-2 font-heading text-lg font-bold uppercase text-primary">
              <PaintRoller className="h-5 w-5 text-accent" />
              <span>Tinteggiatura &amp; Finiture</span>
            </div>
            <p className="text-sm text-muted">
              Stuccatura, rasatura, trattamenti antimuffa e pittura traspirante
              o lavabile con preventivo rapido in base ai m².
            </p>
          </div>
        </section>
      </main>

      {/* === SEZIONE 4: SELETTORE TEMA E FONT FLUTTUANTE (IN BASSO A SINISTRA) === */}
      <ThemeSwitcher />
    </div>
  );
}
