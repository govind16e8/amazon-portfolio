
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    monthlyRevenue: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      monthlyRevenue: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <h2 className="text-4xl font-display font-bold text-foreground">
              Let's Scale Your Amazon Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your Amazon performance? Let's discuss your goals and create a custom strategy for your business.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-on-scroll">
              <div className="glass-effect rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  Why Work With Us?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Data Transparency</h4>
                      <p className="text-muted-foreground">Complete visibility into every metric, decision, and optimization.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Account Recovery Skills</h4>
                      <p className="text-muted-foreground">Expert navigation of Amazon's complex policies and procedures.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Industry Knowledge</h4>
                      <p className="text-muted-foreground">Deep understanding of Amazon's algorithm and marketplace dynamics.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Personalized Strategy</h4>
                      <p className="text-muted-foreground">Custom solutions tailored to your specific business goals.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Get In Touch
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>📧 govind@amazonally.com</p>
                  <p>📱 WhatsApp: +91 99999 99999</p>
                  <p>💼 LinkedIn: /in/govindfulwariya</p>
                  <p>📍 Available for global clients</p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  Schedule Your Free Audit
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Monthly Revenue</label>
                    <select
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground"
                    >
                      <option value="">Select range</option>
                      <option value="under-10k">Under $10K</option>
                      <option value="10k-50k">$10K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-plus">$100K+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your Amazon business goals..."
                    className="bg-background/50 min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3"
                >
                  Send Message & Schedule Audit
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Free 30-minute consultation • No commitment required • Response within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
