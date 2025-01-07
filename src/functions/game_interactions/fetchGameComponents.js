import { supabase } from "../../supabase";
const fetchGameComponents = async (setLoading, setError, game, setGameComponents) => {
            setLoading(true);
            setError(null);
            try {
                console.log(game)
                const { data, error } = await supabase
                    .from("Game_Components")
                    .select()
                    .eq("game_id", game.game_number);

                if (error) throw error;
                setGameComponents(data);
            } catch (err) {
                setError("Failed to load game components. Please try again later.");
                console.error("Error:", err.message);
               
            } finally {
                setLoading(false);
            }
        };
export default fetchGameComponents