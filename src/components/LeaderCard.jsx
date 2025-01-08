import Shaman from "../assets/images/mascots/shaman.png"
import Chief from "../assets/images/mascots/chief.png"
import Scout from "../assets/images/mascots/scout.png"
import Warrior from "../assets/images/mascots/warrior.png"
export default function LeaderCard({rank, you, username, score}) {
    return <div className="flex flex-col items-center gap-2 w-[120px]">
        <div className={`relative w-[84px] h-[84px] rounded-[50%] ${rank === "Chief" ? "border-[#CC4D20]" : rank === "Shaman" ? "border-[#4682B4]" : rank === "Warrior" ? "border-[#556B2F]": "border-[#795C41]"} ${you && "border-[#051110]"}`}
        style={{borderWidth: 3, 
            background: `url(${rank === "Chief" ? Chief : rank === "Shaman" ? Shaman : rank === "Warrior" ? Warrior  : Scout}) lightgray -0.73px 0px / 101.739% 100% no-repeat`
        }}>
            <p className={`px-2 absolute -bottom-1 left-[10px]  w-[60px] rounded-[4px] font-medium text-white font-[Rajdhani] text-center text-sm ${rank === "Chief" ? "bg-[#CC4D20]" : rank === "Shaman" ? "bg-[#4682B4]" : rank === "Warrior" ? "bg-[#556B2F]": "bg-[#795C41]"} ${you && "bg-[#051110]"}`}>
                {you ? "You" : rank}
            </p>
</div>

<div className="flex flex-col  items-center  w-full">
    <p className="text-white text-center font-sm font-bold w-full break-words ">{username}</p>
    <p className="text-white text-center font-sm ">{score}</p>
</div>
    </div>
}