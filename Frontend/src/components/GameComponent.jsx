import { Button, Tooltip } from "flowbite-react";

export default function GameComponent() {
  return (
    <Tooltip  content="This handy device drives your data wherever you need, flashing into action when plugged in!"  className="shadow-lg rounded-8 bg-white w-[400px] z-[999] py-4 px-6 text-l font-bold  text-[#5CABC1]">
      <img src="https://res.cloudinary.com/dm6lsilba/image/upload/v1735481095/flash-drive_p1tza0.png" className="w-[160px] h-auto" alt="" />
    </Tooltip>
  );
}
