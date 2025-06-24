import './App.css';
import Logo from './componentes/Logo/index';
import iconePerfil from './imagens/perfil.svg';
import iconeSacola from './imagens/sacola.svg';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const icones = [iconePerfil, iconeSacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className='opcoes'>
          { textoOpcoes.map( (texto, index) => (
            <li className='opcao' key={index}><p>{texto}</p></li>
          ))}
        </ul>

        <ul className='icones'>
          { icones.map( (icone, index) => (
            <li className='icone' key={index}><img src={icone} alt='icone'></img></li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
