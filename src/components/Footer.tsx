
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/80 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="font-display font-bold text-xl text-primary">
                Amazon Ally
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional Amazon Seller Account Management services by Govind Fulwariya. 
                Helping sellers build, scale, and win in the competitive Amazon marketplace.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Services</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Product Listing Optimization</div>
                <div>PPC Campaign Management</div>
                <div>A+ Content & Storefront</div>
                <div>Sales Analytics</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block hover:text-primary transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('metrics')}
                  className="block hover:text-primary transition-colors"
                >
                  Results
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Connect</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>govind@amazonally.com</div>
                <div>LinkedIn: /in/govindfulwariya</div>
                <div>WhatsApp: +91 99999 99999</div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Schedule Free Audit →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Amazon Ally by Govind Fulwariya. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
