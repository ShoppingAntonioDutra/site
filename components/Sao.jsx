import Image from "next/image";
import Parque from "../public/parque.webp";

export default function Sao() {
    return (
        <div  id='sao' className='flex flex-col items-center justify-center md:pt-20 pb-20 bg-zinc-300'>
            <h1 className='text-3xl md:text-6xl p-10 text-segundo-tema-site drop-shadow-dark1'>
                São Lourenço
            </h1>
            <div className='md:px-20'>
                <div className='p-5 md:p-0'>
                    <p className='text-justify text-lg'>
                        São Lourenço é um município brasileiro do estado de Minas Gerais, uma das mais conhecidas estâncias hidrominerais do Brasil. Faz parte do Circuito das Águas de Minas Gerais, na Serra da Mantiqueira. Sua população em julho de 2020 foi estimada em 46.202 habitantes.<br /><br />
                        <spam className='text-segundo-tema-site drop-shadow-dark1 text-xl'>Clima</spam> <br /><br />
                        Município de clima ameno, tem uma temperatura média de 18°C, com a sensação térmica chegando a 0°C no inverno. Com altitude de 875 metros na sede da prefeitura, tem clima tropical de altitude, com temperatura média no verão de 22°C. Segundo dados do Instituto Nacional de Meteorologia (INMET), referentes ao período de 1931 a 1983 e a partir de 1986, a temperatura mínima absoluta registrada em São Lourenço foi de -3,3°C em 14 de julho de 1945 e a máxima absoluta de 36,6°C em 15 de outubro de 2014. O maior acumulado de precipitação em 24 horas atingiu 171mm em 3 de janeiro de 2000. Desde 1961, janeiro de 2007 foi o mês de maior precipitação, com 633,1mm. e o menor índice de umidade relativa do ar (URA) foi registrado na tarde de 5 de setembro de 1975 e 14 de setembro de 1986, de 13%.<br /><br />
                    </p>
                </div>
                <div className='grid md:grid-cols-2'>
                    <div className="p-5 md:p-0">
                        <p className='text-lg'>
                            <spam className='text-segundo-tema-site drop-shadow-dark1 text-xl'>Atrativos turísticos</spam><br /><br />
                            Aldeia Vila Verde (feira de artesanatos);<br />
                            Basílica Menor de São Lourenço Mártir;<br />
                            Calçadão I e II;<br />
                            Mirante de São Lourenço;<br />
                            Montanha Sagrada;<br />
                            Parque das Águas;<br />
                            Pedra do Vale dos Pinheiros;<br />
                            Quinta do Cedro;<br />
                            Rampa de voo livre da Fazenda Santa Helena;<br />
                            Sítio Lagoa Seca;<br />
                            Teleférico;<br />
                            Templo da Eubiose;<br />
                            Trem das Águas.<br /><br />

                            
                        </p>
                    </div>
                    <div className='p-5 md:p-0'>
                        <Image src={Parque} alt="foto do lago do parque das águas de São Lourenço"/>
                    </div>
                </div>
                <p className='text-justify text-lg p-5 md:p-0'><spam className='text-segundo-tema-site text-xl drop-shadow-dark1'>Turismo de saúde</spam><br /><br />
                            Centro Hidroterápico de São Lourenço (Balneário)

                            São Lourenço, como estância hidromineral, coopera para a cura de diversas patologias com o clima, a mudança de ambiente, a vida ao ar livre, a presença da natureza, tranquilidade, repouso, assistência médica especializada, além dos benefícios das águas minerais.</p>
            </div>
        </div>
    )
}