import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  href: string;
  isComingSoon?: boolean;
}

const ProductCard = ({
  title,
  description,
  features,
  icon,
  gradient,
  href,
  isComingSoon = false
}: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 overflow-hidden">
      {/* Header with Gradient */}
      <div className={`${gradient} p-6 text-white relative overflow-hidden`}>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              {icon}
            </div>
            {isComingSoon && (
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                Coming Soon
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white/90 leading-relaxed">{description}</p>
        </div>

        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="w-full h-full rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Features */}
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col space-y-3">
          {isComingSoon ? (
            <Button variant="outline" size="lg" className="w-full" disabled>
              Notify Me
            </Button>
          ) : (
            <Link to={href}>
              <Button variant="default" size="lg" className="w-full group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}

          {!isComingSoon && (
            <Link to="/contact" className="w-full">
              <Button variant="ghost" size="sm" className="w-full">
                Try Free Demo
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;