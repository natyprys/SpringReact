import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'

function Navbar() {
    return (
        <header>
            {/* nav- barra de navegação  */}
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/natyprys/SpringReact" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/natyprys</p>
                            {/* p - paragrafo */}
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar
//default pq só to exportando uma