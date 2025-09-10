
import { Sparkles, Target, Zap, MapPin, RotateCcw, DollarSign, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ValueCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="p-2 rounded-md bg-accent/10 text-accent flex-shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-semibold text-sm text-subtitle">{title}</h4>
      <p className="text-sm text-body mt-1">{description}</p>
    </div>
  </div>
);

const ValueProposition = () => {
  return (
    <section className="mt-20 bg-card border rounded-2xl p-8 md:p-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-title text-3xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="text-accent" />
          Notre Proposition de Valeur Unique
        </h2>
        <p className="mt-4 text-lg text-body">
          Une approche data-first innovante combinant expertise IA avancée et souveraineté française
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ValueCard
          icon={Cpu}
          title="🤖 Expertise IA Avancée"
          description="Des LLMs d'entreprise aux agents autonomes, nous maîtrisons les technologies IA de pointe"
        />
        <ValueCard
          icon={Target}
          title="🎯 Approche Data-First"
          description="Stratégie, gouvernance et architecture avant tout déploiement IA"
        />
        <ValueCard
          icon={Zap}
          title="⚡ Innovation Sécurisée"
          description="Expérimentation IA dans des environnements conformes et protégés"
        />
        <ValueCard
          icon={MapPin}
          title="🇪🇺 Souveraineté Data"
          description="Solutions on-premise ou cloud avec conformité RGPD native"
        />
        <ValueCard
          icon={RotateCcw}
          title="🔄 Écosystème Complet"
          description="Du diagnostic initial aux agents IA autonomes, une progression maîtrisée"
        />
        <ValueCard
          icon={DollarSign}
          title="💰 ROI Mesurable"
          description="Transformation data puis IA avec impact business démontrable"
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-subtitle text-2xl font-bold mb-4">🎯 Prêt à Transformer Votre Stratégie Data ?</h3>
        <p className="text-body mb-6">Contactez-nous pour une évaluation gratuite de 30 minutes</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="accent" size="lg">
            <Link to="/contact">Évaluation Gratuite</Link>
          </Button>
          <div className="text-sm text-caption space-y-1">
            <p>📧 contact@data-agents.ai</p>
            <p>🌐 www.data-agents.ai</p>
            <p>💼 LinkedIn: Data-Agents-AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
