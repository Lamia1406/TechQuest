import { supabase } from "../supabase";
const fetchLevels = async (setLoading, setError, setLevels) => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase.from("Levels").select();
        if (error) throw error;
        setLevels(data);
      } catch (err) {
        setError("Failed to load levels. Please try again later.");
        console.error("Error fetching levels:", err.message);
      } finally {
        setLoading(false);
      }
    };
export default fetchLevels