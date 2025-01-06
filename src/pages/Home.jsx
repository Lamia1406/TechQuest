import  ContentLayout  from "./content-layout";
import GameProgressBar from "../components/GameProgressBar";
import { GiHeavyArrow } from "react-icons/gi";
import ScoreBar from "../components/ScoreBar";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import fetchLevels from "../functions/fetchLevels";
import fetchUserProgress from "../functions/fetchUserProgress";

export default function Home() {
  const userId = JSON.parse(localStorage.getItem("sb-mijrziaxkcglykbaisyp-auth-token")).user.id;
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    fetchUserProgress(setLoading, setError, setCurrentLevel, setCurrentScore, userId)
    fetchLevels(setLoading, setError, setLevels)
  }, []);
  
 
  if (loading) {
    return (
      <ContentLayout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl text-gray-500">Loading...</p>
        </div>
      </ContentLayout>
    );
  }

  if (error) {
    return (
      <ContentLayout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </ContentLayout>
    );
  }

  return (
    <ContentLayout>
      <div className="fixed right-8 top-8">
        <ScoreBar  score={currentScore}/>
      </div>
      <div className="fixed z-[999] right-8 top-[160px] w-[60%] py-8 px-4 text-white flex items-start gap-4 rounded-[12px] bg-[#4A3116]">
        <GiHeavyArrow size={48} />
        {levels.map((level) => (
            level.number ===  currentLevel &&
          <div key={level.id} className="mb-4">
            <h3 className="text-xl font-[Rajdhani] font-bold">{level.title}</h3>
            <p className="text-l">{level.description}</p>
          </div>
        ))}
      </div>

      <div className="relative top-[100px] left-8">
        <GameProgressBar levels={levels} currentScore={currentScore}/>
      </div>
    </ContentLayout>
  );
}
