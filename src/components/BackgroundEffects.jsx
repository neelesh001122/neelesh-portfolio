import { useEffect, useState } from "react";

function BackgroundEffects() {

  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {

    const handleMouseMove = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {

      window.removeEventListener("mousemove", handleMouseMove);

    };

  }, []);

  return (

    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">

      {/* Main Dark Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#01040f] via-[#020617] to-[#120018]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Futuristic Grid */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Left Blue Glow */}
      <div className="absolute left-[-15%] top-[15%] h-[650px] w-[650px] rounded-full bg-blue-500/20 blur-[180px]" />

      {/* Right Purple Glow */}
      <div className="absolute right-[-15%] top-[15%] h-[650px] w-[650px] rounded-full bg-fuchsia-500/20 blur-[180px]" />

      {/* Bottom Ambient Glow */}
      <div className="absolute bottom-[-250px] left-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Floating Stars */}
      <div className="absolute left-[15%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6]" />

      <div className="absolute left-[22%] top-[35%] h-1 w-1 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />

      <div className="absolute right-[20%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_15px_#d946ef]" />

      <div className="absolute right-[28%] top-[40%] h-1 w-1 animate-pulse rounded-full bg-pink-300 shadow-[0_0_10px_#f9a8d4]" />

      {/* Mouse Glow */}
      <div
        className="absolute h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[140px]"
        style={{
          left: position.x - 160,
          top: position.y - 160,
          transition:
            "left 0.08s linear, top 0.08s linear",
        }}
      />

      {/* Transparent Cursor Glow */}
      <div
        className="absolute h-4 w-4 rounded-full bg-white/20 blur-[8px]"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transition:
            "left 0.03s linear, top 0.03s linear",
        }}
      />

    </div>

  );
}

export default BackgroundEffects;