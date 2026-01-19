import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaVariant?: "default" | "hero" | "outline";
  ctaLink?: string;
}

interface PricingCardProps {
  plans: PricingPlan[];
  title: string;
  subtitle: string;
}

const PricingCard = ({ plans, title, subtitle }: PricingCardProps) => {
  return (
    <section className="py-20 bg-background">
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${plan.isPopular
                ? 'border-primary shadow-glow scale-105'
                : 'border-border/50 shadow-elegant hover:shadow-glow'
                }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <Link to={plan.ctaLink || "/contact"}>
                  <Button
                    variant={plan.ctaVariant || (plan.isPopular ? "hero" : "outline")}
                    size="lg"
                    className="w-full"
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </div>
                ))}

                {/* Not Included Features */}
                {plan.notIncluded && plan.notIncluded.map((feature, featureIndex) => (
                  <div key={`not-${featureIndex}`} className="flex items-start space-x-3 opacity-50">
                    <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm line-through">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 24/7 support, 99.9% uptime SLA, and 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;