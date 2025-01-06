import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo_complete.png";
import { Button } from "flowbite-react";
export default function Nav() {
    return <Navbar fluid className="lg:px-14 px-8 z-[999]  fixed bg-transparent w-full">
          <Navbar.Brand >
            <img src={Logo} className="h-20 " alt="TechQuest Logo" />
          </Navbar.Brand>
          <Link to={"/signup"} className="hidden lg:block">
            <Button className="h-12 px-5 py-3 rounded-[12px] flex items-center border-none text-white text-sm font-bold tracking-wide uppercase"
            style={{background: "linear-gradient(180deg, #4A3116 0%, #604525 52.17%)"}}>Let’s start the journey!</Button>
          </Link>
        </Navbar> 
} 