
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('contactTitle')}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('address')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chaufförsvägen 12<br/>
                Kuljettajantie 12<br/>
                10600 Ekenäs/Tammisaari
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Phone className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('phone')}</h3>
              <a 
                href="tel:0442359959" 
                className="text-sm text-muted-foreground flat-no-effects"
              >
                044 235 9959
              </a>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Mail className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('email')}</h3>
              <a 
                href="mailto:info@ncdetailing.fi" 
                className="text-sm text-muted-foreground flat-no-effects"
              >
                info@ncdetailing.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
