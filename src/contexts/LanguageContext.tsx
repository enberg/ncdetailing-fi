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
    sv: 'Professionell bilvård & båtvård',
    fi: 'Ammattitaitoinen auton- ja veneenhoito'
  },
  heroSubtitle: {
    sv: 'Vi ger din bil och båt den omsorg de förtjänar – med premiumprodukter och över 30 års samlad erfarenhet inom rekonditionering',
    fi: 'Tarjoamme autollesi ja veneellesi ensiluokkaista hoitoa – huippuluokan detailing-tuotteilla ja yli 30 vuoden kokemuksella'
  },
  
  // Services
  servicesTitle: {
    sv: 'Våra Tjänster',
    fi: 'Palvelumme'
  },
  carDetailing: {
    sv: 'Bilvård',
    fi: 'Auton detailing-palvelut'
  },
  carDetailingDesc: {
    sv: 'Fullständig rekond – invändig och utvändig rengöring, polering och skyddsbehandling',
    fi: 'Täydellinen detailing-palvelu: sisä- ja ulkopuhdistus, kiillotus ja suojakäsittely' // koriste
  },
  ceramicCoatings: {
    sv: 'Keramiska lackskydd',
    fi: 'Keraamiset pinnoitteet (ceramic coating)'
  },
  ceramicCoatingsDesc: {
    sv: 'Avancerat keramiskt lackskydd för långvarigt skydd, glans och smutsavvisning',
    fi: 'Edistyksellinen keraaminen pinnoite tarjoaa pitkäkestoisen suojan, kiillon ja aidon vedenhelmen' 
  },
  boatCare: {
    sv: 'Båtvård',
    fi: 'Veneen hoito ja detailing'
  },
  boatCareDesc: {
    sv: 'Polering, rengöring och vaxning för både skrov och överbyggnad',
    fi: 'Kiillotus, puhdistus ja vahaus veneen gelcoat-pinnalle sekä rakenteille'
  },
  productSales: {
    sv: 'Produktförsäljning',
    fi: 'Tuotemyynti'
  },
  productSalesDesc: {
    sv: 'Auktoriserad återförsäljare av MaFra och Labocosmetica – professionella bilvårdsprodukter för både privat och kommersiellt bruk',
    fi: 'Valtuutettu MaFran ja Labocosmetic-tuotteiden jälleenmyyjä – ammattilaislaatu detailing-tuotteita' 
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
  addressStreet: {
    sv: "Chaufförsvägen 12",
    fi: "Kuljettajantie 12"
  },
  addressCity: {
    sv: "10600 Ekenäs",
    fi: "10600 Tammisaari"
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
