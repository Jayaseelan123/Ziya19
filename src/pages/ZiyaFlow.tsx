import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import ProductHero from "@/components/ProductHero";
import FeatureSection from "@/components/FeatureSection";
import PricingCard from "@/components/PricingCard";

import {
  Workflow,
  Zap,
  Users,
  Shield,
  Activity,
  Plug,
  Settings,
} from "lucide-react";

const ZiyaFlow = () => {
  const heroFeatures = [
    "Visual Workflow Builder",
    "500+ Pre-built Integrations",
    "No-Code Automation Platform",
    "Drag and Drop",
  ];

  const heroStats = [
    { value: "10M+", label: "Tasks Automated" },
    { value: "25K+", label: "Active Workflows" },
    { value: "99.9%", label: "Uptime SLA" },
  ];

  // ✅ YOUR NEW detailedFeatures INSERTED HERE
  const detailedFeatures = [
    {
      title: "Visual Workflow Builder",
      description:
        "Design automation workflows visually with a drag-and-drop builder that simplifies complex processes.",
      icon: <Workflow className="h-8 w-8 text-white" />,
      benefits: [
        "Drag-and-drop workflow editor",
        "Create automated sequences in minutes",
        "Conditional triggers & actions",
        "Approval-based workflows",
        "Automate internal operations effortlessly",
        "Faster setup without technical skills",
      ],
    },
    {
      title: "500+ Pre-built Integrations",
      description:
        "Connect seamlessly with crms, marketing tools, support platforms, and productivity systems with ready-to-use integrations.",
      icon: <Plug className="h-8 w-8 text-white" />,
      benefits: [
        "crms tools like Salesforce, HubSpot & Zoho",
        "WhatsApp, Email & SMS integrations",
        "Payment gateways and ERP systems",
        "E-commerce platforms (Shopify, WooCommerce)",
        "Social media & ad platform sync",
        "API & webhook support for custom apps",
      ],
    },
    {
      title: "No-Code Automation Platform",
      description:
        "Build powerful automations without writing a single line of code, designed for business users and teams.",
      icon: <Settings className="h-8 w-8 text-white" />,
      benefits: [
        "Trigger-based automation templates",
        "Multi-step automation paths",
        "Automated campaigns and reminders",
        "Smart task & assignment routing",
        "Auto-syncing with data sources",
        "Empower teams without IT dependency",
      ],
    },
    {
      title: "Drag and Drop",
      description:
        "Track automation performance, detect bottlenecks, and analyze workflow efficiency in real time.",
      icon: <Activity className="h-8 w-8 text-white" />,
      benefits: [
        "Live automation status visibility",
        "Workflow performance analytics",
        "Real-time alerts & notifications",
        "Team activity insights",
        "Optimize and scale operations",
        "Exportable analytics and reports",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small teams and simple automations",
      features: [
        "Up to 1,000 tasks/month",
        "5 active workflows",
        "Basic integrations (50+)",
        "Email support",
        "Standard templates",
        "Basic monitoring",
      ],
      notIncluded: [
        "Advanced AI features",
        "Custom integrations",
        "Priority support",
      ],
      ctaText: "Start Free Trial",
      ctaVariant: "outline" as const,
    },
    {
      name: "Professional",
      price: "₹1499",
      period: "/month",
      description: "Advanced automation for growing businesses",
      features: [
        "Up to 10,000 tasks/month",
        "Unlimited workflows",
        "All integrations (500+)",
        "Priority support",
        "Custom templates",
        "Advanced monitoring",
        "Team collaboration",
        "API access",
      ],
      isPopular: true,
      ctaText: "Start Free Trial",
      ctaVariant: "hero" as const,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solution for large organizations",
      features: [
        "Unlimited tasks",
        "Custom AI model training",
        "Dedicated success manager",
        "Custom integrations",
        "White-label options",
        "SLA guarantees",
        "Advanced security",
        "On-premise deployment",
      ],
      ctaText: "Contact Sales",
      ctaVariant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductHero
        title="Automate Your Business Process with Intelligence"
        subtitle="Ziya Flow"
        description="Comprehensive business automation platform that streamlines workflows, eliminates manual tasks, and boosts productivity across your entire organization with AI-powered intelligence."
        features={heroFeatures}
        gradient="bg-gradient-to-br from-blue-500 to-purple-600"
        icon={<Workflow className="h-5 w-5 text-white" />}
        stats={heroStats}
      />

      <FeatureSection
        title="Build powerful automations without limits"
        subtitle="Everything you need to automate complex business process, integrate systems, and scale your operations efficiently."
        features={detailedFeatures}
      />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why businesses choose Ziya Flow for automation
            </h2>
            <p className="text-xl text-muted-foreground">
              Built for reliability, scalability, and ease of use
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Deploy workflows in minutes, not weeks
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Enterprise Security
              </h3>
              <p className="text-muted-foreground">
                SOC 2 Type II certified and GDPR compliant
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Built for teams with role-based access
              </p>
            </div>
            <div className="text-center">
              <Plug className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">500+ Integrations</h3>
              <p className="text-muted-foreground">
                Connect with all your favorite tools
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to automate your business process?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of companies saving 40+ hours per week with Ziya
              Flow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="inline-flex items-center justify-center h-14 px-10 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  Start Free 14-Day Trial
                </button>
              </Link>
              <Link to="/contact">
                <button className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300">
                  Watch Demo Video
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PricingCard
        title="Automation plans that scale with your business"
        subtitle="From small teams to enterprise organizations, find the perfect plan to automate your process and boost productivity."
        plans={pricingPlans}
      />
    </div>
  );
};

export default ZiyaFlow;
