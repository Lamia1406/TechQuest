import { Button, Tooltip } from "flowbite-react";

export default function GameComponent({hint, image_url}) {
  const theme = {
    "target": "w-fit",
    "animation": "transition-opacity",
    "arrow": {
      "base": "absolute z-10 h-2 w-2 rotate-45",
      "style": {
        "dark": "bg-gray-900 dark:bg-gray-700",
        "light": "bg-white",
        "auto": "bg-white dark:bg-gray-700"
      },
      "placement": "-4px"
    },
    "base": "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
    "hidden": "invisible opacity-0",
    "style": {
      "dark": "bg-gray-900 text-white dark:bg-gray-700",
      "light": "border border-gray-200 bg-white text-gray-900",
      "auto": "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
    },
    "content": "relative z-20"
  }
  return (
    <Tooltip  content={hint} theme={theme} className="shadow-lg rounded-8 bg-white w-[400px] z-[999] py-4 px-6 text-l font-bold  text-[#5CABC1]">
      <img src={image_url} className="w-[160px] h-auto" alt="" />
    </Tooltip>
  );
}
