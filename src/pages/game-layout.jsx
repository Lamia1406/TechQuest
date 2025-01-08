import { useState, useEffect } from "react";
import Mascot from "../assets/images/mascot.png";
import GameComponent from "../components/GameComponent";
import GameComponentAnswer from "../components/GameComponentAnswer";
import { useNavigate } from "react-router-dom";
import fetchGameComponents from "../functions/game_interactions/fetchGameComponents";
import handleAnswerClick from "../functions/game_interactions/handleAnswerClick";
import handleComponentClick from "../functions/game_interactions/handleComponentsClick";

export default function GameLayout({ game, currentScore, setCurrentScore, currentLevel }) {
    const navigate = useNavigate()
    const [gameComponents, setGameComponents] = useState([]);
    const [shuffledComponents, setShuffledComponents] = useState([]);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [highlighted, setHighlighted] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [gameCompleted, setGameCompleted] = useState(false); // Define the gameCompleted state

    const userId = JSON.parse(localStorage.getItem("sb-mijrziaxkcglykbaisyp-auth-token")).user.id;
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    useEffect(() => {
        fetchGameComponents(setLoading, setError, game, setGameComponents)
    }, [game]);
    useEffect(() => {
        if (gameComponents.length > 0) {
            const shuffled = shuffle([...gameComponents]);
            setShuffledComponents(shuffled);
            setShuffledAnswers(shuffle(shuffled.map((component) => component.name)));
        }
    }, [gameComponents]); 

    const lastHighlighted = highlighted[highlighted.length - 1];
    return (
        <div className=" flex flex-col h-screen gap-12   transition-opacity duration-3000 opacity-100">
            <div className="flex items-center mt-12 lg:mt-4 lg:ml-8 gap-6">
                <img src={Mascot} className="hidden lg:block w-[100px] h-[100px]" alt="Mascot" />
                <div className="lg:w-[50%] py-4 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] bg-[#4A3116]">
                    <p className="text-l">{game?.instruction || "Loading instruction..."}</p>
                </div>
            </div>

            <div className="lg:pr-64  lg:w-full w-full justify-center lg:gap-16 gap-8   flex ">
            {shuffledComponents.map((component, index) => (
                    <div
                        key={index}
                        onClick={() => handleComponentClick(component, highlighted, setSelectedComponent, selectedAnswer, setHighlighted, setSelectedAnswer, gameCompleted, setGameCompleted, currentScore, game, currentLevel, userId, navigate, setCurrentScore, gameComponents)}
                        className={`cursor-pointer ${
                            selectedComponent?.name === component.name
                                ? "border-4 border-blue-500"
                                : highlighted.some((pair) => pair.component.name === component.name)
                                ? "border-4 border-yellow-500"
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

            <div className="lg:pr-64  lg:w-full justify-center lg:gap-2 gap-2 justify-items-center  grid lg:grid-cols-4 grid-cols-2 ">
                {shuffledAnswers.map((answer, index) => (
                    <div
                        key={index}
                        onClick={() => handleAnswerClick(answer, highlighted, setSelectedAnswer, selectedComponent, setHighlighted, setCurrentScore, setSelectedComponent, gameComponents, gameCompleted, setGameCompleted,currentScore, game, currentLevel,userId, navigate)}
                        className={`cursor-pointer ${
                            selectedAnswer === answer
                                ? "border-4 border-blue-500"
                                : highlighted.some((pair) => pair.answer === answer)
                                ? "border-4 border-yellow-500"
                                : ""
                        } `}
                    >
                        <GameComponentAnswer answer={answer} />
                    </div>
                ))}
            </div>

           <p className="text-xl lg:pr-64 lg:pl-8    pb-8">
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
