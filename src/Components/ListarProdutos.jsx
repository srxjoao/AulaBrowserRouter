//foi adicionado o react toastify para deixar a web aplication mais legal,
//o professor não passou o conceito em sala mais esta no material do moddlle e pode ser encontrado em aula 18/06,qualquer um da turma pode ter acesso,
//mas não adicionaram ou se quer olharam,mas eu ohei e adicionei.

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
export default function ListaProdutos({ listaProdutos }){
  const notify = () => toast("Item Adicionado ao Carrinho!")
    return(
       <main>
        {
          listaProdutos.map((produto) =>
          <div className="container-produto" key={produto.id}>
          <img className="produto-image" src={produto.imagem} alt={"produto.item"}/>
          <p className="produto-title">{produto.item}</p>
          {produto.cor.map((cor) =>
            <p className="title-cor" key={cor}>{cor}</p>)}<br></br>
          <p className="produto-preco" >{produto.preco} </p>
            <button onClick={notify} className="button-add">Comprar Item</button>
            <ToastContainer position="bottom-center"/>

          </div>
          )
          }   
       </main>
    );
}