import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  icon: React.ReactNode;
  stats: Array<{
    value: string;
    label: string;
  }>;
  ctaPrimary?: string;
  ctaSecondary?: string;
  ctaPrimaryUrl?: string;
  showSecondary?: boolean;
}

const ProductHero = ({
  title,
  subtitle,
  description,
  features,
  gradient,
  icon,
  stats,
  ctaPrimary = "Get Started",
  ctaSecondary = "Schedule Demo",
  ctaPrimaryUrl,
  showSecondary = true
}: ProductHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${gradient} opacity-5`}></div>
        <div className="absolute inset-0 light-gradient opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Product Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-elegant border border-primary/20">
                <div className={`w-8 h-8 ${gradient} rounded-lg flex items-center justify-center mr-3`}>
                  {icon}
                </div>
                <span className="font-semibold text-foreground">{subtitle}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-left">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {ctaPrimaryUrl ? (
                <a href={ctaPrimaryUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="group w-full">
                    {ctaPrimary}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              ) : (
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    {ctaPrimary}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}

              {showSecondary && (
                <Link to="/contact">
                  <Button variant="outline" size="xl" className="group">
                    <Play className="mr-2 h-5 w-5" />
                    {ctaSecondary}
                  </Button>
                </Link>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Main Product Card */}
              <div className="bg-white rounded-3xl shadow-elegant p-8 animate-float">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{subtitle}</h3>
                      <p className="text-sm text-muted-foreground">Live Dashboard</p>
                    </div>
                  </div>
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-accent/50 rounded-xl">
                    <span className="text-sm font-medium text-foreground">Active Users</span>
                    <span className="text-lg font-bold text-primary">12,847</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <span className="text-sm font-medium text-foreground">Success Rate</span>
                    <span className="text-lg font-bold text-green-600">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <span className="text-sm font-medium text-foreground">Processing</span>
                    <span className="text-lg font-bold text-purple-600">Real-time</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Monthly Goal</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className={`${gradient} h-2 rounded-full w-[87%] transition-all duration-1000`}></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-pulse-glow">
                <div className="text-xs text-muted-foreground">Performance</div>
                <div className="text-sm font-bold text-primary">+127% increase</div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
                <div className="text-sm font-bold text-green-600">4.9/5 ⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;