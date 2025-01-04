import { useState, useEffect } from "react";
import Mascot from "../assets/images/mascot.png";
import GameComponent from "../components/GameComponent";
import GameComponentAnswer from "../components/GameComponentAnswer";
import { supabase } from "../supabase"; // assuming supabase is correctly set up

export default function GameLayout({ games }) {
    const [currentGameIndex, setCurrentGameIndex] = useState(0);
    const [gameComponents, setGameComponents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [highlighted, setHighlighted] = useState([]); // Store all correct pairs
    const [shuffledComponents, setShuffledComponents] = useState([]);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    const currentGame = games[currentGameIndex];

    // Shuffle function
    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Fetch game components when currentGame changes
    useEffect(() => {
        const fetchGameComponents = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data, error } = await supabase
                    .from("Game_Components")
                    .select()
                    .eq("game_id", currentGame.game_number); // assuming each game has an id
                console.log(data);
                if (error) throw error;
                setGameComponents(data);
            } catch (err) {
                setError("Failed to load game components. Please try again later.");
                console.error("Error:", err.message);
            } finally {
                setLoading(false);
            }
        };

        if (currentGame) {
            fetchGameComponents();
        }
    }, [currentGame]); // Re-fetch game components when currentGame changes

    // Shuffle the game components and answers only once
    useEffect(() => {
        if (gameComponents.length > 0) {
            const shuffled = shuffle([...gameComponents]);
            setShuffledComponents(shuffled);
            setShuffledAnswers(shuffle(shuffled.map((component) => component.name)));
        }
    }, [gameComponents]);

    const handleGameCompletion = () => {
        if (currentGameIndex < games.length - 1) {
            setCurrentGameIndex(currentGameIndex + 1);
        } else {
            console.log("All games completed!");
        }
    };

    // Handle component selection
    const handleComponentClick = (component) => {
        setSelectedComponent(component);
        if (selectedAnswer) {
            // Check if the selected component matches the selected answer
            if (component.name === selectedAnswer) {
                // Add the correct pair to highlighted
                setHighlighted((prevHighlighted) => [
                    ...prevHighlighted,
                    { component, answer: selectedAnswer },
                ]);
            }
        }
    };

    // Handle answer selection
    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        if (selectedComponent) {
            // Check if the selected answer matches the selected component
            if (selectedComponent.name === answer) {
                // Add the correct pair to highlighted
                setHighlighted((prevHighlighted) => [
                    ...prevHighlighted,
                    { component: selectedComponent, answer },
                ]);
            }
        }
    };

    const lastHighlighted = highlighted[highlighted.length - 1]; // Get the last highlighted pair

    return (
        <div className="flex flex-col h-screen gap-12 transition-opacity duration-3000 opacity-100">
            <div className="flex items-center mt-4 ml-8 gap-6 transition-opacity duration-3000 opacity-100">
                <img src={Mascot} className="w-[100px] h-[100px] relative top-[-20px]" />
                <div className="w-[70%] py-8 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] bg-[#2A1B0D]">
                    <p className="text-l">
                        {currentGame?.instruction || "Loading instruction..."}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-[100px]">
                <div className="flex justify-evenly">
                    {loading ? (
                        <p>Loading components...</p>
                    ) : (
                        shuffledComponents.map((component, index) => (
                            <div
                                key={index}
                                onClick={() => handleComponentClick(component)}
                                className={`cursor-pointer ${
                                    highlighted.some(
                                        (pair) => pair.component.name === component.name
                                    )
                                        ? "border-4 border-yellow-500"
                                        : ""
                                }`}
                            >
                                <GameComponent
                                    hint={component.hint}
                                    image_url={component.image_url}
                                />
                            </div>
                        ))
                    )}
                </div>
                <div className="flex justify-evenly">
                    {shuffledAnswers.map((answer, index) => (
                        <div
                            key={index}
                            onClick={() => handleAnswerClick(answer)}
                            className={`cursor-pointer ${
                                highlighted.some((pair) => pair.answer === answer)
                                    ? "border-4 border-yellow-500"
                                    : ""
                            }`}
                        >
                            <GameComponentAnswer answer={answer} />
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-xl px-8">
                {/* Render the last highlighted component and its description */}
                {lastHighlighted ? (
                    <>
                        <strong>{lastHighlighted.component.name}: </strong>
                        {lastHighlighted.component.description}
                    </>
                ) : (
                    ""
                )}
            </p>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
