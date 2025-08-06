import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <br />
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap gap-x-24  mt-5 p-4 justify-center items-center">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center sm:w-[500px] w-[80vw] justify-center lg:min-h-[32.5rem] sm:h-41rem] h-[35rem]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex justify-center items-center w-[80vw] sm:w-[500px] overflow-hidden h-[30vh] lg:h-[40vh] mb-10">
                <div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="bg-img" fill/>
                </div>
                <Image src={img} alt={title} fill className="z-10 absolute bottom-0 rounded-3xl" />
              </div>
              <div className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </div>
              <p className=" lg:font-normal my-1 font-light text-sm line-clamp-2 opacity-70">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="flex items-center justify-center rounded-full h-8 w-8 lg:w-10 lg:h-10"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image src={icon} alt={icon} className="p-2" fill />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check live site</p>
                  <HiOutlineExternalLink className="ms-3 " color="#CBACF9"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
