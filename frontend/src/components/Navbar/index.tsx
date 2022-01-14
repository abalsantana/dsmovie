import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <div>
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Séries</a></li>
                            <li><a href="#">Filmes</a></li>
                            <li><a href="#">Bombando</a></li>
                        </ul>
                    </div>

                    <a href="https://github.com/abalsantana">
                        <div className='dsmovie-contact-container'>
                            <GitHubIcon />
                            <p className='dsmovie-contact-link'>/abalsantana</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;