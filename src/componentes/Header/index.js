import Logo from '../Logo/index';
import OpcoesHeader from '../OpcoesHeader/index';
import IconesHeader from '../IconesHeader/index';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: aliceblue;
    display: flex;
    padding:  5px;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header