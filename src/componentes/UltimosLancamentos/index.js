import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imgLivro from "../../imagens/capa-indisponivel.png" 

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

            <CardRecomenda 
            titulo={"Talvez você se interesse por..."}
            subtitulo={"Mistborn: História Secreta"}
            descricao={"Do autor best-seller nº 1 do New York Times, Mistborn: História Secreta destaca personagens e fatos escondidos nas sombras da Trilogia Original Mistborn."}
            img={imgLivro}
            ></CardRecomenda>
            
            <CardRecomenda 
            titulo={"Outro livro que talvez você se interesse por..."}
            subtitulo={"Filha do Caos: 1"}
            descricao={"Na Grécia Antiga, os mortais vivem sob o jugo cruel dos deuses, perdendo o que têm de mais valioso o alimento que os sustenta, seus bens mais preciosos e, às vezes, até a própria vida para satisfazer os caprichos dos Doze. Mas uma antiga profecia traz uma fagulha de esperança: a promessa de alguém destinado a libertar a humanidade."}
            img={imgLivro}
            ></CardRecomenda>
        </ContainerUltimosLancamentos>
    )
}

export default UltimosLancamentos