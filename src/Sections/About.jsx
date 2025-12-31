import React from "react";
import me from "../assets/me.jpg";
import { GrLocation } from "react-icons/gr";

const About = () => {
  return (
    <section id="about" className="pt-40">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <img
          src={me}
          alt=""
          className="rounded-full border-4 border-[#333] w-[200px]"
        />
        <div className="flex flex-col justify-center items-center gap-5 md:items-start">
          <h1 className="text-3xl text-center md:text-start font-bold text-[#555]">
            Hey, I'm Karim. <br />{" "}
            <span className="text-[#222]">
              <span className="text-sky-600">Full-Stack </span> Developer.
            </span>
          </h1>
          <p className="bg-green-300 text-green-700 font-semibold w-fit py-1 px-2 rounded-md">
            Open to work
          </p>
          <a
            href="https://www.google.com/maps/place/North+Coast,+Marsa+Matrouh+Governorate/@30.8540584,29.1478699,34412m/data=!3m2!1e3!4b1!4m6!3m5!1s0x145f85d4cec9a491:0x8495f43e2b47ba0b!8m2!3d30.841473!4d29.2407955!16s%2Fg%2F11hdy7b_kp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="flex items-center justify-center gap-1 text-lg text-[#555] font-medium hover:underline"
          >
            <GrLocation className="mb-0.5" />
            <p>North Cost, Egypt</p>
          </a>
        </div>
      </div>
      <div className="mt-15 max-w-[420px] mx-auto md:max-w-[600px]">
        <p className="font-medium">
          As a <span className="text-pink-700 font-bold text-lg">full-stack developer</span>, I don’t focus only on building usable web
          applications. I focus on building <span className="text-red-600 font-bold text-lg">secure</span>, <span className="text-green-500 font-bold text-lg">scalable</span>, and <span className="text-yellow-500 font-bold text-lg">maintainable</span> systems. <br /> <br />
          I have a strong understanding of both common and advanced <span className="text-red-600 font-bold text-lg">security vulnerabilities</span>, and I design my applications with security best
          practices in mind from the very beginning. <br /> <br /> I also prioritize <span className="text-green-500 font-bold text-lg">clean architecture</span> and well-structured code to ensure that every
          project is easy to maintain, extend, and scale as it grows. My goal is
          to build systems that are not only functional today, but ready for
          future expansion and long-term success.
        </p>
      </div>
    </section>
  );
};

export default About;
