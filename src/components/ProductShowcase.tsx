import { useState } from "react";
import {
  ArrowRight,
  Workflow,
  MessageCircle,
  Mic,
  FileText,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("Marketing");

  const tabs = ["Marketing", "Sales", "Support"];

  const products = {
    Marketing: [
      // {
      //   name: "Chat",
      //   description:
      //     "Engage your audience with strategic popups personalized for your use case that are proven to capture leads and build audience 10X faster.",
      //   icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      //   textcolor: "text-blue-600",
      //   bordercolor: "border-blue-600",
      // },
      // {
      //   name: "Flow",
      //   description:
      //     "An AI-powered, no-code form builder that lets you easily collect valuable customer feedback through customizable forms, engaging polls, and insightful surveys.",
      //   icon: <Workflow className="h-8 w-8 text-green-600" />,
      //   textcolor: "text-green-600",
      //   bordercolor: "border-green-600",
      // },
      // {
      //   name: "Voice",
      //   description:
      //     "A gamified, eCommerce-friendly lead generation platform built to attract, engage, and convert customers through interactive experiences and rewards.",
      //   icon: <Mic className="h-8 w-8 text-violet-600" />,
      //   textcolor: "text-violet-600",
      //   bordercolor: "border-violet-600",
      // },
      // {
      //   name: "Forms",
      //   description:
      //     "Smart form builder for capturing leads and automating marketing workflows with AI-powered insights",
      //   icon: <FileText className="h-8 w-8 text-orange-600" />,
      //   textcolor: "text-orange-600",
      //   bordercolor: "border-orange-600",
      // },
      {
        name: "CRM",
        description:
          "Marketing automation and customer engagement platform to nurture leads and drive conversions",
        icon: <Users className="h-8 w-8 text-cyan-600" />,
        textcolor: "text-cyan-600",
        bordercolor: "border-cyan-600",
        href: "/ziya-crm",
      },
      {
        name: "Chat",
        description:
          "Engage your audience with strategic popups personalized for your use case that are proven to capture leads and build audience 10X faster.",
        icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
        textcolor: "text-blue-600",
        bordercolor: "border-blue-600",
        href: "/ziya-chat",
      },
      {
        name: "Voice",
        description:
          "A gamified, eCommerce-friendly lead generation platform built to attract, engage, and convert customers through interactive experiences and rewards.",
        icon: <Mic className="h-8 w-8 text-violet-600" />,
        textcolor: "text-violet-600",
        bordercolor: "border-violet-600",
        href: "/ziya-voice",
      },
    ],
    Sales: [
      {
        name: "Chat",
        description:
          "Email marketing automation and growth hacking tools for scaling your business",
        icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
        textcolor: "text-blue-600",
        bordercolor: "border-blue-600",
        href: "/ziya-chat",
      },
      {
        name: "Flow",
        description:
          "An AI-powered, no-code form builder that lets you easily collect valuable customer feedback through customizable forms, engaging polls, and insightful surveys.",
        icon: <Workflow className="h-8 w-8 text-green-600" />,
        textcolor: "text-green-600",
        bordercolor: "border-green-600",
        href: "/ziya-flow",
      },
      {
        name: "Voice",
        description:
          "Comprehensive help desk and support ticket management system",
        icon: <Mic className="h-8 w-8 text-violet-600" />,
        textcolor: "text-violet-600",
        bordercolor: "border-violet-600",
        href: "/ziya-voice",
      },
      // {
      //   name: "Forms",
      //   description:
      //     "Lead capture forms and sales pipeline automation with AI-powered validation",
      //   icon: <FileText className="h-8 w-8 text-orange-600" />,
      //   textcolor: "text-orange-600",
      //   bordercolor: "border-orange-600",
      // },
      // {
      //   name: "crms",
      //   description:
      //     "Sales pipeline management, lead tracking, and deal acceleration powered by AI",
      //   icon: <Users className="h-8 w-8 text-cyan-600" />,
      //   textcolor: "text-cyan-600",
      //   bordercolor: "border-cyan-600",
      // },
    ],
    Support: [
      {
        name: "Voice",
        description:
          "Comprehensive help desk and support ticket management system",
        icon: <Mic className="h-8 w-8 text-violet-600" />,
        textcolor: "text-violet-600",
        bordercolor: "border-violet-600",
        href: "/ziya-voice",
      },
      {
        name: "Chat",
        description:
          "Email marketing automation and growth hacking tools for scaling your business",
        icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
        textcolor: "text-blue-600",
        bordercolor: "border-blue-600",
        href: "/ziya-chat",
      },
      {
        name: "Forms",
        description:
          "Smart form builder for collecting and automating customer feedback and data workflows",
        icon: <FileText className="h-8 w-8 text-orange-600" />,
        textcolor: "text-orange-600",
        bordercolor: "border-orange-600",
        href: "/ziya-forms",
      },
      // {
      //   name: "crms",
      //   description:
      //     "AI-driven customer relationship management for tracking and managing support tickets and customer interactions",
      //   icon: <Users className="h-8 w-8 text-cyan-600" />,
      //   textcolor: "text-cyan-600",
      //   bordercolor: "border-cyan-600",
      // },
    ],
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeTab as keyof typeof products].map(
            (product, index) => (
              <div
                key={index}
                className={`bg-white border-2 ${product.bordercolor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {product.icon}
                </div>

                {/* Title with Ziya black + product name in color */}
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-black">Ziya </span>
                  <span className={product.textcolor}>{product.name}</span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* CTA */}
                <Link
                  to={(product as any).href}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
