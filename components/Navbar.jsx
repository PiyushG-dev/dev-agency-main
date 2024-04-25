import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="screen-max-width flex items-center justify-between py-5">
        <h2 className="font-bold text-2xl">
          <span className="text-primary">Co</span>Design
        </h2>
        <div className="flex gap-3">
          <ul className="flex items-center gap-3">
            <li>Services</li>
            <li>Features</li>
            <li>Projects</li>
            <li>Pricing</li>
            <li>Reviews</li>
          </ul>
          <Button>signup</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
