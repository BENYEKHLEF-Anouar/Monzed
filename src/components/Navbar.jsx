import Button  from "./Button";
import { House, Settings, Briefcase, Users, Zap, Menu } from "lucide-react";



function Navbar(){

    return (
        <div className="sticky top-0 shadow z-50 flex justify-between items-center bg-primary px-6 py-4 bg-">
            <img src="../../public/logo1.png" className="h-6" alt="Logo" />
            <div  className="hidden md:flex text-white gap-6">
                <ul className="flex text-white gap-6">
                    <li className="flex items-center gap-2 hover:text-purple-400 transition duration-75 "><House size={18}/>Home</li>
                    <li className="flex items-center gap-2 hover:text-purple-400 transition duration-75 "><Settings size={18}/>Services</li>
                    <li className="flex items-center gap-2 hover:text-purple-400 transition duration-75 "><Briefcase  size={18}/>Work</li>
                    <li className="flex items-center gap-2 hover:text-purple-400 transition duration-75 "><Users size={18}/>Team</li>
                </ul>
                {/* <button className="flex items-center px-6 py-2 gap-2 bg-gradient-to-r from-purple-700 to-blue-700 rounded-lg hover:scale-105 transition duration-75 ">
                    <Zap color="white" size={18}/>
                    Start Project
                </button> */}
                <Button 
                    Text="Start Project" 
                    LeftIcon={() => <Zap color="white" size={18} />}
                    Variant="gradient"
                    size="sm"
                />
            </div>
            <button className="md:hidden p-2 text-white hover:text-purple-400 hover:bg-gray-800 rounded-xl">
                <Menu size={25}/>
            </button>
           

        </div>
    )
}
export default Navbar;