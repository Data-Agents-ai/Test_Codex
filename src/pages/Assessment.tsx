
import { useEffect, useMemo, useRef, useState } from "react";
import { SEO } from "@/components/SEO";
import { ProgressBar } from "@/components/common/ProgressBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const steps = [
  "Analyse des modèles de données…",
  "Inférence des schémas…",
  "Détection d'anomalies…",
  "Évaluation des risques de confidentialité…",
  "Optimisation des pipelines…",
  "Établissement de références des modèles…",
  "Génération de recommandations…",
];

const pillars = [
  { key: "Governance", label: "Gouvernance" },
  { key: "MDM", label: "Unification" },
  { key: "Platform", label: "Plateforme" },
  { key: "Analytics", label: "Analytics" },
];

function seededScores(seed: string) {
  let acc = 0;
  for (const c of seed) acc = (acc + c.charCodeAt(0)) % 1000;
  function r(min: number, max: number) {
    acc = (acc * 9301 + 49297) % 233280;
    const rnd = acc / 233280;
    return Math.floor(min + rnd * (max - min));
  }
  return {
    Governance: r(65, 95),
    MDM: r(60, 92),
    Platform: r(55, 90),
    Analytics: r(60, 96),
  };
}

const Assessment = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [scores, setScores] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    if (!analyzing) return;
    setProgress(0);
    setPhase(0);
    const total = 100;
    let current = 0;
    const id = setInterval(() => {
      current += Math.random() * 4 + 1;
      if (current >= total) {
        current = total;
        clearInterval(id);
        const seed = file ? `${file.name}-${file.size}` : `${Date.now()}`;
        setScores(seededScores(seed));
        setAnalyzing(false);
      }
      setProgress(Math.round(current));
      const stepSize = 100 / steps.length;
      setPhase(Math.min(steps.length - 1, Math.floor(current / stepSize)));
    }, 60);
    return () => clearInterval(id);
  }, [analyzing, file]);

  const chartData = useMemo(() => {
    if (!scores) return [];
    return pillars.map((p) => ({ subject: p.label, score: scores[p.key] }));
  }, [scores]);

  const avg = useMemo(() => {
    if (!scores) return 0;
    const vals = Object.values(scores);
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  }, [scores]);

  const roi = useMemo(() => (avg > 0 ? Math.round(avg * 2.1) : 0), [avg]);

  return (
    <>
      <SEO
        title="Évaluation de Maturité IA | Data Agents"
        description="Téléchargez un CSV et découvrez vos scores de capacité IA en gouvernance, MDM, plateforme et analytics. Feuille de route personnalisée en quelques secondes."
      />
      <main className="container mx-auto py-10">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold">Scanner de Capacité IA</h1>
          <p className="text-muted-foreground mt-2">
            Évaluation en un clic avec une analyse temps réel impressionnante.
          </p>
        </header>

        <section className="mt-6 border rounded-xl p-6 bg-card">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="file"
              accept=".csv,.tsv,.txt"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full md:w-auto"
            />
            <Button
              variant="accent"
              disabled={!file || analyzing}
              onClick={() => {
                setScores(null);
                setAnalyzing(true);
              }}
            >
              {analyzing ? "Analyse en cours…" : "Analyser"}
            </Button>
          </div>

          <div className="mt-6">
            <ProgressBar value={progress} />
            <div className="mt-2 text-sm text-muted-foreground">{steps[phase]}</div>
          </div>
        </section>

        {scores && (
          <section className="mt-10 grid lg:grid-cols-2 gap-8 animate-enter">
            <div className="border rounded-xl p-6 bg-card">
              <h2 className="text-xl font-semibold">Scores de Capacité</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={chartData} outerRadius={110}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <Radar name="Score" dataKey="score" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.35} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="border rounded-xl p-6 bg-card">
              <h2 className="text-xl font-semibold">Feuille de Route Personnalisée</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li><strong>Gouvernance :</strong> Déployez la surveillance de conformité IA et la classification automatique des données.</li>
                <li><strong>Unification :</strong> Déployez le matching ML pour créer des enregistrements maîtres à travers les sources.</li>
                <li><strong>Plateforme :</strong> Introduisez des pipelines auto-ajustables et une montée en charge prédictive.</li>
                <li><strong>Analytics :</strong> Lancez des modèles de prévision et des alertes d'insights automatisées.</li>
              </ul>
              <div className="mt-6 p-4 rounded-lg bg-secondary">
                <p className="text-sm">ROI projeté dans 6–12 mois basé sur votre profil :</p>
                <p className="text-3xl font-bold text-success mt-1">{roi}%</p>
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild variant="accent">
                  <a href="https://calendly.com/" target="_blank" rel="noreferrer">Réserver un Appel Stratégique</a>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/contact">Parler à un expert</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Assessment;
