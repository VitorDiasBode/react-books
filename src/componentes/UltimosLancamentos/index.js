import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";

const ContainerUltimosLancamentos = styled.section`
    background-color:#EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column; 
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return(
        <ContainerUltimosLancamentos>
            <Titulo 
                cor="#EB9B00"
                tamanhoFonte="36px"
            >ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map(livro => <img src={livro.src} alt="capa indisponivel"/> ) }
            </NovosLivrosContainer>
        </ContainerUltimosLancamentos>
    )
}

export default UltimosLancamentos