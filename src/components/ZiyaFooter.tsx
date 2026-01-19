import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ZiyaFooter = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thanks — we sent a confirmation" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Branding */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">ZiyaSuite</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering businesses with intelligent AI solutions. Transform your customer engagement, automate workflows, and scale with confidence.
            </p>

            {/* Newsletter */}
            <form onSubmit={onSubscribe} className="flex items-center gap-2 bg-gray-800/60 border border-gray-700 rounded-lg p-2">
              <Input type="email" required placeholder="Enter your email" className="bg-transparent text-gray-200 placeholder:text-gray-400 border-0 focus-visible:ring-offset-0" />
              <Button type="submit" className="bg-primary text-white hover:opacity-90">Subscribe</Button>
            </form>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@aspirentech.co</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 9750 35 9750</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary" />
                <span></span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#chat" className="hover:text-white transition-colors">Ziya Chat</a></li>
              <li><a href="/whatsapp-automation" className="hover:text-white transition-colors">WhatsApp Automation</a></li>
              <li><a href="#flow" className="hover:text-white transition-colors">Ziya Flow</a></li>
              <li><a href="/business-automation" className="hover:text-white transition-colors">Business Automation</a></li>
              <li><a href="#voice" className="hover:text-white transition-colors">Ziya Voice</a></li>
              <li><a href="/voice-ai-platform" className="hover:text-white transition-colors">Voice AI Platform</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#api" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#status" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          {/* <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="/gdpr" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div> */}
        </div> 
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-sm text-gray-400">
          <span>© {currentYear} ZiyaSuite. All rights reserved.</span>
          <span className="hidden sm:block">Built with love and AI</span>
        </div>
      </div>
    </footer>
  );
};

export default ZiyaFooter;



