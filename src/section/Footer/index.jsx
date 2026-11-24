import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="mt-12 mb-20 border-t border-slate-800/80 pt-8 font-mono text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Game System Status */}
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
        <span>SYSTEM STATUS: 200 OK</span>
        <span className="text-slate-700">//</span>
        <span>BUILD: 2026.1</span>
      </div>

      {/* Tech Credits */}
      <div className="flex items-center gap-2 text-slate-400">
        <span>Designed with React & TailwindCSS</span>
        <a
          href="https://github.com/pathip"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition-colors ml-1"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} className="text-sm" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
