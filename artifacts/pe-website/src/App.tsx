import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}
import Home from "@/pages/Home";
import About from "@/pages/About";
import ForPrivateEquity from "@/pages/ForPrivateEquity";
import ForExecutives from "@/pages/ForExecutives";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Disclosures from "@/pages/Disclosures";
import Brand from "@/pages/Brand";
import Todo from "@/pages/Todo";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services/private-equity" component={ForPrivateEquity} />
      <Route path="/services/executives" component={ForExecutives} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/disclosures" component={Disclosures} />
      <Route path="/brand" component={Brand} />
      <Route path="/todo" component={Todo} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <div className="bg-background text-foreground min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
