import Footer from "../Components/Footer";
import Header from "../Components/Header";
import '../Components/style.css'
import ListaProdutos from "../Components/ListarProdutos";
import { useState } from "react";
export default function Produtos(){
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
    },
    {
        id: 11,
        item: "Webcam Logitech C920 HD Pro",
        imagem: "https://a-static.mlcdn.com.br/800x560/webcam-logitech-c920s-hd-pro-1080p/logitechstoreoficial/36354/fedc9d6c0996d157916cb990aae3f675.jpeg",
        preco: "R$ 499,00",
        maisvendido: true,
        temled: false,
        cor: ["Preto"],
        marca: "Logitech"
    },
    {
        id: 12,
        item: "Mouse Pad Gamer XXL HyperX Fury S",
        imagem: "https://www.bing.com/th?id=OPHS.hjuzXjQrJwVWnw474C474&o=5&pid=21.1&w=160&h=160&qlt=100&dpr=1,3&c=8&pcl=f5f5f5",
        preco: "R$ 149,00",
        maisvendido: true,
        temled: false,
        cor: ["Preto"],
        marca: "HyperX"
    },
    {
        id: 13,
        item: "Cadeira Gamer DXRacer Formula Series",
        imagem: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F471927%2Fcadeira-gamer-kbm-gaming-cg600-branco-com-almofadas-descanso-para-pernas-retratil-reclinavel-kgcg600br_1700660778_g.jpg&w=640&q=100",
        preco: "R$ 1.299,00",
        maisvendido: false,
        temled: false,
        cor: ["Preto", "Azul", "Vermelho"],
        marca: "DXRacer"
    },
    {
      id: 14,
      item: "Teclado Mecânico Logitech G Pro X",
      imagem: "https://www.bing.com/th?id=OPHS.m4BB%2bYpqzKotVA474C474&o=5&pid=21.1&w=148&h=148&qlt=100&dpr=1,3&bw=6&bc=FFFFFF",
      preco: "R$ 699,00",
      maisvendido: true,
      temled: true,
      cor: ["Preto", "RGB"],
      marca: "Logitech"
    },
    {
        id: 15,
        item: "Nintendo Switch OLED",
        imagem: "data:image/jpeg;base64,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",
        preco: "R$ 2.094,00",
        maisvendido: true,
        temled: false,
        cor: ["Branco"],
        marca: "Nintendo"
          },
          {
            id: 16,
            item: "Notebook Gamer ASUS ROG Strix G15",
            imagem: "https://a-static.mlcdn.com.br/800x560/notebook-gamer-rog-strix-g16-g614ju-nvidia-rtx-4050-intel-core-i7-13650hx-16gb-ram-512gb-ssd-tela-16-165hz-eclipse-gray-n3380-asus/asus/90nr0cc1-m00zp0/f5db7dc569fea2b21368763cbb8e286d.jpeg",
            preco: "R$ 9.499,00",
            maisvendido: true,
            temled: true,
            cor: ["Preto", "RGB"],
            marca: "ASUS"
          },

      ]);
    return(

        <main>
            <Header/>
            <center>
            <h1 className="title-produtos" >Nossos Produtos</h1>
            </center>
                    <ListaProdutos listaProdutos={listaProdutos}/>
                    <Footer desenvolvedor={"Desenvolvido por João Pedro Oliveira💙"}/>
        </main>
    )
}