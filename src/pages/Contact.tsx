
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [topic, setTopic] = useState("assessment");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({ title: "Merci !", description: "Nous vous contacterons prochainement." });
        e.currentTarget.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Le message n'a pas pu être envoyé.",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Le message n'a pas pu être envoyé.",
      });
    }
  };

  return (
    <>
      <SEO
        title="Contact | Data Agents"
        description="Parlez-nous de vos défis data. Nos consultants IA vous répondront sous un jour ouvrable."
      />
      <main className="container mx-auto py-10 max-w-2xl">
        <header>
          <h1 className="text-3xl font-bold">Parler à un Expert</h1>
          <p className="text-muted-foreground mt-2">Nous vous répondrons sous un jour ouvrable.</p>
        </header>
        <form className="mt-6 space-y-4 border rounded-xl p-6 bg-card" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm">Nom</span>
              <input name="name" className="mt-1 w-full rounded-md border bg-background px-3 py-2" required />
            </label>
            <label className="block">
              <span className="text-sm">Email</span>
              <input name="email" type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2" required />
            </label>
          </div>
          <label className="block">
            <span className="text-sm">Société</span>
            <input name="company" className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm">De quoi souhaitez-vous discuter ?</span>
            <select
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="assessment">Évaluation de Maturité IA</option>
              <option value="governance">Gouvernance des Données</option>
              <option value="mdm">Unification des Données Maîtres</option>
              <option value="platform">Plateforme Data</option>
              <option value="analytics">Analytics Prédictifs</option>
            </select>
          </label>

          {topic === "governance" && (
            <label className="block">
              <span className="text-sm">Préoccupation réglementaire principale</span>
              <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" placeholder="ex: enregistrements RGPD Art. 30" />
            </label>
          )}
          {topic === "mdm" && (
            <label className="block">
              <span className="text-sm">Systèmes à unifier</span>
              <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" placeholder="ex: CRM + ERP + Support" />
            </label>
          )}
          {topic === "platform" && (
            <label className="block">
              <span className="text-sm">Stack actuel</span>
              <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" placeholder="ex: BigQuery, dbt, Airflow" />
            </label>
          )}
          {topic === "analytics" && (
            <label className="block">
              <span className="text-sm">KPIs à prévoir</span>
              <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" placeholder="ex: demande, churn, LTV" />
            </label>
          )}

          <label className="block">
            <span className="text-sm">Parlez-nous de vos défis data</span>
            <textarea
              name="message"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 min-h-28"
            />
          </label>

          <div className="pt-2">
            <Button type="submit" variant="accent">Envoyer le Message</Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Contact;
