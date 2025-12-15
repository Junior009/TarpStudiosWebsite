import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DigitalServices from "./pages/DigitalServices";
import TechProducts from "./pages/TechProducts";
import Portfolio from "./pages/Portfolio";
import AffiliatePage from "./pages/AffiliatePage";
import SalesPartners from "./pages/SalesPartners";
import RequestQuote from "./pages/RequestQuote";
import AffiliateApplication from "./pages/AffiliateApplication";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<DigitalServices />} />
          <Route path="/products" element={<TechProducts />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route path="/partners" element={<SalesPartners />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/affiliate-application" element={<AffiliateApplication />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;