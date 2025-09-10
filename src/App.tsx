import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Assessment from "./pages/Assessment";
import Solutions from "./pages/Solutions";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
