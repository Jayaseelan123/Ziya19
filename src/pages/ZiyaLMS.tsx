import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import ProductHero from "@/components/ProductHero";
import FeatureSection from "@/components/FeatureSection";
import PricingCard from "@/components/PricingCard";

import {
  GraduationCap,
  BookOpen,
  Trophy,
  Users,
  BarChart3,
  Zap,
  Shield,
  Layout,
  Clock,
  Globe
} from "lucide-react";

const ZiyaLMS = () => {
  const heroFeatures = [
    "AI-Powered Course Generation",
    "Interactive Learning Experience",
    "Automated Grading & Feedback",
    "Comprehensive Analytics Portal"
  ];

  const heroStats = [
    { value: "100K+", label: "Courses Completed" },
    { value: "45K+", label: "Active Learners" },
    { value: "92%", label: "Course Completion Rate" }
  ];

  const detailedFeatures = [
    {
      title: "AI-Powered Course Generation",
      description:
        "Transform your documentation or knowledge base into structured, engaging courses automatically using advanced AI.",
      icon: <Zap className="h-8 w-8 text-white" />,
      benefits: [
        "Auto-generate syllabus and lessons",
        "AI-assistant for content creation",
        "Smart quiz and assessment generator",
        "Multi-format content support",
        "Personalized learning paths",
        "Automatic content updates"
      ]
    },
    {
      title: "Interactive Learning Experience",
      description:
        "Keep learners engaged with multi-media lessons, interactive quizzes, and real-time community interactions.",
      icon: <Layout className="h-8 w-8 text-white" />,
      benefits: [
        "Video, audio, and text lessons",
        "Interactive Q&A and forums",
        "Real-time progress tracking",
        "Mobile-first learning app",
        "Gamification & badges",
        "Collaborative projects"
      ]
    },
    {
      title: "Automated Grading & Feedback",
      description:
        "Save time with AI-driven grading systems that provide instant, constructive feedback to learners.",
      icon: <Shield className="h-8 w-8 text-white" />,
      benefits: [
        "Instant quiz results & grading",
        "AI-written feedback on assignments",
        "Automated certificate issuance",
        "Plagiarism detection",
        "Skill gap analysis",
        "Performance optimization tips"
      ]
    },
    {
      title: "Comprehensive Analytics Portal",
      description:
        "Deep dive into learner performance, course effectiveness, and engagement metrics with detailed dashboards.",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      benefits: [
        "Team and individual performance tracking",
        "Course engagement heatmaps",
        "Revenue & enrollment reports",
        "Dropout risk prediction",
        "Customizable data exports",
        "Compliance & certification tracking"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹1,499",
      period: "/month",
      description: "Ideal for individual creators & educators",
      features: [
        "Up to 5 active courses",
        "Unlimited learners",
        "Basic course builder",
        "Standard quizzes",
        "Automated certificates",
        "Email support"
      ],
      notIncluded: [
        "White-label branding",
        "Advanced AI features",
        "API access"
      ],
      ctaText: "Start Free Trial",
      ctaVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for growing training companies",
      isPopular: true,
      features: [
        "Unlimited courses",
        "AI course generation",
        "Custom branding",
        "Advanced analytics",
        "Integration with CRMs",
        "Marketing automation",
        "Priority support",
        "Live classes support"
      ],
      ctaText: "Start Free Trial",
      ctaVariant: "hero" as const
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For corporate training & large institutions",
      features: [
        "SSO & Advanced Security",
        "Dedicated Success Manager",
        "Custom AI model training",
        "White-label mobile app",
        "Full API & Webhook access",
        "On-premise deployment options",
        "SLA guarantees",
        "Unlimited everything"
      ],
      ctaText: "Contact Sales",
      ctaVariant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductHero
        title="Elevate Your Education with AI-Driven Learning"
        subtitle="Ziya LMS"
        description="Comprehensive learning management system designed to help you create, manage, and scale online courses and corporate training with intelligent automation."
        features={heroFeatures}
        gradient="bg-gradient-to-br from-amber-500 to-orange-600"
        icon={<GraduationCap className="h-5 w-5 text-white" />}
        stats={heroStats}
      />

      <FeatureSection
        title="Modern learning, powered by intelligence"
        subtitle="From course creation to certification, Ziya LMS streamlines the entire educational journey."
        features={detailedFeatures}
      />

      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Empower your learners with the best technology
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join the educational revolution with Ziya LMS
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <BookOpen className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground">Content Library</h3>
              <p className="text-sm text-muted-foreground">Centralized asset management</p>
            </div>
            <div>
              <Trophy className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground">Gamification</h3>
              <p className="text-sm text-muted-foreground">Boost engagement levels</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground">Community</h3>
              <p className="text-sm text-muted-foreground">Social learning experience</p>
            </div>
            <div>
              <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground">Self-Paced</h3>
              <p className="text-sm text-muted-foreground">Learn anytime, anywhere</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="h-14 px-10 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg shadow-glow hover:scale-105 transition-all">
                Try Ziya LMS Free
              </button>
            </Link>
            <Link to="/contact">
              <button className="h-14 px-10 text-lg font-medium text-amber-600 bg-white border-2 border-amber-600 rounded-lg hover:bg-amber-50 transition-all">
                Book a Platform Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PricingCard
        title="Scale your education business"
        subtitle="Flexible plans designed for growth and excellence in education."
        plans={pricingPlans}
      />
    </div>
  );
};

export default ZiyaLMS;
