import iconePerfil from '../../imagens/perfil.svg';
import iconeSacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    margin: 0px 20px;
    width: 25px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [iconePerfil, iconeSacola];

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone, index) => (
                <Icone key={index}><img src={icone} alt='icone'></img></Icone>
            ))}
        </Icones>
    )
} 

export default IconesHeader