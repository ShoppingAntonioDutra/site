import Nav2 from "components/Nav2";
import Lojas from "../../components/Lojas";



export default function Servicos() {
    return (
        <div className='bg-zinc-300 w-screen'>
            <Nav2 />
            <Lojas 
            nome='Grito Urbano'
            telefone='3332-2323'
            localizacao='Antônio Dutra Shopping Primeiro andar loja 20'
            segmento='Roupas'
            />
        </div>
    )
}