import React from "react";
import Label from "./Label";
import { labelFive } from "@/constants";
import { TabsDemo } from "./PricingTab";

const Pricing = () => {
  return (
    <section className="w-full">
      <div className="screen-max-width pb-32">
        <div className="bg-secondary-foreground rounded-[4rem] py-32 flex flex-col gap-20">
          <Label
            type={labelFive.type}
            label={labelFive.label}
            desc={labelFive.desc}
            color="text-background"
          />
          <div className="flex justify-center">
            <TabsDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
