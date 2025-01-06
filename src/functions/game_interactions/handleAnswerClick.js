import handleCompletion from "./handle_game_completion";
const handleAnswerClick = (answer, highlighted, setSelectedAnswer, selectedComponent, setHighlighted, setCurrentScore, setSelectedComponent, gameComponents, gameCompleted, setGameCompleted,currentScore, game, currentLevel,userId, navigate) => {
    if (highlighted.some((pair) => pair.answer === answer)) return;

    setSelectedAnswer(answer);

    if (selectedComponent) {
        if (selectedComponent.name === answer) {
            setHighlighted((prev) => [...prev, { component: selectedComponent, answer }]);
            setCurrentScore((prevScore) => prevScore + 10);

            setSelectedComponent(null);
            setSelectedAnswer(null);

            if (highlighted.length + 1 === gameComponents.length) {
                console.log("All components matched! Proceeding to the next game...");
                handleCompletion(gameCompleted, setGameCompleted,currentScore, game, currentLevel,userId, navigate)
            }
        } else {
            setCurrentScore((prevScore) => Math.max(prevScore - 5, 0));
            setSelectedComponent(null);
            setSelectedAnswer(null);
        }
    }
};
export default handleAnswerClick