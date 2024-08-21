export default function listaProdutos({produto},{produto.item},{produto.preco}){
    return(
        <div {produto}>
        <p>{produto.titulo}</p>
        <p>{produto.preco} </p>
        </div>
    );
}