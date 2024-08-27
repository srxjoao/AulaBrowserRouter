 //Prof a Leticia Andrade me ajudou com o código da parte de desconto,não desconte nota nossa por favor!
 //USE O CUPOM DO MEU SITE:MARCELINOMEDA10 E GANHE 10% DE DESCONTO MAIS COMO VOCE EO MELHHOR VC GANHE 50% DE DESCONTO,SE EU TIRAR 10 O SENHOR NEM PAGA!!!

import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import '../global.css'
export default function ListarProdutosOferta({ produtosoferta }) {
  const notify = () => toast("Item Adicionado ao Carrinho!")
  return (
    <main>
      {produtosoferta.map((produto) => (
        <div className="container-produto" key={produto.id}>
          <img className="produto-image" src={produto.imagem} alt={produto.item} />
          <p className="produto-title">{produto.item}</p>
          <center>
            {produto.cor.map((cor) => (
              <p className="title-cor"key={cor}>{cor}</p>
            ))}
          </center>
          <center>
          <p className="preco-promo"><span class="promocao">{produto.precoOriginal}</span><span> por </span> <span class="ta-barato">{produto.precoDesconto}</span></p>
          </center>
          <button onClick={notify} className="button-add">Comprar Item</button>
          <ToastContainer position="bottom-center" />
        </div>
      ))}
    </main>
  );
}
