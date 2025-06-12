
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Govind transformed our Amazon business completely. Our ACoS dropped by 40% while our revenue tripled. His data-driven approach and attention to detail is unmatched.",
      author: "Sarah Chen",
      role: "Founder, EcoHome Products",
      rating: 5
    },
    {
      quote: "Working with Govind was a game-changer. He didn't just manage our campaigns - he educated us on the strategy behind every decision. Our BSR improved dramatically.",
      author: "Mike Rodriguez",
      role: "CEO, TechGear Solutions",
      rating: 5
    },
    {
      quote: "The level of transparency and reporting we get is incredible. Every penny spent is tracked and optimized. We've seen consistent month-over-month growth.",
      author: "Jennifer Park",
      role: "Brand Manager, StyleCraft",
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <h2 className="text-4xl font-display font-bold text-foreground">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - see what our clients say about their Amazon transformation
            </p>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 space-y-6 hover-scale animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-4">
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center glass-effect rounded-2xl p-8 animate-on-scroll">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Trusted by Growing Brands
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From startup sellers to established brands, we've helped businesses across 
                various categories achieve sustainable growth on Amazon's competitive marketplace.
              </p>
              <div className="flex flex-wrap justify-center gap-8 pt-6 text-sm text-muted-foreground">
                <span>Electronics & Tech</span>
                <span>Home & Garden</span>
                <span>Health & Beauty</span>
                <span>Sports & Outdoors</span>
                <span>Fashion & Apparel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
