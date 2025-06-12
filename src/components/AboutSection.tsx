
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <div className="space-y-4">
                <h2 className="text-4xl font-display font-bold text-foreground">
                  About the Founder
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  With hands-on experience managing 3+ Amazon seller accounts and achieving 
                  consistent 6-figure performance, I've mastered the art and science of 
                  Amazon marketplace success.
                </p>
                <p>
                  My approach combines deep analytics, strategic thinking, and proven 
                  methodologies to help sellers navigate the complex Amazon ecosystem. 
                  Every campaign is data-driven, every optimization is measurable, and 
                  every strategy is tailored to your unique business goals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Seller Accounts</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary">6-Fig</div>
                  <div className="text-sm text-muted-foreground">Performance</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="glass-effect rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Tools & Expertise
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Amazon Seller Central</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Helium10</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Advanced Excel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Python Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">PPC Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">SEO Strategy</span>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <blockquote className="text-muted-foreground italic">
                  "Success on Amazon isn't about luck—it's about understanding the algorithm, 
                  optimizing every touchpoint, and making data-driven decisions that compound over time."
                </blockquote>
                <div className="text-primary font-semibold mt-4">- Govind Fulwariya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
