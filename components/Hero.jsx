import React from "react";
import { Button } from "./ui/button";
import Slider from "./Slider";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="screen-max-width h-[70vh] flex flex-col items-center justify-center gap-10">
        <div className="text-center w-3/4 flex flex-col gap-5">
          <h1 className="text-6xl font-semibold">
            Unlimited designs to fuel your brand growth
          </h1>
          <p className="text-xl font-light w-4/5 m-auto">
            Design your products with world-class designers without breaking the
            bank. One subscription fee, unlimited design requests.
          </p>
        </div>
        <div className="flex gap-3">
          <Button>Book a call</Button>
          <Button variant="outline">See Plans</Button>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default Hero;
