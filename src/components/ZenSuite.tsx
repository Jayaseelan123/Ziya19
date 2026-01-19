import {
  MessageCircle,
  Workflow,
  Mic,
  FileText,
  Users,
  BookOpen,
} from "lucide-react";
import ziyaSuiteAiLogo from "@/assets/ziyasuite-ai-logo.png";
import { Link } from "react-router-dom";

const ZenSuite = () => {
  const products = [
    {
      name: "CRM",
      icon: <Users className="h-8 w-8 text-cyan-600" />,
      textcolor: "text-cyan-600",
    },
    {
      name: "Voice",
      icon: <Mic className="h-8 w-8 text-violet-600" />,
      textcolor: "text-violet-600",
    },
    {
      name: "Flow",
      icon: <Workflow className="h-8 w-8 text-green-600" />,
      textcolor: "text-green-600",
    },
    {
      name: "Chat",
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      textcolor: "text-blue-600",
    },
    {
      name: "Forms",
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      textcolor: "text-orange-600",
    },
    {
      name: "LMS",
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      textcolor: "text-indigo-600",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="mb-8">
              <img
                src={ziyaSuiteAiLogo}
                alt="ZiyaSuite AI"
                className="h-20 w-auto mb-6 animate-float"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Ziya</span>Suite
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ZiyaSuite brings together Chat, Flow, Voice, Forms, CRM, and LMS
              into one professional SaaS platform. Automate marketing,
              streamline operations, manage customer relationships, and deliver
              natural voice experiences—seamlessly.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-white primary-gradient rounded-lg hover:scale-105 transition-bounce shadow-glow">
                Try ZiyaSuite FREE
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                  {product.icon}
                </div>

                {/* 👇 Ziya black + product name color */}
                <h3 className="font-semibold text-sm mb-2">
                  <span className="text-gray-900">Ziya </span>
                  <span className={product.textcolor}>{product.name}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZenSuite;
