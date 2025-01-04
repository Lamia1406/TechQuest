import Lightning from "../assets/icons/lightning"
export default function ScoreBar(){
    return <div className="score-bar w-[140px] justify-center relative flex text-center  h-[50px] px-3 rounded-[4px] bg-[#222525] items-center"
    style={{
        boxShadow: "0px 8px 4px 0px rgba(34, 37, 37, 0.75)"
    }}>
        <Lightning className={"absolute -left-4 -top-2 w-auto h-[66px]"}/>
        <p className="text-white text-2xl font-[Rajdhani] font-bold">00</p>
       
    </div>
}