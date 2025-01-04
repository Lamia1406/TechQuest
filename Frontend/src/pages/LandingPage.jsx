import { Button, Navbar } from "flowbite-react";
import Logo from "../assets/Logo_complete.png"
import { Link } from "react-router-dom";
import Mascot from "../assets/images/mascot.png"
import HeroBG from "../assets/images/hero_bg.webp"
export default function LandingPage () {
    return <main>    
    <Navbar fluid className="px-14 fixed bg-transparent w-full">
      <Navbar.Brand >
        <img src={Logo} className="h-20 " alt="TechQuest Logo" />
      </Navbar.Brand>
      <Link to={"/signup"}>
        <Button className="h-12 px-5 py-3 rounded-[12px] flex items-center border-none text-white text-sm font-bold tracking-wide uppercase"
        style={{background: "linear-gradient(180deg, #4A3116 0%, #604525 52.17%)"}}>Let’s start the journey!</Button>
      </Link>
    </Navbar>
    <section className="hero h-screen pr-12 flex flex-col items-end justify-center "
    style={
      { background: `linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), url(${HeroBG}) lightgray 50% / cover no-repeat`}
    }>
      <div className="w-[54%]   mr-20  flex flex-col items-center  gap-8">
        <h1 className="font-bold leading-normal text-2xl text-center text-black">
        Take the first step into the tech jungle—discover, learn, and conquer the world of computers with ease!
        </h1>
        <div  className="flex w-full gap-3">
       <Link to={"/signup"} className="w-full">
       <Button className="h-11 px-5 py-3 w-full rounded-[12px] flex items-center text-white border-none text-sm font-bold tracking-wide uppercase"
        style={{background: "linear-gradient(180deg, #4A3116 0%, #604525 52.17%)"}}>Begin your TechQuest
        </Button>
       </Link>
       <Link to={"/login"} className="w-full">
       <Button className="h-11 px-5 py-3 w-full rounded-[12px] flex items-center text-[#32C492] text-sm border-none font-bold bg-[#E5E5E5] tracking-wide uppercase">I already have an account        </Button>
       </Link>

        </div>
        <img src={Mascot} alt="" className="absolute left-14 bottom-0 h-[400px] w-[400px]"/>
      </div>
    </section>
    </main>
}