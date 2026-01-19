import ProductCard from "./ProductCard";
import { MessageSquare, Workflow, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Ziya Voice",
      description:
        "Cutting-edge voice AI platform. Create natural conversational experiences with advanced speech recognition and synthesis.",
      features: [
        "Natural language processing",
        "Voice cloning & synthesis",
        "Real-time conversations",
        "Multi-language support",
        "Call analytics & insights",
        "Telephony integrations",
      ],
      icon: <Mic className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      href: "/ziya-voice",
    },
    {
      title: "Ziya CRM",
      description:
        "AI-driven customer relationship management system. Automate sales, support, and marketing with intelligent insights.",
      features: [
        "Contact & lead management",
        "Sales pipeline automation",
        "AI-powered analytics",
        "Customer support tools",
        "Marketing automation",
        "Integration with forms & chat",
      ],
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-400",
      href: "/ziya-crm",
    },
    {
      title: "Ziya Flow",
      description:
        "Comprehensive business automation platform. Streamline workflows, automate processes, and boost productivity across your organization.",
      features: [
        "Visual workflow builder",
        "API integrations & webhooks",
        "Process automation",
        "Team collaboration tools",
        "Custom triggers & actions",
        "Enterprise-grade security",
      ],
      icon: <Workflow className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      href: "/ziya-flow",
    },
  ];

  return (
    <>
      <section id="products" className="py-10 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Our AI-Powered Suite
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ultimate AI tools.{" "}
              <span className="text-primary">One unified platform.</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive AI suite designed
              for modern enterprises. From customer engagement to process
              automation and voice interactions.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                features={product.features}
                icon={product.icon}
                gradient={product.gradient}
                href={product.href}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-elegant p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to transform your business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of companies already using Ziya to automate,
                engage, and grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-white primary-gradient rounded-lg shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-primary bg-background border border-primary/20 rounded-lg hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
