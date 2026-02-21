"use client"

import { useState, useMemo } from "react"
import { Search, ChevronDown, Check, Zap, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { UrgencyBar } from "./UrgencyBar"
import { OrderSummary } from "./OrderSummary"
import { ServiceForm } from "./ServiceForm"

type ServiceItem = {
    id: string
    label: string
    badge?: string
    badgeColor?: "green" | "blue"
}

type ServiceCategory = {
    id: string
    label: string
    items: ServiceItem[]
}

const servicesData: ServiceCategory[] = [
    {
        id: "pessoa-fisica",
        label: "Para Você (Pessoa Física)",
        items: [
            { id: "limpeza-nome", label: "Limpeza de Nome (Jusbrasil, Escavador, etc)", badge: "Mais Procurado" },
            { id: "consultoria-rating", label: "Consultoria de Rating (Score)", badge: "Destaque" },
            { id: "regularizacao-bacen", label: "Regularização BACEN (SCR)", badge: "Essencial" },
            { id: "credito-consignado", label: "Crédito Consignado (Servidores Federais)", badge: "Novo" },
        ]
    },
    {
        id: "pessoa-juridica",
        label: "Para Sua Empresa (Pessoa Jurídica)",
        items: [
            { id: "antecipa-gov", label: "AntecipaGov (Crédito Gov)", badge: "Exclusivo" },
            { id: "transacao-pgfn", label: "Transação Tributária PGFN" },
            { id: "emprestimo-empresarial", label: "Empréstimo Empresarial (Capital de Giro)" },
            { id: "regularizacao-empresarial", label: "Regularização de CNPJ" },
        ]
    },
    {
        id: "outros",
        label: "Outros Serviços",
        items: [
            { id: "consultoria-personalizada", label: "Consultoria Personalizada", badge: "Fale Conosco" }
        ]
    }
]

export function ServicesGrid() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)

    const selectedService = useMemo(() => {
        if (!selectedServiceId) return null
        for (const cat of servicesData) {
            const found = cat.items.find(i => i.id === selectedServiceId)
            if (found) return found
        }
        return null
    }, [selectedServiceId])

    const handleSelect = (id: string) => {
        setSelectedServiceId(id === selectedServiceId ? null : id)
    }

    return (
        <section className="bg-gray-50 min-h-screen pb-20">
            {/* Urgency Bar at the top of the section */}
            <UrgencyBar />

            <div className="container px-4 mx-auto max-w-6xl pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column: List and Form */}
                    <div className="lg:col-span-2">

                        {/* Step 1: Selection */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-200">
                                1
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
                                Selecione o Serviço
                            </h2>
                        </div>

                        <div className="pl-5 border-l-2 border-blue-600 ml-5 md:ml-5 space-y-8">
                            {/* Search Box */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
                                <div className="relative flex items-center p-4">
                                    <Search className="w-6 h-6 text-gray-400 mr-3" />
                                    <input
                                        type="text"
                                        placeholder="Qual serviço você procura?"
                                        className="w-full text-lg outline-none text-gray-700 placeholder:text-gray-400"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Services Groups (Always Open) */}
                            {servicesData.map(category => (
                                <div key={category.id} className="space-y-3">
                                    {/* Category Header */}
                                    <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4 px-2">
                                        <span className="w-1.5 h-6 bg-primary rounded-full mr-3"></span>
                                        {category.label}
                                    </h3>

                                    <div className="space-y-3">
                                        {category.items.filter(item =>
                                            item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            category.label.toLowerCase().includes(searchTerm.toLowerCase())
                                        ).map(item => (
                                            <div
                                                key={item.id}
                                                className={cn(
                                                    "bg-white rounded-lg border p-4 flex items-center cursor-pointer transition-all duration-200 group relative overflow-hidden",
                                                    selectedServiceId === item.id
                                                        ? "border-primary ring-1 ring-primary/20 shadow-md transform scale-[1.01]"
                                                        : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                                                )}
                                                onClick={() => handleSelect(item.id)}
                                            >
                                                {/* Selection Indicator (Radio style) */}
                                                <div className={cn(
                                                    "w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 shrink-0 transition-colors",
                                                    selectedServiceId === item.id
                                                        ? "border-primary bg-primary"
                                                        : "border-gray-300 bg-gray-50 group-hover:border-gray-400"
                                                )}>
                                                    {selectedServiceId === item.id && <Check className="w-4 h-4 text-white" />}
                                                </div>

                                                <div className="flex-grow flex items-center justify-between">
                                                    <span className={cn(
                                                        "font-medium text-gray-700 text-lg",
                                                        selectedServiceId === item.id && "text-primary font-semibold"
                                                    )}>
                                                        {item.label}
                                                    </span>

                                                    {item.badge && (
                                                        <span className={cn(
                                                            "hidden md:flex items-center text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                                            item.badge === "Novo" ? "bg-blue-100 text-blue-700" :
                                                                item.badge === "Exclusivo" ? "bg-purple-100 text-purple-700" :
                                                                    "bg-green-100 text-green-700"
                                                        )}>
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Step 2: Form (Conditional) */}
                        {selectedService && (
                            <div className="animate-in slide-in-from-top-10 duration-700">
                                <ServiceForm serviceName={selectedService.label} />
                            </div>
                        )}
                    </div>

                    {/* Right Column: Summary Card (Sticky) */}
                    <div className="hidden lg:block relative h-full">
                        <OrderSummary serviceName={selectedService?.label} />
                    </div>
                </div>
            </div>
        </section>
    )
}
