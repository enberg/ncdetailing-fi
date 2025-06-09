
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/97d8d295-4130-4a3b-ad91-50764924ab39.png" 
            alt="NC Detailing Logo" 
            className="h-24 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t('heroTitle')}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            {t('getQuote')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
