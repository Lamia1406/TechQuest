import { useState, useEffect } from "react";
import Mascot from "../assets/images/mascot.png";
import GameComponent from "../components/GameComponent";
import GameComponentAnswer from "../components/GameComponentAnswer";
import { supabase } from "../supabase"; // assuming supabase is correctly set up

export default function GameLayout({ games, currentScore, setCurrentScore }) {
    const [currentGameIndex, setCurrentGameIndex] = useState(0);
    const [showWrongAnswer, setShowWrongAnswer] = useState(false);
    const [gameComponents, setGameComponents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [highlighted, setHighlighted] = useState([]);
    const [shuffledComponents, setShuffledComponents] = useState([]);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    const currentGame = games[currentGameIndex];

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const fetchGameComponents = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data, error } = await supabase
                    .from("Game_Components")
                    .select()
                    .eq("game_id", currentGame.game_number);

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
    }, [currentGame]);

    useEffect(() => {
        if (gameComponents.length > 0) {
            const shuffled = shuffle([...gameComponents]);
            setShuffledComponents(shuffled);
            setShuffledAnswers(shuffle(shuffled.map((component) => component.name)));
        }
    }, [gameComponents]);

    const handleComponentClick = (component) => {
        // Prevent further action if the component is already highlighted
        if (highlighted.some((pair) => pair.component.name === component.name)) {
            return;
        }
    
        setSelectedComponent(component); // Highlight the component immediately
    
        // Check if an answer has already been selected
        if (selectedAnswer) {
            if (component.name === selectedAnswer) {
                // Correct pair
                setHighlighted((prevHighlighted) => [
                    ...prevHighlighted,
                    { component, answer: selectedAnswer },
                ]);
                setCurrentScore((prevScore) => prevScore + 10); // Increment score
    
                // Clear selectedComponent and selectedAnswer
                setSelectedComponent(null);
                setSelectedAnswer(null);
            } else {
                // Wrong pair
                setShowWrongAnswer(true);
                setTimeout(() => setShowWrongAnswer(false), 2000); // Show "X" temporarily
                setCurrentScore((prevScore) => Math.max(prevScore - 5, 0)); // Deduct points but keep score >= 0
    
                // Remove highlight after wrong answer
                setTimeout(() => setSelectedComponent(null), 2000); // Remove highlight after 2 seconds
            }
    
            // Reset the selected answer
            setSelectedAnswer(null);
        }
    };
    
    
    
    
    const handleAnswerClick = (answer) => {
        // Prevent further action if the answer is already highlighted
        if (highlighted.some((pair) => pair.answer === answer)) {
            return;
        }
    
        setSelectedAnswer(answer); // Temporarily highlight the answer
    
        // Check if a component has already been selected
        if (selectedComponent) {
            if (selectedComponent.name === answer) {
                // Correct pair
                setHighlighted((prevHighlighted) => [
                    ...prevHighlighted,
                    { component: selectedComponent, answer },
                ]);
                setCurrentScore((prevScore) => prevScore + 10); // Increment score
    
                // Clear selectedComponent and selectedAnswer
                setSelectedComponent(null);
                setSelectedAnswer(null);
            } else {
                // Wrong pair
                setShowWrongAnswer(true);
                setTimeout(() => setShowWrongAnswer(false), 2000); // Show "X" temporarily
                setCurrentScore((prevScore) => Math.max(prevScore - 5, 0)); // Deduct points but keep score >= 0
    
                // Remove highlight after wrong answer
                setTimeout(() => setSelectedComponent(null), 2000); // Remove component highlight
                setTimeout(() => setSelectedAnswer(null), 2000); // Remove answer highlight
            }
    
            // Reset the selected component
            setSelectedComponent(null);
        }
    };
    
    
    
    
    

    const lastHighlighted = highlighted[highlighted.length - 1];

    return (
       <div >
        {showWrongAnswer && (
        <div
            className="absolute inset-0 flex items-center justify-center bg-transparent"
            style={{ zIndex: 1000 }}
        >
            <div className="text-red-600 text-[200px] font-bold animate-pulse">
                X
            </div>
        </div>
    )}
         <div className="flex flex-col h-screen gap-12 transition-opacity duration-3000 opacity-100">
         <div className="flex items-center mt-4 ml-8 gap-6 transition-opacity duration-3000 opacity-100">
                <img src={Mascot} className="w-[100px] h-[100px] relative top-[-20px]" />
                <div className="w-[70%] py-8 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] bg-[#2A1B0D]">
                    <p className="text-l">
                        {currentGame?.instruction || "Loading instruction..."}
                    </p>
                </div>
            </div>
            <div className="flex justify-evenly">
    {shuffledComponents.map((component, index) => (
        <div
            key={index}
            onClick={() => handleComponentClick(component)}
            className={`cursor-pointer ${
                selectedComponent?.name === component.name
                    ? "border-4 border-blue-500" // Temporary highlight
                    : highlighted.some((pair) => pair.component.name === component.name)
                    ? "border-4 border-yellow-500" // Permanent highlight for correct pair
                    : ""
            }`}
        >
            <GameComponent
                hint={component.hint}
                image_url={component.image_url}
            />
        </div>
    ))}
</div>

<div className="flex justify-evenly">
    {shuffledAnswers.map((answer, index) => (
        <div
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={`cursor-pointer ${
                selectedAnswer === answer
                    ? "border-4 border-blue-500" // Temporary highlight
                    : highlighted.some((pair) => pair.answer === answer)
                    ? "border-4 border-yellow-500" // Permanent highlight for correct pair
                    : ""
            }`}
        >
            <GameComponentAnswer answer={answer} />
        </div>
    ))}
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
       </div>
    );
}

