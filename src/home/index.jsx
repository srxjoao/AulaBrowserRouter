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
      imagem:"https://divoom.com/cdn/shop/products/ditoo-pro-1_6bd4822c-21b9-4eb4-9c77-f05bc861a0cd.jpg?v=1722318494&width=800",
      preco: "R$ 550,50",
      maisvendido:false,
      temled:false,
      cor:["Azul Ciano","Verde","Rosa","Vermelho"],
      marca:"Ditoo Pixel Art"
  },
  {
      id: 2,
      item: "Teclado Com Fio Oex Tc401 Pop In Apoio De Punho",
      imagem:"https://m.media-amazon.com/images/I/619CQSczlyL._AC_UL480_FMwebp_QL65_.jpg",
      preco: "R$ 99,50",
      maisvendido:true,
      temled:false,
      cor:["branco","preto"],
      marca:"Oex"
  },
  {
      id: 3,
      item: "Headset Gamer Sem Fio Logitech",
      imagem:"https://th.bing.com/th?id=OPHS.XFTdv0q9JRFfTA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
      maisvendido:true,
      temled:true,
      preco: "R$ 1.231,88",
      cor:["Branco","Preto","Rosa","Roxo"],
      marca:"Logitech"
  },
  ]);

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