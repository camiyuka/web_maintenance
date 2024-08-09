"use client"
import { Footer } from "../components/footer";
import FormsSolicitacaoManutencao from "../components/form_manutencao";
import { Aside } from "../components/aside";
import Title from "../components/title";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SolicitacaoManutencao from "../components/solicitacoes_manutencao"; 

export default function Home() {
    return (

        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1 overflow-hidden">
                <Aside />
                <main className="flex-1 flex flex-col overflow-hidden">
                    <Title text="Gerenciamento de Manutenção" />
                    <div className="flex-1 overflow-y-auto p-6">
                        <FormsSolicitacaoManutencao/>

                        <div className="container mx-auto">
                            <h1 className="text-2xl font-bold text-center p-5"> Visualização das Solicitações </h1>
                            <SolicitacaoManutencao/>
                            <div className="mx-auto max-w-md"></div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
