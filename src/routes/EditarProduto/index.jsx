import { useNavigate, useParams } from "react-router-dom";

export default function EditarProduto() {
    //IMPORTANDO O useNavigate E O useParams DO react-router-dom.
    
    //APENAS NAVEGAREMOS, NÃO EDITAREMOS DE FATO.
        const lista = listaProdutos
        const navegacao = useNavigate()
        const {id} = useParams()
    
        const proc = lista.filter(prod => prod.id == id)
        const produto = proc[0]
    
        const salvar = () => {
            alert(`Produto: ${produto.nome} editado com sucesso!`)
            return navegacao('/produtos')
        }
    
        return (
            <main>
                <h1>Editando o Produto</h1>
                <p>Editando os dados do produto: {produto.nome}</p>
                <button onClick={salvar}>Salvar</button>
            </main>
        )
    }