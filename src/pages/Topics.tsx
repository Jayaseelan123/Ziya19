import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const products = [
  {
    key: "ziya-crms",
    name: "Ziya crms",
    description: "Customer relationship management suite",
    href: "/ziya-crms",
  },
  {
    key: "ziya-voice",
    name: "Ziya Voice",
    description: "Voice AI platform",
    href: "/ziya-voice",
  },
  {
    key: "ziya-flow",
    name: "Ziya Flow",
    description: "Business automation platform",
    href: "/ziya-flow",
  },
  {
    key: "ziya-chat",
    name: "Ziya Chat",
    description: "WhatsApp automation & marketing",
    href: "/ziya-chat",
  },
  {
    key: "ziya-forms",
    name: "Ziya Forms",
    description: "Create intelligent forms and capture leads",
    href: "/ziya-forms",
  },
  {
    key: "ziya-lms",
    name: "Ziya LMS",
    description: "Learning management system for courses and training",
    href: "/ziya-lms",
  },
];

const Topics: React.FC = () => {
  const params = useParams<{ topic?: string }>();
  const navigate = useNavigate();
  const topic = params.topic || products[0].key;

  const selected = products.find((p) => p.key === topic) || products[0];

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Topics list */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-semibold mb-3">All Topics</h4>
              <div className="space-y-2">
                {products.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => navigate(`/topics/${p.key}`)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-all ${p.key === selected.key ? "bg-primary/10 text-primary font-medium" : "hover:bg-accent text-foreground"}`}
                  >
                    <div className="text-sm">{p.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {p.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Selected topic details */}
          <main className="md:col-span-3">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h1 className="text-3xl font-bold mb-4">{selected.name}</h1>
              <p className="text-muted-foreground mb-6">
                {selected.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Overview</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed overview and key highlights for {selected.name}.
                  </p>
                </div>

                <div className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Resources</h3>
                  <ul className="list-disc ml-5 text-sm text-muted-foreground">
                    <li>Documentation</li>
                    <li>Getting started guides</li>
                    <li>Integration examples</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  to={selected.href}
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md"
                >
                  Open Product Page
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-4 py-2 border border-primary/20 rounded-md"
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Topics;
