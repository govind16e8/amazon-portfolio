
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after user scrolls down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-scale-in">
      <Button
        onClick={scrollToContact}
        className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover-scale"
      >
        Let's Work Together
      </Button>
    </div>
  );
};

export default FloatingCTA;
