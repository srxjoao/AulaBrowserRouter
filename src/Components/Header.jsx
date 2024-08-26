import { Link } from "react-router-dom";
import '../global.css';
export default function Header(){
    return(
        <>
        <header>
            <h1>Jottape's Tech Hub</h1>
        <nav>
            <ul>
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
        </nav>
        </header>
        </>
    )
}