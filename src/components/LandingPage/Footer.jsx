import { Footer } from "flowbite-react";
import { BsEnvelopeAtFill, BsGithub, BsLinkedin } from "react-icons/bs";
import LogoText from "../../assets/Logo_text.png";

export default function Footer_() {
  return (
    <Footer container>
      <div className="w-full bg-[#051110] py-8 gap-6 items-center  flex flex-col">
        <div className="grid  w-full px-14   lg:grid-cols-2 lg:justify-items-start justify-items-center  grid-cols-1 gap-4">
         
          <Footer.Brand 
            src={LogoText} 
            alt="TechQuest Logo" 
            name="TechQuest" 
          />

         
          <div className="flex lg:gap-6 gap-6 w-full lg:justify-end justify-center ">
            <Footer.Icon 
              href="https://github.com/Lamia1406" 
              icon={BsGithub} 
              title="GitHub" 
              className="lg:text-2xl text-3xl text-white" 
            />
            <Footer.Icon 
              href="https://www.linkedin.com/in/lamia-hamdi/" 
              icon={BsLinkedin} 
              title="LinkedIn" 
              className="lg:text-2xl text-3xl text-white" 
            />
            <Footer.Icon 
              href="mailto:lamia.hamdi1406@gmail.com" 
              icon={BsEnvelopeAtFill} 
              title="Email" 
              className="lg:text-2xl text-3xl text-white" 
            />
          </div>
        </div>

        <Footer.Divider />

        
        <div className="px-14 w-full sm:flex sm:items-center sm:justify-between">
          <p className="text-white text-sm opacity-50 lg:text-left text-center">
            All Rights Reserved @TechQuest
          </p>
          <Footer.LinkGroup className="gap-4 text-white opacity-50 justify-center">
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
}
