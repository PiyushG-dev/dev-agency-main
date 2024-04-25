"use client";
import React, { useEffect } from "react";
import { companies } from "@/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

const Partners = () => {
  const theme = useTheme();
  return (
    <section className="w-full">
      <div className="screen-max-width py-24 flex flex-col items-center gap-10">
        <h2 className="text-2xl">Top companies trust us with their design</h2>
        <div className="flex gap-10">
          {companies.map((comapny, i) => {
            return theme.theme === "light" ? (
              <Image
                key={i}
                src={comapny.svg}
                alt="company"
                className="w-28 object-contain"
              />
            ) : (
              <h3
                key={i}
                className="font-semibold text-3xl text-muted-foreground"
              >
                {comapny.name}
              </h3>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
