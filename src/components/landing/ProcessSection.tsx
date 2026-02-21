import { Wallet, FileText, CheckCircle2 } from "lucide-react"

const steps = [
    {
        icon: FileText,
        title: "Diagnóstico Completo",
        description: "Analisamos sua situação financeira e jurídica para identificar todas as restrições e oportunidades.",
    },
    {
        icon: Wallet,
        title: "Estratégia Personalizada",
        description: "Desenvolvemos um plano de ação sob medida para limpar seu nome e recuperar seu crédito.",
    },
    {
        icon: CheckCircle2,
        title: "Liberdade Financeira",
        description: "Execute o plano e volte a ter acesso ao mercado de crédito com score alto e nome limpo.",
    },
]

export function ProcessSection() {
    return (
        <section className="py-24 bg-navy relative overflow-hidden text-white">
            {/* Vector Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>
            <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Um processo simples e transparente para você retomar o controle da sua vida financeira.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-navy border border-primary/30 flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/80 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                                <step.icon className="h-10 w-10 text-primary" />
                                <div className="absolute -inset-2 rounded-full border border-primary/10 animate-pulse" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
