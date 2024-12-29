import { useState, useEffect } from "react";
import { ContentLayout } from "./content-layout";
import ScoreBar from "../components/ScoreBar";
import Mascot from "../assets/mascot.png";
import GameLayout from "./game-layout";

export default function Levels() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const score = 0;

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
                            Welcome to Tech Basics Camp! This is where your
                            adventure starts. In this level, you’ll familiarize
                            yourself with essential components of a computer.
                            Let’s get started!
                        </p>
                    </div>
                </div>
            ) : (
                <GameLayout/>
            )}
        </ContentLayout>
    );
}
