import { SEO } from "@/components/SEO";

interface MemberProps {
  img: string;
  name: string;
  role: string;
  description: string;
  linkedinUrl?: string;
}

const Member = ({ img, name, role, description, linkedinUrl }: MemberProps) => {
  // Special positioning for Marcel's image to center his face better
  const getImageClasses = () => {
    if (name === "Marcel DE GRAUW") {
      return "mx-auto w-40 h-40 object-cover object-[center_35%] rounded-full border-2 border-border";
    }
    return "mx-auto w-40 h-40 object-cover rounded-full border-2 border-border";
  };

  return (
    <article className="text-center space-y-4 max-w-md">
      <img src={img} alt={`${name} – ${role} at Data Agents`} className={getImageClasses()} loading="lazy" />
      <div>
        <h3 className="font-semibold text-lg text-text-title">{name}</h3>
        <p className="text-sm font-medium text-accent mb-3">{role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed text-left">{description}</p>
        {linkedinUrl && (
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-accent hover:underline"
          >
            LinkedIn Profile →
          </a>
        )}
      </div>
    </article>
  );
};

const Team = () => {
  return (
    <>
      <SEO
        title="Our Team | Data Agents"
        description="Rencontrez nous: experienced data and AI experts helping businesses transform data into competitive advantage."
      />
      <main className="container mx-auto py-10">
        <header className="max-w-2xl text-center mx-auto mb-12">
          <h1 className="text-3xl font-bold">Meet the Co-Founders</h1>
          <p className="text-muted-foreground mt-2">Experienced data and AI experts with a passion for transforming businesses.</p>
        </header>
        <section className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <Member 
            img="/lovable-uploads/7fea73aa-f457-44af-bb5a-1146efd3e147.png"
            name="Olivier DE BOULARD"
            role="Co-Founder / CEO"
            description="A specialist in Business Intelligence Systems for over 25 years, I have extensive experience at all levels of the Data Analytics chain. My experience within several large groups in the banking / insurance and manufacturing sectors has allowed me to master complex and heterogeneous data environments (ETL/ELT processes, MDM, Repository Management, DWH, DataHub, DataLake, Multidimensional, Reporting, DataViz, etc.). Passionate about projects that combine Human and Information Technology, I can bring my experience and creativity to the development of your data projects."
            linkedinUrl="https://www.linkedin.com/in/odeboulard-data-architect/"
          />
          <Member 
            img="/lovable-uploads/6dff046d-35fb-4f8d-b09f-22c16766daa2.png"
            name="Marcel DE GRAUW"
            role="Co-Founder / CTO"
            description="I am the kind of tech leader who nurtures his projects and teams like bonsai trees, patiently shaping and pruning, while instilling confidence and sometimes giving a playful nudge to 'go for it!' Armed with a black belt in Data & AI, I tame APIs and algorithms into a graceful symphony and I persuade even the most stubborn dataset to reveal its secrets. When not architecting solutions, you'll find me with a coffee in my hand, musing on whether Neural Nets dream of F1-score spikes — or simply of better Wi-Fi. With the advent of LLMs and Agentic, I am convinced that we are at the dawn of paradigm shift in Enterprise computing."
            linkedinUrl="https://www.linkedin.com/in/marcel-de-grauw-12047513/"
          />
          <Member 
            img="/lovable-uploads/096bb512-d144-4bcc-b541-ae5cccf5cd04.png"
            name="Rodrigo SANUDO SISTOS"
            role="Co-Founder / COO"
            description="My 25 years developing international business strategies taught me one thing: the best decisions come from good data. After helping multinationals grow through strategic partnerships and innovation, I now apply this expertise to SMEs with AI and data analytics. Trained in the latest AI and data analytics technologies, I translate technical complexity into simple, actionable solutions. At Data Agents, we believe every SME deserves the same data insights as large corporations – without the complexity or astronomical budgets. My role? Ensuring our solutions actually work for your business, not just on paper."
            linkedinUrl="https://www.linkedin.com/in/rodrigo-sanudo/"
          />
        </section>
      </main>
    </>
  );
};

export default Team;