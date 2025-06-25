import './estilo.css'
import iconePerfil from '../../imagens/perfil.svg';
import iconeSacola from '../../imagens/sacola.svg';

const icones = [iconePerfil, iconeSacola];

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone, index) => (
                <li className='icone' key={index}><img src={icone} alt='icone'></img></li>
            ))}
        </ul>
    )
} 

export default IconesHeader