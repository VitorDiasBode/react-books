import styled from 'styled-components';

const Opcoes = styled.ul`
  display: flex;
`
const Opcao = styled.div`
  min-width: 120px;
  display: flex;
  font-size: 16;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto, index) => (
                <Opcao key={index}><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader