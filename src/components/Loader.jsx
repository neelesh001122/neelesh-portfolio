function Loader() {

return (

    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">

    {/* Glow */}
    <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[120px]" />

    {/* Name */}
    <h1 className="relative z-10 bg-linear-to-r from-blue-400 via-cyan-300 to-fuchsia-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl animate-pulse">

        NEELESH VERMA

    </h1>

    {/* Subtitle */}
    <p className="relative z-10 mt-6 text-lg tracking-[4px] text-gray-400">

        BUILDING THE FUTURE WITH AI

    </p>

    {/* Loading Bar */}
    <div className="relative z-10 mt-10 h-1 w-60 overflow-hidden rounded-full bg-white/10">

        <div className="h-full w-full animate-[loading_2s_linear_forwards] bg-linear-to-r from-blue-400 to-fuchsia-500" />

    </div>

    </div>

);
}

export default Loader;