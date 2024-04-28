import React from "react";
import Label from "./Label";
import { Button } from "./ui/button";
import { labelFour } from "@/constants";
import { projectColOne, projectColTwo } from "@/constants";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="w-full">
      <div className="screen-max-width py-32">
        <Label
          type={labelFour.type}
          label={labelFour.label}
          desc={labelFour.desc}
        />
        <div className="flex gap-24 pt-20">
          <div className="flex flex-col gap-20">
            {projectColOne.map((project) => {
              return (
                <div className="flex flex-col gap-4">
                  <Image
                    className="rounded-2xl"
                    src={project.img}
                    alt="project"
                  />
                  <p className="text-lg font-light">
                    <span className="font-semibold">{project.title}</span>-
                    {project.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-20 pt-10">
            {projectColTwo.map((project) => {
              return (
                <div className="flex flex-col gap-4">
                  <Image
                    className="rounded-2xl"
                    src={project.img}
                    alt="project"
                  />
                  <p className="text-lg font-light">
                    <span className="font-semibold">{project.title}</span>-
                    {project.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <Button>View all projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
