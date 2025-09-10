import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-lg text-muted-foreground mt-2">Oops! Page not found</p>
        <div className="mt-6">
          <Button asChild variant="accent">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
