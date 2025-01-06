import { Link } from "react-router-dom"
import { Button } from "flowbite-react"
import CtaBG from "../../assets/images/cta_bg.webp"
export default function LandingCTA() {
    return  <section className="cta h-screen flex items-center justify-center lg:px-0 px-8 pt-12"
        style={
          { background: `url(${CtaBG}) lightgray 50% / cover no-repeat`}
        }>
          <div className="rounded-[32px] bg-[#B8B6AE] flex lg:w-[80%] w-full px-10 py-6 justify-center items-center flex-col lg:gap-14 gap-7">
            <header className="flex flex-col gap-4 items-center">
            <h2 className="text-[#FFB55F] font-[Rajdhani] text-6xl text-center lg:text-7xl font-bold " style={{ WebkitTextStrokeWidth: '4px', WebkitTextStrokeColor: '#1A192D' }}>
            Start Your Adventure Today!
    </h2>
    <p className="text-[#1A192D] text-center text-xl font-bold">
    Embark on your TechQuest journey by signing up and take the first step toward mastering technology. The path is yours to explore!
    </p>
            </header>
            <Link to={"/signup"}>
            <Button className="h-12 px-5 py-3 rounded-[12px] flex items-center border-none text-white text-sm font-bold tracking-wide uppercase"
            style={{background: "linear-gradient(180deg, #4A3116 0%, #604525 52.17%)"}}>Start Your Quest</Button>
          </Link>
          </div>
        </section> 
}