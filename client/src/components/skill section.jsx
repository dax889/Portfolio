import { FaReact, FaNodeJs, FaGithub, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiDjango,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "NodeJS" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaPython />, name: "Python" },
  ];

  return (
    <section id="skills" className="bg-[#0f172a] py-16 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        My Skills
      </h2>

      <div className="relative w-full overflow-hidden animate-container">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 w-24 h-full bg-linear-to-r from-[#0f172a] to-transparent z-10" />

        {/* Right gradient */}
        <div className="absolute right-0 top-0 w-24 h-full bg-linear-to-l from-[#0f172a] to-transparent z-10" />

        <div className="flex animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#1e293b] text-white px-8 py-4 mx-4 rounded-xl text-lg shadow-lg hover:scale-110 transition duration-300"
            >
              <span className="text-2xl text-orange-400">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
