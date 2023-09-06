import { Link } from "react-router-dom";

//CARREGANDO DADOS DA LISTA NO COMPONENTE PRODUTOS
export default function Produtos() {
    return (
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto: {prod.nome}    
                    </Link>
                </div>
            ))}
        </main>
    )
}