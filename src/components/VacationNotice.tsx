import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AlertCircle, Calendar } from 'lucide-react';

const VacationNotice = () => {
  const { t } = useLanguage();

  // Check if current date is before or on July 27, 2025
  const currentDate = new Date();
  const endDate = new Date('2025-07-27');
  
  // Don't render the notice after July 27, 2025
  if (currentDate > endDate) {
    return null;
  }

  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg mt-16 relative z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center space-x-3">
          <AlertCircle className="h-6 w-6 flex-shrink-0 animate-pulse" />
          <div className="text-center">
            <p className="text-sm md:text-base">
              {t('vacationNoticeMessage')}
            </p>
          </div>
          <Calendar className="h-6 w-6 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default VacationNotice;
