import React from "react";
import me from "../assets/me.jpg";
import { GrLocation } from "react-icons/gr";


const About = () => {
  return (
    <section className="pt-50">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <img
          src={me}
          alt=""
          className="rounded-full border-4 border-[#333] w-[200px]"
        />
        <div className="flex flex-col justify-center items-center gap-5 md:items-start">
          <h1 className="text-3xl text-center md:text-start font-bold text-[#555]">
            Hey, I'm Karim. <br /> <span className="text-[#222]"><span className="text-orange-600">Full-Stack </span> Developer.</span>
          </h1>
          <p className="bg-green-300 text-green-700 font-semibold w-fit py-1 px-2 rounded-md">Open to work</p>
          <a href="" className="flex items-center justify-center gap-1 text-xl text-[#555] font-medium hover:underline">
            <GrLocation className="mb-0.5" />
            <p>Alexandria, Egypt</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
