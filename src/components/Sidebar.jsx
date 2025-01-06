import { useState } from "react";
import Logo from "../assets/Logo_text.png";
import { GiBirdHouse, GiProgression, GiCubes, GiFlyingTarget, GiBigGear } from "react-icons/gi";
import {Button} from "flowbite-react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
export default function SideBar() {
    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarItems = [
        { "label": "Home", "icon": <GiBirdHouse size={24} color="#01F1FE" />, "href": "/" },
        { "label": "Levels", "icon": <GiProgression size={24} color="#01F1FE" />, "href": "/levels" },
        // { "label": "Learning", "icon": <GiCubes size={24} color="#01F1FE" />, "href": "/learning" },
        { "label": "Achievements", "icon": <GiFlyingTarget size={24} color="#01F1FE" />, "href": "/achievements" },
        // { "label": "Profile", "icon": <GiBigGear size={24} color="#01F1FE" />, "href": "/profile" },
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);
    const logout = async () =>{
            let { error } = await supabase.auth.signOut()
            localStorage.removeItem("sb-mijrziaxkcglykbaisyp-auth-token")

            navigate("/")

    }
    return (
        <>
            {/* Hamburger menu */}
            {!isSidebarOpen && (
                <button 
                    onClick={toggleSidebar}
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-8 h-8" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            )}

            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 transition-all duration-500 ease-in-out`}
                aria-label="Sidebar"
            >
                <div className="h-full overflow-y-auto bg-[#061C1A] ">
                    <a href="/" className="flex justify-center ps-2.5 mb-5 border-b py-4">
                        <img src={Logo} className="h-6 me-3 sm:h-7" alt="TechQuest Logo" />
                    </a>
                    <ul className="flex flex-col gap-2 items-start px-4 pb-4 border-b">
                        {sidebarItems.map((item, index) => (
                            <li className="w-full" key={index}>
                                <a 
                                    href={item.href} 
                                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700" 
                                    onClick={closeSidebar} // Close sidebar when an item is clicked
                                >
                                    {item.icon}
                                    <span className="ms-3 text-white text-l">{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="py-6 px-6 w-full  flex justify-center">
                   
       
      
                    <Button onClick={logout} className="flex w-full items-center border-none text-white text-sm font-bold tracking-wide"
                    style={{ background: "linear-gradient(180deg, #0095A8 0%, #009eb3 100%)" }}>
                        Log out
                    </Button>
                </div>
                </div>
               
            </aside>
        </>
    );
}
