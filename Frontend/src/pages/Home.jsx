import { ContentLayout } from "./content-layout";
import GameProgressBar from "../components/GameProgressBar"
import {GiHeavyArrow} from "react-icons/gi"
import ScoreBar from "../components/ScoreBar";
export default function Home() {
    return <ContentLayout>
        <div className="fixed right-8 top-8">
        <ScoreBar/>
        </div>
        <div className="fixed  z-[999] right-8  top-[160px] w-[60%] py-8 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] bg-[#2A1B0D]">
            <GiHeavyArrow size={48} />
            <p className="text-l">In this module, you’ll learn how computer components and software work together to make devices run. Understanding these basics is key to building a strong foundation for everything tech-related.
            </p>
        </div>
        <div className="relative top-[100px] left-8">
        <GameProgressBar/>
        </div>
    </ContentLayout>
}