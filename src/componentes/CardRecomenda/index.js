import styled from "styled-components"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 10px auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
`
const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`
const Descricao = styled.p`
    width: 90%;
    height: 100%;
`
const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`
const ImgLivro = styled.img`
    width: 150px;
`
const DivTextos = styled.div`
    width: 100%;
    height: 100%;
`



function CardRecomenda({titulo, subtitulo, descricao, img}){
    return(
        <Card>
            <DivTextos>
                <h3>{titulo}</h3>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </DivTextos>
            <div>
                <ImgLivro src={img} alt="capa do livro recomendado"></ImgLivro>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda

