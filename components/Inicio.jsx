import Carrossel from "components/Carrossel"

export default function Inicio() {
    return (
        <div className="grid grid-cols-2 h-[650px] mt-32">
            <div>
                <Carrossel />
            </div>
            <div className='flex flex-col justify-center w- items-center  bg-zinc-300 h-[650px]'>
                <div className='mx-20 '>
                    <h1 className='text-6xl  uppercase font-minhaFonte font-bold '>
                        Bem-Vindo ao
                    </h1>
                    <h2 className='uppercase text-4xl font-minhaFonte'>
                        Antônio Dutra Shopping
                    </h2>
                    <p className='py-7 text-tema-site uppercase'>
                        Onde seu dinheiro vale mais!<br /> Todos os produtos em um só lugar.
                    </p>
                    <p className='font-light pb-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore, quas accusamus eos tempore atque maiores omnis ullam. Illo tempora iure numquam qui aliquid alias suscipit earum non impedit ratione.
                    </p>
                    <a href="/??">
                    <button className=' px-5 py-2 bg-segundo-tema-site  text-tema-site tracking-widest cursor-pointer hover:bg-yellow-300 hover:transition'>
                        Conheça mais
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}