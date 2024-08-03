import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

export function NavBar(){

    const links = [
        {target: "./maquinas",
        text: "Gerenciamento de máquinas",
        icon: <MdDashboard />
        }, 
        {target: "./manutencoes",
        text: "Gerenciamento de manutenções",
        icon: <FaBuilding />
        }, 
        {target: "#",
        text: "Equipamentos",
        icon: <MdForklift />
        }, 
        {target: "#",
        text: "Manutenções",
        icon: <FaTools />
        }, 
        {target: "#",
        text: "Usuário",
        icon: <FaUsers />
        }, 
    ];

 
    return (
        <nav className="space-y-4 flex flex-col mt-8">
            {links.map((obj, index) => (
            <a href={obj.target} key={index} className="flex items-center gap-4 hover:font-semibold">
                {obj.icon}
                {obj.text}
            </a>
            ))}
        </nav>
        );
    }
    