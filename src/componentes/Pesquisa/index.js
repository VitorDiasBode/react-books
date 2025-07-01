import Input from '../Input';
import styled from 'styled-components';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;    
`

const Subtitulo = styled.h3`
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    margin-bottom:40px;
`


function Pesquisa(){
    return (
        <PesquisaContainer>
            <Titulo>Qual livro você está buscando?</Titulo>
            <Subtitulo>Encontre-o aqui</Subtitulo>
            <Input placeholder="Escreva o livro que você busca"/>

        </PesquisaContainer>
    )
}

export default Pesquisa