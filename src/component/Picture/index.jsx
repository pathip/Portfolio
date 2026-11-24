const Picture = ({ picture, title }) => {
  if (!picture) return null;

  return (
    <div className="relative mt-1 overflow-hidden rounded-lg border border-slate-800/80 bg-slate-950/80 transition-all duration-300 group-hover:border-cyan-500/40">
      <img
        src={picture}
        alt={title}
        loading="lazy"
        className="w-full h-auto object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default Picture;
