import roadImg from "../assets/road-accident-dashboard.png";

import facialImg from "../assets/facial-recognition.png";

import laptopImg from "../assets/laptop-price-predictor.png";

function Projects() {

  const projects = [
    {
      title: "Road Accident Dashboard",

      image: roadImg,

      description:
        "Implemented an interactive Power BI dashboard analyzing 50k+ road accident records to identify high-risk zones, peak accident periods, and trend patterns using KPIs.",

      tech: [
        "Power BI",
        "Excel",
        "Data Visualization",
      ],

      color: "cyan",

      github:
        "https://github.com/neelesh001122",
    },

    {
      title: "Facial Recognition Attendance System",

      image: facialImg,

      description:
        "Built an automated attendance system using Python and OpenCV with real-time face recognition, reducing manual attendance effort by over 70%.",

      tech: [
        "Python",
        "OpenCV",
        "Machine Learning",
      ],

      color: "blue",

      github:
        "https://github.com/neelesh001122/Facial-Recognition-Attendance-System",
    },

    {
      title: "Laptop Price Predictor",

      image: laptopImg,

      description:
        "Created a machine learning model using Python and Scikit-learn to predict laptop prices based on technical specifications with feature engineering and model evaluation.",

      tech: [
        "Python",
        "Scikit-learn",
        "Pandas",
      ],

      color: "purple",

      github:
        "https://github.com/neelesh001122/Laptop-Price-Predictor",
    },
  ];

  return (

    <section
      id="projects"
      className="relative overflow-hidden px-6 pt-0 pb-24 text-white"
    >

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm tracking-[4px] text-blue-400">
            PROJECT SHOWCASE
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Projects & Work
          </h2>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group relative flex min-h-[680px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-3"
            >

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 ${
                  project.color === "blue"
                    ? "bg-blue-500/10"
                    : project.color === "purple"
                    ? "bg-purple-500/10"
                    : "bg-cyan-500/10"
                }`}
              />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col">

                {/* Project Image */}
                <div className="flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-black/20">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-contain transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Title */}
                <h3 className="mt-6 min-h-20 text-2xl font-bold leading-tight">

                  {project.title}

                </h3>

                {/* Description */}
                <p className="mt-4 text-base leading-relaxed text-gray-400">

                  {project.description}

                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
                        project.color === "blue"
                          ? "bg-blue-500/10 text-blue-400"
                          : project.color === "purple"
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-cyan-500/10 text-cyan-400"
                      }`}
                    >

                      {tech}

                    </span>

                  ))}

                </div>

                {/* Button */}
                <div className="mt-auto flex justify-center pt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105"
                  >

                    GitHub

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;