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
    fi: 'Tarjoamme autollesi ja veneellesi ansaitsemaansa huolenpitoa – huipputuotteilla ja yli 30 vuoden yhdistetyllä kokemuksella ajoneuvojen viimeistelyssä'
  },
  
  // Services
  servicesTitle: {
    sv: 'Våra Tjänster',
    fi: 'Palvelumme'
  },
  carDetailing: {
    sv: 'Bilvård',
    fi: 'Auton puhdistuspalvelut'
  },
  carDetailingDesc: {
    sv: 'Fullständig rekond – invändig och utvändig rengöring, polering och skyddsbehandling',
    fi: 'Täydellinen auton sisä- ja ulkopuhdistus, kiillotus ja suojakäsittely'
  },
  ceramicCoatings: {
    sv: 'Keramiska lackskydd',
    fi: 'Keraamiset pinnoitteet'
  },
  ceramicCoatingsDesc: {
    sv: 'Avancerat keramiskt lackskydd för långvarigt skydd, glans och smutsavvisning',
    fi: 'Edistyksellinen keraaminen pinnoite pitkäkestoiseen suojaan, kiiltoon ja lian hylkimiseen'
  },
  boatCare: {
    sv: 'Båtvård',
    fi: 'Veneenhoito'
  },
  boatCareDesc: {
    sv: 'Polering, rengöring och vaxning för både skrov och överbyggnad',
    fi: 'Kiillotus, puhdistus ja vahaus rungolle ja ylärakenteille'
  },
  productSales: {
    sv: 'Produktförsäljning',
    fi: 'Tuotemyynti'
  },
  productSalesDesc: {
    sv: 'Auktoriserad återförsäljare av MaFra och Labocosmetica – professionella bilvårdsprodukter för både privat och kommersiellt bruk',
    fi: 'Valtuutettu MaFra- ja Labocosmetica-jälleenmyyjä – ammattikäyttöön suunnitellut autonhoitotuotteet koti- ja yritysasiakkaille'
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
