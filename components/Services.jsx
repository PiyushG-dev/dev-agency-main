import React from "react";
import Image from "next/image";
import { bulletin, arrow1, arrow2 } from "@/utils";
import { processes, services } from "@/constants";
import Card from "./Card";

const Services = () => {
  return (
    <section className="w-full">
      <div className="screen-max-width py-32">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-1">
            <Image className="w-4" src={bulletin} alt="bulletin" />
            <p className="text-primary">Process</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-semibold">
              You request, we make it happen
            </h1>
            <p className="text-xl font-light">
              Our process is as simple as possible.
            </p>
          </div>
        </div>

        <div className="flex gap-8 py-32 relative">
          <Image
            src={arrow1}
            alt="arrow1"
            className=" w-40 absolute top-0 left-[28%]"
          />
          {processes.map((process, i) => {
            return (
              <Card
                key={i}
                title={process.title}
                desc={process.desc}
                gif={process.gif}
              />
            );
          })}
          <Image
            src={arrow2}
            alt="arrow2"
            className="w-40 absolute bottom-[-2rem] right-[28%]"
          />
        </div>

        <div className="flex flex-col items-center text-center gap-6 pt-10">
          <div className="flex items-center gap-1">
            <Image className="w-4" src={bulletin} alt="bulletin" />
            <p className="text-primary">Services</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-semibold">
              Apps, websites & branding
            </h1>
            <p className="text-xl font-light">
              Get everything you need in one place
            </p>
          </div>
        </div>
        <div className="flex gap-8 py-32 relative">
          {services.map((service, i) => {
            return (
              <Card
                key={i}
                title={service.title}
                desc={service.desc}
                gif={service.gif}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
