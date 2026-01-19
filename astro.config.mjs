// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: "it", // Idioma por defecto
    locales: ["it", "es"], // Lista de idiomas soportados
    routing: {
        prefixDefaultLocale: false // IMPORTANTE: 'false' significa que el italiano NO tendrá /it/ delante. Será la raíz limpia.
    }
  }
});