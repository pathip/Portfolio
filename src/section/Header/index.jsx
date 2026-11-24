import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGamepad, faCode, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../content/header.js';

const Header = () => {
  return (
    <div className='flex flex-col gap-3 font-sans'>
      {/* HUD Status Badge: แสดงสถานะ Player/Developer พร้อมไฟกระพริบสีเขียว */}
      <div className='inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-mono text-emerald-400'>
        <span className='relative flex h-2 w-2'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
        </span>
        <span className='tracking-wider'>STATUS: READY FOR QUEST</span>
      </div>

      {/* Developer Name: ตัวอักษรขนาดใหญ่ มีมิติแสงแบบ Modern Clean */}
      <h1 className='text-4xl lg:text-5xl font-bold tracking-tight text-white'>
        {data.name}
      </h1>

      {/* Role / Class: ผสมผสาน Game Dev และ Software Dev */}
      <div className='flex items-center gap-2 text-sm md:text-base font-mono font-medium'>
        <span className='text-cyan-400 flex items-center gap-1.5'>
          <FontAwesomeIcon icon={faGamepad} className='text-xs' />
          Game Developer
        </span>
        <span className='text-slate-600'>//</span>
        <span className='text-purple-400 flex items-center gap-1.5'>
          <FontAwesomeIcon icon={faCode} className='text-xs' />
          Software Engineer
        </span>
      </div>

      {/* Caption / Lore Description */}
      <p className='mt-2 max-w-sm text-sm text-slate-400 leading-relaxed'>
        {data.caption}
      </p>

      {/* Mini Stat / Engine Specs: ข้อมูลสเปกแบบเกมมิ่งที่นักพัฒนาชอบใช้ */}
      <div className='mt-3 flex flex-wrap gap-2 text-xs font-mono'>
        <div className='rounded bg-slate-900/80 border border-slate-800 px-2.5 py-1 text-slate-400'>
          <span className='text-cyan-400 font-semibold'>ENGINE:</span> Unity & C#
        </div>
        <div className='rounded bg-slate-900/80 border border-slate-800 px-2.5 py-1 text-slate-400'>
          <span className='text-purple-400 font-semibold'>STACK:</span> React & Tailwind
        </div>
      </div>

      {/* CTA Button: ปุ่มสไตล์ Sci-Fi Action Button */}
      <div className='mt-5'>
        <a 
          href={data.link} 
          target='_blank' 
          rel='noreferrer'
          className='group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-cyan-500/50 bg-cyan-950/30 px-5 py-2.5 text-xs font-mono font-semibold tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-95'
        >
          <span>{data.btnText}</span>
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className='text-xs transition-transform duration-300 group-hover:translate-x-1' 
          />
        </a>
      </div>
    </div>
  )
}

export default Header;
