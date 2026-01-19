import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about Ziya's AI suite? We're here to help you
                transform your business with intelligent automation solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-elegant">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Live Chat Support
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get instant help from our support team. Available 24/7 for all
                  your questions.
                </p>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() =>
                    toast({
                      title: "Live Chat",
                      description: "Connecting you to an agent...",
                    })
                  }
                >
                  Start Chat
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-elegant">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Email Support
                </h3>
                <p className="text-muted-foreground mb-6">
                  Send us an email and we'll respond within 2 hours during
                  business hours.
                </p>
                <a href="mailto:aspirentech@gmail.com" className="w-full">
                  <Button variant="outline" className="w-full">
                    aspirentech@gmail.com
                  </Button>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-elegant">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Phone Support
                </h3>
                <p className="text-muted-foreground mb-6">
                  Talk to our experts directly. Available Monday to Friday, 9 AM
                  - 6 PM EST.
                </p>
                <a href="tel:+919750359750" className="w-full">
                  <Button variant="outline" className="w-full">
                    +91 9750 35 9750
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="Your Company Name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 9750 35 9750" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input placeholder="How can we help you?" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your project, questions, or how we can help..."
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" required />
                      <span className="text-sm text-muted-foreground">
                        I agree to receive communications from Ziya about
                        products, services, and events. I can unsubscribe at any
                        time.
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Our Office
                      </h3>
                      <p className="text-muted-foreground">
                        Krishnagiri Office Tamil Nadu, India
                        <br />
                        Chennai Office Tamil Nadu, India <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                        <br />
                        Saturday: 10:00 AM - 4:00 PM EST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Support Channels
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>• Live Chat: 24/7 availability</p>
                        <p>• Email: Response within 2 hours</p>
                        <p>• Phone: Business hours only</p>
                        <p>• Emergency: 24/7 for Enterprise customers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-12">
                  <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Interactive Map</p>
                      <p className="text-sm text-gray-400">
                        Krishnagiri Office Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about Ziya
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I get started with Ziya?",
                  answer:
                    "You can start using Ziya immediately after signing up. Our free plan gives you access to core features, and our onboarding team can help you set up your first automation within 24 hours.",
                },
                {
                  question: "Do you offer implementation support?",
                  answer:
                    "Yes! We provide comprehensive implementation support including dedicated onboarding, training sessions, and ongoing technical assistance to ensure your success.",
                },
                {
                  question: "What integrations are available?",
                  answer:
                    "Ziya integrates with 500+ popular business tools including crms, email platforms, e-commerce systems, and more. Check our integrations page for the full list.",
                },
                {
                  question: "Is there a free trial available?",
                  answer:
                    "Yes, we offer a generous free plan with no time limit. You can upgrade to paid plans anytime as your needs grow.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-elegant"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
