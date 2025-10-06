import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-4">
      <div className="text-[9.7vw] uppercase leading-[8vw] flex justify-center ">The spark for</div>
      <div className="text-[9.7vw]  items-start uppercase leading-[8vw] flex justify-center ">
        all
        <div className="h-[6.5vw] w-[16vw] rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.7vw] uppercase leading-[8vw] flex justify-center">creative</div>
    </div>
  );
};

export default HomeHeroText;
