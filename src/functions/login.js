import { supabase } from "../supabase";
const logIn = async (event, email, password, navigate) => {
        event.preventDefault();
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                console.error("Error Loging in:", error.message);
                alert("Error signing up: " + error.message);
            } else {
                console.log("User signed up successfully:", data);
                navigate("/")
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        }
    };
export default logIn