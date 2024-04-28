import React from "react";
import Image from "next/image";
import { bulletin } from "@/utils";

const Label = ({ type, label, desc, color }) => {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div className="flex items-center gap-1">
        <Image className="w-4" src={bulletin} alt="bulletin" />
        <p className="text-primary">{type}</p>
      </div>
      <div className={`flex flex-col gap-5 ${color}`}>
        <h1 className="text-5xl font-semibold">{label}</h1>
        <p className="text-xl font-light">{desc}</p>
      </div>
    </div>
  );
};

export default Label;
