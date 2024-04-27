"use client";
import React from "react";
import { companies } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Partners = () => {
  return (
    <section className="w-full">
      <div className="screen-max-width py-24 flex flex-col items-center gap-10">
        <h2 className="text-2xl">Top companies trust us with their design</h2>
        <div className="flex gap-10">
          {companies.map((comapny, i) => {
            return (
              <div key={i} className="flex items-center gap-2">
                <FontAwesomeIcon icon={comapny.svg} className="text-2xl" />
                <h3 className="font-medium text-2xl text-muted-foreground">
                  {comapny.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
