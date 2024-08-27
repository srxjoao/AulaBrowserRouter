import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../global.css';
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
      imagem:"./public/teclado.png",
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
  {
    id: 4,
    item: "Computador Gamer Completo Intel",
    imagem:"https://m.media-amazon.com/images/I/61k+PkiT62L._AC_SX569_.jpg",
    maisvendido:true,
    temled:true,
    preco: "R$ 1.700,85",
    cor:["Apenas preto com led"],
    marca:"Intel"
},
{
  id: 5,
  item: "Combo Gamer Rosa",
  imagem:"https://m.media-amazon.com/images/I/71B6xcBPBwL._AC_SX569_.jpg",
  maisvendido:true,
  temled:true,
  preco: "R$ 190,00",
  cor:["Rosa"],
  marca:"EVOLUT"
},
{
  id: 6,
  item: "Gabinete Gamer Cruiser ",
  imagem:"https://img.terabyteshop.com.br/produto/g/gabinete-gamer-xpg-cruiser-aluminum-frame-mid-tower-vidro-temperado-black-sem-fonte-com-3-fans-argb-white-cruiserst-whcww_174034.png",
  maisvendido:true,
  temled:true,
  preco: "R$ 400,98",
  cor:["Branco","Preto"],
  marca:"Fortrek"
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
    <img src="./public/Banner 2.jpg" alt="Banner" />
  </div>
  <div>
    <img src="./public/Banner 3.jpg" alt="Banner" />
  </div>
        </Carousel>
        <center>
        <h1 className="title-oferta">Confira alguns dos nossos produtos</h1>
        </center>
        <ListaProdutos listaProdutos={listaProdutos}/>
        <Footer desenvolvedor={"Desenvolvido por João Pedro Oliveira💙"}/>
    </div>
  
      );
}