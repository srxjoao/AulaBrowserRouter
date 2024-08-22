export default function ListaProdutos({ listaProdutos }){
    return(
       <div>
        {
          listaProdutos.map((produto) =>
            <div key={produto.id}>
          <p>{produto.item}</p>
          <p>{produto.preco} </p>
              <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
            </div>
          )
          }   
       </div>
    );
}