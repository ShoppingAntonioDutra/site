export default function Local() {
    return (
        <div className='flex flex-col h-[650px] items-center pt-20'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-6xl p-10 text-segundo-tema-site drop-shadow-dark1'>
                    Localização
                </h1>
                <h2 className='text-2xl'>
                    Descubra como chegar no Antônio Dutra Shopping
                </h2>
            </div>
            <div className='flex justify-center items-center px-5'>
                <h2 className='text-xl'>
                     Av. Dr. Olavo Gomes Pinto, 160, São Lourenço - MG, 37470-000
                </h2>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14785.03269610517!2d-45.0531622!3d-22.1161301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb4b151f38312d%3A0xbc9b8357ec703993!2sShopping%20Ant%C3%B4nio%20Dutra!5e0!3m2!1spt-BR!2sbr!4v1676296114356!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className='w-screen h-[400px]'
                >
                </iframe>
            </div>

        </div>
    )
}