import './App.css'
import Formacao from './components/Formacao';
import Liguagem from './components/Liguagem';
import Menu from './components/Menu'
import Rodape from './components/Rodape';
import Sobre from './components/Sobre'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <Menu /> 
        <Sobre />   
        <Formacao />
        <Liguagem />
        <Rodape />
    </BrowserRouter>
  )
}

export default App
