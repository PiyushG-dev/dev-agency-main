import React from "react";
import Label from "./Label";
import { labelThree } from "@/constants";

const Features = () => {
  return (
    <section className="w-full">
      <div className="screen-max-width">
        <Label
          type={labelThree.type}
          label={labelThree.label}
          desc={labelThree.desc}
        />
      </div>
    </section>
  );
};

export default Features;
