import Navigation from "@/components/Navigation";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Free",
      price: "0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "WhatsApp conversations: 250",
        "Flow automations: 5",
        "Voice AI minutes: 100",
        "Basic templates",
        "Email support"
      ],
      notIncluded: [
        "Advanced AI features",
        "Priority support",
        "Custom integrations"
      ],
      ctaText: "Start Free",
      ctaVariant: "outline" as const
    },
    {
      name: "Starter",
      price: isYearly ? "₹3,499" : "₹4,999",
      period: isYearly ? "/month (billed yearly)" : "/month",
      description: "Great for small businesses",
      features: [
        "WhatsApp conversations: 5,000",
        "Flow automations: 25",
        "Voice AI minutes: 1,000",
        "Advanced templates",
        "Priority email support",
        "Basic analytics"
      ],
      notIncluded: [
        "Custom AI training",
        "White-label options"
      ],
      ctaText: "Get Started",
      isPopular: true
    },
    {
      name: "Professional",
      price: isYearly ? "₹6,999" : "₹9,999",
      period: isYearly ? "/month (billed yearly)" : "/month",
      description: "For growing teams",
      features: [
        "WhatsApp conversations: 25,000",
        "Flow automations: 100",
        "Voice AI minutes: 5,000",
        "Custom AI training",
        "Advanced analytics",
        "Priority chat support",
        "API access"
      ],
      ctaText: "Go Professional"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Choose The Plan That{" "}
              <span className="text-primary">Works For You</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Scale your business with Ziya's AI-powered suite. Start free, upgrade when you grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${!isYearly ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Pay Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                aria-label="Toggle yearly billing"
                title="Toggle yearly billing"
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-primary' : 'bg-gray-200'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${isYearly ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Pay Yearly
              </span>
              {isYearly && (
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Save 30%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <PricingCard 
          plans={pricingPlans}
          title=""
          subtitle=""
        />

      </main>
    </div>
  );
};

export default Pricing;
