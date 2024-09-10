import { FaPython, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiScala, SiPostgresql, SiMysql, SiMongodb, SiSnowflake, SiFlutter } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";  // For Next.js
import { BiTable, BiSpreadsheet } from "react-icons/bi"; // For Tableau & PowerBI

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      {/* Programming Languages */}
      <h2 className="my-12 text-center text-3xl">Programming Languages</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-400" />
          <p>Python</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-600" />
          <p>C++</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-red-600" />
          <p>Java</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-300" />
          <p>JavaScript</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiScala className="text-7xl text-red-600" />
          <p>Scala</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-600" />
          <p>HTML5</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
          <p>CSS3</p>
        </div>
      </div>

      {/* Frameworks */}
      <h2 className="my-12 text-center text-3xl">Frameworks</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
          <p>React</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-black" />
          <p>Next.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
          <p>Node.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlutter className="text-7xl text-sky-400" />
          <p>Flutter</p>
        </div>
      </div>

      {/* Databases */}
      <h2 className="my-12 text-center text-3xl">Databases</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-blue-600" />
          <p>PostgreSQL</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-500" />
          <p>MySQL</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
          <p>MongoDB</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSnowflake className="text-7xl text-cyan-300" />
          <p>Snowflake</p>
        </div>
      </div>

      {/* Visualization Tools */}
      <h2 className="my-12 text-center text-3xl">Visualization Tools</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiTable className="text-7xl text-orange-500" />
          <p>Tableau</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiSpreadsheet className="text-7xl text-green-600" />
          <p>Power BI</p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
