import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { ProcessSection } from "@/components/landing/ProcessSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <div className="bg-navy">
        <ProcessSection />
      </div>
      <ServicesGrid />

      <footer className="py-10 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alfa Consultoria Empresarial. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
