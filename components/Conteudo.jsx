import CarrosselShopp from "components/CarrosselShopp"


export default function Conteudo() {
    return (
        <div className='md:grid md:grid-cols-2 md:h-[650px]'>
            <div className='flex flex-col'>
                <div className='p-10 md:p-20'>
                    <h1 className='text-3xl md:text-6xl font-bold text-segundo-tema-site drop-shadow-dark1'>
                        O Shopping
                    </h1>
                    <h2 className='pb-5 font-bold'>
                        Todos os produtos em um só lugar
                    </h2>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti adipisci asperiores cum, in sequi quibusdam aspernatur magni libero, nam sit commodi illo praesentium voluptatem magnam sunt sed tenetur voluptatibus!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, blanditiis! Quibusdam optio pariatur recusandae voluptatum hic corporis architecto laboriosam, officiis maxime a odit, commodi quas similique rem porro dolores repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat, voluptates at eligendi quisquam illum quasi esse tempora beatae, ab, qui vitae vel assumenda? Provident vel sunt accusantium voluptatum voluptate?
                    </p>
                </div>
            </div>
            <div>
                <CarrosselShopp />
            </div>
        </div>
    )
}