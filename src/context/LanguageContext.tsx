import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.archive': 'Archive',
    'footer.contact': 'Contact',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Notice',
    'footer.copyright': '© 2025 INNOTEVO. All rights reserved.',
    'home.title': 'What INNOTEVO is / is not',
    'home.intro': 'INNOTEVO is a think tank focused on innovation through structured thinking and methodical approaches. We are not bound by conventional patterns, but guided by principles of order and clarity.',
    'home.featured': 'Featured Project',
    'home.viewAll': 'View All Projects',
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Structured innovation through methodical thinking',
    'project.readStructure': 'Read Structure',
    'about.title': 'About INNOTEVO',
    'archive.title': 'Archive',
    'archive.subtitle': 'Download our research papers and publications',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.projects': 'Projekte',
    'nav.about': 'Über uns',
    'nav.archive': 'Archiv',
    'footer.contact': 'Kontakt',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.copyright': '© 2025 INNOTEVO. Alle Rechte vorbehalten.',
    'home.title': 'Was INNOTEVO ist / nicht ist',
    'home.intro': 'INNOTEVO ist ein Think Tank, der sich auf Innovation durch strukturiertes Denken und methodische Ansätze konzentriert. Wir sind nicht an konventionelle Muster gebunden, sondern werden von Prinzipien der Ordnung und Klarheit geleitet.',
    'home.featured': 'Vorgestelltes Projekt',
    'home.viewAll': 'Alle Projekte ansehen',
    'projects.title': 'Unsere Projekte',
    'projects.subtitle': 'Strukturierte Innovation durch methodisches Denken',
    'project.readStructure': 'Struktur lesen',
    'about.title': 'Über INNOTEVO',
    'archive.title': 'Archiv',
    'archive.subtitle': 'Laden Sie unsere Forschungsarbeiten und Publikationen herunter',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};