import React from "react";
import Image from "next/image";

const Card = ({ img, title, desc, cardType }) => {
  const background =
    cardType === "one" ? "bg-secondary-foreground" : "bg-muted";
  const imgWidth = cardType === "one" ? "1/4" : "full";
  const color =
    cardType === "one" ? "text-secondary" : "text-secondary-foreground";

  return (
    <div
      className={` ${background} flex flex-col gap-10 px-10 py-10 rounded-3xl`}
    >
      <div className="w-full">
        <Image className={`w-${imgWidth}`} src={img} alt="gif" unoptimized />
      </div>
      <div className={`${color} flex flex-col gap-4`}>
        <h2 className="text-3xl">{title}</h2>
        <p className="font-extralight">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
