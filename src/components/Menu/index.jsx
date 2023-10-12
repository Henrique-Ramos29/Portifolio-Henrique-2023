import './index.css'
import Foto from '../../../public/imagem/henrique.jpg';
import BotaoPrincipal from '../BotaoPrincipal';
import {motion} from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Typical from 'react-typical'

const Menu = () => {
    

    return(
        <>
        <motion.div animate={{ y: 90 }}>
            <motion.img
            initial={{ y: -350 }} 
            animate={{ y: -10, scale: 1.7}}
            className="Imagem_Henrique" src={Foto} width={150} height={150} />
            <motion.h1 className='Titulo' >Hi, I'am Henrique {''} 
              <Typical loop={Infinity}
                       
                       steps={[
                        'Developer',
                        1000,
                        'Front-End',
                        1000,
                    ]} />
            </motion.h1>     
        <motion.div animate={{ scale: 1.0 }} className='Div_Botao' >
            <BotaoPrincipal>Curriculo</BotaoPrincipal>
            <BotaoPrincipal>Contato</BotaoPrincipal>
        </motion.div>
            <motion.div className='containerRedeSocial' >
                    <a className='icone' href="https://github.com/Henrique-Ramos29/">
                      <AiFillGithub size={30}/>
                    </a>
                    <a className='icone' href="https://www.linkedin.com/in/henrique-ramos2023/">
                      <AiFillLinkedin size={30} />
                    </a>
                    <a className='icone' href="https://www.instagram.com/henrique_ramos27/?igshid=Mzc0YWU1OWY=">
                      <AiFillInstagram size={30} />
                    </a>
            </motion.div>
        </motion.div>
        </>

    )
}

export default Menu;