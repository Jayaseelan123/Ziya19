import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ziyasuite-logo.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"choice" | "login" | "register">(
    "choice",
  );
  const { toast } = useToast();

  const products = [
    {
      name: "Ziya Crm",
      description: "Customer relationship management suite",
      href: "/ziya-crm",
    },
    {
      name: "Ziya Voice",
      description: "Voice AI platform",
      href: "/ziya-voice",
    },
    {
      name: "Ziya Flow",
      description: "Business automation platform",
      href: "/ziya-flow",
    },
    {
      name: "Ziya Chat",
      description: "WhatsApp automation & marketing",
      href: "/ziya-chat",
    },
    {
      name: "Ziya Forms",
      description: "Create intelligent forms and capture leads",
      href: "/ziya-forms",
    },
    {
      name: "Ziya LMS",
      description: "Learning management system for courses and training",
      href: "/ziya-lms",
    },
  ];

  const onRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Account created", description: "Welcome to ZiyaSuite!" });
    setAuthOpen(false);
    setAuthMode("choice");
  };

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Welcome back", description: "You are now signed in." });
    setAuthOpen(false);
    setAuthMode("choice");
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <img src={logo} alt="Ziya AI" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium flex items-center transition-smooth"
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-elegant border border-border z-50">
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          className="flex flex-col p-3 rounded-md hover:bg-accent transition-smooth"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="font-medium text-foreground">
                            {product.name}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {product.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-smooth"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-smooth"
              >
                Blog
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium flex items-center transition-smooth"
                >
                  Contact
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isContactOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-elegant border border-border z-50">
                    <div className="py-2">
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-smooth"
                        onClick={() => setIsContactOpen(false)}
                      >
                        Contact Us
                      </Link>
                      <Link
                        to="/partner-with-us"
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-smooth"
                        onClick={() => setIsContactOpen(false)}
                      >
                        Partner With Us
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Login
              </Button>
            </Link>
            <Button
              variant="hero"
              size="sm"
              onClick={() => {
                setAuthOpen(true);
                setAuthMode("register");
              }}
            >
              Start Free Trial
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-background p-2 inline-flex items-center justify-center text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-smooth rounded-md"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground px-3 py-2">
                  Products
                </div>
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/pricing"
                className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-smooth"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-smooth"
              >
                Blog
              </Link>

              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground px-3 py-2">
                  Contact
                </div>
                <Link
                  to="/contact"
                  className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  to="/partner-with-us"
                  className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  Partner With Us
                </Link>
              </div>

              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full">
                  <Button
                    variant="hero"
                    size="sm"
                    className="justify-start w-full"
                  >
                    Login
                  </Button>
                </Link>
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => {
                    setAuthOpen(true);
                    setAuthMode("register");
                    setIsOpen(false);
                  }}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog
        open={authOpen}
        onOpenChange={(o) => {
          setAuthOpen(o);
          if (!o) setAuthMode("choice");
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {authMode === "choice"
                ? "Sign In"
                : authMode === "login"
                  ? "Login to ZiyaSuite"
                  : "Create your ZiyaSuite account"}
            </DialogTitle>
            <DialogDescription>
              {authMode === "choice"
                ? "Choose an option to continue."
                : authMode === "login"
                  ? "Enter your credentials to access your account."
                  : "Register to start your free trial."}
            </DialogDescription>
          </DialogHeader>

          {authMode === "choice" && (
            <div className="grid gap-3">
              <Button variant="hero" onClick={() => setAuthMode("register")}>
                Register
              </Button>
              <Button variant="outline" onClick={() => setAuthMode("login")}>
                Already Registered
              </Button>
            </div>
          )}

          {authMode === "register" && (
            <form className="grid gap-3" onSubmit={onRegister}>
              <Input placeholder="Full name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" variant="hero">
                Create account
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setAuthMode("login")}
              >
                Already Registered? Login
              </Button>
            </form>
          )}

          {authMode === "login" && (
            <form className="grid gap-3" onSubmit={onLogin}>
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" variant="hero">
                Sign In
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setAuthMode("register")}
              >
                New here? Register
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navigation;
