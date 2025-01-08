import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import ContentLayout from "../pages/content-layout"
import ScoreBar from "../components/ScoreBar"
import Mascot from "../assets/images/mascot.png";
import GameLayout from "../pages/game-layout"
import { supabase } from "../supabase";
import fetchUserProgress from "../functions/fetchUserProgress";

export default function Levels() {
    const navigate = useNavigate(); 
    const userId = JSON.parse(localStorage.getItem("sb-mijrziaxkcglykbaisyp-auth-token")).user.id;
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentScore, setCurrentScore] = useState(0);
    const [game, setGame] = useState();
    const [showWelcome, setShowWelcome] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [greeting, setGreeting] = useState("");
    const [currentGame, setCurrentGame] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data: greetingData, error: greetingError } = await supabase
                    .from("Levels")
                    .select("greeting")
                    .eq("number", currentLevel);

                if (greetingError) throw greetingError;
                setGreeting(greetingData[0]?.greeting || "");

                const { data: gamesData, error: gamesError } = await supabase
                    .from("Games")
                    .select()
                    .eq("level", currentLevel)
                    .eq("game_number", currentGame)
                    .single();
                

                if (gamesError) throw gamesError;
                setGame(gamesData);
                
                console.log(currentGame)
                // Check if there are no more games for the current level
                const { data: nextGameData, error: nextGameError } = await supabase
                    .from("Games")
                    .select()
                    .eq("level", currentLevel)
                    .eq("game_number", currentGame + 1)
                    .single();
                
                
                if (nextGameError || !nextGameData) {
                    navigate("/levels");
                }

            } catch (err) {
                setError("Failed to load data. Please try again later.");
                console.error("Error:", err.message);
            } finally {
                setLoading(false);
            }
        };

      

        fetchUserProgress(setLoading, setError, setCurrentLevel, setCurrentScore, userId, setCurrentGame)
        fetchData();
    }, [currentLevel, userId, currentGame, navigate]); 

   

    useEffect(() => {
        const fadeOutTimeout = setTimeout(() => {
            setFadeOut(true);
        }, 3000);

        const hideTimeout = setTimeout(() => {
            setShowWelcome(false);
        }, 3000);
        return () => {
            clearTimeout(fadeOutTimeout);
            clearTimeout(hideTimeout);
        };
    }, []);

    return (
        <ContentLayout>
            <div className="fixed right-8 top-8 ">
                <ScoreBar score={currentScore} />
            </div>

            {showWelcome && currentScore === 0 ? (
                <div
                    className={`flex lg:pr-64 h-screen   w-full items-center justify-center gap-6 transition-opacity duration-3000 opacity-100 `}>
                    <img
                        src={Mascot}
                        className="lg:block hidden w-auto h-[90px] lg:w-[100px] lg:h-[100px] relative top-[-20px]"
                    />
                    <div className=" lg:w-[60%] lg:mr-16 py-4 px-4 text-white flex justify-center items-start  rounded-[12px] bg-[#4A3116]">
                        <p className="text-lg ">
                            {greeting && greeting}
                        </p>
                    </div>
                </div>
            ) : (
                <GameLayout
                    game={game}
                    currentScore={currentScore}
                    setCurrentScore={setCurrentScore}
                    currentLevel={currentLevel}
                />
            )}
        </ContentLayout>
    );
}
