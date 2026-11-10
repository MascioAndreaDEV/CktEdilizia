// === SEZIONE: IMPORT DEI PLUGIN DI VITE ===
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// === SEZIONE: CONFIGURAZIONE VITE (REACT + TAILWIND CSS V4) ===
// Registriamo sia il plugin React (per compilare il JSX) sia il plugin ufficiale
// di Tailwind CSS v4 che scansiona automaticamente i nostri componenti .jsx
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
