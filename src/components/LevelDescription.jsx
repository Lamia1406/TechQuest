import { GiHeavyArrow } from "react-icons/gi";
export default function LevelDescription({description, title}) {
    return  <div className="lg:fixed mt-12 lg:mt-0  w-full z-[999] lg:right-8 lg:top-[160px] lg:w-[50%] lg:py-8 py-2 px-2 lg:px-4 text-white flex items-start gap-4 rounded-[12px] bg-[#4A3116]">
    <GiHeavyArrow size={48} />
    
      <div className="mb-4">
        <h3 className="text-xl font-[Rajdhani] font-bold">{title}</h3>
        <p className="text-l">{description}</p>
      </div>

  </div>
}