import LevelDescription from "./LevelDescription"
import Level1BG from "../../assets/images/level1_bg.webp"
import Level2BG from "../../assets/images/level2_bg.webp"
import Level3BG from "../../assets/images/level3_bg.webp"
import Level4BG from "../../assets/images/level4_bg.webp"
export default function Storyline() {
    return  <section className="storyline py-16 px-8 lg:px-20  flex flex-col items-center gap-16 bg-white">
    <header className="flex flex-col gap-3 justify-center items-center">
      <h1 className="lg:text-6xl text-4xl font-[Rajdhani] font-bold text-[#716E5D] lg:text-left text-center"> Welcome to the Jungle of TechQuest</h1>
   <div className="text-center text-lg font-medium text-black">
   <p>You step into the vibrant Jungle of Tech Gurus, a land alive with the hum of machines, the glow of screens, and the whispers of ancient tech wisdom. You’ve heard the stories—the ones about the Assembly of Tech Masters, the elite tribe that rules the jungle with their unparalleled knowledge of computers.</p>
   <p>Now, it’s your turn to take the journey. To prove yourself. To rise among the ranks.      </p>
   </div>
    </header>
    <div className="flex flex-col lg:gap-0 gap-16">
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
  </section>
}