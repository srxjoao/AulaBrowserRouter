export default function Footer ({desenvolvedor}){
    return(
        <footer className="rodape">
            <ul>
                <center>
                <a className="dev"  href="https://www.linkedin.com/in/srxjoao1/" >
                    {desenvolvedor}
                </a>
                </center>
            </ul>
        </footer>
    )
}
