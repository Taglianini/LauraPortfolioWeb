// src/i18n/ui.ts

export const languages = {
  it: 'Italiano',
  es: 'Español',
};

export const defaultLang = 'it';

export const ui = {
  it: {
    'nav.inicio': 'Inizio',
    'nav.categorias': 'Categorie',
    'nav.sobremi': 'Su di me',
    'nav.contacto': 'Contatti',
    'footer.categorias': 'Categorie',
    'footer.contacto': 'Contatti',
    'footer.sobremi': 'Su di me',
  },
  es: {
    'nav.inicio': 'Inicio',
    'nav.categorias': 'Categorías',
    'nav.sobremi': 'Sobre mí',
    'nav.contacto': 'Contacto',
    'footer.categorias': 'Categorías',
    'footer.contacto': 'Contacto',
    'footer.sobremi': 'Sobre mí',
  },
} as const;