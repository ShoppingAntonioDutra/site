import Image from "next/image";
import shoop from "../public/shop.jpg"

export default function Lojas({ nome, imagem, telefone, localizacao, segmento }) {
    return (
        <div className='grid md:grid-cols-2 pb-20 md:pb-0 py-10 bg-zinc-300  md:py-44 px-10 md:px-20 '>

            <div className='flex flex-col justify-center gap-3 md:gap-14'>
                <h1 className='text-3xl md:text-6xl text-segundo-tema-site drop-shadow-dark1 uppercase'>
                    {nome}
                </h1>
                <h2 className='text-xl text-segundo-tema-site drop-shadow-dark1 uppercase'>
                    Telefone:<br/>
                    <span className='text-lg font-sans drop-shadow text-tema-site'>{telefone}</span> 
                </h2>
                <h2 className='text-xl text-segundo-tema-site drop-shadow-dark1 uppercase'>
                    Localização:<br/>
                    <span className='text-lg font-sans text-tema-site'>{localizacao}</span> 
                </h2>
                <h2 className='text-xl text-segundo-tema-site drop-shadow-dark1 uppercase'>
                    Segmento:<br/>
                   <span className='text-lg font-sans text-tema-site'>{segmento}</span> 
                </h2>
            </div>
            <div className='flex justify-center items-center'>
                <Image src={shoop} alt= 'foto da loja'
                className='rounded-xl drop-shadow-dark1 w-[500px]'
                />
            </div>

        </div>
    )
}