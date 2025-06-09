
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'sv' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('sv')}
        className="text-sm"
      >
        SV
      </Button>
      <Button
        variant={language === 'fi' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('fi')}
        className="text-sm"
      >
        FI
      </Button>
    </div>
  );
};

export default LanguageToggle;
