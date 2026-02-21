"use client"

import { MapPin, FileText, User, FilePlus, Paperclip } from "lucide-react"

interface ServiceFormProps {
    serviceName: string
}

export function ServiceForm({ serviceName }: ServiceFormProps) {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-12">

            {/* Header */}
            <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-200">
                    2
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
                    {serviceName}: Preencha Abaixo
                </h2>
            </div>

            <div className="pl-5 border-l-2 border-blue-600 ml-5 md:ml-5 space-y-6">

                {/* Step 1: Location */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4 uppercase">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-3 uppercase">1</div>
                        Localização do Cartório Emissor
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-gray-600 bg-white">
                            <option value="">Selecione o Estado</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                        </select>
                        <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-gray-600 bg-white">
                            <option value="">Selecione a Cidade</option>
                        </select>
                        <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-gray-600 bg-white md:col-span-2">
                            <option value="">Cartório?</option>
                            <option value="unknown">Não sei o cartório</option>
                        </select>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 text-yellow-800 text-sm rounded-md border border-yellow-100 flex items-start">
                        <span className="mr-2">💡</span>
                        Caso não saiba o cartório, nós realizaremos a busca para você.
                    </div>
                </div>

                {/* Step 2: Format */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4 uppercase">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-3 uppercase">2</div>
                        Escolha o Formato da Certidão
                    </h3>
                    <div className="space-y-3">
                        <label className="flex items-center p-4 border border-blue-500 bg-blue-50 rounded-lg cursor-pointer transition-all">
                            <input type="radio" name="format" className="w-5 h-5 text-blue-600 mr-3" defaultChecked />
                            <div>
                                <span className="font-bold text-gray-900 block">Digital (E-mail / WhatsApp)</span>
                                <span className="text-sm text-gray-600">Envio rápido e seguro em PDF assinado digitalmente.</span>
                            </div>
                        </label>
                        <label className="flex items-center p-4 border border-gray-200 hover:border-blue-300 rounded-lg cursor-pointer transition-all">
                            <input type="radio" name="format" className="w-5 h-5 text-blue-600 mr-3" />
                            <div>
                                <span className="font-bold text-gray-900 block">Físico (Correios / Sedex)</span>
                                <span className="text-sm text-gray-600">Receba a certidão original em papel na sua casa.</span>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Step 3: Data */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4 uppercase">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-3 uppercase">3</div>
                        Dados da Certidão
                    </h3>
                    <div className="space-y-4">
                        <input type="text" placeholder="Nome Completo / Razão Social" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
                        <input type="text" placeholder="CPF / CNPJ" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Data Aprox. do Fato" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
                            <input type="text" placeholder="Livro / Folha (Se souber)" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                    </div>
                </div>

                {/* Step 4: Observations */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4 uppercase">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-3 uppercase">4</div>
                        Observações / Anexos
                    </h3>
                    <textarea
                        placeholder="Insira qualquer informação adicional que possa ajudar na busca..."
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none h-24 resize-none mb-4"
                    ></textarea>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Clique para anexar foto/documento antigo (Opcional)</p>
                    </div>
                </div>

                <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    APROVEITAR AGORA
                </button>

            </div>
        </div>
    )
}
