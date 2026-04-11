import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../content/header.js';

const Header = () =>{
    return(
        <div className='flex flex-col gap-2'>
              <div className='text-4xl text-blue-600 font-semibold'>{data.name}</div>
              <div className='text-gray-700 font-semibold'>{data.title}</div>
              <div className='w-5/6'>{data.caption}</div>
              <div className='mt-4'>
                <a href={data.link} target='_blank'>
                <span className='rounded-md bg-emerald-500 text-white py-2 px-4 hover:bg-emerald-600 transition-colors duration-300'>
                  {data.btnText}
                  <span className='rotate-90 inline-block ml-2 text-sm'>
                    <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                  </span>
                </span>
                </a>
              </div>
            </div>
    )
}

export default Header;