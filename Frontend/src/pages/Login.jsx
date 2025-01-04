import { Button, Card, TextInput } from "flowbite-react";
import { supabase } from "../supabase";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async (event) => {
        event.preventDefault(); // Prevents form from reloading the page
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
                alert("Sign-up successful!");
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <main
            className="h-screen flex justify-center items-center"
            style={{ background: "linear-gradient(180deg, #13211E 16.66%, #101A18 71.29%), #FFF" }}
        >
            <Card
                className="w-full h-fit max-w-md bg-white rounded-[30px] py-12 px-12"
                style={{ boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.75)" }}
            >
                <header className="flex flex-col gap-8">
                    <h1 className="text-black font-[Baloo] text-4xl font-semibold leading-none tracking-wider uppercase text-center">
                       Login
                    </h1>
                    <div>
                        <h4 className="text-[#333] text-lg font-semibold leading-normal">Sign Up and Dive In!</h4>
                        <p className="text-[#666] text-sm font-normal leading-normal">Unlock New Adventures</p>
                    </div>
                </header>
                <form className="flex flex-col gap-8 justify-between" onSubmit={logIn}>
                    <div className="flex flex-col gap-5">
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="Email"
                            required
                            sizing="md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextInput
                            id="password1"
                            type="password"
                            placeholder="Password"
                            required
                            sizing="md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full py-2 px-5 rounded-[12px] bg-[#FFD85A] border border-[#E5E5E5] uppercase text-[#594500]"
                        style={{ boxShadow: "0px 2px 0px 0px #E5E5E5" }}
                        size="sm"
                    >
                        Create Account
                    </Button>
                </form>
                <p className="text-[#666] text-sm text-center">
                    Already have an account? <span className="text-[#594500] font-bold">Log In</span>
                </p>
            </Card>
        </main>
    );
}
