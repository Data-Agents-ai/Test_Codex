
import { SEO } from "@/components/SEO";
import { useEffect, useRef } from "react";

const PillarSection = ({ 
  title, 
  children, 
  icon,
  index
}: { 
  title: string; 
  children: React.ReactNode;
  icon: string;
  index: number;
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden border rounded-2xl p-8 bg-card/50 backdrop-blur-sm space-y-6 shadow-elegant hover-scale opacity-100 animate-fade-in transition-all duration-700"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-primary/20 to-accent/30 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-title text-3xl md:text-4xl font-bold flex items-center gap-3">
          <span className="text-3xl md:text-4xl animate-pulse">{icon}</span>
          {title}
        </h2>
        <div className="space-y-6 text-body">{children}</div>
      </div>
    </section>
  );
};

const SubSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-3">
    <h4 className="text-subtitle text-lg font-bold mb-3 flex items-center gap-2">
      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      {title}
    </h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 group">
          <span className="text-accent mt-1.5 transition-transform group-hover:scale-125">→</span>
          <span className="text-sm leading-relaxed text-body group-hover:text-primary transition-colors">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Solutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    el.style.setProperty("--spot-opacity", `0.4`);
  };

  const handleLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--spot-opacity", `0.0`);
  };

  return (
    <>
      <SEO
        title="Solutions Data & IA | Data Agents"
        description="Notre offre s'organise autour de cinq piliers : Gouvernance des données, Ingénierie & Architecture Data, Plateformes & Analytics, IA & Automation, Incubateur IA/LLM."
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10"></div>
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-accent/20 rotate-45 animate-pulse"
              style={{
                left: `${5 + i * 8}%`,
                top: `${5 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.3}s`,
              }}
            />
          ))}
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <main 
        ref={containerRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handleLeave}
        className="relative container mx-auto py-16 space-y-16 interactive-spotlight"
      >
        <header className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            Data & IA Solutions
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight animate-enter text-title">
            Solutions
          </h1>
          <p className="text-body mt-6 text-xl leading-relaxed max-w-3xl mx-auto">
            Chez Data Agents, notre offre s'organise autour de cinq piliers pour répondre à tous vos enjeux data et IA.
          </p>
        </header>

        <div className="space-y-12">
          <PillarSection title="1. Gouvernance des données" icon="🔒" index={0}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-body">
                Mettez vos données sous contrôle. Nous aidons à structurer, sécuriser et fiabiliser votre patrimoine de données dans le respect des réglementations, tout en instaurant des pratiques durables et adaptées à la taille de votre entreprise.
              </p>
              
              <SubSection
                title="Stratégie de gouvernance"
                items={[
                  "Définition des rôles et responsabilités data",
                  "Mise en place de processus de gouvernance adaptés",
                  "Framework de gouvernance évolutif"
                ]}
              />

              <SubSection
                title="Qualité, sécurité et conformité"
                items={[
                  "Contrôle qualité des données",
                  "Mise en conformité RGPD",
                  "Sécurisation des accès et des données"
                ]}
              />

              <SubSection
                title="Gestion du cycle de vie de la donnée"
                items={[
                  "Catalogage et métadonnées",
                  "Traçabilité et lineage",
                  "Archivage et purge des données"
                ]}
              />
            </div>
          </PillarSection>

          <PillarSection title="2. Ingénierie & Architecture Data" icon="⚙️" index={1}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-body">
                Créez une architecture solide, évolutive et adaptée à vos besoins réels. Nos experts conçoivent et mettent en place des infrastructures data modernes pour transformer vos données brutes en actifs exploitables, prêts pour l'analytique et l'IA.
              </p>
              
              <SubSection
                title="DataOps, DataWarehouse, DataVault"
                items={[
                  "Architecture DataOps pour l'agilité",
                  "Design et implémentation de DataWarehouse",
                  "Modélisation DataVault pour la flexibilité"
                ]}
              />

              <SubSection
                title="Data Platform & Cloud"
                items={[
                  "Plateformes cloud natives",
                  "Architecture multi-cloud et hybride",
                  "Optimisation des coûts cloud"
                ]}
              />

              <SubSection
                title="Intégration, automatisation, performance"
                items={[
                  "Pipelines ETL/ELT automatisés",
                  "Intégration temps réel et batch",
                  "Optimisation des performances"
                ]}
              />
            </div>
          </PillarSection>

          <PillarSection title="3. Plateformes & Analytics" icon="📊" index={2}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-body">
                Démocratisez l'accès à la donnée et libérez son potentiel. Nous mettons en place des plateformes de données et des outils analytiques qui rendent la donnée accessible et actionnable pour les équipes métiers et techniques.
              </p>
              
              <SubSection
                title="Data visualisation et DataViz"
                items={[
                  "Dashboards interactifs et intuitifs",
                  "Reporting automatisé",
                  "Visualisations avancées et storytelling"
                ]}
              />

              <SubSection
                title="Analytics avancées"
                items={[
                  "Analyses prédictives et descriptives",
                  "Modèles statistiques avancés",
                  "Analytics en temps réel"
                ]}
              />

              <SubSection
                title="Data-as-a-Product et dashboards métier"
                items={[
                  "Produits data self-service",
                  "Dashboards métier spécialisés",
                  "APIs et services data"
                ]}
              />
            </div>
          </PillarSection>

          <PillarSection title="4. Intelligence Artificielle & Automation" icon="🤖" index={3}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-body">
                Exploitez le plein potentiel de l'IA pour moderniser vos opérations et anticiper vos décisions. Nous développons des solutions IA adaptées : de la prédiction à l'automatisation, tout en gardant l'humain au centre de la transformation.
              </p>
              
              <SubSection
                title="IA de confiance, explainabilité"
                items={[
                  "IA éthique et transparente",
                  "Modèles explicables et auditables",
                  "Governance des algorithmes"
                ]}
              />

              <SubSection
                title="MLOps, AI orchestration"
                items={[
                  "Déploiement et monitoring des modèles",
                  "Pipelines ML automatisés",
                  "Orchestration des workflows IA"
                ]}
              />

              <SubSection
                title="Prédiction, maintenance préventive, chatbots"
                items={[
                  "Modèles prédictifs métier",
                  "Maintenance prédictive intelligente",
                  "Assistants conversationnels avancés"
                ]}
              />
            </div>
          </PillarSection>

          <PillarSection title="5. Incubateur IA/LLM" icon="🧪" index={4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-subtitle">
                Donnez-vous un incubateur !
              </h3>
              
              <p className="text-lg leading-relaxed text-body">
                Notre programme Incubateur IA/LLM est une approche structurée pour explorer, prototyper et déployer rapidement des solutions LLM et IA en toute sécurité. Grâce à un environnement de "sandbox" sécurisé, des frameworks accélérés et un accompagnement expert, vous concrétisez la valeur de l'IA sans compromettre la sécurité, la conformité ni le budget.
              </p>

              <p className="text-lg leading-relaxed text-body">
                Ce programme, bien plus qu'un simple laboratoire, est la première étape pour devenir une entreprise AI native. C'est un parcours précis et maîtrisé pour :
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-subtitle flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    Expérimentation sécurisée
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">→</span>
                      <span className="text-sm leading-relaxed text-body">Expérimenter l'IA sur vos données et vos scénarios concrets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">→</span>
                      <span className="text-sm leading-relaxed text-body">Prototyper rapidement des usages (support, gestion de connaissance, automatisation…)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">→</span>
                      <span className="text-sm leading-relaxed text-body">Maîtriser la gouvernance, la sécurité et la conformité</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-subtitle flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    Transformation organisationnelle
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">→</span>
                      <span className="text-sm leading-relaxed text-body">Préparer l'évolution culturelle et former vos équipes à collaborer avec l'IA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">→</span>
                      <span className="text-sm leading-relaxed text-body">Orienter la stratégie vers les cas d'usage les plus porteurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">→</span>
                      <span className="text-sm leading-relaxed text-body">Faire monter en compétence vos équipes internes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mt-8">
                <p className="text-lg leading-relaxed text-body font-medium">
                  <strong className="text-accent">Bref, c'est la voie rapide</strong> vers l'exploitation de l'IA dans votre entreprise, pour révéler tout son potentiel de façon sécurisée et mesurable.
                </p>
              </div>
            </div>
          </PillarSection>
        </div>
      </main>
    </>
  );
};

export default Solutions;
