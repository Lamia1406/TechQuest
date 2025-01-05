import { useState, useEffect } from "react";
import { ContentLayout } from "./content-layout";
import ScoreBar from "../components/ScoreBar";
import Mascot from "../assets/images/mascot.png";
import GameLayout from "./game-layout";
import { supabase } from "../supabase";

export default function Levels() {
    const userId = JSON.parse(localStorage.getItem("sb-mijrziaxkcglykbaisyp-auth-token")).user.id;
    const [currentLevel, setCurrentLevel] = useState(1);
    const [games, setGames] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [greeting, setGreeting] = useState("");
    const [currentScore, setCurrentScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch greeting first based on currentLevel
                const { data: greetingData, error: greetingError } = await supabase
                    .from("Levels")
                    .select("greeting")
                    .eq("number", currentLevel);

                if (greetingError) throw greetingError;
                setGreeting(greetingData[0]?.greeting || "");

                // Fetch games after greeting
                const { data: gamesData, error: gamesError } = await supabase
                    .from("Games")
                    .select()
                    .eq("level", currentLevel);

                if (gamesError) throw gamesError;
                setGames(gamesData);

            } catch (err) {
                setError("Failed to load data. Please try again later.");
                console.error("Error:", err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchUserProgress = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch user progress including level_id and score
                const { data: progressData, error: progressError } = await supabase
                    .from("User_Game_Progress")
                    .select()
                    .eq("user_id", userId)
                    .single();

                if (progressError) throw progressError;

                // Get the level info from the user_game_progress
                const userScore = progressData?.score || 0;
                const userLevel = progressData?.level_id || 1;
                setCurrentScore(userScore);
                setCurrentLevel(userLevel);  // set the level_id that was fetched

                // Fetch the required score for this level from the Levels table
                const { data: levelData, error: levelError } = await supabase
                    .from("Levels")
                    .select("score_required")
                    .eq("number", userLevel);

                if (levelError) throw levelError;

                // Check if user score is enough to proceed to next level (optional logic)
                if (userScore >= levelData[0]?.score_required) {
                    console.log("User can proceed to the next level");
                } else {
                    console.log("User needs more points to proceed");
                }
            } catch (err) {
                setError("Failed to load data. Please try again later.");
                console.error("Error:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProgress();
        fetchData();
    }, [currentLevel, userId]);

    useEffect(() => {
        // Start fade-out transition after 7 seconds
        const fadeOutTimeout = setTimeout(() => {
            setFadeOut(true);
        }, 7000);

        // Hide the welcome section after 10 seconds
        const hideTimeout = setTimeout(() => {
            setShowWelcome(false);
        }, 10000);

        // Clear timeouts when component unmounts
        return () => {
            clearTimeout(fadeOutTimeout);
            clearTimeout(hideTimeout);
        };
    }, []);

    return (
        <ContentLayout>
            <div className="fixed right-8 top-8">
                <ScoreBar score={currentScore} />
            </div>

            {showWelcome && currentScore === 0 ? (
                <div
                    className={`flex h-screen items-center justify-center gap-6 transition-opacity duration-3000 opacity-100 `}
                >
                    <img
                        src={Mascot}
                        className="w-[100px] h-[100px] relative top-[-20px]"
                    />
                    <div className="w-[50%] py-8 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] bg-[#2A1B0D]">
                        <p className="text-l">
                            {greeting && greeting}
                        </p>
                    </div>
                </div>
            ) : (
                <GameLayout 
                games={games} 
                currentScore={currentScore} 
                setCurrentScore={setCurrentScore} 
              />
              
            )}
        </ContentLayout>
    );
}
