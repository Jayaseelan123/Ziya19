import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Core Pages
import Index from "./pages/Index";
import ZiyaChat from "./pages/ZiyaChat";
import ZiyaFlow from "./pages/ZiyaFlow";
import ZiyaVoice from "./pages/ZiyaVoice";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PartnerWithUs from "./pages/PartnerWithUs";
import Ziyacrm from "./pages/ZiyaCRM";
import ZiyaForms from "./pages/ZiyaForms";
import ZiyaLMS from "./pages/ZiyaLMS";
import Topics from "./pages/Topics";
import NotFound from "./pages/NotFound";

// Newly Added Pages
import About from "./pages/About";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ziya-chat" element={<ZiyaChat />} />
              <Route path="/ziya-flow" element={<ZiyaFlow />} />
              <Route path="/ziya-voice" element={<ZiyaVoice />} />
              <Route path="/ziya-forms" element={<ZiyaForms />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/topics/:topic" element={<Topics />} />
              <Route path="/ziya-lms" element={<ZiyaLMS />} />
              <Route path="/ziya-crm" element={<Ziyacrm />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer stays on every page */}
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
