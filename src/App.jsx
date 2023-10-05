import './App.css'
import Formacao from './components/Formacao';
import Menu from './components/Menu'
import Sobre from './components/Sobre'
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
        <Menu /> 
        <Sobre />   
        <Formacao />
    </BrowserRouter>
  )
}

export default App
