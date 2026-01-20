import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import heroSaas from "@/assets/hero-saas.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Calendar as DayPicker } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();
  const [trialOpen, setTrialOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const [authOpen, setAuthOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"choice" | "login" | "register">("choice");

  function handleTrialSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDate) {
      toast({ title: "Please select a date", description: "Choose a date from the calendar." });
      return;
    }
    toast({ title: "Trial booked", description: "We'll reach out with next steps." });
    setTrialOpen(false);
  }

  function handleDemoSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast({ title: "Demo scheduled", description: "We've sent a confirmation to your email." });
    setDemoOpen(false);
  }

  function onRegister(e: React.FormEvent) {
    e.preventDefault();
    toast({ title: "Account created", description: "Welcome to ZiyaSuite!" });
    setAuthOpen(false);
    setAuthMode("choice");
  }

  function onLogin(e: React.FormEvent) {
    e.preventDefault();
    toast({ title: "Welcome back", description: "You are now signed in." });
    setAuthOpen(false);
    setAuthMode("choice");
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="AI background" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 light-gradient opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Introducing SaaS Products
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Business on Ziyapilot with Smart SaaS Automation
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Experience the future of business intelligence. ZiyaSuite brings together advanced AI chat,
              intelligent workflow automation, and human-like voice technology to transform your operations
              into a high-performance Ziyapilot ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="hero"
                size="xl"
                className="group w-full sm:w-auto"
                onClick={() => setCalendlyOpen(true)}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="xl" className="group" onClick={() => setDemoOpen(true)}>
                Start Free Trial
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Businesses Trust Us</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">2M+</div>
                <div className="text-sm text-muted-foreground">Messages Automated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 animate-float">
              <img
                src={heroSaas}
                alt="SaaS Automation"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Floating Badge: Growth */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-pulse-glow border border-primary/10">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <img src="/ziya-ai-growth.png" alt="Growth Icon" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 leading-none mb-1">62% revenue growth</div>
                  <div className="text-xs text-green-600 font-medium whitespace-nowrap">in 180 days</div>
                </div>
              </div>

              {/* Secondary Floating Badge: Users */}
              <div className="absolute -bottom-10 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-float-delayed border border-primary/10">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full absolute -top-1 -right-1 animate-pulse" />
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 leading-none mb-1">Active Now</div>
                  <div className="text-xs text-muted-foreground">1,234 users online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Dialog open={trialOpen} onOpenChange={setTrialOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book a Demo</DialogTitle>
            <DialogDescription>Select a date and share your details.</DialogDescription>
          </DialogHeader>

          <form className="grid gap-3" onSubmit={handleTrialSubmit}>
            <Input placeholder="Full name" required />
            <Input type="email" placeholder="Work" required pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$" />
            <DayPicker mode="single" selected={selectedDate} onSelect={(d) => setSelectedDate(d as Date | undefined)} />
            <Button type="submit" variant="hero" disabled={!selectedDate}>Confirm booking</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start free trial</DialogTitle>
            <DialogDescription>We will tailor the demo to your use case.</DialogDescription>
          </DialogHeader>

          <form className="grid gap-3" onSubmit={handleDemoSubmit}>
            <Input placeholder="Full name" required />
            <Input type="email" placeholder="Work email" required pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$" />
            <Input placeholder="Company" required />
            <Button type="submit" variant="hero">Request demo</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={authOpen} onOpenChange={(o) => { setAuthOpen(o); if (!o) setAuthMode("choice"); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{authMode === "choice" ? "Sign In" : authMode === "login" ? "Login to ZiyaSuite" : "Create your ZiyaSuite account"}</DialogTitle>
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
              <Button variant="hero" onClick={() => setAuthMode("register")}>Register</Button>
              <Button variant="outline" onClick={() => setAuthMode("login")}>Already Registered</Button>
            </div>
          )}

          {authMode === "register" && (
            <form className="grid gap-3" onSubmit={onRegister}>
              <Input placeholder="Full name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" variant="hero">Create account</Button>
              <Button type="button" variant="ghost" onClick={() => setAuthMode("login")}>Already Registered? Login</Button>
            </form>
          )}

          {authMode === "login" && (
            <form className="grid gap-3" onSubmit={onLogin}>
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" variant="hero">Sign In</Button>
              <Button type="button" variant="ghost" onClick={() => setAuthMode("register")}>New here? Register</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={calendlyOpen} onOpenChange={setCalendlyOpen}>
        <DialogContent className="sm:max-w-[500px] h-[95vh] p-0 overflow-hidden">
          <iframe
            src="https://calendly.com/jayaseelanravi06/30min?embed_domain=ziyasuite.com&embed_type=Inline"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Select a Date & Time"
          ></iframe>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;