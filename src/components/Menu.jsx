//CRIANDO LINKS PARA NAVEGAR
import { Link } from "react-router-dom";
//IMPORTANDO O COMPONENTE Link DO react-router-dom.
export default function Menu(){

    return(
        <nav className="menu">
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/produtos">Produtos</Link>    
        </nav>
//PASSANDO A ROTA PELO COMPONENTE Link


    )



}