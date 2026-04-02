import { lazy, Suspense } from "react";
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
import ThankYou from "./pages/ThankYou";
import { SectionRedirect } from "@/components/SectionRedirect";
import { ScrollToTop } from "@/components/ScrollToTop";

// Lazy load all secondary pages
const Solutions = lazy(() => import("./pages/Solutions"));
const Technologies = lazy(() => import("./pages/Technologies"));
const TechnologyDetail = lazy(() => import("./pages/TechnologyDetail"));
const SolutionDetail = lazy(() => import("./pages/SolutionDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightDetail = lazy(() => import("./pages/InsightDetail"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const LogoPreview = lazy(() => import("./pages/LogoPreview"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/technologies/:slug" element={<TechnologyDetail />} />
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
          <Route path="/logo-preview" element={<LogoPreview />} />

          <Route path="/products" element={<SectionRedirect hash="#products" />} />
          <Route path="/process" element={<SectionRedirect hash="#process" />} />
          <Route path="/capabilities" element={<SectionRedirect hash="#capabilities" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
            <Route path="/thank-you" element={<ThankYou />} />

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