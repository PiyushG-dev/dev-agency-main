import React from "react";
import Image from "next/image";
import { bulletin, arrow1, arrow2 } from "@/utils";
import { processes, services, labelOne, labelTwo } from "@/constants";
import Card from "./Card";
import Label from "./Label";
import { Button } from "./ui/button";

const Services = () => {
  return (
    <section className="w-full">
      <div className="screen-max-width py-32">
        <Label
          type={labelOne.type}
          label={labelOne.label}
          desc={labelOne.desc}
        />
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
                img={process.gif}
                cardType="one"
              />
            );
          })}
          <Image
            src={arrow2}
            alt="arrow2"
            className="w-40 absolute bottom-[-2rem] right-[28%]"
          />
        </div>

        <Label
          type={labelTwo.type}
          label={labelTwo.label}
          desc={labelTwo.desc}
        />
        <div className="flex gap-8 pt-32 pb-20 relative">
          {services.map((service, i) => {
            return (
              <Card
                key={i}
                title={service.title}
                desc={service.desc}
                img={service.img}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <Button size="lg">Book a 15-min call</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
