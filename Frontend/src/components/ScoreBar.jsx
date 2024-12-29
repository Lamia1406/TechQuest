import MeatThigh from "../assets/icons/meat-thigh";

export default function ScoreBar(){
    return <div className="score-bar flex gap-2 items-center">
        <p className="text-[#EF314C] text-2xl">00</p>
        <MeatThigh/>
    </div>
}