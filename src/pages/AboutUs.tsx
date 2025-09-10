import { SEO } from "@/components/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="À propos | Data Agents"
        description="Agence de Conseil en Data & IA basée à Paris — De la Vision à la Valeur. Nous faisons travailler vos données aussi dur que vous."
      />
      <main className="container mx-auto py-10">
        <header className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-title mb-2">À propos</h1>
          <p className="text-xl text-text-subtitle mb-8">Agence de Conseil Data & IA basée à Paris : de la vision à la valeur</p>
        </header>
        
        <section className="max-w-4xl mx-auto space-y-8 text-text-body">
          <div className="glass-card p-8 hover-scale">
            <p className="text-lg leading-relaxed mb-6">
              Chez Data Agents, nous faisons travailler vos données aussi dur que vous. Nous accompagnons les entreprises de la première question « Que faire avec la data et l'IA ? » jusqu'aux résultats concrets et mesurables.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="leading-relaxed mb-4">
                  Notre approche est humaine et pragmatique. On commence par écouter vos objectifs pour les transformer en une stratégie sur-mesure. À chaque étape, nous concevons des solutions utiles, évolutives, sécurisées et parfaitement adaptées à votre réalité métier. Du schéma à la mise en œuvre, nos méthodes garantissent une livraison fluide et une vraie valeur ajoutée.
                </p>
              </div>
              
              <div>
                <p className="leading-relaxed">
                  Nous ne nous contentons pas de conseiller : nous livrons des résultats tangibles que nos clients constatent dès le départ et sur le long terme.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 hover-scale">
              <p className="leading-relaxed">
                Notre mission est d'accompagner l'industrie, le commerce, la logistique, la santé, le luxe et bien d'autres à transformer la donnée en avantage compétitif.
              </p>
            </div>
            
            <div className="glass-card p-6 hover-scale">
              <h2 className="text-2xl font-semibold text-text-title mb-4">Notre offre s'articule autour de cinq piliers majeurs</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Gouvernance des données</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Ingénierie & Architecture Data</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Plateformes & Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Intelligence Artificielle & Automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Incubateur IA/LLM</span>
                </li>
              </ul>
            </div>
          </div>
          
        </section>
      </main>
    </>
  );
};

export default AboutUs;