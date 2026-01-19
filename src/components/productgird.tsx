import { MessageCircle, Workflow, Mic } from "lucide-react";

const products = [
  { name: "Chat", icon: <MessageCircle className="h-8 w-8 text-blue-600" />, textColor: "text-blue-600" },
  { name: "Flow", icon: <Workflow className="h-8 w-8 text-green-600" />, textColor: "text-green-600" },
  { name: "Voice", icon: <Mic className="h-8 w-8 text-violet-600" />, textColor: "text-violet-600" },
];

const ProductGrid = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                {product.icon}
              </div>
              <h3 className={`font-semibold text-sm mb-2 ${product.textColor}`}>
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
