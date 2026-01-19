import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=150&h=150&fit=crop&crop=face",
      content: "Ziya Chat transformed our customer engagement. We've seen a 300% increase in lead conversion and our response time dropped from hours to seconds.",
      rating: 5,
      metric: "300% increase in conversions"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Global Logistics Co",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Ziya Flow automated 80% of our manual processes. What used to take our team 6 hours now happens automatically in minutes. Game changer!",
      rating: 5,
      metric: "6 hours → 15 minutes"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Lead",
      company: "FinanceHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Our voice AI powered by Ziya Voice handles 1000+ calls daily with 95% customer satisfaction. It's like having a tireless, perfect agent.",
      rating: 5,
      metric: "95% satisfaction rate"
    },
    {
      name: "David Park",
      role: "CEO",
      company: "StartupBoost",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "We integrated all three Ziya products and saw 250% ROI in 3 months. The unified suite approach is exactly what growing businesses need.",
      rating: 5,
      metric: "250% ROI in 3 months"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Digital",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "The seamless integration between Ziya's products created a unified customer journey. Our NPS score improved by 40 points!",
      rating: 5,
      metric: "+40 NPS improvement"
    },
    {
      name: "James Wilson",
      role: "VP Technology",
      company: "InnovaCorp",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Implementation was smooth and support is outstanding. Ziya's AI capabilities are truly next-generation. Our productivity increased 180%.",
      rating: 5,
      metric: "180% productivity boost"
    }
  ];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by 5000+ businesses
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See why companies choose{" "}
            <span className="text-primary">Ziya</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their operations with our AI-powered suite
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Metric */}
              <div className="bg-primary/5 text-primary text-sm font-semibold px-3 py-2 rounded-lg mb-6 inline-block">
                {testimonial.metric}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join these success stories
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your free trial today and see why thousands of businesses trust Ziya
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-white primary-gradient rounded-lg shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300">
                Start Free Trial - No Credit Card Required
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;