"use client"

import { useEffect, useState } from "react"
import { User } from "lucide-react"

const recentOrders = [
    { name: "Mariana S.", loc: "São Paulo/SP" },
    { name: "João P.", loc: "Rio de Janeiro/RJ" },
    { name: "Ana C.", loc: "Belo Horizonte/MG" },
    { name: "Carlos M.", loc: "Curitiba/PR" },
    { name: "Fernanda L.", loc: "Porto Alegre/RS" },
    { name: "Ricardo O.", loc: "Brasília/DF" },
]

export function UrgencyBar() {
    const [count, setCount] = useState(118330)
    const [currentOrderIndex, setCurrentOrderIndex] = useState(0)

    useEffect(() => {
        // Increment total orders occasionally
        const interval = setInterval(() => {
            setCount(prev => prev + Math.floor(Math.random() * 3))
        }, 5000)

        // Rotate recent orders
        const orderInterval = setInterval(() => {
            setCurrentOrderIndex(prev => (prev + 1) % recentOrders.length)
        }, 3000)

        return () => {
            clearInterval(interval)
            clearInterval(orderInterval)
        }
    }, [])

    return (
        <div className="bg-blue-50/50 border-b border-blue-100 py-2 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-blue-900 gap-2">
                <div className="font-bold whitespace-nowrap">
                    Pedidos realizados hoje: <span className="text-blue-700">{count.toLocaleString('pt-BR')}</span>
                </div>

                <div className="flex items-center gap-6 overflow-hidden w-full md:w-auto justify-center md:justify-end opacity-80">
                    {/* Show a few 'users' simulating live activity */}
                    <div className="flex items-center gap-1 animate-pulse">
                        <User className="w-3 h-3" />
                        <span>{recentOrders[currentOrderIndex].name} - {recentOrders[currentOrderIndex].loc}</span>
                    </div>
                    <div className="hidden md:flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{recentOrders[(currentOrderIndex + 1) % recentOrders.length].name} - ...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
