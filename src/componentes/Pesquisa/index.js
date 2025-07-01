import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa'

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

const ListaLivros = styled.ul`
    justify-content: center;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 32px;
`

const Livro = styled.li`
    width: 210px;
    background-color:rgba(17, 17, 17, 0.31);
    border-radius: 20px;
    box-shadow: 0 6px 12px rgb(0,0,0,0.2);
    transition: 0.2s;
    padding: 20px;

    p{
        letter-spacing: 2px;
        font-weight: 700;
    } 

`

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    console.log(livrosPesquisados);
    
    return (
        <PesquisaContainer>
            <Titulo>Qual livro você está buscando?</Titulo>
            <Subtitulo>Encontre-o aqui</Subtitulo>
            <Input
                placeholder="Escreva o livro que você busca"
                onChange={evento =>{
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter( livro => {
                        return livro.nome
                        .toLocaleLowerCase()
                        .includes(textoDigitado.toLowerCase())
                    });
                    setLivrosPesquisados(resultadoPesquisa);
                }}
            />
            <h1>Livros</h1>
            <ListaLivros>
                {livrosPesquisados.map( livro => (
                    <Livro>
                        <img src={livro.src} alt={'img'+livro.nome}></img>
                        <p>{livro.nome}</p>
                    </Livro>
                ))}

            </ListaLivros>
            

        </PesquisaContainer>
    )
}

export default Pesquisa