import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

    export function Aside() {
        return ( 
        <aside className="w-64 p-6 bg-white/40">
          <Image src={"/image/logo.png"} className="w-full"
           alt="Logo" width={240} height={240} />

          <nav className="space-y-4 flex flex-col mt-8">
            <a href="" className="flex items-center gap-4
                                 hover:font-semibold">
              <MdDashboard />
              Dashboard
            </a>
            <a href="" className="flex items-center gap-4
                                 hover:font-semibold">
              <FaBuilding />
              Ambientes</a>
            <a href="" className="flex items-center gap-4
                                 hover:font-semibold">
              <MdForklift />
              Equipamentos</a>
            <a href="" className="flex items-center gap-4
                                 hover:font-semibold">
              <FaTools />
              Manutenções</a>
            <a href="" className="flex items-center gap-4
                                 hover:font-semibold">
              <FaUsers />
              Usuário</a>
          </nav>
        </aside>
        )
    }