import Link from "next/link";
import { useState } from "react";
import logo from "../public/Logo.png"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


    return (
        <div className=" flex justify-between items-center">

            <nav className="z-20 w-[320px] ">
                <section className="MOBILE-MENU md:hidden ">
                    <div
                        className="HAMBURGER-ICON w-screen justify-between p-5 flex items-center"
                        onClick={() => setIsNavOpen((prev) => !prev
                        )} // toggle isNavOpen state on click
                    >
                        <Image src={logo} alt='logo da empresa' className='w-36' />
                        <div className=' space-y-2 mt-2'>
                            <span className="block h-0.5 w-8  bg-segundo-tema-site "></span>
                            <span className="block h-0.5 w-8 bg-segundo-tema-site"></span>
                            <span className="block h-0.5 w-8 bg-segundo-tema-site"></span>
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
                        <ul className="MENU-LINK-MOBILE-OPEN  bg-branco space-y-2 text-second-tema-site font-bold flex flex-col items-center w-screen h-screen">
                            <li className="border w-72 text-center  border-second-tema-site rounded-md mt-20  text-xl">
                                <Link href="/" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Início</Link>
                            </li>
                            <li className="border w-72 text-center border-second-tema-site rounded-md  text-xl">
                                <Link href="#sobre" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Sobre nós</Link>
                            </li>
                            <li className="border w-72 text-center  border-second-tema-site rounded-md  text-xl">
                                <Link href="#produtos" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Nossos Produtos</Link>
                            </li>
                            <li className="border w-72 text-center  border-second-tema-site rounded-md  text-xl">
                                <Link href="#baependi" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Baependi</Link>
                            </li>

                            <li className="border w-72 text-center border-second-tema-site rounded-md text-xl">
                                <Link href="#form" onClick={() => setIsNavOpen(false)} className="font-bold block p-2">Como chegar</Link>
                            </li>
                            <div className='flex justify-center items-center pt-5 gap-10'>
                                <Link href='https://www.instagram.com/marcelogamesmg/' target='blank' className='flex items-center justify-center bg-second-tema-site
            h-10 w-10 p-1  outline-double outline-second-tema-site'>
                                    <FontAwesomeIcon icon={faInstagram} className=' text-branco' />
                                </Link>
                                <Link href='https://www.facebook.com/marcelogamesmg' target='blank' className='flex items-center justify-center bg-second-tema-site
            h-10 w-10 p-1 outline-double outline-second-tema-site'>
                                    <FontAwesomeIcon icon={faFacebook} className=' text-branco' />
                                </Link>
                            </div>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden md:grid md:grid-cols-3 md:justify-around w-screen md:fixed bg-zinc-300 bg-opacity-80 pb-5  pt-5 md:items-center text-tema-site items-center">
                    <div className='flex justify-around items-center'>
                        <li className="w-28 flex justify-center items-center text-center">
                            <a href="#sobre" className="hover:transition hover:text-terceiro"
                            >
                                <p>
                                    O Shopping
                                </p>
                            </a>
                        </li>

                        <li className="flex justify-center items-center text-center">
                            <a href="#produtos" className="hover:transition hover:text-terceiro "
                            >
                                <p>
                                    Lojas
                                </p>
                            </a>
                        </li>
                        <li className="w-28 flex justify-center items-center text-center">
                            <a href="#baependi" className="hover:transition hover:text-terceiro">
                                <p>Serviços</p>
                            </a>
                        </li>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Image src={logo} alt='logo da empresa' className='w-48' />
                    </div>
                    <div className='flex justify-around items-center'>
                        <li className="w-28 flex justify-center items-center text-center">
                            <a href="#baependi" className="hover:transition hover:text-terceiro">
                                <p>Como Chegar</p>
                            </a>
                        </li>
                        <li className="w-28 flex justify-center items-center text-center">
                            <a href="#baependi" className="hover:transition hover:text-terceiro">
                                <p>Campanhas</p>
                            </a>
                        </li>
                        <li className="w-28 flex justify-center items-center text-center">
                            <a href="#baependi" className="hover:transition hover:text-terceiro">
                                <p>Baependi</p>
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