import { Megaphone, BarChart3, Headphones, ShoppingCart, Check } from "lucide-react";

const Engines = () => {
  const engines = [
    {
      title: "Marketing Engine",
      description: "From content creation to audience building, GoZen's AI-powered marketing products help you generate leads and automate marketing.",
      icon: <Megaphone className="h-8 w-8 text-white" />,
      features: [
        "Marketing automation",
        "Gamified lead generation",
        "Automated review management"
      ]
    },
    {
      title: "Sales Engine",
      description: "Sales coaching, cold email and email marketing automation—all you need to accelerate your sales performance.",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      features: [
        "Sales automation",
        "400M lead database",
        "Intent and signals-based outreach"
      ]
    },
    {
      title: "Support Engine",
      description: "Chatbot with AI agentic features to automate your customer support, inbound sales, and some marketing tasks.",
      icon: <Headphones className="h-8 w-8 text-white" />,
      features: [
        "Omni-channel help desk",
        "Implicit lead collection",
        "Conversational lead qualification"
      ]
    },
    {
      title: "eCommerce Engine",
      description: "An AI chatbot with agentic capabilities for pre-purchase, purchase, and post-purchase eCommerce support.",
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      features: [
        "AI native workflows",
        "AI product recommendations",
        "Multilingual support"
      ]
    }
  ];

  return (
    <section className="py-10 bg-[#EFF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What <span className="text-blue-600">Ziya</span> can do for you
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ziya has everything you need to increase your revenue. Don't just take our words, we'll let the product do the talking.
          </p>
        </div>

        {/* Engines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engines.map((engine, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon Section */}
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                {engine.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {engine.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {engine.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <div className="text-sm font-semibold text-gray-700 mb-3">Popular Features:</div>
                {engine.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engines;
