import { Button, Card, TextInput } from "flowbite-react";
import { supabase } from "../supabase";
import { useState } from "react";
import SignupBG from "../assets/images/signup_bg.png";
import { Link } from "react-router-dom"; // Assuming you're using React Router

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State to manage error messages
    const [loading, setLoading] = useState(false); // Loading state

    const signUp = async (event) => {
        event.preventDefault(); // Prevents form from reloading the page

        // Input validation
        if (!email || !password) {
            setErrorMessage("Please fill in all fields");
            return;
        }
        setLoading(true); // Show loading spinner

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error("Error signing up:", error.message);
                setErrorMessage("Error signing up: " + error.message); // Update error state
            } else {
                console.log("User signed up successfully:", data);
                setErrorMessage(""); // Clear any previous errors
                alert("Sign-up successful!");
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            setErrorMessage("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <main
            className="h-screen flex justify-center items-center"
            style={{
                background: `url(${SignupBG}) lightgray 50% / cover no-repeat`,
            }}
        >
           
            <Card
                className="w-full h-fit max-w-md bg-white rounded-[30px] py-12 px-12"
                style={{ boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.75)" }}
            >
                <header className="flex flex-col gap-8">
                    <h1 className="text-black font-[Rajdhani] text-4xl font-bold leading-none tracking-wider uppercase text-center">
                        Sign Up
                    </h1>
                    <div>
                        <h4 className="text-[#333] text-lg font-semibold leading-normal">Sign Up and Dive In!</h4>
                        <p className="text-[#666] text-sm font-normal leading-normal">Unlock New Adventures</p>
                    </div>
                </header>
                <form className="flex flex-col gap-8 justify-between" onSubmit={signUp}>
                    <div className="flex flex-col gap-5">
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="Email"
                            required
                            sizing="md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email Address"
                        />
                        <TextInput
                            id="password1"
                            type="password"
                            placeholder="Password"
                            required
                            sizing="md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label="Password"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Button
                            type="submit"
                            className="w-full py-2 px-5 rounded-[12px] bg-[#88E0E4] border  uppercase text-[#042934]"
                            style={{ boxShadow: "0px 2px 0px 0px #E5E5E5" }}
                            size="sm"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </Button>
                        {errorMessage && (
                            <p className="text-red-500 text-sm text-center">{errorMessage}</p> // Display error messages
                        )}
                    </div>
                </form>
                <p className="text-[#666] text-sm text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#042934] font-bold">
                        Log In
                    </Link>
                </p>
            </Card>
        </main>
    );
}
