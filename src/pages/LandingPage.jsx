import LandingHero from "../components/LandingPage/Hero";
import LandingStoryline from "../components/LandingPage/Storyline";
import LandingCTA from "../components/LandingPage/CTA";
import Nav from "../components/LandingPage/Navbar";
import Footer_ from "../components/LandingPage/Footer";
export default function LandingPage () {
    return <main>    
    <Nav/>
   <LandingHero/>
   <LandingStoryline/>
   <LandingCTA/>
   <Footer_/>  
    </main>
}