import { Button, Navbar } from "flowbite-react";
import Logo from "../assets/Logo_complete.png"
export default function LandingPage () {
    return <main>    
    <Navbar fluid className="px-14 ">
      <Navbar.Brand >
        <img src={Logo} className="h-20 " alt="TechQuest Logo" />
      </Navbar.Brand>
      <div className="flex ">
        <Button className="h-12 px-5 py-3 rounded-[12px] flex items-center text-white text-sm font-bold tracking-wide uppercase"
        style={{background: "linear-gradient(180deg, #4A3116 0%, #604525 52.17%)"}}>Let’s start the journey!</Button>
      </div>
    </Navbar>
    </main>
}