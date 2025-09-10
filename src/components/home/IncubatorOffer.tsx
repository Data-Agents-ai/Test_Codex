import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, CheckCircle, TrendingUp, Shield } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string; 
}) => (
  <div className="flex items-start gap-3 p-4 glass-card rounded-xl">
    <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-subtitle text-lg font-semibold mb-1">{title}</h4>
      <p className="text-body text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const IncubatorOffer = () => {
  return (
    <section className="mt-24">
      <div className="glass-card rounded-3xl p-8 md:p-12 shadow-glow">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Rocket className="w-4 h-4" />
            Nouvelle Offre
          </div>
          <h2 className="text-title text-4xl md:text-5xl font-bold mb-4">
            🚀 AI/LLM Incubator
          </h2>
          <p className="text-subtitle text-xl max-w-3xl mx-auto">
            Programme d'innovation structuré pour explorer, prototyper et déployer rapidement des solutions LLM et IA dans un environnement sécurisé et gouverné.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-title text-2xl font-bold">De l'Idée à l'Impact</h3>
            <p className="text-body text-lg leading-relaxed">
              Plus qu'un simple "sandbox" ou projet pilote, l'AI/LLM Incubator est votre première étape vers des opérations natives IA. 
              Une roadmap structurée et à faible risque pour maîtriser les capacités de l'IA dans votre contexte métier.
            </p>
            
            <div className="space-y-4">
              <FeatureCard
                icon={CheckCircle}
                title="Expérimentation Sécurisée"
                description="Explorez les capacités de l'IA sur vos vrais processus métier dans un environnement contrôlé."
              />
              <FeatureCard
                icon={TrendingUp}
                title="Prototypage Rapide"
                description="Développez des preuves de concept pour la gestion des connaissances et l'automatisation."
              />
              <FeatureCard
                icon={Shield}
                title="Gouvernance IA"
                description="Maîtrisez la sécurité, la conformité et les bonnes pratiques avant la mise à l'échelle."
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 flex items-center justify-center">
              <div className="text-center p-8">
                <Rocket className="w-16 h-16 text-accent mx-auto mb-4" />
                <div className="text-accent text-sm font-semibold uppercase tracking-wide mb-2">
                  Innovation Program
                </div>
                <div className="text-title text-2xl font-bold mb-2">AI/LLM</div>
                <div className="text-subtitle">Incubator</div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-subtitle text-lg font-semibold mb-3">Bénéfices Clés</h4>
              <ul className="space-y-2 text-body">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Transformation culture IA humain + machine
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Alignement investissements IA & stratégie business
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Formation talent interne pour organisation native IA
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Résultats mesurables et contrôle des risques
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-accent/5 rounded-2xl p-6 mb-8">
            <div className="text-accent text-3xl font-bold">🎯</div>
            <div className="text-left">
              <div className="text-subtitle font-semibold">Votre Rampe d'Accès à l'Autoroute IA</div>
              <div className="text-body">Voyez l'impact, contrôlez les risques, construisez l'avenir</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="xl" className="hover-scale shadow-glow text-lg px-8 py-4">
              <Link to="/contact">
                🚀 Démarrer l'Incubator
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="glass-card text-lg px-8 py-4">
              <Link to="/solutions">
                📋 Découvrir le Programme
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncubatorOffer;