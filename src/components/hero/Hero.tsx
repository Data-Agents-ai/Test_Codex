
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const messages = [
  "Bonjour, je suis votre Consultant IA Data. Laissez-moi vous montrer ce que nous pouvons faire...",
  "Chaos des données → Organisation IA",
  "Processus manuels → Automatisation intelligente", 
  "Rapports basiques → Insights prédictifs",
  "Inquiétudes de conformité → Surveillance automatisée",
  "Prêt à rendre vos données aussi intelligentes ?",
];

const Hero = () => {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const current = messages[step];

  useEffect(() => {
    // Reset typing state
    setTyped("");
    setIsTyping(true);

    const chars = Array.from(current);
    let i = 0;
    let timeoutId: number | null = null;

    const tick = () => {
      if (i < chars.length) {
        // Build the string deterministically to avoid lost characters
        setTyped(chars.slice(0, i + 1).join(""));
        i += 1;
        timeoutId = window.setTimeout(tick, 30);
      } else {
        setIsTyping(false);
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      }
    };

    timeoutId = window.setTimeout(tick, 60);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [current, step]);

  useEffect(() => {
    if (!isTyping) {
      const t = setTimeout(() => setStep((s) => Math.min(s + 1, messages.length - 1)), 1600);
      return () => clearTimeout(t);
    }
  }, [isTyping]);

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    el.style.setProperty("--spot-opacity", `0.8`);
  };

  const handleLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--spot-opacity", `0.0`);
  };

  const progress = useMemo(() => Math.round(((step + (isTyping ? 0.3 : 1)) / messages.length) * 100), [step, isTyping]);

  return (
    <section className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20"></div>
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-accent/30 rotate-45 animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={`${i * 12.5}%`}
                y1="0%"
                x2={`${100 - i * 12.5}%`}
                y2="100%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${4 + i * 0.3}s`,
                }}
              />
            ))}
          </svg>
        </div>
      </div>
      
      <div
        ref={containerRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handleLeave}
        className="relative interactive-spotlight rounded-3xl shadow-elegant px-6 py-20 md:px-12 md:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm uppercase tracking-widest mb-6 animate-fade-in">
            ✨ Experts en Transformation Data IA ✨
          </p>
          <h1 className="text-title text-5xl md:text-7xl font-bold leading-tight animate-enter mb-6">
            Vos Données + Notre IA = 
            <span className="text-accent block mt-2">Résultats Extraordinaires</span>
          </h1>
          <p className="mt-6 text-xl text-body leading-relaxed">
            Conseil expert en données renforcé par l'IA. Transformez la gouvernance, l'unification, 
            les plateformes et l'analytique avec l'automatisation intelligente pour 
            <span className="text-accent font-semibold"> Manufacturing, Industrie 4.0, Commerce, E-commerce, Santé & Luxe</span>.
          </p>

          <div className="mt-10 mx-auto max-w-3xl glass-card rounded-2xl p-6 text-left shadow-glow">
            <div className="flex items-center justify-between mb-4">
              <div className="text-accent text-sm font-semibold uppercase tracking-wide">🤖 Consultant IA en Action</div>
              <div className="text-sm tabular-nums text-caption bg-accent/10 px-3 py-1 rounded-full">
                {progress}% Complété
              </div>
            </div>
            <div className="min-h-[80px] text-lg md:text-xl leading-relaxed">
              <span className="inline-block animate-fade-in text-foreground font-medium">{typed}</span>
              {isTyping && <span className="ml-1 inline-block w-3 h-6 bg-accent animate-pulse align-[-2px] rounded-sm"></span>}
            </div>
            <div className="mt-6">
              <div className="w-full h-3 bg-background/30 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-300 ease-out" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-caption">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Simulation en temps réel
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setStep((s) => Math.max(s - 1, 0))} 
                  disabled={step === 0}
                  className="text-xs"
                >
                  ← Précédent
                </Button>
                <Button 
                  variant="accent" 
                  size="sm" 
                  onClick={() => setStep((s) => Math.min(s + 1, messages.length - 1))}
                  className="text-xs"
                >
                  Suivant →
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="xl" className="hover-scale shadow-glow text-lg px-8 py-4">
              <Link to="/assessment">
                🚀 Évaluation IA Gratuite
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="story-link text-lg px-8 py-4 glass-card">
              <Link to="/solutions">
                📊 Découvrez nos 5 Piliers
              </Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">3x</div>
                <div className="text-sm text-caption">Plus Rapide</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-caption">Satisfaction Client</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-caption">Projets Réussis</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-caption">Support Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
