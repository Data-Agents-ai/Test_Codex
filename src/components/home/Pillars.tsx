
import { Target, Shield, Building, Cpu, Rocket } from "lucide-react";

const Card = ({
  icon: Icon,
  title,
  subtitle,
  preview,
}: {
  icon: any;
  title: string;
  subtitle: string;
  preview: string;
}) => (
  <article className="group relative glass-card rounded-xl p-6 overflow-hidden hover-scale transition-all duration-300 hover:shadow-glow">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden>
      <div className="absolute -inset-40 bg-[radial-gradient(300px_circle_at_var(--x,50%)_var(--y,50%),hsl(var(--primary-glow)/0.2),transparent_70%)]" />
    </div>
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-md bg-accent/10 text-accent"><Icon /></div>
      <div>
        <h3 className="text-subtitle text-xl font-semibold">{title}</h3>
        <p className="text-caption text-sm">{subtitle}</p>
      </div>
    </div>
    <div className="mt-6 text-sm">
      <p className="text-body">{preview}</p>
    </div>
  </article>
);

const Pillars = () => {
  return (
    <section className="mt-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-title text-4xl md:text-5xl font-bold mb-4">
          🚀 Nos 5 Piliers Stratégiques Data & IA
        </h2>
        <p className="text-body text-lg">
          De la stratégie à l'innovation : notre approche complète pour transformer vos données en avantage concurrentiel.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          icon={Target}
          title="Data Governance"
          subtitle="Sécurité, structure et contrôle des données"
          preview="Nous aidons les entreprises à sécuriser, structurer et contrôler leurs données pour assurer la conformité et des décisions éclairées. Framework de gouvernance RGPD avec qualité, intégrité et traçabilité complète."
        />
        <Card
          icon={Building}
          title="Data Engineering & Architecture"
          subtitle="Infrastructure robuste et évolutive"
          preview="Nous construisons des infrastructures robustes et évolutives qui transforment les données brutes en intelligence business, adaptées à chaque secteur. Ingestion, stockage, traitement et catalogue moderne."
        />
        <Card
          icon={Shield}
          title="Data Platforms & Analytics"
          subtitle="Plateformes modernes et visualisation"
          preview="Nos plateformes modernes débloquent l'analytique, le reporting et la visualisation pour les équipes business et techniques. Self-service avec sécurité et gouvernance intégrée."
        />
        <Card
          icon={Cpu}
          title="AI & Advanced Analytics"
          subtitle="IA prédictive et automatisation"
          preview="Expertise en IA et machine learning avec des exemples concrets d'amélioration de l'automatisation, des prédictions et des opérations. LLMs d'entreprise, agents autonomes et MLOps."
        />
        <div className="md:col-span-2 lg:col-span-1">
          <Card
            icon={Rocket}
            title="AI/LLM Incubator"
            subtitle="Innovation structurée et déploiement rapide"
            preview="Programme d'innovation structuré pour explorer, prototyper et déployer rapidement des solutions LLM et IA dans un environnement sécurisé et gouverné. De l'idée à l'impact mesurable."
          />
        </div>
      </div>
    </section>
  );
};

export default Pillars;
