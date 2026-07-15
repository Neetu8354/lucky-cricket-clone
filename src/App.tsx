import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy.tsx"));
const ResponsibleGaming = lazy(() => import("./pages/ResponsibleGaming.tsx"));
const EditorialPolicy = lazy(() => import("./pages/EditorialPolicy.tsx"));
const AuthorEditorialTeam = lazy(() => import("./pages/AuthorEditorialTeam.tsx"));
const Cricket = lazy(() => import("./pages/games/Cricket.tsx"));
const TeenPatti = lazy(() => import("./pages/games/TeenPatti.tsx"));
const Aviator = lazy(() => import("./pages/games/Aviator.tsx"));
const AndarBahar = lazy(() => import("./pages/games/AndarBahar.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
              <Route path="/editorial-policy" element={<EditorialPolicy />} />
              <Route path="/author/yolo365-editorial-team" element={<AuthorEditorialTeam />} />
              <Route path="/games/cricket-betting" element={<Cricket />} />
              <Route path="/games/teen-patti" element={<TeenPatti />} />
              <Route path="/games/aviator" element={<Aviator />} />
              <Route path="/games/andar-bahar" element={<AndarBahar />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
