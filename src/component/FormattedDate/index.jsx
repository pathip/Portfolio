const FormattedDate = ({ isHighLight, children }) => {
  return (
    <div className="font-mono text-xs uppercase tracking-wider">
      <span
        className={`inline-block rounded border px-2 py-0.5 transition-all duration-300 ${
          isHighLight
            ? "border-cyan-500/50 bg-cyan-950/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
            : "border-slate-800 bg-slate-950/50 text-slate-400"
        }`}
      >
        {children}
      </span>
    </div>
  );
};

export default FormattedDate;
