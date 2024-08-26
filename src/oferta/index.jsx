import { useState } from "react";
import '../global.css';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ListaProdutos from "../Components/ListarProdutos";
export default function Oferta(){
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
  imagem:"https://www.bing.com/th?id=OPHS.cMicmrPNX81mxw474C474&o=5&pid=21.1&w=148&h=173&qlt=100&dpr=1,3&bw=6&bc=FFFFFF",
  maisvendido:true,
  temled:true,
  preco: "R$ 400,98",
  cor:["Branco","Preto"],
  marca:"Fortrek"
},
{
id: 7,
item: "Base de Refrigeração para Notebook Cooler Master Notepal X3",
imagem: "https://a-static.mlcdn.com.br/800x560/base-para-notebook-notepal-x3-r9-nbc-npx3-gp-cooler-master/olistplus/o2ewlg0y9ni5w739/6c86729912e80d6a5736c1e13f265d98.jpeg",
preco: "R$ 189,00",
maisvendido: false,
temled: true,
cor: ["Preto"],
marca:"Cooler Master"
},
{
id: 8,
item: "Joystick Thrustmaster T16000M FCS",
imagem: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F150143%2Fcombo-thrustmaster-t-16000m-fcs-hotas-manete-de-potencia-twcs-para-pc-2960778_1632704920_g.jpg&w=640&q=100",
preco: "R$ 749,00",
maisvendido: false,
temled: false,
cor: ["Preto"],
marca :"Thrustmaster"
},
{
id: 9,
item: "Controle PlayStation DualSense",
imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_694623-MLB54199573685_032023-F.webp",
preco: "R$ 479,00",
maisvendido: true,
temled: false,
cor: ["Branco", "Preto"],
marca: "Sony"
},
{
    id: 10,
    item: "Painel de Controle Lian Li Uni Fan SL120",
    imagem: "https://th.bing.com/th/id/OIP.le5zz7J7LYsw4P6ccvvNYgHaEK?rs=1&pid=ImgDetMain",
    preco: "R$ 239,00",
    maisvendido: false,
    temled: true,
    cor: ["Branco", "Preto"],
    marca: "Lian Li"
}
  ]);
    return(
       <main>
         <Header/>
         <center>
         <h1 className="title-oferta" >Confira nossas ofertas</h1>
         <p className="text-desconto">Confira abaixo alguns produtos em promoção,use o cupom:MARCELINOMEDA10 e ganhe 10% de desconto</p>
         </center>
         <ListaProdutos listaProdutos={listaProdutos} />
         <Footer desenvolvedor={"Desenvolvido por João Pedro Oliveira💙"}/>
       </main>
    );
}