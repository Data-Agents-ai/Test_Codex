
import Hero from "@/components/hero/Hero";
import Pillars from "@/components/home/Pillars";
import ValueProposition from "@/components/home/ValueProposition";
import IncubatorOffer from "@/components/home/IncubatorOffer";
import { SEO } from "@/components/SEO";

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Data Agents – Groupe de Conseil IA",
    url: typeof window !== 'undefined' ? window.location.origin : 'https://data-agents.example',
    slogan: "Vos Données + Notre IA = Résultats Extraordinaires",
    sameAs: [
      "https://www.linkedin.com/",
      "https://twitter.com/"
    ]
  };

  return (
    <>
      <SEO
        title="Data Agents – Groupe de Conseil IA"
        description="Conseil en données renforcé par l'IA. Transformez la gouvernance, l'unification, les plateformes et l'analytique avec l'automatisation intelligente."
        structuredData={orgJsonLd}
      />
      <main className="container mx-auto py-12 space-y-16">
        <Hero />
        <Pillars />
        <IncubatorOffer />
        <ValueProposition />
      </main>
    </>
  );
};

export default Index;
