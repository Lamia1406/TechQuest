export default function LevelDescription({img, title, description, reverse}) {
    return  <div className={`w-full flex ${reverse && "flex-row-reverse"} gap-16 items-center`}>
              <img src={img} alt="Tech Basics Camp Level Illustration" className="w-[530px] h-[530px] rounded-[12px]" style={{border: "10px solid rgba(0, 0, 0, 0.20)"}} />
              <div className="flex flex-col items-start gap-8">
                <h2 className="text-[#32C492] font-[Rajdhani] text-4xl font-bold">
                {title}
                </h2>
                <p className="text-[#777] text-lg font-medium">
                    {description}
                </p>
              </div>
            </div>
}