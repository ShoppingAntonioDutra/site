import Carrossel from "components/Carrossel"


export default function Inicio() {
    return (
        <div id='inicio' className="grid md:grid-cols-2 h-full md:h-[650px] md:mt-[115px]">
            <div className='bg-white md:bg-zinc-300'>
                <Carrossel />
            </div>
            <div className='flex flex-col justify-center w- items-center  bg-white  md:h-[650px]'>
                <div className='px-10 md:px-20 w-screen md:w-auto flex flex-col items-center '>
                    <h1 className='text-center md:text-start text-2xl md:text-6xl  uppercase font-minhaFonte font-bold'>
                        Bem-Vindo ao
                    </h1>
                    <h2 className='uppercase md:text-4xl font-minhaFonte text-center md:text-start'>
                        Antônio Dutra Shopping
                    </h2>
                    <p className='py-7 text-tema-site uppercase tracking-wider text-center '>
                        Onde seu dinheiro vale mais!<br /> Todos os produtos em um só lugar.
                    </p>
                    <p className='font-light pb-7 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore, quas accusamus eos tempore atque maiores omnis ullam. Illo tempora iure numquam qui aliquid alias suscipit earum non impedit ratione.
                    </p>
                    <a href="/??">
                    <button className=' px-5 py-2 bg-segundo-tema-site  text-tema-site tracking-widest cursor-pointer hover:bg-yellow-300 hover:transition mb-20'>
                        Conheça mais
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}