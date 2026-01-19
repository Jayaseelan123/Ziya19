import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import ProductHero from "@/components/ProductHero";
import FeatureSection from "@/components/FeatureSection";
import PricingCard from "@/components/PricingCard";
import Testimonials from "@/components/Testimonials";
import {
  MessageSquare,
  Zap,
  Users,
  TrendingUp,
  Bot,
  Globe,
  Shield,
  BarChart3,
  Phone,
  Send,
} from "lucide-react";

const ZiyaChat = () => {
  const heroFeatures = [
    "WhatsApp Business API Integration",
    "AI-Powered Chatbot Automation",
    "Bulk Messaging & Campaigns",
    "Real-time Analytics & Insights",
  ];

  const heroStats = [
    { value: "2M+", label: "Messages Sent" },
    { value: "15K+", label: "Active Businesses" },
    { value: "98.5%", label: "Delivery Rate" },
  ];

  const detailedFeatures = [
    {
      title: "WhatsApp Business API Integration",
      description:
        "Connect and automate communication with the official WhatsApp Business API for secure and scalable messaging operations.",
      icon: <Phone className="h-8 w-8 text-white" />,
      benefits: [
        "Verified business messaging",
        "Green tick support assistance",
        "Multi-agent access",
        "Media templates and rich messaging",
        "High delivery rate infrastructure",
        "End-to-end encryption & compliance",
      ],
    },
    {
      title: "AI-Powered Chatbot Automation",
      description:
        "Automate customer interactions using intelligent AI chatbots that deliver human-like responses and learn over time.",
      icon: <Bot className="h-8 w-8 text-white" />,
      benefits: [
        "Smart AI responses & NLP",
        "Conversation flow automation",
        "Multi-language support",
        "Lead qualification and routing",
        "Live agent fallback support",
        "Custom AI model training",
      ],
    },
    {
      title: "Bulk Messaging & Campaigns",
      description:
        "Easily send promotional broadcasts, reminders, and notifications to thousands of contacts instantly.",
      icon: <Send className="h-8 w-8 text-white" />,
      benefits: [
        "Unlimited campaign creation",
        "Drag & drop automation workflow builder",
        "Audience segmentation",
        "Pre-approved template messaging",
        "Schedule & auto-trigger campaigns",
        "Personalized dynamic content",
      ],
    },
    {
      title: "Real-time Analytics & Insights",
      description:
        "Track customer engagement, measure conversions, and analyze performance through live analytics dashboards.",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      benefits: [
        "Campaign ROI tracking",
        "Live dashboard metrics",
        "Message open & click tracking",
        "Agent performance reports",
        "Exportable and custom reports",
        "Predictive analytics & insights",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 1,000 messages/month",
        "Basic chatbot automation",
        "WhatsApp Business API",
        "Email support",
        "Basic analytics",
        "Template message library",
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
      price: "₹1,499",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 10,000 messages/month",
        "Advanced AI chatbots",
        "Marketing automation",
        "crms integrations",
        "Advanced analytics",
        "A/B testing",
        "Priority support",
        "Custom templates",
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
        "Unlimited messages",
        "Custom AI model training",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "SLA guarantees",
        "Advanced security",
        "Custom reporting",
      ],
      ctaText: "Contact Sales",
      ctaVariant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductHero
        title="Transform Your WhatsApp into a Revenue Machine"
        subtitle="Ziya Chat"
        description="Advanced WhatsApp automation and marketing platform that helps businesses engage customers, boost conversions, and scale their messaging operations with AI-powered intelligence."
        features={heroFeatures}
        gradient="bg-gradient-to-br from-green-500 to-green-600"
        icon={<MessageSquare className="h-5 w-5 text-white" />}
        stats={heroStats}
      />

      <FeatureSection
        title="Everything you need to master WhatsApp marketing"
        subtitle="Powerful features designed to help you engage customers, automate conversations, and drive more sales through WhatsApp."
        features={detailedFeatures}
      />

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to revolutionize your WhatsApp strategy?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of businesses already using Ziya Chat to boost
              their customer engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
              <p className="text-muted-foreground">
                Get started in under 5 minutes
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Enterprise Security
              </h3>
              <p className="text-muted-foreground">
                SOC 2 compliant with end-to-end encryption
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Expert support whenever you need it
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <button className="inline-flex items-center justify-center h-14 px-10 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300 mr-4">
                Start Free 14-Day Trial
              </button>
            </Link>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium text-green-600 bg-white border-2 border-green-600 rounded-lg hover:bg-green-50 transition-all duration-300">
                Schedule Live Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PricingCard
        title="Choose the perfect plan for your business"
        subtitle="Start with a free trial and scale as you grow. All plans include our core features with increasing limits and advanced capabilities."
        plans={pricingPlans}
      />
    </div>
  );
};

export default ZiyaChat;
