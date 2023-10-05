import './index.css'
import Foto from '../../../public/imagem/foto.jpeg';
import BotaoPrincipal from '../BotaoPrincipal';
import {motion} from 'framer-motion';


const Menu = () => {
    return(
        <>
        <motion.div animate={{ y: 100 }}>
            <motion.img className="Imagem_Henrique" src={Foto} width={200} height={200} />
          <motion.h1 className='Titulo' >Olá meu nome é Henrique Ramos</motion.h1>
          <motion.h2 className='Subtitulo' >Developer Front-End</motion.h2>
        <motion.div className='Div_Botao' >
            <BotaoPrincipal>Curriculo</BotaoPrincipal>
            <BotaoPrincipal>Contato</BotaoPrincipal>
        </motion.div>
        </motion.div>
        </>

    )
}

export default Menu;