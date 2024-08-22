import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <p>Mapa do Site</p>
            <ul className="mapa-site">
            <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/produtos">
                <li>Produtos</li>
                </Link>
                <Link to="/oferta">
                <li>Ofertas</li>
                </Link>
            </ul>
            <p>Redes Sociais</p>
            <ul className="redes-sociais">
                <li>
                    <a href="https://www.linkedin.com/in/srxjoao1/">Linkedin</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/srx_joao/">Instagram</a>
                </li>
                <li>
                    <a href="https://github.com/srxjoao">Github</a>
                </li>
            </ul>
            
        </footer>
    );
}