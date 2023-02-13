import Image from "next/image";
import Link from "next/link";
import logo from "../public/Logo.png"

export default function () {

    const data = new Date();
    const ano = data.getFullYear();

    return (
        <div className=" text-center bg-white w-screen brightness-110 flex flex-col justify-center items-center border-second-tema-site drop-shadow-verde border-t-2
        ">
            <div className='flex flex-col md:flex-row justify-center items-center w-[320px] md:w-[1000px] md:gap-20'>
                <Image src={logo} alt='logo empresa' className='w-44 md:w-44 mt-10' />
                <div className="grid md:grid-cols-4 md:gap-28 w-[320px] md:w-[1000px]">
                    <div className="flex flex-col items-center justify-center pt-10">
                        <a href="/" className="text-lg font-bold mb-5">
                            Início
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-10">
                        <a href="/#sobre" className="text-lg font-bold mb-5">
                            Sobre nós
                        </a>
                       
                    </div>
                    <div className="flex flex-col items-center justify-center pt-10">
                        <a href="/#produtos" className="text-lg font-bold mb-5">
                            Nossos Produtos
                        </a>      
                    </div>
                    <div className="flex flex-col items-center justify-center pt-10">
                        <Link href="/#baependi" className="text-lg font-bold mb-5">
                            Baependi
                        </Link>
                        
                    </div>

                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start   p-4 mt-5 font-bold">
                <Link href="https://www.susitech.dev/" target="_blank">Developed by Susi Technologies-</Link> <span className="ml-2 mr-2">{ano} All Rights Reserved</span>
            </div>
        </div>
    )
}