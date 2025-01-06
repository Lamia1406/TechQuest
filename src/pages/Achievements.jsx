import  ContentLayout  from "./content-layout";
import CouncilBG from "../assets/images/council_bg.webp";
import LeaderCard from "../components/LeaderCard";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import fetchUsers from "../functions/fetchUser";

export default function Achievements() {
    const [leaders, setLeaders] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   

    useEffect(() => {
        fetchUsers(setLoading, setError, setLeaders)
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
                className="h-screen flex justify-center py-3" 
                style={{background: `linear-gradient(0deg, rgba(69, 79, 77, 0.80) 0%, rgba(69, 79, 77, 0.80) 100%), url(${CouncilBG}) lightgray 50% / cover no-repeat`}}>
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
