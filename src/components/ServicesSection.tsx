
const ServicesSection = () => {
  const services = [
    {
      title: "Product Listing Optimization",
      description: "Transform your listings with compelling copy, strategic keywords, and conversion-optimized content that ranks higher and sells more.",
      features: ["Keyword Research & Analysis", "Title & Bullet Optimization", "Backend Search Terms", "Image Strategy"]
    },
    {
      title: "PPC Campaign Management",
      description: "Maximize your ROI with expertly managed campaigns, bid optimization, and strategic ad placement across all Amazon advertising platforms.",
      features: ["Sponsored Products/Brands", "Bid Management", "Negative Keywords", "Campaign Structure"]
    },
    {
      title: "A+ Content & Storefront",
      description: "Create premium brand experiences with enhanced content that builds trust, showcases value, and drives conversions.",
      features: ["Enhanced Brand Content", "Storefront Design", "Brand Story Creation", "Visual Content Strategy"]
    },
    {
      title: "SEO & Keyword Targeting",
      description: "Dominate search results with comprehensive keyword strategies that improve organic ranking and drive qualified traffic.",
      features: ["Competitor Analysis", "Long-tail Keywords", "Ranking Optimization", "Search Term Harvesting"]
    },
    {
      title: "Sales Analytics & Reporting",
      description: "Make informed decisions with detailed analytics, performance tracking, and actionable insights that drive growth.",
      features: ["Performance Dashboard", "Profit Analysis", "Trend Identification", "Growth Recommendations"]
    },
    {
      title: "Inventory Planning",
      description: "Optimize your inventory levels with demand forecasting, seasonal planning, and cash flow management strategies.",
      features: ["Demand Forecasting", "Reorder Automation", "Seasonal Planning", "Cash Flow Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <h2 className="text-4xl font-display font-bold text-foreground">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Amazon seller services designed to scale your business and maximize profitability
            </p>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 space-y-4 hover-scale animate-on-scroll group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
