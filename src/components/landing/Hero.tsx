import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy/50 via-background to-background" />

            <div className="container px-4 mx-auto text-center">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    <span className="flex h-2 w-2 rounded-full bg-primary mx-2 animate-pulse"></span>
                    Soluções Financeiras e Jurídicas
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
                    Sua Liberdade Financeira <br />
                    <span className="text-primary">Começa Aqui</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
                    Regularize sua vida em poucos cliques. Oferecemos consultoria especializada para limpar seu nome, aumentar seu score e recuperar seu crédito no mercado.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="#services">
                        <Button size="lg" className="h-12 px-8 text-base">
                            Ver Serviços
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                            Falar com Especialista
                        </Button>
                    </Link>
                </div>

                <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground opacity-70">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-foreground">10k+</p>
                        <p className="text-xs uppercase tracking-wider">Clientes Atendidos</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                        <p className="text-3xl font-bold text-foreground">98%</p>
                        <p className="text-xs uppercase tracking-wider">Taxa de Sucesso</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                        <p className="text-3xl font-bold text-foreground">24h</p>
                        <p className="text-xs uppercase tracking-wider">Suporte Dedicado</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
