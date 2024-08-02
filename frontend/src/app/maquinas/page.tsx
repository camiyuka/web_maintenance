"use client"
import { Footer } from "../components/footer";
import Forms from "../components/form_maquina";
import { Aside } from "../components/aside";
import Title from "../components/title";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormsMaquinas from "../components/form_maquina";
import MachineDetails from "../components/machine_details"

export default function Home() {
    
const maquina = {
    name: "Máquina 1",
    type: "Tipo A",
    model: "Modelo X",
    manufactureDate: "2020-01-01",
    serialNumber: "12345",
    location: "Fábrica 1",
    maintenanceHistory: [
      {
        date: "2021-06-01",
        description: "Troca de óleo",
        responsible: "José Silva",
        status: "Concluída",
        comments: "Manutenção realizada sem problemas.",
        partsUsed: [
          { name: "Óleo Lubrificante", quantity: "2 Litros", supplier: "Fornecedor A" },
        ],
      },
      {
        date: "2022-03-15",
        description: "Substituição de filtro",
        responsible: "Maria Souza",
        status: "Pendente",
        comments: "Aguardando peças.",
        partsUsed: [
          { name: "Filtro de Ar", quantity: "1 Unidade", supplier: "Fornecedor B" },
        ],
      },
    ],
  };

    return (

        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1 overflow-hidden">
                <Aside />
                <main className="flex-1 flex flex-col overflow-hidden">
                    <Title text="Gerenciamento de máquinas" />
                    <div className="flex-1 overflow-y-auto p-6">

                        <div className="container mx-auto">
                            <FormsMaquinas />

                            <div className="mx-auto max-w-md"></div>
                            <h1 className="text-2xl font-bold text-center p-5"> Visualização das Máquinas </h1>
                            <MachineDetails machine={maquina} />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
