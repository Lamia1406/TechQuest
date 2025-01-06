import { Button, Navbar } from "flowbite-react";
import Logo from "../assets/Logo_complete.png";
import LogoText from "../assets/Logo_text.png";
import { Link } from "react-router-dom";

import Level1BG from "../assets/images/level1_bg.webp"
import Level2BG from "../assets/images/level2_bg.webp"
import Level3BG from "../assets/images/level3_bg.webp"
import Level4BG from "../assets/images/level4_bg.webp"
import LevelDescription from "../components/LevelDescription";
import CtaBG from "../assets/images/cta_bg.webp"
import { Footer } from "flowbite-react";
import { BsEnvelopeAtFill,  BsGithub, BsLinkedin } from "react-icons/bs";
import LandingHero from "../components/LandingPage/Hero";
export default function LandingPage () {
    return <main>    
    {/* <Navbar fluid className="px-14 z-[999]  fixed bg-transparent w-full">
      <Navbar.Brand >
        <img src={Logo} className="h-20 " alt="TechQuest Logo" />
      </Navbar.Brand>
      <Link to={"/signup"}>
        <Button className="h-12 px-5 py-3 rounded-[12px] flex items-center border-none text-white text-sm font-bold tracking-wide uppercase"
        style={{background: "linear-gradient(180deg, #4A3116 0%, #604525 52.17%)"}}>Let’s start the journey!</Button>
      </Link>
    </Navbar> */}
   <LandingHero/>
    {/* <section className="storyline py-16 px-20  flex flex-col items-center gap-16 bg-white">
      <header className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-6xl font-[Rajdhani] font-bold text-[#716E5D]"> Welcome to the Jungle of TechQuest</h1>
     <div className="text-center text-lg font-medium text-black">
     <p>You step into the vibrant Jungle of Tech Gurus, a land alive with the hum of machines, the glow of screens, and the whispers of ancient tech wisdom. You’ve heard the stories—the ones about the Assembly of Tech Masters, the elite tribe that rules the jungle with their unparalleled knowledge of computers.</p>
     <p>Now, it’s your turn to take the journey. To prove yourself. To rise among the ranks.      </p>
     </div>
      </header>
      <div>
        <LevelDescription 
        img={Level1BG} 
        title={"Step Into the World of Foundations"} 
        description={"As you venture deeper into the jungle, your first destination is Tech Basics Camp. Here, the ancient Elders of the Jungle guide you through the foundational components of technology. Discover the heart of any computer—CPU, RAM, and storage—and learn how these elements form the core of every machine. Completing this task earns you the Tech Explorer Training Badge, signaling your initiation into the world of Tech Gurus."}
        />
        <LevelDescription 
        img={Level2BG} 
        title={"Unlock the Secrets of Computer Essentials"} 
        description={"The next step of your journey takes you to Foundations Forge, where the raw energy of the jungle pulses with knowledge of binary code, file systems, and operating systems. In this sacred space, you’ll uncover the fundamental building blocks of all computers. Your success here rewards you with the Problem-Solver Badge, a testament to your growing expertise."}
        reverse
        />
        <LevelDescription 
        img={Level3BG} 
        title={"Master Speed and Productivity"} 
        description={"As you advance, you arrive at Shortcut Showdown, where speed is key and efficiency reigns supreme. This is where your ability to navigate the digital world quickly is put to the test. Every keystroke will bring you closer to victory, and upon completing the challenge, you’ll earn the prestigious Efficiency Expert Badge."}        
        />
        <LevelDescription 
        img={Level4BG} 
        title={"The Ultimate Test of Knowledge and Skill"} 
        description={"No journey in the jungle is complete without facing the Tech Guru Certification challenge. Here, all your skills—problem-solving, speed, and technical knowledge—will be tested in a thrilling, gamified exam. You’ll need to apply everything you’ve learned in an epic finale. Upon conquering this challenge, you’ll be awarded the Tech Guru Certification, a downloadable certificate and a unique Tech Guru avatar, marking your ascension to the highest ranks of the tech world."}
        reverse
        />
     
      </div>
    </section> */}
    {/* <section className="cta h-screen flex items-center justify-center pt-12"
    style={
      { background: `url(${CtaBG}) lightgray 50% / cover no-repeat`}
    }>
      <div className="rounded-[32px] bg-[#B8B6AE] flex w-[80%] px-20 py-12 justify-center items-center flex-col gap-14">
        <header className="flex flex-col gap-4 items-center">
        <h2 className="text-[#FFB55F] font-[Rajdhani] text-7xl font-bold " style={{ WebkitTextStrokeWidth: '4px', WebkitTextStrokeColor: '#1A192D' }}>
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
    </section> */}
    {/* <Footer container>
      <div className="w-full bg-[#051110] py-8 gap-6 items-center flex flex-col">
          <div className="grid items-center w-full px-14 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
            <Footer.Brand
              src={LogoText}
              alt="Flowbite Logo"
              name="Flowbite"
            />
         
          <div className=" flex gap-6 ">
            <Footer.Icon href="https://github.com/Lamia1406" icon={BsGithub} className="text-2xl text-white"/>
            <Footer.Icon href="https://www.linkedin.com/in/lamia-hamdi/" icon={BsLinkedin} className="text-2xl text-white"/>
            <Footer.Icon href="mailto://lamia.hamdi1406@gmail.com" icon={BsEnvelopeAtFill} className="text-2xl text-white"/>
          
         
          </div>
        </div>
        <Footer.Divider />
        <div className="px-14 w-full sm:flex sm:items-center sm:justify-between">
          <p className="text-white text-sm opacity-50">All Rights Reserved @TechQuest          </p>
        
          <div>
              <Footer.LinkGroup className="gap-4 text-white opacity-50">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
        </div>
      </div>
    </Footer> */}

    </main>
}