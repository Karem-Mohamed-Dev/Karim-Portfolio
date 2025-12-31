import React from "react";

const skillsArr = [
  { name: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "CSS", image: "https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg" },
  { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
  { name: "Tailwind", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "ReactJs", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "NextJs", image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg" },
  { name: "C#", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" },
  { name: ".Net Core", image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" },
  // { name: "EF Core", image: "https://techbagfrontend.s3-ap-south-1.amazonaws.com/logos/wQJX4a6NTjNPqGNbc4mTuN.png" },
  { name: "PostgreSql", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
//   { name: "MongoDb", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="mt-20 mx-auto lg:-20 max-w-3xl">
      <h1 className="font-semibold text-3xl mx-auto w-fit mb-10 relative">Skills <span className="w-[80%] h-1 bg-sky-600 absolute -bottom-1 left-1/2 -translate-x-1/2"></span></h1>
      <div className="grid grid-cols-3 gap-4 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-fit mx-auto lg:grid-cols-5">
        {skillsArr.map((ele, idx) => (
          <SkillCard ele={ele} key={idx} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ ele }) => {
  return (
    <div className="bg-white border border-[#ddd] pt-4 pb-2 flex flex-col justify-between items-center rounded-md group min-w-[110px] max-w-[140px] h-[110px]">
      <img src={ele.image} alt="" className="w-12 h-12 group-hover:-translate-y-1 duration-300" />
      <p className="text-center font-medium select-none">{ele.name}</p>
    </div>
  );
};

export default Skills;
