
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";
import { createPortal } from "react-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm transition-colors relative z-10 ${
    isActive ? "bg-secondary text-secondary-foreground" : "hover:bg-accent/10 hover:text-accent-foreground"
  }`;

const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation();
  useEffect(() => {
    // Auto-close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto flex items-center justify-between py-3 relative z-10">
        <Link to="/" className="flex items-center gap-4 relative z-10">
          {/* New Hexagonal Lattice Logo */}
          <div className="relative w-12 h-12">
            <img 
              src="/lovable-uploads/247b43fe-23c8-471f-ac6b-ea267ba64c7d.png" 
              alt="Data Agents Logo - Hexagonal Lattice Network" 
              className="w-12 h-12 object-contain animate-float"
            />
          </div>
          <div className="flex flex-col font-[family-name:var(--font-heading)]">
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg text-text-primary leading-tight">DATA</span>
              <span className="font-bold tracking-tight text-lg text-accent leading-tight">AGENTS</span>
            </div>
            <span className="text-xs text-text-secondary uppercase tracking-wider font-medium mt-0.5">AI Consulting Group</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 relative z-10" aria-label="Main Navigation">
          <NavLink to="/solutions" className={navLinkClass}>
            Solutions
          </NavLink>
          <NavLink to="/about-us" className={navLinkClass}>
            À propos
          </NavLink>
          <NavLink to="/team" className={navLinkClass}>
            Team
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 relative z-10">
          {/* Desktop Assessment Button */}
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link to="/assessment" aria-label="Start your AI Readiness Assessment">
              Start Assessment
            </Link>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Modern Mobile Navigation Overlay */}
      {isMobileMenuOpen &&
        createPortal(
          <div
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-[100] animate-in slide-in-from-top-2 duration-300"
            role="dialog"
            aria-modal="true"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <button
              aria-label="Close menu"
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-accent/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={22} />
            </button>
            <nav
              className="container mx-auto py-8 px-6 flex flex-col justify-start"
              aria-label="Mobile Navigation"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-foreground hover:bg-accent/20 hover:text-accent-foreground active:scale-95"
                    }`
                  }
                >
                  <span className="ml-3">Home</span>
                </NavLink>

                <NavLink
                  to="/solutions"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-foreground hover:bg-accent/20 hover:text-accent-foreground active:scale-95"
                    }`
                  }
                >
                  <span className="ml-3">Solutions</span>
                </NavLink>

                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-foreground hover:bg-accent/20 hover:text-accent-foreground active:scale-95"
                    }`
                  }
                >
                  <span className="ml-3">À propos</span>
                </NavLink>

                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-foreground hover:bg-accent/20 hover:text-accent-foreground active:scale-95"
                    }`
                  }
                >
                  <span className="ml-3">Team</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-foreground hover:bg-accent/20 hover:text-accent-foreground active:scale-95"
                    }`
                  }
                >
                  <span className="ml-3">Contact</span>
                </NavLink>

                <NavLink
                  to="/assessment"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-foreground hover:bg-accent/20 hover:text-accent-foreground active:scale-95"
                    }`
                  }
                >
                  <span className="ml-3">Assessment</span>
                </NavLink>
              </div>

              <div className="mt-8 px-4">
                <Button asChild variant="accent" size="lg" className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  <Link to="/assessment">
                    <span className="font-semibold">Start Assessment</span>
                  </Link>
                </Button>
              </div>
            </nav>
          </div>,
          document.body
        )}

    </header>
  );
};

export default SiteHeader;
