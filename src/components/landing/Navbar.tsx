import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
                    ALFA <span className="text-foreground">CONSULTORIA</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                        Nossos Serviços
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                        Sobre Nós
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contato
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost" className="hidden sm:inline-flex">
                            Área do Cliente
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button>Entrar</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
