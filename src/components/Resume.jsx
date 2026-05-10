function Resume() {

  return (

    <div className="min-h-screen bg-black px-4 py-10 text-white">

      {/* Top Bar */}
      <div className="mx-auto mb-8 flex max-w-6xl items-center justify-between">

        <h1 className="text-2xl font-bold md:text-4xl">

          Resume

        </h1>

        {/* Back Button */}
        <a
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm transition duration-300 hover:border-blue-400 hover:text-blue-400"
        >

          ← Back To Portfolio

        </a>

      </div>

      {/* Resume Viewer */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

        <iframe
          src="/resume.pdf"
          title="Resume"
          className="h-screen w-full"
        />

      </div>

    </div>

  );
}

export default Resume;