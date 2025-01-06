import { supabase } from "../supabase"; 
const fetchUserProgress = async (setLoading, setError, setCurrentLevel, setCurrentScore, userId) => {
    setLoading(true);
    setError(null);
    try {
        // Fetch user progress including level_id and score
        const { data, error } = await supabase
            .from("User_Game_Progress")
            .select()
            .eq("user_id", userId)
            .single();

        if (error) throw error;

        const userScore = data?.score || 0;
        const userLevel = data?.level_id || 1;
        setCurrentScore(userScore);
        setCurrentLevel(userLevel);  

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
export default fetchUserProgress