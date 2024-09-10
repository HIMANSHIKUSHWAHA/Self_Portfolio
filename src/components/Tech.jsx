import { FaPython, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaLinux, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiScala, SiPostgresql, SiMysql, SiMongodb, SiSnowflake, SiFlutter, SiGoogleanalytics, SiGooglecloud } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiTable, BiSpreadsheet } from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'; // For Excel
import agileIcon from '../assets/agileIcon.svg'; // Path to your agile SVG image



const Tech = () => {
  return (
    <div className="pb-16">  {/* Decreased the padding-bottom to reduce space */}
      <h1 className="my-8 text-center text-4xl">Technologies</h1>  {/* Reduced from my-20 to my-8 */}

      {/* Programming Languages */}
      <h2 className="my-8 text-center text-3xl">Programming Languages & Frameworks</h2>  {/* Reduced from my-12 to my-8 */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaPython className="text-4xl text-yellow-400" />
          <p className="text-sm">Python</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiCplusplus className="text-4xl text-blue-600" />
          <p className="text-sm">C++</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaJava className="text-4xl text-red-600" />
          <p className="text-sm">Java</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiJavascript className="text-4xl text-yellow-300" />
          <p className="text-sm">JavaScript</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiScala className="text-4xl text-red-600" />
          <p className="text-sm">Scala</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaHtml5 className="text-4xl text-orange-600" />
          <p className="text-sm">HTML5</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaCss3Alt className="text-4xl text-blue-500" />
          <p className="text-sm">CSS3</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaReact className="text-4xl text-cyan-400" />
          <p className="text-sm">React</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <TbBrandNextjs className="text-4xl text-gray-500" />
          <p className="text-sm">Next.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaNodeJs className="text-4xl text-green-500" />
          <p className="text-sm">Node.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiFlutter className="text-4xl text-sky-400" />
          <p className="text-sm">Flutter</p>
        </div>
        
      </div>
  
      {/* Databases */}
      <h2 className="my-8 text-center text-3xl">Databases</h2>  {/* Reduced from my-12 to my-8 */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiPostgresql className="text-4xl text-blue-600" />
          <p className="text-sm">PostgreSQL</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiMysql className="text-4xl text-blue-500" />
          <p className="text-sm">MySQL</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiMongodb className="text-4xl text-green-500" />
          <p className="text-sm">MongoDB</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiSnowflake className="text-4xl text-cyan-300" />
          <p className="text-sm">Snowflake</p>
        </div>
      </div>

      {/* Visualization Tools */}
      <h2 className="my-8 text-center text-3xl">Visualization Tools & Platforms</h2>  {/* Reduced from my-12 to my-8 */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <BiTable className="text-4xl text-orange-500" />
          <p className="text-sm">Tableau</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <BiSpreadsheet className="text-4xl text-green-600" />
          <p className="text-sm">Power BI</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faFileExcel} className="text-4xl text-green-600" />
          <p className="text-sm">Excel</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiGooglecloud className="text-4xl text-blue-400" />
          <p className="text-sm">Google Cloud</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <SiGoogleanalytics className="text-4xl text-orange-400" />
          <p className="text-sm">Google Analytics</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaLinux className="text-4xl text-gray-500" />
          <p className="text-sm">Linux</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaGitAlt className="text-4xl text-red-600" />
          <p className="text-sm">Git</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center flex flex-col items-center justify-center">
          <FaGithub className="text-4xl text-gray-500" />
          <p className="text-sm">GitHub</p>
        </div>
      </div>

    </div>
  );
};

export default Tech;
