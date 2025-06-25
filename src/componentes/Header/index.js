import './estilo.css'

import Logo from '../Logo/index';
import OpcoesHeader from '../OpcoesHeader/index';
import IconesHeader from '../IconesHeader/index';

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

export default Header