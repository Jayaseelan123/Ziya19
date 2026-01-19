import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Check, Users, DollarSign, Headphones, TrendingUp, Award, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const PartnerWithUs = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const playVideo = (id: string) => {
    setActiveVideo(id);
    setVideoOpen(true);
  };
  const benefits = [
    {
      icon: DollarSign,
      title: "30% Lifetime Commission",
      description: "Earn recurring commission on every sale with our industry-leading affiliate program"
    },
    {
      icon: Headphones,
      title: "Dedicated Support Team",
      description: "Get dedicated sales and support team assistance for your clients and partnership needs"
    },
    {
      icon: Handshake,
      title: "Warm Lead Sharing",
      description: "Access to qualified leads and co-selling opportunities to grow your business"
    },
    {
      icon: TrendingUp,
      title: "Marketing Resources",
      description: "Complete marketing toolkit including assets, training materials, and campaign templates"
    },
    {
      icon: Award,
      title: "Partner Recognition",
      description: "Exclusive partner badges, certifications, and recognition in our partner directory"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join our exclusive partner community for networking, training, and collaboration"
    }
  ];

  const stats = [
    { value: "5000+", label: "Businesses Trust Us" },
    { value: "1,135+", label: "5-Star Reviews" },
    { value: "30%", label: "Commission Rate" },
    { value: "24/7", label: "Partner Support" }
  ];

  const partnerTypes = [
    {
      title: "Reseller Partners",
      description: "Sell Ziya products directly to your clients",
      features: [
        "Discounted pricing tiers",
        "White-label options available",
        "Dedicated account manager",
        "Custom billing and invoicing"
      ]
    },
    {
      title: "Affiliate Partners",
      description: "Promote Ziya and earn commissions",
      features: [
        "30% lifetime recurring commission",
        "Real-time tracking dashboard",
        "Marketing materials provided",
        "Monthly payouts"
      ]
    },
    {
      title: "Technology Partners",
      description: "Integrate with Ziya's platform",
      features: [
        "API access and documentation",
        "Technical support",
        "Co-marketing opportunities",
        "Joint solution development"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Earn{" "}
                  <span className="inline-block px-4 py-2 primary-gradient text-white rounded-lg transform -rotate-2 shadow-glow">
                    30%
                  </span>{" "}
                  lifetime recurring commission per sale
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  Join our partner program and grow your business with Ziya's AI-powered suite.
                  Get access to dedicated support, marketing resources, and exclusive benefits.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/contact">
                    <Button variant="hero" size="xl">
                      Join Now
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="xl">
                      Get Partner Assets
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Creative Video Section */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-white/10">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => playVideo("ScMzIvxBSi4")}
                      className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white/20 transition-all duration-300 group/play"
                    >
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow group-hover/play:shadow-primary/50 transition-shadow">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                        </svg>
                      </div>
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs font-medium text-white mb-3">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                      Partner Showreel 2024
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Ziya Partner Success Stories
                    </h3>
                    <p className="text-white/70 text-sm">
                      Watch how we empower our partners to scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What agencies can expect from Ziya in this partnership
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Choose Your Partnership Model
              </h2>
              <p className="text-xl text-muted-foreground">
                We offer flexible partnership options to match your business goals
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-elegant border border-border/50">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button variant={index === 1 ? "hero" : "outline"} className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Excellence */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                Creative Showreel
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Experience the Power of <span className="text-primary">Creative Collaboration</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Watch how our technology partners and agencies are transforming the landscape of AI business solutions.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[21/9]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div
                        onClick={() => playVideo("ysz5S6PUM-U")}
                        className="w-24 h-24 bg-primary/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-primary/30 group cursor-pointer hover:scale-110 transition-transform"
                      >
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow shadow-primary/40">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-white font-semibold text-lg">Play Creative Showreel</p>
                    <p className="text-slate-400 text-sm italic">Featuring: Case studies from 20+ Global Agencies</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                  <div className="flex gap-12">
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">200+</div>
                      <div className="text-xs text-slate-400 uppercase tracking-widest">Global Partners</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">M+</div>
                      <div className="text-xs text-slate-400 uppercase tracking-widest">Revenue Shared</div>
                    </div>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden`}>
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold">
                      +150
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Partner Success Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-elegant">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">TechFlow Agency</h3>
                    <p className="text-muted-foreground">Digital Marketing Agency</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Partnering with Ziya has been a game-changer. We've generated over $500K in additional revenue
                  and our clients love the AI automation solutions."
                </p>
                <div className="text-2xl font-bold text-primary">$500K+ Revenue Generated</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">GrowthPartners Inc</h3>
                    <p className="text-muted-foreground">Business Consultancy</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The 30% recurring commission and dedicated support team have helped us scale our
                  consulting business beyond our expectations."
                </p>
                <div className="text-2xl font-bold text-primary">300% Partner Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Partner with Ziya?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful partners who are growing their businesses with our AI-powered suite
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Apply Now - It's Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Schedule a Partner Call
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PartnerWithUs;