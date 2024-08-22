import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './style.css'
import Header from '../Components/Header'
import Footer from "../Components/Footer";
import ListaProdutos from "../Components/ListarProdutos";
export default function Home(){
  const [listaProdutos] = useState([
    {
      id: 1,
      item: "HambúAlto-falante Bluetooth Divoom Ditoo Pixel Art",
      preco: "R$ 550,50",
      maisvendido:"false",
      temled:"false",
      cor:"Azul Ciano",
      Marca:"Ditoo Pixel Art"
  },
  {
      id: 2,
      item: "Teclado Com Fio Oex Tc401 Pop In Apoio De Punho",
      preco: "R$ 99,50"
  },
  {
      id: 3,
      item: "Headset Gamer Sem Fio Logitech",
      preco: "R$ 1.231,88"
  },
  ]);

      const [listaPedidos,setListaPedidos] = useState([]);

      const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos,objeto])
      }

      const RemoverPedido = (id) =>{
        let listaAux = listaPedidos.filter(
            (pedidos,index) =>{
                if(index !== id){
                    return pedidos
                }else{
                    return null; 
                }
            }
        );
        setListaPedidos(listaAux);
    }

      return(
      
<div className="bloco-produtos">
<Header/>

<Carousel
infiniteLoop
useKeyboardArrows
autoPlay
showArrows={true}
showStatus={false}
showThumbs={false}
dynamicHeight>
  <div>
    <img src="./public/banner1.jpg" alt="Banner" />
  </div>
  <div>
    <img src="./public/Banner 2.jpg" alt="" />
  </div>
        </Carousel>
        <ListaProdutos listaProdutos={listaProdutos}/>
            <Footer/>       
    </div>
  
      );
}