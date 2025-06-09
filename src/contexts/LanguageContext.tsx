import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sv' | 'fi';

interface Translations {
  [key: string]: {
    sv: string;
    fi: string;
  };
}

const translations: Translations = {
  // Navigation
  services: {
    sv: 'Tjänster',
    fi: 'Palvelut'
  },
  contact: {
    sv: 'Kontakt',
    fi: 'Yhteystiedot'
  },
  
  // Hero section
  heroTitle: {
    sv: 'Professionell bildetaljering & båtvård',
    fi: 'Ammattimainen auton yksityiskohtien hoito & veneenhoito'
  },
  heroSubtitle: {
    sv: 'Vi ger din bil och båt den vård de förtjänar med högkvalitativa produkter och expertis',
    fi: 'Annamme autollesi ja veneellesi ansaitsemansa hoidon korkealaatuisilla tuotteilla ja asiantuntemuksella'
  },
  
  // Services
  servicesTitle: {
    sv: 'Våra Tjänster',
    fi: 'Palvelumme'
  },
  carDetailing: {
    sv: 'Bildetaljering',
    fi: 'Auton yksityiskohtien hoito'
  },
  carDetailingDesc: {
    sv: 'Komplett rengöring och detaljering av både in- och utvändigt',
    fi: 'Täydellinen sisä- ja ulkopuolinen puhdistus ja yksityiskohtien hoito'
  },
  ceramicCoatings: {
    sv: 'Keramiska beläggningar',
    fi: 'Keraamiset pinnoitteet'
  },
  ceramicCoatingsDesc: {
    sv: 'Långvarigt skydd för din bils lack med premiumkeramik',
    fi: 'Pitkäkestoinen suoja autosi maalaukselle premium-keramiikalla'
  },
  boatCare: {
    sv: 'Båtvård',
    fi: 'Veneenhoito'
  },
  boatCareDesc: {
    sv: 'Vaxning, rengöring och polering för alla typer av båtar',
    fi: 'Vahaaminen, puhdistus ja kiillotus kaikille venetyypeille'
  },
  productSales: {
    sv: 'Produktförsäljning',
    fi: 'Tuotemyynti'
  },
  productSalesDesc: {
    sv: 'Högkvalitativa MaFra och Labocosmetica produkter',
    fi: 'Korkealaatuiset MaFra ja Labocosmetica tuotteet'
  },
  
  // Contact
  contactTitle: {
    sv: 'Kontakta Oss',
    fi: 'Ota Yhteyttä'
  },
  address: {
    sv: 'Adress',
    fi: 'Osoite'
  },
  phone: {
    sv: 'Telefon',
    fi: 'Puhelin'
  },
  email: {
    sv: 'E-post',
    fi: 'Sähköposti'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
