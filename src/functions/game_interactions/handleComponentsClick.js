import handleCompletion from "./handle_game_completion";

const handleComponentClick = (
    component,
    highlighted,
    setSelectedComponent,
    selectedAnswer,
    setHighlighted,
    setSelectedAnswer,
    gameCompleted,
    setGameCompleted,
    currentScore,
    game,
    currentLevel,
    userId,
    navigate,
    setCurrentScore,
    gameComponents
) => {
    if (highlighted.some((pair) => pair.component.name === component.name)) return;

    setSelectedComponent(component);

    if (selectedAnswer) {
        if (component.name === selectedAnswer) {
            setHighlighted((prev) => [...prev, { component, answer: selectedAnswer }]);

            // Ensure score update is reflected before calling handleCompletion
            setCurrentScore((prevScore) => {
                const newScore = prevScore + 10;

                // Trigger handleCompletion only if all components are matched
                if (highlighted.length + 1 === gameComponents.length) {
                    console.log("All components matched! Proceeding to the next game...");
                    handleCompletion(gameCompleted, setGameCompleted, newScore, game, currentLevel, userId, navigate);
                }

                return newScore;
            });

            setSelectedComponent(null);
            setSelectedAnswer(null);
        } else {
            setCurrentScore((prevScore) => Math.max(prevScore - 5, 0));
            setSelectedComponent(null);
            setSelectedAnswer(null);
        }
    }
};

export default handleComponentClick;
