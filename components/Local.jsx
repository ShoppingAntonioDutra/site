import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Local() {
    return (
        <div className='flex flex-col md:w-auto h-full items-center md:pt-20 bg-white -z-10 text-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl md:text-6xl  p-10 text-segundo-tema-site drop-shadow-dark1'>
                    Localização
                </h1>
                <h2 className='md:text-2xl'>
                    Descubra como chegar no Antônio Dutra Shopping
                </h2>
            </div>
            <div className='flex justify-center items-center px-5'>
                <h2 className='md:text-lg flex justify-center items-center font-sans gap-5 p-10'>
                <FontAwesomeIcon icon={faLocationDot} className=' text-segundo-tema-site w-5 drop-shadow-dark1' />
                     Av. Dr. Olavo Gomes Pinto, 160, São Lourenço - MG, 37470-000
                </h2>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14785.03269610517!2d-45.0531622!3d-22.1161301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb4b151f38312d%3A0xbc9b8357ec703993!2sShopping%20Ant%C3%B4nio%20Dutra!5e0!3m2!1spt-BR!2sbr!4v1676296114356!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className='w-screen md:w-screen md:h-[500px]'
                >
                </iframe>
            </div>

        </div>
    )
}