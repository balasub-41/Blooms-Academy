import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Shorts from "./pages/Shorts";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProgrammesPagePlaceholder from "./pages/ProgrammesPagePlaceholder";
import Products from "./pages/Products";
import ContactUs from './pages/ContactUs';
import CpaqInstructions from './pages/CpaqInstructions'; // Import the new component

// Initialize query client instance at the top level
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/programmes/*" element={<ProgrammesPagePlaceholder />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cpaq-instructions" element={<CpaqInstructions />} /> {/* Add the new route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;