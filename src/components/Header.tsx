
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/97d8d295-4130-4a3b-ad91-50764924ab39.png" 
            alt="NC Detailing Logo" 
            className="h-20 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground flat-no-effects text-sm font-medium"
          >
            {t('services')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground flat-no-effects text-sm font-medium"
          >
            {t('contact')}
          </button>
          <LanguageToggle />
        </nav>

        <div className="md:hidden">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
