import './App.css'
import Menu from './components/Menu'
import Sobre from './components/Sobre'
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
        <Menu /> 
        <Sobre />   
    </BrowserRouter>
  )
}

export default App
