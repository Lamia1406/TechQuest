import { supabase } from "../supabase";
const fetchUsers = async (setLoading, setError, setLeaders) => {
        setLoading(true);
        setError(null);
        try {
            const { data, error } = await supabase
                .from("User_Game_Progress")
                .select("score, user_id, username")
                .order("score", { ascending: false })
                .limit(9);

            if (error) throw error;

            console.log(data);
            setLeaders(data);
        } catch (err) {
            setError("Failed to load data. Please try again later.");
            console.error("Error:", err.message);
        } finally {
            setLoading(false);
        }
    };
export default fetchUsers