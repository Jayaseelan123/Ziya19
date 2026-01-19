import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import ProductHero from "@/components/ProductHero";
import FeatureSection from "@/components/FeatureSection";
import PricingCard from "@/components/PricingCard";

import {
  FileText,
  Zap,
  Users,
  Shield,
  Brain,
  Globe,
  Layers,
  Sparkles,
  Pointer,
  Webhook,
  Languages,
} from "lucide-react";

const ZiyaForms = () => {
  const heroFeatures = [
    "AI Autofill & Smart Input Validation",
    "Drag & Drop Form Builder",
    "Workflow Automation & Webhooks",
    "Multi-language Smart Forms",
  ];

  const heroStats = [
    { value: "10M+", label: "Forms Submitted" },
    { value: "85%", label: "Faster Completion Rate" },
    { value: "99.8%", label: "Data Accuracy" },
  ];

  // ✅ UPDATED detailedFeatures (your requested version)
  const detailedFeatures = [
    {
      title: "AI Autofill & Smart Input Validation",
      description:
        "Reduce manual typing and improve accuracy using AI-powered form autofill and intelligent validation rules.",
      icon: <Brain className="h-8 w-8 text-white" />,
      benefits: [
        "AI-based field suggestions and auto-population",
        "Error-free submissions with smart rule validation",
        "Pattern recognition to detect incorrect inputs",
        "Adaptive logic based on previous form behavior",
        "Improves form completion rate by 60%",
        "Works across all device types",
      ],
    },
    {
      title: "Drag & Drop Form Builder",
      description:
        "Create interactive and beautiful forms without coding using an intuitive drag-and-drop builder.",
      icon: <Pointer className="h-8 w-8 text-white" />,
      benefits: [
        "Build forms visually in minutes",
        "Multi-step forms and conditional logic",
        "Customizable themes & UI styling",
        "Reusable templates for faster setup",
        "Real-time preview while editing",
        "Embed forms anywhere easily",
      ],
    },
    {
      title: "Workflow Automation & Webhooks",
      description:
        "Automate responses, data routing, and external platform triggers using powerful workflow automation.",
      icon: <Webhook className="h-8 w-8 text-white" />,
      benefits: [
        "Send submissions to crms or email instantly",
        "Automated notifications & approval flows",
        "Integrates with WhatsApp, Slack, Gmail & more",
        "Webhook support for real-time updates",
        "Auto-assign tasks to teams and agents",
        "Reduces manual work by 80%",
      ],
    },
    {
      title: "Multi-language Smart Forms",
      description:
        "Reach global users with automatically translated smart forms powered by language AI.",
      icon: <Languages className="h-8 w-8 text-white" />,
      benefits: [
        "Supports 50+ languages",
        "Auto-detects user language",
        "Localized response formatting",
        "Ideal for global businesses",
        "Consistent experience across regions",
        "Built-in translation memory for accuracy",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small business form automation",
      features: [
        "Up to 5,000 submissions",
        "Drag & drop builder",
        "AI auto-fill",
        "Basic workflows",
        "Email & WhatsApp alerts",
        "Standard templates",
      ],
      notIncluded: [
        "Advanced automation",
        "Custom AI training",
        "Team collaboration",
      ],
      ctaText: "Start Free Trial",
      ctaVariant: "outline" as const,
    },
    {
      name: "Professional",
      price: "₹1499",
      period: "/month",
      isPopular: true,
      description: "For growing businesses and automation teams",
      features: [
        "100,000 submissions / month",
        "Advanced AI automation",
        "Team workflows",
        "Webhook & API integration",
        "PDF export & e-signature",
        "Smart Analytics Dashboard",
      ],
      ctaText: "Start Free Trial",
      ctaVariant: "hero" as const,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Custom workflow automation for enterprises",
      features: [
        "Unlimited submissions",
        "Custom AI model training",
        "Dedicated success manager",
        "On-premise deployment",
        "Full white-label",
        "Custom SLA support",
      ],
      ctaText: "Contact Sales",
      ctaVariant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductHero
        title="Smart AI-Powered Forms for Fast and Accurate Data Collection"
        subtitle="Ziya Forms"
        description="Build intelligent forms that auto-fill, validate, and automate workflows with real-time AI processing—designed to boost conversions and streamline operations."
        features={heroFeatures}
        gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
        icon={<FileText className="h-5 w-5 text-white" />}
        stats={heroStats}
        ctaPrimaryUrl="https://ziyaforms.vercel.app/"
      />

      <FeatureSection
        title="Transform your data collection & workflow automation"
        subtitle="Ziya Forms uses AI to intelligently understand inputs, automate validation, and integrate instantly with your systems."
        features={detailedFeatures}
      />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Thousands of companies trust Ziya Forms
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Industry-leading AI automation for forms and workflows
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold">Instant Processing</h3>
              <p className="text-muted-foreground">AI-driven auto validation</p>
            </div>
            <div>
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold">Secure & Compliant</h3>
              <p className="text-muted-foreground">GDPR & ISO certified</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold">Powerful Collaboration</h3>
              <p className="text-muted-foreground">Role based access control</p>
            </div>
            <div>
              <Sparkles className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold">Smart Automation</h3>
              <p className="text-muted-foreground">
                Automate workflows instantly
              </p>
            </div>
          </div>

          <Link to="/contact">
            <button className="h-14 px-10 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-glow hover:scale-105 transition-all">
              Create Your First Form
            </button>
          </Link>
        </div>
      </section>

      <PricingCard
        title="Flexible pricing for every business"
        subtitle="Choose the best plan that fits your automation requirements."
        plans={pricingPlans}
      />
    </div>
  );
};

export default ZiyaForms;
