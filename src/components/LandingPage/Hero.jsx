import { Link } from "react-router-dom"
import { Button } from "flowbite-react"
import Mascot from "../../assets/images/mascot.png"
import HeroBG from "../../assets/images/hero_bg.webp"
export default function LandingHero() {
    return  <section className="hero h-screen lg:px-0 lg:pr-12  px-8 flex flex-col items-end justify-center "
        style={
          { background: `linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), url(${HeroBG}) lightgray 50% / cover no-repeat`}
        }>
          <div className="lg:w-[54%] w-full lg:mr-20  flex flex-col items-center  gap-8">
            <h1 className="font-bold leading-normal text-2xl text-center text-black">
            Take the first step into the tech jungle—discover, learn, and conquer the world of computers with ease!
            </h1>
            <div  className="flex w-full gap-3 lg:flex-row flex-col pb-12 lg:pb-0 ">
           <Link to={"/signup"} className="w-full">
           <Button className="h-11 px-5 py-3 w-full rounded-[12px] flex items-center text-white border-none text-sm font-bold tracking-wide uppercase"
            style={{background: "linear-gradient(180deg, #4A3116 0%, #604525 52.17%)"}}>Begin your TechQuest
            </Button>
           </Link>
           <Link to={"/login"} className="w-full">
           <Button className="h-11 px-5 py-3 w-full rounded-[12px] flex items-center text-[#32C492] text-sm border-none font-bold bg-[#E5E5E5] tracking-wide uppercase">I already have an account        </Button>
           </Link>
    
            </div>
            <img src={Mascot} alt="" className="absolute left-2 lg:left-14 bottom-0 w-[200px] h-[200px] lg:h-[400px] lg:w-[400px]"/>
          </div>
        </section>
}