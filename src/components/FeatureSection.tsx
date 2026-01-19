import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  ctaText?: string;
  ctaAction?: () => void;
}

const FeatureSection = ({ 
  title, 
  subtitle, 
  features, 
  ctaText = "Get Started", 
  ctaAction 
}: FeatureSectionProps) => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                {/* Icon & Title */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 primary-gradient rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="text-center mt-16">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={ctaAction}
              className="group"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;