
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import VacationNotice from '@/components/VacationNotice';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <VacationNotice />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
