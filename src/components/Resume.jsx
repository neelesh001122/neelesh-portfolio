import resumePDF from "../../public/resume.pdf";

function Resume() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      <div className="w-full max-w-6xl flex justify-between items-center mb-6">

        <a
          href="/"
          className="rounded-full border border-cyan-400/30 px-5 py-2 text-cyan-300 transition hover:bg-cyan-400/10"
        >
          ← Back To Portfolio
        </a>

        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-cyan-400 px-5 py-2 text-black font-semibold transition hover:scale-105"
        >
          Download Resume
        </a>

      </div>

      <iframe
        src="/resume.pdf"
        className="h-[90vh] w-full max-w-6xl rounded-2xl border border-white/10"
      />

    </div>
  );
}

export default Resume;