import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto, index) => (
                <li className='opcao' key={index}><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader