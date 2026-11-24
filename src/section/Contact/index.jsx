import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className='flex items-center gap-5 text-xl'>
      {/* GitHub Link */}
      <a
        href='https://github.com/pathip'
        target='_blank'
        rel='noreferrer'
        className='group relative flex items-center justify-center h-10 w-10 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:-translate-y-1'
        aria-label='GitHub'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      {/* Terminal Contact Hint */}
      <span className='font-mono text-xs text-slate-500'>
        // COMM_CHANNELS
      </span>
    </div>
  )
}

export default Contact;
