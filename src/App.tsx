import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SectionRedirect } from "@/components/SectionRedirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Section routes (avoid 404 if someone lands on /process etc.) */}
          <Route path="/products" element={<SectionRedirect hash="#products" />} />
          <Route path="/solutions" element={<SectionRedirect hash="#solutions" />} />
          <Route path="/industries" element={<SectionRedirect hash="#industries" />} />
          <Route path="/process" element={<SectionRedirect hash="#process" />} />
          <Route path="/about" element={<SectionRedirect hash="#about" />} />
          <Route path="/capabilities" element={<SectionRedirect hash="#capabilities" />} />
          <Route path="/contact" element={<SectionRedirect hash="#contact" />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
