import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
export default function BotaoVolta() {
    return (
        <div>
            <a href="#inicio" className='bg-white fixed  bottom-5 right-5 animate-bounce rounded-full text-tema-site md:z-10'>
                <FontAwesomeIcon icon={faArrowAltCircleUp} className='h-12'/>
            </a>
        </div>
    )
}