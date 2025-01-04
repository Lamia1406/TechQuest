import { ContentLayout } from "./content-layout";
import GameProgressBar from "../components/GameProgressBar";
import { GiHeavyArrow } from "react-icons/gi";
import ScoreBar from "../components/ScoreBar";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Home() {
    const [currentLevel, setCurrentLevel] = useState(1)
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLevels = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase.from("Levels").select();
        if (error) throw error;
        setLevels(data);
      } catch (err) {
        setError("Failed to load levels. Please try again later.");
        console.error("Error fetching levels:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLevels();
  }, []);

  // Display a loading message while data is being fetched
  if (loading) {
    return (
      <ContentLayout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl text-gray-500">Loading...</p>
        </div>
      </ContentLayout>
    );
  }

  // Display an error message if data fetching fails
  if (error) {
    return (
      <ContentLayout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </ContentLayout>
    );
  }

  // Render content only when data is loaded successfully
  return (
    <ContentLayout>
      <div className="fixed right-8 top-8">
        <ScoreBar />
      </div>

      {/* Info Box */}
      <div className="fixed z-[999] right-8 top-[160px] w-[60%] py-8 px-4 text-white flex items-start gap-4 rounded-[12px] bg-[#2A1B0D]">
        <GiHeavyArrow size={48} />
        {levels.map((level) => (
            level.number ===  currentLevel &&
          <div key={level.id} className="mb-4">
            <h3 className="text-xl font-bold">{level.title}</h3>
            <p className="text-l">{level.description}</p>
          </div>
        ))}
      </div>

      {/* Game Progress Bar */}
      <div className="relative top-[100px] left-8">
        <GameProgressBar levels={levels} currentLevel={currentLevel}/>
      </div>
    </ContentLayout>
  );
}
