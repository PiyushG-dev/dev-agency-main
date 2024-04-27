import React from "react";
import Image from "next/image";

const Card = ({ gif, title, desc }) => {
  return (
    <div className="flex flex-col gap-10 bg-secondary-foreground px-10 py-10 rounded-3xl">
      <div className="w-full">
        <Image className="w-1/4" src={gif} alt="gif" unoptimized />
      </div>
      <div className="text-secondary flex flex-col gap-4">
        <h2 className="text-3xl">{title}</h2>
        <p className="font-extralight">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
