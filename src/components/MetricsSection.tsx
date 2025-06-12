
import { useEffect, useState, useRef } from 'react';

const MetricsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const metrics = [
    { value: 35, suffix: '%', label: 'Average ACoS Reduction', description: 'In first 30 days' },
    { value: 38, suffix: 'K', label: 'Monthly Revenue Growth', description: 'From $5K to $38K MRR', prefix: '$' },
    { value: 150, suffix: '%', label: 'Click-Through Rate Increase', description: 'Average improvement' },
    { value: 6, suffix: '-Fig', label: 'Performance Achieved', description: 'Multiple accounts' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUp = ({ end, duration = 2000, prefix = '', suffix = '' }: { 
    end: number; 
    duration?: number; 
    prefix?: string;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startValue = 0;
      const endValue = end;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{prefix}{count}{suffix}</span>;
  };

  return (
    <section id="metrics" ref={sectionRef} className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <h2 className="text-4xl font-display font-bold text-foreground">
              Success Metrics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real Amazon seller accounts - data-driven performance that speaks for itself
            </p>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center glass-effect rounded-2xl p-8 space-y-4 hover-scale animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl font-display font-bold text-primary">
                  <CountUp 
                    end={metric.value} 
                    prefix={metric.prefix} 
                    suffix={metric.suffix}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8 space-y-6 animate-on-scroll">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Case Study Highlight
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-primary">Electronics Brand Transformation:</strong> 
                  Took a struggling electronics seller from $5,000 monthly revenue to $38,000 MRR 
                  through strategic PPC optimization, listing enhancement, and inventory management.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">90 Days</div>
                    <div className="text-sm">To 6-Figure Run Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3.2x</div>
                    <div className="text-sm">ROAS Improvement</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 space-y-6 animate-on-scroll">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Why These Results Matter
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p>Sustainable growth through systematic optimization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p>Reduced ad spend waste with precision targeting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p>Enhanced brand visibility and market positioning</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p>Scalable systems for long-term success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
