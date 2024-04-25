import React from "react";
import Image from "next/image";
import { workShowcase } from "@/utils";

const Slider = () => {
  return (
    <div className="flex w-[180%] translate-x-[-20%] gap-4">
      {workShowcase.map((work, i) => {
        return (
          <div className="w-1/4">
            <Image
              key={i}
              src={work}
              alt="works"
              className="w-full rounded-xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
