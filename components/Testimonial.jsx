import React from "react";
import Image from "next/image";
import review from "@/public/assets/review1.webp";

const Testimonial = () => {
  return (
    <div className="w-full bg-secondary border-testimonial rounded-[5rem] py-16 px-28 flex flex-col items-center gap-10">
      <h2 className="text-center text-4xl text-muted-foreground alt-font">
        They took my billion-dollar baby idea, slapped their design magic on it,
        and boom –{" "}
        <span className="text-primary">
          branding so good it makes my other ventures look like lemonade stands.
        </span>{" "}
        CoDesign isn't just a design agency, they're your ticket to the big
        leagues.
      </h2>
      <div className="flex items-center gap-5">
        <Image
          className="rounded-full w-24 h-24 object-cover"
          src={review}
          alt="review"
        />
        <div>
          <h3 className="text-2xl font-medium">Russ Hanneman</h3>
          <p className="text-xl font-light">Founder of Tres Commas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
