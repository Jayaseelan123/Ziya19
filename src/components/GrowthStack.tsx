import { ArrowRight, Zap, BarChart3 } from "lucide-react";

const GrowthStack = () => {
  const features = [
    {
      title: "Subscribe to a single product or the bundle",
      description:
        "Select a single product or the unified bundle according to your needs",
      icon: (
        <div className="w-full h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-4 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                Bundle
              </div>
              <div className="text-xs text-gray-600 mb-1">Ziya suite</div>
              <div className="space-y-1">
                <div className="w-16 h-1 bg-gray-300 rounded"></div>
                <div className="w-12 h-1 bg-gray-300 rounded"></div>
                <div className="w-14 h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                Ziya CRM
              </div>
              <div className="text-xs text-gray-600 mb-1">Ziya flow</div>
              <div className="text-xs text-gray-600 mb-1">Ziya voice</div>
              <div className="space-y-1">
                <div className="w-16 h-1 bg-gray-300 rounded"></div>
                <div className="w-12 h-1 bg-gray-300 rounded"></div>
                <div className="w-14 h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Automate marketing, sales, and customer support",
      description:
        "Scale your business by automating your marketing, inbound sales, and customer support tasks.",
      icon: (
        <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-4 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <div className="bg-white rounded p-2 text-xs font-semibold">
                Marketing
              </div>
              <div className="bg-white rounded p-2 text-xs font-semibold">
                Sales
              </div>
              <div className="bg-white rounded p-2 text-xs font-semibold">
                Support
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white rounded p-2 text-xs font-semibold">
                Automate
              </div>
              <div className="flex space-x-2">
                <div className="bg-blue-500 rounded p-2 text-xs text-white">
                  Marketing
                </div>
                <div className="bg-blue-500 rounded p-2 text-xs text-white">
                  Sales
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Crush your sales quota",
      description: "Crush your sales quota with 3X more conversions.",
      icon: (
        <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <BarChart3 className="h-12 w-12 text-blue-600" />
            <div className="text-2xl font-bold text-green-600 mt-2">$</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6">
            How you can use Ziya
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your growth stack, <span className="text-blue-600">Unified</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A flexible sales and marketing suite that helps you go from lead to
            revenue.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStack;
