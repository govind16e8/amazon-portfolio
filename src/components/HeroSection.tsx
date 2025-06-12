
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-slate-950 to-background opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              <span className="text-foreground">Govind</span>{' '}
              <span className="text-gradient">Fulwariya</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Amazon Seller Account Management Expert
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Helping Amazon Sellers Build, Scale & Win
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform your Amazon business with data-driven strategies, optimized campaigns, 
              and proven methodologies that have generated 6-figure results across multiple accounts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3 text-lg hover-scale"
            >
              Schedule Free Audit
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('metrics')}
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-3 text-lg hover-scale"
            >
              View Case Studies
            </Button>
          </div>

          <div className="pt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
