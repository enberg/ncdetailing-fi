
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contactTitle')}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-foreground">{t('address')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chaufförsvägen 12<br/>
                  Kuljettajantie 12<br/>
                  10600 Ekenäs/Tammisaari
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-foreground">{t('phone')}</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:0442359959" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  044 235 9959
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-foreground">{t('email')}</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@ncdetailing.fi" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  info@ncdetailing.fi
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'mailto:info@ncdetailing.fi'}
            >
              {t('getQuote')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
