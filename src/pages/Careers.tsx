import React from "react";
import { Briefcase, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const CareersPage = () => {
    const jobOpenings = [
        {
            title: "Frontend Developer",
            location: "Remote / India",
            type: "Full-time",
            description:
                "Build interactive and responsive UI components for Ziya Suite using React and TailwindCSS.",
        },
        {
            title: "Backend Developer",
            location: "Remote / India",
            type: "Full-time",
            description:
                "Develop APIs, manage database design, and integrate backend services using PHP & MySQL.",
        },
        {
            title: "AI Specialist",
            location: "Remote / India",
            type: "Full-time",
            description:
                "Work on AI chatbots, workflow automation, and voice assistants for Ziya Suite products.",
        },
    ];

    const benefits = [
        { icon: <Users className="h-8 w-8 text-green-600" />, title: "Team Collaboration", description: "Work with a diverse, talented team across multiple domains." },
        { icon: <Globe className="h-8 w-8 text-blue-600" />, title: "Remote Flexibility", description: "Work from anywhere while staying connected with your team." },
        { icon: <Briefcase className="h-8 w-8 text-purple-600" />, title: "Career Growth", description: "Learn, grow, and shape your career in a fast-paced AI startup." },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="text-center py-32 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4">
                <h1 className="text-5xl font-bold mb-4">Join Ziya Suite</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    We are looking for talented individuals passionate about AI and automation to join our growing team. Explore opportunities, contribute to innovative products, and grow with us.
                </p>
            </section>

            {/* Open Positions Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Open Positions</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {jobOpenings.map((job, index) => (
                        <div key={index} className="p-6 bg-white rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h3>
                            <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
                            <p className="text-gray-600 mb-4"><strong>Type:</strong> {job.type}</p>
                            <p className="text-gray-600 mb-4">{job.description}</p>
                            <Link to="/contact">
                                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits / Culture Section */}
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Why Work With Us</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center p-4">
                            <div className="mb-4">{benefit.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 max-w-xs mx-auto">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    Join our team of innovators and help shape the future of AI automation with Ziya Suite.
                </p>
                <Link to="/contact">
                    <button className="bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Apply Now
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default CareersPage;
