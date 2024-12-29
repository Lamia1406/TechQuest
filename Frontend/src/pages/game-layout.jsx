import Mascot from "../assets/mascot.png"
import GameComponent from "../components/GameComponent"
import GameComponentAnswer from "../components/GameComponentAnswer"
export default function GameLayout() {
    return <div className="flex flex-col h-screen gap-12 transition-opacity duration-3000 opacity-100">
      <div
                        className={`flex  items-center mt-4 ml-8  gap-6 transition-opacity duration-3000 opacity-100 `}
                    >
                        <img
                            src={Mascot}
                            className="w-[100px] h-[100px] relative top-[-20px]"
                        />
                        <div className="w-[70%] py-8 px-4 text-white flex justify-center items-start gap-2 rounded-[12px] bg-[#2A1B0D]">
                            <p className="text-l">
                            Click on the components you recognize and match them with their names. Each correct answer will earn you valuable coins! Hover over any component to get a fun hint and description.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[100px] ">
                    <div className="flex  justify-evenly ">
                        <GameComponent/>
                        <GameComponent/>
                        <GameComponent/>
                        <GameComponent/>
                    </div>
                    <div className="flex justify-evenly">
                        <GameComponentAnswer/>
                        <GameComponentAnswer/>
                        <GameComponentAnswer/>
                        <GameComponentAnswer/>
                    </div>
                    </div>
                    <p className="text-xl px-8">
                    <strong>The Mouse:</strong> A pointing device used to interact with a computer interface. It can be wired or wireless and includes buttons and a scroll wheel.
                    Use: Helps users point, click, and interact with on-screen elements.
                    </p>
</div>
}