
import React from 'react';
import { Car, Shield, Waves, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Car,
      title: t('carDetailing'),
      description: t('carDetailingDesc')
    },
    {
      icon: Shield,
      title: t('ceramicCoatings'),
      description: t('ceramicCoatingsDesc')
    },
    {
      icon: Waves,
      title: t('boatCare'),
      description: t('boatCareDesc')
    },
    {
      icon: ShoppingBag,
      title: t('productSales'),
      description: t('productSalesDesc')
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('servicesTitle')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 w-12 h-12 bg-accent flex items-center justify-center">
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
