import { useState, useEffect } from "react";
import { ContentLayout } from "./content-layout";
import ScoreBar from "../components/ScoreBar";
import Mascot from "../assets/mascot.png";
import GameLayout from "./game-layout";
import { supabase } from "../supabase";
export default function Levels() {
    const [currentLevel, setCurrentLevel] = useState(1)
    const [games, setGames] = useState([])
    const [showWelcome, setShowWelcome] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [greeting, setGreeting] = useState("")
    const score = 0;
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch greeting first
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
                // console.log(gamesData)
            } catch (err) {
                setError("Failed to load data. Please try again later.");
                console.error("Error:", err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [currentLevel]);
    

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
                <ScoreBar />
            </div>

            {showWelcome && score === 0 ? (
                <div
                    className={`flex h-screen items-center justify-center gap-6 transition-opacity duration-3000 opacity-100 `}
                >
                    <img
                        src={Mascot}
                        className="w-[100px] h-[100px] relative top-[-20px]"
                    />
                    <div className="w-[50%] py-8 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] bg-[#2A1B0D]">
                        <p className="text-l">
                            {
                                greeting && greeting
                            }
                        </p>
                    </div>
                </div>
            ) : (
                <GameLayout games={games}/>
            )}
        </ContentLayout>
    );
}
