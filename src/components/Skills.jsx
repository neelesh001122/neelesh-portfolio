import { motion } from "framer-motion";

import {
  FaPython,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMysql,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      name: "Python",
      icon: <FaPython />,
    },

    {
      name: "MySQL",
      icon: <SiMysql />,
    },

    {
      name: "Pandas",
      icon: <SiPandas />,
    },

    {
      name: "NumPy",
      icon: <SiNumpy />,
    },

    {
      name: "Power BI",
      icon: <FaDatabase />,
    },

    {
      name: "Excel",
      icon: <FaDatabase />,
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
    },

    {
      name: "Data Analytics",
      icon: <FaDatabase />,
    },
  ];

  return (

    <section
      id="skills"
      className="relative overflow-hidden px-6 pt-0 pb-40 text-white"
    >

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-sm tracking-[4px] text-blue-400">
            DATA ANALYTICS TOOLKIT
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Skills & Expertise
          </h2>

        </motion.div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative z-10 text-4xl text-blue-400 transition duration-300 group-hover:scale-110">

                {skill.icon}

              </div>

              {/* Skill Name */}
              <h3 className="relative z-10 mt-5 text-xl font-bold transition duration-300 group-hover:text-blue-400">

                {skill.name}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;