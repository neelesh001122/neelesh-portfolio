function Loader() {

  return (

    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">

      {/* Soft Glow */}
      <div className="absolute h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Name */}
      <h1 className="relative z-10 bg-linear-to-r from-blue-400 via-cyan-300 to-fuchsia-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">

        NEELESH VERMA

      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-5 text-sm tracking-[5px] text-gray-400 md:text-base">

        BUILDING THE FUTURE WITH AI

      </p>

      {/* Loading Bar */}
      <div className="relative z-10 mt-8 h-1 w-56 overflow-hidden rounded-full bg-white/10">

        <div className="h-full w-full animate-[loading_1.5s_linear_forwards] bg-linear-to-r from-blue-400 to-fuchsia-500" />

      </div>

    </div>

  );

}

export default Loader;