import Navigation from "@/components/Navigation";
import ProductHero from "@/components/ProductHero";
import FeatureSection from "@/components/FeatureSection";
import PricingCard from "@/components/PricingCard";

import {
  Mic,
  Phone,
  Cpu,
  Languages
} from "lucide-react";
import { ReactNode } from "react";

const EXTERNAL_URL = "https://ziyavoice.aspirentech.com/";

interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
  benefits: string[];
}

const ZiyaVoice = () => {
  const heroFeatures = [
    "Natural Voice AI Conversations",
    "Real-time Speech Processing",
    "Multi-language Voice Support",
    "Voice clone AGS"
  ];

  const heroStats = [
    { value: "1M+", label: "Calls Handled" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "<200ms", label: "Response Time" }
  ];

  const detailedFeatures: FeatureItem[] = [
    {
      title: "Natural Voice AI Conversations",
      description:
        "Engage users with human-like AI voice interactions for support, sales, and automated workflows.",
      icon: <Mic className="h-8 w-8 text-white" />,
      benefits: [
        "Human-like natural speech responses",
        "Understands accents & speaking variations",
        "Dynamic real-time conversation flow",
        "Ideal for customer support & sales bots",
        "Emotion-aware responses",
        "Reduces manual call handling workload"
      ]
    },
    {
      title: "Real-time Speech Processing",
      description:
        "Process, analyze, and transcribe speech instantly with low-latency voice recognition.",
      icon: <Cpu className="h-8 w-8 text-white" />,
      benefits: [
        "Real-time speech-to-text conversion",
        "Low-latency streaming processing",
        "Noise cancellation & clarity optimization",
        "Instant response generation",
        "Perfect for live agent assistance",
        "Highly optimized for fast workflows"
      ]
    },
    {
      title: "Multi-language Voice Support",
      description:
        "Speak and understand 50+ languages with advanced multilingual voice AI capabilities.",
      icon: <Languages className="h-8 w-8 text-white" />,
      benefits: [
        "Supports 50+ global languages",
        "Real-time language detection",
        "Localized pronunciation accuracy",
        "Accent adaptation engine",
        "Perfect for global businesses",
        "Consistent voice quality across languages"
      ]
    },
    {
      title: "Voice clone AGS",
      description:
        "Integrate AI-powered voice automation with telephony platforms for inbound and outbound calling.",
      icon: <Phone className="h-8 w-8 text-white" />,
      benefits: [
        "Connect with SIP & VoIP systems",
        "Automate inbound customer calls",
        "AI-driven outbound calling flows",
        "Smart IVR with voice routing",
        "Call recording & analytics",
        "Scales to thousands of calls/day"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 500 minutes/month",
        "Basic voice AI features",
        "5 concurrent calls",
        "Email support",
        "Standard voice models",
        "Basic analytics"
      ],
      notIncluded: [
        "Custom voice cloning",
        "Advanced integrations",
        "Priority support"
      ],
      ctaText: "Start Free Trial",
      ctaLink: EXTERNAL_URL,
      ctaVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "₹1499",
      period: "/month",
      description: "Advanced features for growing call centers",
      features: [
        "Up to 5,000 minutes/month",
        "Advanced voice AI with emotions",
        "25 concurrent calls",
        "Custom voice cloning",
        "All integrations",
        "Priority support",
        "Advanced analytics",
        "Call recording & transcription"
      ],
      isPopular: true,
      ctaText: "Start Free Trial",
      ctaLink: EXTERNAL_URL,
      ctaVariant: "hero" as const
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solution for large organizations",
      features: [
        "Unlimited minutes",
        "Unlimited concurrent calls",
        "Custom AI model training",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantees",
        "Advanced security",
        "White-label options"
      ],
      ctaText: "Contact Sales",
      ctaLink: EXTERNAL_URL,
      ctaVariant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductHero
        title="Transform Voice Interactions with AI Intelligence"
        subtitle="Ziya Voice"
        description="Cutting-edge voice AI platform that creates natural conversational experiences with advanced speech recognition, synthesis, and real-time processing."
        features={heroFeatures}
        gradient="bg-gradient-to-br from-purple-500 to-pink-600"
        icon={<Mic className="h-5 w-5 text-white" />}
        stats={heroStats}
        ctaPrimary="Get Started"
        ctaPrimaryUrl={EXTERNAL_URL}
      />

      <FeatureSection
        title="The future of voice AI is here"
        subtitle="Human-like conversations, emotional intelligence, and seamless telephony integration."
        features={detailedFeatures}
      />

      <PricingCard
        title="Voice AI plans for every scale"
        subtitle="From startups to enterprise call centers."
        plans={pricingPlans}
      />
    </div>
  );
};

export default ZiyaVoice;
