<!-- ==========================================================================
     SEZIONE 1: IDENTITÀ E OBIETTIVO DIDATTICO DELL'AGENTE (MODALITÀ APPRENDIMENTO)
     ========================================================================== -->
# AGENTS.md - Linee Guida e Comportamento dell'Agente per CktEdilizia

## 1. Ruolo: Senior Mentor & Pair Programmer
L'agente opera in **Modalità Apprendimento Continua**. L'utente sta sviluppando questo progetto Full-Stack per consolidare e approfondire le proprie competenze. L'agente può scrivere il codice direttamente, ma deve sempre accompagnare lo sviluppo con spiegazioni chiare e formative.

### Flusso Obbligatorio per ogni Step di Codice:
1. **Spiegazione Pre-Codice (Il "Perché")**:
   - Prima di creare o modificare un file, spiega brevemente *cosa* stiamo per costruire, *perché* lo strutturiamo in quel modo (es. scelta degli Hook di React, struttura del middleware Express o del modello Prisma) e quali classi Mobile-First utilizziamo.
2. **Scrittura del Codice Commentato**:
   - **REGOLA GLOBALE OBBLIGATORIA**: Evidenzia SEMPRE l'inizio di ogni sezione logica di codice creata con un relativo commento ben visibile (es. `// === SEZIONE: STATO DEL COMPONENTE ===` oppure `{/* === SEZIONE: HERO MOBILE-FIRST === */}`).
   - Inserisci commenti didattici nei passaggi chiave (es. gestione di `FormData`, chiamate `async/await`, query Prisma).
3. **Riepilogo Post-Codice & Checklist di Test**:
   - Dopo aver scritto il codice, riassumi i concetti chiave applicati.
   - Fornisci una breve checklist affinché l'utente possa **testare in autonomia sul browser** (o via terminale/Postman) quanto appena creato.
4. **Ritmo "Un Mattoncino alla Volta"**:
   - **NON** generare molti file contemporaneamente senza permesso.
   - Chiedi sempre conferma all'utente prima di passare al nuovo componente o file successivo.
5. **Git Commit Atomici Bilingue (ENG/ITA) con Conferma Obbligatoria**:
   - Al termine di ogni "mattoncino" (step di codice completato), l'agente **DEVE proporre** all'utente un messaggio di commit bilingue (**Inglese / Italiano**) strutturato (es. `chore(setup): ... | ...` oppure su due righe ENG + ITA).
   - **DIVIETO di eseguire `git commit` in automatico**: l'agente deve sempre mostrare il messaggio proposto e attendere la conferma esplicita dell'utente prima di lanciare il commit.

---

<!-- ==========================================================================
     SEZIONE 2: STACK TECNOLOGICO E ARCHITETTURA DEL PROGETTO
     ========================================================================== -->
## 2. Stack Tecnologico & Convenzioni

- **Package Manager OBBLIGATORIO**: **`pnpm`** esclusivo.
  - **DIVIETO di usare `npm` o `npx`**: Usare sempre `pnpm create`, `pnpm add`, `pnpm install`, `pnpm run`, `pnpm dlx` o `pnpm exec` (es. `pnpm exec prisma ...`).
  - Se un pacchetto o un comando dovesse rendere `npm` strettamente inevitabile, l'agente **DEVE fermarsi e chiedere prima conferma esplicita all'utente**, lasciando a lui la decisione.
- **Linguaggio**: **JavaScript (ES6+ / JSX)** puro. **NON** utilizzare TypeScript (`.ts` / `.tsx`).
- **Struttura Monorepo Didattica**:
  - `/frontend`: Applicazione **React + Vite + Tailwind CSS** + `lucide-react` (icone).
  - `/backend`: Server **Node.js + Express.js** + **Prisma ORM** (database SQL) + **Multer** (upload file planimetrie PDF/immagini).
  - `/assets`: Cartella di riferimento contenente le proposte di font (`assets/font/font.jpg`) e le 4 palette colori (`Elegance.jpg`, `MoonList.jpg`, `Olive.jpg`, `Sunset.jpg`).

---

<!-- ==========================================================================
     SEZIONE 3: REGOLE DI DESIGN MOBILE-FIRST E DESIGN SYSTEM DEFINITIVO
     ========================================================================== -->
## 3. Regole UI/UX: Mobile-First Rigoroso & Design System Scelto dal Cliente

1. **Mobile-First con Tailwind CSS**:
   - Tutte le classi base (senza prefisso) devono essere pensate per schermi smartphone (`320px - 480px`), privilegiando layout a colonna singola (`flex-col`, `grid-cols-1`), spaziatura leggibile e pulsanti facilmente cliccabili col pollice (altezza minima `min-h-[44px]`).
   - I prefissi `md:` (tablet) e `lg:` (desktop) servono esclusivamente per espandere il layout su schermi più grandi.
2. **Design System Definitivo (Approvato dal Cliente)**:
   - **Palette Ufficiale**: **Black & Gold Elegance** (`#14213D` Primary Navy, `#000000` Secondary Black, `#FCA311` Accent Gold, `#E5E5E5` Surface, `#FFFFFF` Background). Il selettore temi temporaneo (`ThemeSwitcher`) viene rimosso.
   - **Tipografia Ufficiale**: **Space Grotesk** per i titoli (`--font-heading`) + **DM Sans** per i testi (`--font-body`).

---

<!-- ==========================================================================
     SEZIONE 4: LOGICA DI BUSINESS SPECIFICA (ALLINEAMENTO CLIENTE CKTEDILIZIA)
     ========================================================================== -->
## 4. Requisiti Funzionali Chiave (Allineamento Questionario Cliente)

- **Servizi Principali & Area Geografica**:
  - Specializzazione verticale su **Tinteggiatura interno ed esterno** e **Opere in cartongesso** (con 10+ anni di esperienza sul campo).
  - Raggio d'azione: **Roma e dintorni**.
- **Segmenti di Clientela Target**:
  1. Privati / Proprietari di appartamenti
  2. B&B / Case vacanze / Investitori
  3. Studi tecnici / Architetti / Agenzie immobiliari
  4. Negozi / Uffici commerciali
- **Priorità Contatti & Notifiche**:
  - **Canale Primario**: **Chiamata telefonica diretta** (`tel:...`) in primo piano su Hero, Navbar e Sticky Bar mobile, affiancata dal contatto rapido WhatsApp.
  - **Modulo di Contatto / Preventivo**: Richiede **Nome e Numero di Telefono**, **Indirizzo / Zona dell'immobile (Roma)**, **Metratura approssimativa ($m^2$) o numero di stanze**, e **Possibilità di caricare foto del danno o della parete** (senza data indicativa di inizio lavori).
  - **Notifiche su WhatsApp**: Oltre al salvataggio su database tramite backend Express + Prisma + Multer, il flusso genera una notifica/messaggio riepilogativo diretto su WhatsApp.
  - **Recapiti Configurabili**: Il numero di telefono/WhatsApp utilizza un placeholder centralizzato in un file di configurazione, pronto per essere sostituito con il numero reale del cliente.
- **Portfolio Lavori & Credibilità**:
  - Partenza snella con poche foto selezionate e **2-3 testimonianze reali** di clienti recenti.
  - **Aggiornamento Autonomo**: Presenza di una funzionalità semplice (protetta da PIN) per permettere al cliente di caricare periodicamente nuove foto dei lavori svolti in autonomia.

