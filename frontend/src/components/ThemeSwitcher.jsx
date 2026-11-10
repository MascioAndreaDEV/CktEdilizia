// === SEZIONE 1: IMPORT HOOK REACT & ICONE LUCIDE ===
import { useState, useEffect } from 'react';
import { Palette, Type, X, Check } from 'lucide-react';

// === SEZIONE 2: CONFIGURAZIONE DATI DELLE 4 PALETTE E DEI 3 FONT ===
// Questi array mappano esattamente i riferimenti presenti nella cartella /assets
const PALETTES = [
  {
    id: 'elegance',
    name: 'Black & Gold Elegance',
    colors: ['#000000', '#14213D', '#FCA311', '#E5E5E5'],
  },
  {
    id: 'moonlit',
    name: 'Moonlit Mist',
    colors: ['#2F363A', '#FFFFFF', '#66939E', '#546A7B'],
  },
  {
    id: 'olive',
    name: 'Olive Garden Feast',
    colors: ['#283618', '#606C38', '#FEFAE0', '#BC6C25'],
  },
  {
    id: 'sunset',
    name: 'Dark Sunset',
    colors: ['#355C67', '#FFF3B0', '#E09F3E', '#540B0E'],
  },
];

const FONTS = [
  {
    id: 'technical',
    name: 'Chakra Petch + Roboto',
    badge: 'Tecnico & Strutturale',
  },
  {
    id: 'traditional',
    name: 'Oswald + Merriweather',
    badge: 'Forte & Tradizionale',
  },
  {
    id: 'modern',
    name: 'Space Grotesk + DM Sans',
    badge: 'Moderno & Pulito',
  },
];

export default function ThemeSwitcher() {
  // === SEZIONE 3: STATO DEL COMPONENTE (CON PERSISTENZA LOCALSTORAGE) ===
  // Stato per aprire/chiudere il pannellino Mobile-First
  const [isOpen, setIsOpen] = useState(false);

  // Lazy initialization: legge da localStorage solo al primo render
  const [theme, setTheme] = useState(
    () => localStorage.getItem('ckt_theme') || 'elegance'
  );
  const [font, setFont] = useState(
    () => localStorage.getItem('ckt_font') || 'technical'
  );

  // === SEZIONE 4: EFFETTO DI SINCRONIZZAZIONE CON IL DOM (<html>) ===
  // Quando 'theme' o 'font' cambiano, aggiorniamo gli attributi data-* su <html>
  // così le variabili CSS in index.css (@theme) cambiano valore all'istante
  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem('ckt_theme', theme);
  }, [theme]);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.setAttribute('data-font', font);
    localStorage.setItem('ckt_font', font);
  }, [font]);

  // === SEZIONE 5: RENDER UI MOBILE-FIRST ===
  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* PANNELLINO ESPANDIBILE (Visibile solo quando isOpen === true) */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs rounded-2xl border border-primary/20 bg-bg p-4 text-text shadow-2xl">
          {/* Intestazione Pannello */}
          <div className="mb-3 flex items-center justify-between border-b border-primary/10 pb-2">
            <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Demo Stile Cliente
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-surface"
              aria-label="Chiudi selettore tema"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Selettore 4 Palette Colori */}
          <div className="mb-4">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
              <Palette className="h-3.5 w-3.5" /> 1. Scegli Palette Colori
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {PALETTES.map((item) => {
                const isActive = theme === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTheme(item.id)}
                    className={`flex min-h-[42px] items-center justify-between rounded-xl border px-3 py-2 text-left text-xs font-medium transition ${
                      isActive
                        ? 'border-accent bg-surface font-bold text-primary shadow-sm'
                        : 'border-primary/10 bg-bg text-text hover:bg-surface/60'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && <Check className="h-3.5 w-3.5 text-accent" />}
                      {item.name}
                    </span>
                    {/* Anteprima pallini colore della palette */}
                    <span className="flex items-center gap-1">
                      {item.colors.map((hex) => (
                        <span
                          key={hex}
                          className="h-3.5 w-3.5 rounded-full border border-black/20"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selettore 3 Abbinamenti Font */}
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
              <Type className="h-3.5 w-3.5" /> 2. Scegli Coppia Font
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {FONTS.map((item) => {
                const isActive = font === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFont(item.id)}
                    className={`flex min-h-[42px] flex-col justify-center rounded-xl border px-3 py-1.5 text-left transition ${
                      isActive
                        ? 'border-accent bg-surface text-primary shadow-sm'
                        : 'border-primary/10 bg-bg text-text hover:bg-surface/60'
                    }`}
                  >
                    <span className="flex items-center justify-between text-xs font-bold">
                      {item.name}
                      {isActive && <Check className="h-3.5 w-3.5 text-accent" />}
                    </span>
                    <span className="text-[11px] text-muted">{item.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* BOTTONE FLUTTUANTE DI APERTURA (Touch target min-h-[44px]) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-lg transition active:scale-95"
      >
        <Palette className="h-4 w-4 text-accent" />
        <span>Stile & Font</span>
      </button>
    </div>
  );
}

