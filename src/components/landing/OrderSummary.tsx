import { AlertCircle, CreditCard, ShieldCheck, CheckCircle2 } from "lucide-react"

interface OrderSummaryProps {
    serviceName?: string
}

export function OrderSummary({ serviceName }: OrderSummaryProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Resumo do pedido</h3>

            {serviceName ? (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300 mb-6">
                    <div className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-semibold">Serviço:</div>
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-blue-900">{serviceName}</span>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center border-b border-gray-100 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <AlertCircle className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-gray-500 font-medium">Selecione uma certidão</p>
                </div>
            )}

            <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
                <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-red-900 text-sm mb-1 uppercase">Atenção:</h4>
                        <p className="text-red-800 text-xs leading-relaxed">
                            Devido à alta demanda, hoje a Emissão de Certidões está limitada.
                        </p>
                        <p className="text-red-700 font-bold text-sm mt-2">
                            Restam apenas: 3
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gray-400" />
                    <span>Pague no cartão de crédito em 12 vezes</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gray-400" />
                    <span>Garantia de serviço</span>
                </div>
            </div>
        </div>
    )
}
