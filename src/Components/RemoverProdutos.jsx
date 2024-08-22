export default function RemoverPedido({removerpedido}){
    return(
        {
            removerpedido.map((produto) =>
              <div key={produto.id}>
                  <img src={produto.imagem}/>
                  <p>{produto.item} </p>
                  <p> {produto.preco}</p>
                <button onClick={()=> RemoverPedido(index)}>Remover</button>
              </div>
            )
            }
    );
}