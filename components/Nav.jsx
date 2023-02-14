import Link from "next/link";
import { useState } from "react";
import logo from "../public/Logo.png"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


    return (
        <div className=" flex justify-between items-center bg-zinc-300">

            <nav className="z-20 w-screen ">
                <section className="MOBILE-MENU md:hidden fixed bg-zinc-300 bg-opacity-80">
                    <div
                        className="HAMBURGER-ICON w-screen justify-between p-5 flex items-center"
                    >
                        <Link href='/'>
                            <Image src={logo} alt='logo da empresa' className='w-36' />
                        </Link>
                        <div className='space-y-2 mt-2'
                            onClick={() => setIsNavOpen((prev) => !prev
                            )} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 bg-tema-site "></span>
                            <span className="block h-0.5 w-8 bg-tema-site "></span>
                            <span className="block h-0.5 w-8 bg-tema-site "></span>
                        </div>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="CROSS-ICON top-0 right-10 absolute z-50"
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-second-tema-site cursor-pointer mt-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN  bg-zinc-300 space-y-2 text-second-tema-site font-bold flex flex-col items-center w-screen h-screen ">
                            <li className="border  w-72 text-center  border-tema-site rounded-md mt-20  text-xl">
                                <Link href="/" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Início</Link>
                            </li>
                            <li className="border w-72 text-center border-tema-site  rounded-md  text-xl">
                                <Link href="#shopp" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">O Shopping</Link>
                            </li>
                            <li className="border w-72 text-center  border-tema-site  rounded-md  text-xl">
                                <Link href="/lojas" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Lojas</Link>
                            </li>
                            <li className="border w-72 text-center  border-tema-site  rounded-md  text-xl">
                                <Link href="/servicos" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Serviços</Link>
                            </li>
                            <li className="border w-72 text-center  border-tema-site  rounded-md  text-xl">
                                <Link href="/campanha" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Campanhas</Link>
                            </li>
                            
                            <li className="border w-72 text-center border-tema-site  rounded-md text-xl">
                                <Link href="#form" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Como chegar</Link>
                            </li>
                            <li className="border w-72 text-center  border-tema-site  rounded-md  text-xl">
                                <Link href="#sao" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">São Lourenço</Link>
                            </li>
                            <div className='flex justify-center items-center pt-5 gap-10'>
                                <Link href='https://www.instagram.com/marcelogamesmg/' target='blank' className='flex items-center justify-center bg-second-tema-sites
            h-10 w-10 p-1 '>
                                    <FontAwesomeIcon icon={faInstagram} className=' text-tema-site h-10' />
                                </Link>
                                <Link href='https://www.facebook.com/marcelogamesmg' target='blank' className='flex items-center justify-center bg-second-tema-site
            h-10 w-10 p-1 '>
                                    <FontAwesomeIcon icon={faFacebook} className=' text-tema-site h-10' />
                                </Link>
                            </div>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden md:grid md:grid-cols-3 md:justify-around w-screen md:fixed bg-zinc-300 
                bg-opacity-80 pb-5  pt-5 md:items-center text-tema-site items-center shadow-meu">
                    <div className='flex justify-around -mr-20 items-center '>
                        <li className="flex justify-center items-center text-center">
                            <a href="#shopp" className="hover:transition hover:text-segundo-tema-site hover:drop-shadow-dark1 "
                            >
                                <p className='tracking-wide text-lg'>
                                    O Shopping
                                </p>
                            </a>
                        </li>

                        <li className="flex justify-center items-center text-center">
                            <a href="/lojas" className="hover:transition hover:text-segundo-tema-site hover:drop-shadow-dark1 "
                            >
                                <p className='tracking-wide text-lg'>
                                    Lojas
                                </p>
                            </a>
                        </li>
                        <li className="flex justify-center items-center text-center">
                            <a href="/servicos" className="hover:transition hover:text-segundo-tema-site hover:drop-shadow-dark1 ">
                                <p className='tracking-wide text-lg'>
                                    Serviços
                                </p>
                            </a>
                        </li>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href="/#inicio">
                            <Image src={logo} alt='logo da empresa' className='w-44 ' />
                        </a>
                    </div>
                    <div className='flex justify-around items-center gap-5 -ml-20'>
                       
                        <li className="flex justify-center items-center text-center">
                            <a href="/campanha" className="hover:transition hover:text-segundo-tema-site hover:drop-shadow-dark1 ">
                                <p className='tracking-wide text-lg'>
                                    Campanhas
                                </p>
                            </a>
                        </li>
                        <li className="flex justify-center items-center text-center">
                            <a href="#comochegar" className="hover:transition hover:text-segundo-tema-site hover:drop-shadow-dark1 ">
                                <p className='tracking-wide text-lg'>
                                    Como Chegar
                                </p>
                            </a>
                        </li>
                        <li className="flex justify-center items-center text-center">
                            <a href="#sao" className="hover:transition hover:text-segundo-tema-site hover:drop-shadow-dark1 ">
                                <p className='tracking-wide text-lg'>
                                    São Lourenço
                                </p>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
       .showMenuNav {
        display:block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        overflow: auto;
      }
      .nonActive {
        color: white;
      }
      .active {
       color: #1A1A1A;
       font-weight: bold;
      }
    `}</style>
        </div>
    );
}