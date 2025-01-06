 import handleCompletion from "./handle_game_completion";
 const handleComponentClick = (component, highlighted, setSelectedComponent, selectedAnswer, setHighlighted, setSelectedAnswer, gameCompleted, setGameCompleted, currentScore, game, currentLevel, userId, navigate) => {
        if (highlighted.some((pair) => pair.component.name === component.name)) return;
    
        setSelectedComponent(component);
    
        if (selectedAnswer) {
            if (component.name === selectedAnswer) {
                // Update score for correct answer
                setHighlighted((prev) => [...prev, { component, answer: selectedAnswer }]);
                setCurrentScore((prevScore) => prevScore + 10);
    
                // Reset selected component and answer
                setSelectedComponent(null);
                setSelectedAnswer(null);
    
                // Check if all components are matched
                if (highlighted.length + 1 === gameComponents.length) {
                    console.log("All components matched! Proceeding to the next game...");
                    handleCompletion(gameCompleted, setGameCompleted, currentScore, game, currentLevel, userId, navigate)
                }
            } else {
                // Deduct score for incorrect answer
                setCurrentScore((prevScore) => Math.max(prevScore - 5, 0));
                setSelectedComponent(null);
                setSelectedAnswer(null);
            }
        }
    };
export default handleComponentClick