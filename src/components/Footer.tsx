
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <img 
            src="/lovable-uploads/97d8d295-4130-4a3b-ad91-50764924ab39.png" 
            alt="NC Detailing Logo" 
            className="h-12 w-auto mx-auto mb-4"
          />
        </div>
        <p className="text-sm opacity-80">
          © 2024 NC Detailing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
