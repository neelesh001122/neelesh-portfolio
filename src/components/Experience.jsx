function Experience() {

  const experiences = [
    {
      role: "Continuous Learning",
      company: "AI • Data Analytics • Automation",
      period: "Ongoing",

      description:
        "Actively learning AI tools, machine learning, Power BI, SQL, automation workflows, and modern data analytics technologies.",

      color: "blue",
    },

    {
      role: "MIS Executive",
      company: "Tech Mahindra",
      period: "Current",

      description:
        "Managing reporting workflows, Excel-based data handling, operational MIS tracking, and performance monitoring processes.",

      color: "purple",
    },

    {
      role: "Data Analyst Experience",
      company: "Accenture North America (Forage)",
      period: "Jul 2024 - Aug 2024",

      description:
        "Performed EDA, dashboard development, SQL analysis, and business insights generation for the Social Buzz analytics project.",

      color: "cyan",
    },

    {
      role: "Python Developer Intern",
      company: "MyDigitalHp IT Solutions",
      period: "Jan 2024 - Jul 2024",

      description:
        "Worked on Python automation, backend scripting, data preprocessing, and workflow optimization using Pandas, NumPy, and SQL.",

      color: "blue",
    },
  ];

  return (

    <section
      id="experience"
      className="relative overflow-hidden px-6 pt-0 pb-24 text-white"
    >

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm tracking-[4px] text-blue-400">
            PROFESSIONAL JOURNEY
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Experience & Learning
          </h2>

        </div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-white/10 md:block" />

          <div className="space-y-10">

            {experiences.map((item, index) => (

              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full md:block ${
                    item.color === "blue"
                      ? "bg-blue-400 shadow-[0_0_25px_rgba(96,165,250,0.9)]"
                      : item.color === "purple"
                      ? "bg-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.9)]"
                      : "bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)]"
                  }`}
                />

                {/* Card */}
                <div
                  className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 md:w-[47%]"
                >

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 ${
                      item.color === "blue"
                        ? "bg-blue-500/10"
                        : item.color === "purple"
                        ? "bg-purple-500/10"
                        : "bg-cyan-500/10"
                    }`}
                  />

                  {/* Content */}
                  <div className="relative z-10">

                    {/* Period */}
                    <div
                      className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
                        item.color === "blue"
                          ? "bg-blue-500/10 text-blue-400"
                          : item.color === "purple"
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-cyan-500/10 text-cyan-400"
                      }`}
                    >

                      {item.period}

                    </div>

                    {/* Role */}
                    <h3 className="mt-5 text-2xl font-bold leading-tight">

                      {item.role}

                    </h3>

                    {/* Company */}
                    <p className="mt-3 text-gray-400">

                      {item.company}

                    </p>

                    {/* Description */}
                    <p className="mt-6 leading-relaxed text-gray-400">

                      {item.description}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Experience;