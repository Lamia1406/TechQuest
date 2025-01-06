export default function LevelDescription({img, title, description, reverse}) {
    return  <div className={`w-full flex lg:flex-row ${reverse && "lg:flex-row-reverse"} lg:gap-16 flex-col gap-8 text-center lg:text-left  items-center`}>
              <img src={img} alt="Tech Basics Camp Level Illustration" className="lg:w-[530px] lg:h-[530px] rounded-[12px]" style={{border: "10px solid rgba(0, 0, 0, 0.20)"}} />
              <div className="flex flex-col lg:items-start  lg:gap-8 gap-4">
                <h2 className="text-[#32C492] font-[Rajdhani] text-4xl font-bold">
                {title}
                </h2>
                <p className="text-[#777] text-lg font-medium">
                    {description}
                </p>
              </div>
            </div>
}