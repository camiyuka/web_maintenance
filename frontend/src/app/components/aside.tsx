import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";
import { NavBar } from "./navbar";

    export function Aside() {
        return ( 
        <aside className="w-64 p-6 bg-gray-100">
          <Image src={"/image/logo.png"}
           alt="Logo" width={150} height={200} />

        <NavBar/> 
        </aside>
        )
    }