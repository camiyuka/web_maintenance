import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

export function NavLink(){

    const links = [
        {target: "#",
        text: "Dashboard",
        icon: <MdDashboard />
        }, 
        {target: "#",
        text: "Ambientes",
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
        <div>
            {links.map((obj) => (
            <a href={obj.target} className="flex items-center gap-4 hover:font-semibold">
                {obj.icon}
                {obj.text}
            </a>
            ))}
        </div>
        );
    }
    