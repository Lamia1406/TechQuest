import ContentLayout from "./content-layout";
import CouncilBG from "../assets/images/council_bg.webp";
import LeaderCard from "../components/LeaderCard";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import fetchUsers from "../functions/fetchUser";

export default function Achievements() {
    const [leaders, setLeaders] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState(null)

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUserId(session?.user.id || null)
    , [userId]}

    fetchSession()

    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUserId(session?.user.id || null)
    })

    
  }, [])

    useEffect(() => {
        fetchUsers(setLoading, setError, setLeaders);
    }, []);

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

    const topLeaders = leaders.slice(0, 3);  
    const scouts = leaders.slice(3);  // Starting from the 4th leader

    return (
        <ContentLayout background={`linear-gradient(0deg, rgba(69, 79, 77, 0.80) 0%, rgba(69, 79, 77, 0.80) 100%), url(${CouncilBG}) lightgray 50% / cover no-repeat`}>
            <div 
                className="min-h-screen relative flex justify-center py-3" 
                >

                <div className="lg:w-[75%] w-full  lg:px-4 lg:pr-64   flex flex-col gap-3">
                    <div className="w-full   py-4 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] text-center bg-[#051110]">
                        <p className="text-l">
                            Prove your worth and earn your place among the tribe’s elite – every point brings you closer to greatness!
                        </p>
                    </div>

                    <div className="grid grid-cols-4 lg:px-16 justify-items-center items-center">
                        {topLeaders && topLeaders.map((leader, index) => {
                            const rankTitle = getRankTitle(index);  // Get the rank based on index
                            return (
                                <div
                                    key={leader.user_id}
                                    className={` ${
                                        index === 0
                                            ? "col-span-4" 
                                            : "col-span-2"  // Shaman and Warrior take individual columns
                                    }`}
                                >
                                    <LeaderCard
                                        rank={rankTitle} 
                                        score={leader.score || 0} 
                                        username={leader.username || "username"}
                                        you = {leader.user_id === userId}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 justify-items-center items-center">
                        {scouts && scouts.map((leader, index) => {
                            const rankTitle = getRankTitle(index + 3);  
                            return (
                                <div
                                    key={leader.user_id}
                                    className="col-span-1"
                                >
                                    <LeaderCard
                                        rank={rankTitle} 
                                        score={leader.score || 0} 
                                        username={leader.username || "username"}
                                        you = {leader.user_id === userId}
                                    />
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </ContentLayout>
    );
}
