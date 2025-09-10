import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Data Agents – AI Consultancy Group. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/privacy" className="story-link">Privacy</Link>
          <Link to="/terms" className="story-link">Terms</Link>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
