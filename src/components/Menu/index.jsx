import './index.css'
import Foto from '../../../public/imagem/henrique.jpg';
import BotaoPrincipal from '../BotaoPrincipal';
import {motion} from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";


const Menu = () => {
    

    return(
        <>
        <motion.div animate={{ y: 90 }}>
            <motion.img
            initial={{ y: -350 }} 
            animate={{ y: -10, scale: 1.7}}
            className="Imagem_Henrique" src={Foto} width={150} height={150} />
            <motion.h1 className='Titulo' >Olá meu nome é Henrique Ramos</motion.h1>
            <motion.h2 className='Subtitulo' >Developer Front-End</motion.h2>
        <motion.div animate={{ scale: 1.0 }} className='Div_Botao' >
            <BotaoPrincipal>Curriculo</BotaoPrincipal>
            <BotaoPrincipal>Contato</BotaoPrincipal>
        </motion.div>
            <motion.div className='containerRedeSocial' >
                <AiFillGithub size={35}/>
                <AiFillLinkedin size={35} />
                <AiFillInstagram size={35   } />
            </motion.div>
        </motion.div>
        </>

    )
}

export default Menu;