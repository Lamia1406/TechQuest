import { Button, Card, TextInput } from "flowbite-react";
import { supabase } from "../supabase";
import { useState } from "react";
import LoginBG from "../assets/images/login_bg.png";
import { Link, useNavigate } from "react-router-dom"; 
import logIn from "../functions/login";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  

    return (
        <main
            className="h-screen flex justify-center items-center px-8"
             style={{
                            background: `url(${LoginBG}) lightgray 50% / cover no-repeat`,
                        }}
        >
            <Card
                className="w-full h-fit max-w-md  bg-white rounded-[30px] lg:py-12 py-6 px-6 lg:px-12"
                style={{ boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.75)" }}
            >
                <header className="flex flex-col gap-8">
                    <h1 className="text-black font-[Rajdhani] text-4xl font-bold leading-none tracking-wider uppercase text-center">
                       Login
                    </h1>
                    <div>
                        <h4 className="text-[#333] text-lg font-semibold leading-normal">Welcome back!</h4>
                        <p className="text-[#666] text-sm font-normal leading-normal">Log in to Unleash Adventure!</p>
                    </div>
                </header>
                <form className="flex flex-col gap-8 justify-between" onSubmit={(event)=> logIn(event, email, password, navigate)}>
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
                        className="w-full py-2 px-5 rounded-[12px] bg-[#AFC7D5] border  uppercase text-[#303C4C]"
                        style={{ boxShadow: "0px 2px 0px 0px #E5E5E5" }}
                        size="sm"
                    >
                        Login
                    </Button>
                </form>
                <p className="text-[#666] text-sm text-center">
                Don’t have an account? <Link to={"/signup"} className="text-[#303C4C] font-bold">Signup</Link>
                </p>
            </Card>
        </main>
    );
}
