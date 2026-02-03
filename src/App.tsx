import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import About from "./pages/About";
import Careers from "./pages/Careers";
import News from "./pages/News";

import Contact from "./pages/Contact";
import { SectionRedirect } from "@/components/SectionRedirect";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            
            <Route path="/contact" element={<Contact />} />

            {/* Section routes (avoid 404 if someone lands on /process etc.) */}
            <Route path="/products" element={<SectionRedirect hash="#products" />} />
            <Route path="/solutions" element={<SectionRedirect hash="#solutions" />} />
            <Route path="/process" element={<SectionRedirect hash="#process" />} />
            <Route path="/capabilities" element={<SectionRedirect hash="#capabilities" />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
