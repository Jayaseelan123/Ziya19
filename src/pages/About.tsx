import React from "react";
import { MessageCircle, Workflow, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
    const products = [
        {
            name: "Ziya Chat",
            description:
                "An AI-powered chat assistant that helps you automate responses, improve engagement, and provide 24/7 support.",
            icon: <MessageCircle className="h-10 w-10 text-blue-600" />,
            color: "bg-blue-50",
            href: "/ziya-chat"
        },
        {
            name: "Ziya Flow",
            description:
                "Create automated workflows for your business processes, integrate apps, and streamline repetitive tasks effortlessly.",
            icon: <Workflow className="h-10 w-10 text-green-600" />,
            color: "bg-green-50",
            href: "/ziya-flow"
        },
        {
            name: "Ziya Voice",
            description:
                "Voice-enabled AI assistant that transcribes, responds, and interacts naturally with your audience in real time.",
            icon: <Mic className="h-10 w-10 text-purple-600" />,
            color: "bg-purple-50",
            href: "/ziya-voice"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="text-center py-32 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4">
                <h1 className="text-5xl font-bold mb-4">About Ziya Suite</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Ziya Suite is an all-in-one digital automation platform built to help businesses work smarter, move faster, and scale effortlessly.
                </p>
            </section>

            {/* Products Cards Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Products</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl ${product.color}`}
                        >
                            <div className="flex items-center justify-center mb-4">
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                            <p className="text-gray-600">{product.description}</p>
                            <Link to={product.href}>
                                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">How Ziya Suite Works</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
                    <div className="text-center">
                        <MessageCircle className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Chat</h3>
                        <p className="text-gray-600 max-w-xs">
                            Automate conversations and provide instant support to your users.
                        </p>
                    </div>
                    <div className="text-center">
                        <Workflow className="mx-auto h-12 w-12 text-green-600 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Flow</h3>
                        <p className="text-gray-600 max-w-xs">
                            Connect tools and automate your business processes seamlessly.
                        </p>
                    </div>
                    <div className="text-center">
                        <Mic className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Voice</h3>
                        <p className="text-gray-600 max-w-xs">
                            Interact with users through voice commands and AI responses.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
