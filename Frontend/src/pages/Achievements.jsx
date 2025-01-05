import { ContentLayout } from "./content-layout";
import CouncilBG from "../assets/images/council_bg.png";
import LeaderCard from "../components/LeaderCard";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function Achievements() {
    const [leaders, setLeaders] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data, error } = await supabase
                .from("User_Game_Progress")
                .select("score")
                .order("score", { ascending: false });

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

    useEffect(() => {
        fetchUsers();
    }, []);

    // Function to determine the rank title based on position
    const getRankTitle = (index) => {
        switch (index) {
            case 0:
                return "Chief";
            case 1:
                return "Shaman";
            case 2:
                return "Warrior";
            default:
                return "Scout";
        }
    };

    return (
        <ContentLayout>
            <div 
                className="h-screen flex justify-center" 
                style={{background: `url(${CouncilBG}) lightgray 50% / cover no-repeat `}}>
                <div className="w-[75%] px-4 py- flex flex-col gap-3">
                    <div className="w-full py-8 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] text-center bg-[#051110]">
                        <p className="text-l">
                            Prove your worth and earn your place among the tribe’s elite – every point brings you closer to greatness!
                        </p>
                    </div>
                    <div>
                        {leaders && leaders.map((leader, index) => {
                            const rankTitle = getRankTitle(index);  // Get the rank based on index
                            return (
                                <LeaderCard
                                    key={leader.user_id}  // Make sure to use a unique key like user_id
                                    rank={rankTitle} 
                                    score={leader.score || 0} 
                                    username={leader.username || "username"}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
}
