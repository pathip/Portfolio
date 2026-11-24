const Tech = ({ isHighLight, data }) => {
  // รองรับทั้ง Array 1 มิติ และ 2 มิติ
  const items = Array.isArray(data) ? data.flat() : [data];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech, i) => (
        <span
          key={`${tech}-tech-${i}`}
          className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-mono font-medium transition-all duration-300 ${isHighLight
              ? "border-cyan-500/50 bg-cyan-950/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
            }`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default Tech;
