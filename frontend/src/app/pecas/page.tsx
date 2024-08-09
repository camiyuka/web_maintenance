"use client"
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import Title from "../components/title";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormsPecas from "../components/form_pecas";
import { Card } from "../components/card";


export default function Home() {
    return (

        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1 overflow-hidden">
                <Aside />
                <main className="flex-1 flex flex-col overflow-hidden">
                    <Title text="Controle de estoque de peças" />
                    <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-4 gap-4 mb-6">
              <Card
                color="bg-pink-800 p-6 flex gap-2 rounded-xl"
                quantity="100"
                text="Ambientes"
              />
              <Card
                color="bg-pink-800 p-6 flex gap-2 rounded-xl"
                quantity="140"
                text="Equipamentos"
              />
              <Card
                color="bg-pink-800 p-6 flex gap-2 rounded-xl"
                quantity="210"
                text="O.S. Abertas"
              />
              <Card
                color="bg-pink-800 p-6 flex gap-2 rounded-xl"
                quantity="120"
                text="O.S. Concluídas"
              />
            </div>

                        <div className="container mx-auto">
                            <FormsPecas />

                            <div className="mx-auto max-w-md"></div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
