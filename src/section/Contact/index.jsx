import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () =>{
    return(
        <div className='flex items-end gap-4 text-2xl'>
            <FontAwesomeIcon className='hover:scale-125 hover:text-[#6E1BA1] transition-all' icon={faGithub} />
        </div>
    )
}

export default Contact;