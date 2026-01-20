import { Mail, Phone } from "lucide-react";
import logo from "@/assets/ziyasuite-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: "Ziya Voice", href: "/ziya-voice", description: "Voice AI Platform" },
    { name: "Ziya Flow", href: "/ziya-flow", description: "Business Automation" },
    { name: "Ziya Crm", href: "/ziya-crm", description: "Sales & CRM Suite" },
  ];

  const company = [
    { name: "About Us", href: "/about", description: "about" },
    { name: "Careers", href: "/careers", description: "careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const support = [
    { name: "Help Center", href: "/help-center" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Status", href: "/status" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + About + Contact */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <img src={logo} alt="Ziya AI" className="h-10 w-auto" />
          </div>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Empowering businesses with intelligent AI solutions. Transform your
            customer engagement, automate workflows, and scale with confidence.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-sky-400" />
              <span className="text-gray-200">aspirentech@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-sky-400" />
              <span className="text-gray-200">+91 9750 35 9750</span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-6">Products</h3>
          <ul className="space-y-4">
            {products.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-gray-200 hover:text-white transition-colors block">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-300">{item.description}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-6">Company</h3>
          <ul className="space-y-3">
            {company.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-gray-200 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-6">Support</h3>
          <ul className="space-y-3">
            {support.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-gray-200 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>© {currentYear} ZiyaSuite. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="https://www.instagram.com/ziyasuite_official/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">LinkedIn</a>
            <a href="https://wa.me/919750359750" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">WhatsApp</a>
            {/* <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">Discord</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
