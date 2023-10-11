import { motion } from 'framer-motion';
import './index.css'

const Sobre = () => {
    return(
         <motion.div animate={{ y: 100 }} className='Div_Sobre'>
          <motion.h1 className='Titulo_Sobre'>Sobre</motion.h1>
                <motion.p className='Texto_Sobre'> 
                Como uma pessoa criativa que está sempre olhando para o futuro, tento criar projetos que 
                proporcionem a melhor experiência do usuário.
                Busco oportunidade para adquirir experiência que permita meu crescimento intelectual, 
                profissional e técnico, assim podendo contribuir com ela por muito tempo, a medida que crescemos juntos, 
                prezo sempre por trabalhar em equipe, cooperando com todos e ajudando da melhor maneira possível, com grande 
                satisfação em ensinar e aprender.
                </motion.p>
          </motion.div>
    )
}

export default Sobre;