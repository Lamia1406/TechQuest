import  ContentLayout  from "./content-layout";
import GameProgressBar from "../components/GameProgressBar";
import ScoreBar from "../components/ScoreBar";
import { useEffect, useState } from "react";
import fetchLevels from "../functions/fetchLevels";
import fetchUserProgress from "../functions/fetchUserProgress";
import LevelDescription from "../components/LevelDescription";

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
      <LevelDescription description = {levels[currentLevel - 1]?.description} title = {levels[currentLevel -1]?.title}/>
      <div className="relative top-[100px] left-8">
        {/* <GameProgressBar levels={levels} currentScore={currentScore}/> */}
      </div>
    </ContentLayout>
  );
}
