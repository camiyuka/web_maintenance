import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckbox, IoMdCheckboxOutline } from "react-icons/io";
import { MdDashboard, MdForklift } from "react-icons/md";
import { Footer } from "./components/footer";
import { Aside } from "./components/aside";
import { Card } from "./components/card";
import { Table } from "./components/table";

export default function Home() {

  const data = [
    { Ambiente: 'The Sliding Mr. Bones', Equipamento: 'Malcolm Lockyer', Solicitação: 12, Atendimento: 12, Ações: "botões"},
    { Ambiente: 'The Sliding Mr. Bones', Equipamento: 'Malcolm Lockyer', Solicitação: 12, Atendimento: 12, Ações: "botões"},
    { Ambiente: 'The Sliding Mr. Bones', Equipamento: 'Malcolm Lockyer', Solicitação: 12, Atendimento: 12, Ações: "botões"},
  ]  

  return (
  
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">

        <Aside />
        <main className="flex-1 flex flex-col">

          <h1 className="text-4xl font-bold uppercase w-full
           bg-white/40 p-6 text-center">

            Sistema de Gestão de Manutenção</h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
              <Card color="bg-orange-200 p-6 flex gap-2 rounded-xl" quantity="100" text="Ambientes" icon={<FaBuilding size={48} />} />
              <Card color="bg-blue-200 p-6 flex gap-2 rounded-xl" quantity="140" text="Equipamentos" icon={<MdForklift size={48} />} />
              <Card color="bg-red-200 p-6 flex gap-2 rounded-xl" quantity="210" text="O.S. Abertas" icon={<GrNotes size={48} />} />
              <Card color="bg-green-200 p-6 flex gap-2 rounded-xl" quantity="120" text="O.S. Concluídas" icon={<GrNotes size={48} />} />
            </div>
          </div>

          <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <Table/>
          </div>
        </main>

      </div>
      <Footer/>
    </div>
  );
}
