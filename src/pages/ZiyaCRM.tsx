import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import ProductHero from "@/components/ProductHero";
import FeatureSection from "@/components/FeatureSection";
import PricingCard from "@/components/PricingCard";

import {
  UserCheck,
  BarChart3,
  Workflow,
  Shield,
  Users,
  Zap,
  Database,
  MessageCircle,
  Bot,
  TrendingUp,
  Globe,
} from "lucide-react";

const Ziyacrm = () => {
  const heroFeatures = [
    "AI Smart Lead Management",
    "Sales & Task Automation",
    "Add Campaign message",
    "Automation system",
  ];

  const heroStats = [
    { value: "50K+", label: "Active CRM Users" },
    { value: "300%", label: "Sales Productivity Boost" },
    { value: "90%", label: "Faster Lead Conversion" },
  ];

  // 🔥 UPDATED detailedFeatures SECTION
  const detailedFeatures = [
    {
      title: "AI Smart Lead Management",
      description:
        "Automatically capture, qualify, and route leads using intelligent AI that improves sales efficiency and accelerates conversions.",
      icon: <Bot className="h-8 w-8 text-white" />,
      benefits: [
        "AI-based lead scoring and prioritization",
        "Auto assignment to sales team members",
        "Instant follow-up automation",
        "Deep customer profile insights",
        "Lead stage tracking & pipeline management",
        "Reduce response time and increase win rate",
      ],
    },
    {
      title: "Sales & Task Automation",
      description:
        "Automate repetitive tasks, reminders, workflow sequences, and follow-ups to maximize productivity and close deals faster.",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      benefits: [
        "Automated workflows and task reminders",
        "Drag-and-drop workflow builder",
        "Sales funnel automation",
        "Automatic meeting and call scheduling",
        "Smart task routing and approvals",
        "Boost sales efficiency with automation",
      ],
    },
    {
      title: "Add Campaign message",
      description:
        "Track performance insights in real time with powerful dashboards and data-driven business metrics.",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      benefits: [
        "Live performance monitoring",
        "Sales & revenue forecasting",
        "Customer behavior insights",
        "Team performance measurement",
        "Conversion and campaign analysis",
        "Custom reports and export options",
      ],
    },
    {
      title: "Automation system",
      description:
        "Centralize your customer communication across WhatsApp, Email, SMS, and social channels for seamless engagement.",
      icon: <Globe className="h-8 w-8 text-white" />,
      benefits: [
        "Unified inbox for multi-platform messaging",
        "Connect with customers on preferred channels",
        "CRM and eCommerce integrations",
        "Smart notifications and routing",
        "Consistent brand engagement everywhere",
        "API & webhook support for custom integrations",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Ideal for freelancers & small sales teams",
      features: [
        "Up to 3,000 contacts",
        "Basic CRM dashboard",
        "Email & WhatsApp templates",
        "Task and deal tracking",
        "Basic lead automation",
        "Standard support",
      ],
      notIncluded: [
        "Team management",
        "Advanced workflows",
        "Analytics reports",
      ],
      ctaText: "Get Started",
      ctaVariant: "outline" as const,
    },
    {
      name: "Professional",
      price: "₹1499",
      period: "/month",
      description: "Perfect for growing businesses",
      isPopular: true,
      features: [
        "100,000 contacts",
        "Advanced automations",
        "Team roles & permissions",
        "Complete analytics dashboard",
        "Omnichannel messaging",
        "Lead scoring & automation",
        "Task automation & pipelines",
        "Priority support",
      ],
      ctaText: "Get Started",
      ctaVariant: "hero" as const,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Enterprise grade CRM with full customization",
      features: [
        "Unlimited contacts",
        "Unlimited users",
        "Custom integrations & API",
        "On-premise deployment",
        "Advanced SLA & security",
        "Dedicated success team",
        "Custom AI model training",
        "White-label branding",
      ],
      notIncluded: [],
      ctaText: "Contact Sales",
      ctaVariant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductHero
        title="Smart AI-Powered CRM for Modern Businesses"
        subtitle="Ziya CRM"
        description="Accelerate sales, automate workflows, personalize customer journeys, and grow faster with AI-driven CRM designed for high performance business operations."
        features={heroFeatures}
        gradient="bg-gradient-to-br from-green-500 to-teal-600"
        icon={<Database className="h-5 w-5 text-white" />}
        stats={heroStats}
        ctaPrimaryUrl="https://ziyacrm.aspirentech.com"
        showSecondary={false}
      />

      <FeatureSection
        title="One platform for complete customer lifecycle management"
        subtitle="Manage leads, automate communication, track sales, handle support, and analyze performance — all from one powerful CRM system."
        features={detailedFeatures}
      />

      {/* trusted section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by top-performing sales teams worldwide
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Improve your conversions with smart automation & real-time
            performance tracking.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Zap className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold">Lightning fast performance</h3>
              <p className="text-muted-foreground">
                Super responsive CRM interface
              </p>
            </div>
            <div>
              <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold">Secure and compliant</h3>
              <p className="text-muted-foreground">
                End-to-end encryption & backups
              </p>
            </div>
            <div>
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold">Team collaboration</h3>
              <p className="text-muted-foreground">
                Assign, comment & track tasks
              </p>
            </div>
            <div>
              <BarChart3 className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold">Analytics intelligence</h3>
              <p className="text-muted-foreground">
                Predictive insights to grow faster
              </p>
            </div>
          </div>

          <Link to="/contact">
            <button className="h-14 px-10 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg hover:scale-105 transition-all">
              Try Ziya CRM Free
            </button>
          </Link>
        </div>
      </section>

      <PricingCard
        title="Choose the best CRM plan for your growth"
        subtitle="Flexible plans built for individuals, teams, and enterprise organizations."
        plans={pricingPlans}
      />
    </div>
  );
};

export default Ziyacrm;
