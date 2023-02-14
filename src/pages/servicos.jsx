import Nav2 from "components/Nav2";
import Servicos from "../../components/Servicos";




export default function Lojas() {
    return (
        <div className='bg-zinc-300 w-screen'>
            <Nav2 />
            <Servicos 
            nome='Café'
            telefone='3332-2323'
            localizacao='Antônio Dutra Shopping Primeiro andar loja 20'
            segmento='Comida'
            />
        </div>
    )
}