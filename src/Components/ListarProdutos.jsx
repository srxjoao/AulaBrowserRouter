import './style.css'
export default function ListaProdutos({ listaProdutos }){
    return(
       <div>
        {
          listaProdutos.map((produto) =>
            <div className="container-produto" key={produto.id}>
          <p className="produto-title">{produto.item}</p>
          <img className="produto-image" src={produto.imagem}/>
          <p className="produto-preco" >{produto.preco} </p>
              <button className="button-add" onClick={() => adicionarItemPedidos(produto)}>Comprar Item</button>
            </div>
          )
          }   
       </div>
    );
}