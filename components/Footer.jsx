import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  const footerLinks = {
    Template: ["Features", "Tutorials", "Showcase", "Purchase"],
    Connect: ["Instagram", "Youtube", "Twitter", "Linkedin"],
    Links: ["Home", "Services", "Features", "Pricing"],
  };

  return (
    <section className="w-full">
      <div className="screen-max-width flex justify-between pb-32 relative">
        <div className="absolute bottom-4 flex justify-between items-end w-full">
          <p className="font-light text-sm">All rights reserved</p>
          <h1 className="font-bold text-2xl">
            <span className="text-primary">Co</span>Design &copy;
          </h1>
        </div>
        <div className="w-1/4 flex flex-col gap-4 items-start">
          <h2 className="text-xl font-semibold">
            Unlimited designs to fuel your company's growth
          </h2>
          <p className="font-light text-sm">
            Book a fee consultation call today to learn more about our services.
          </p>
          <Button size="lg">Book a call</Button>
        </div>
        <div className="flex gap-14">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Template</p>
            <ul className="flex flex-col gap-2">
              {footerLinks.Template.map((item, i) => {
                return (
                  <li className="text-lg font-light" key={i}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Connect</p>
            <ul className="flex flex-col gap-2">
              {footerLinks.Connect.map((item, i) => {
                return (
                  <li className="text-lg font-light" key={i}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Links</p>
            <ul className="flex flex-col gap-2">
              {footerLinks.Links.map((item, i) => {
                return (
                  <li className="text-lg font-light" key={i}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
