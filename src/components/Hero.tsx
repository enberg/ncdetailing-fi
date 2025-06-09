
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <img 
            src="/lovable-uploads/97d8d295-4130-4a3b-ad91-50764924ab39.png" 
            alt="NC Detailing Logo" 
            className="h-40 w-auto mx-auto mb-6"
          />
          
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {t('heroTitle')}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
