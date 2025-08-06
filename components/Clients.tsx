import { testimonials } from "@/data";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-10">
        Kind words from <br />
        <span className="text-purple">Satisfied Clients</span>
      </h1>

      <div className="flex max-lg:mt-10 flex-col justify-center items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
};

export default Clients;
