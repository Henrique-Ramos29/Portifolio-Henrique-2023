import { motion } from 'framer-motion';
import styled from 'styled-components';

const Texto = styled.p`
   margin-top: 40px;
`

const Sobre = () => {
    return(
         <motion.div animate={{ y: 100}}>
           <Texto>Developer Front-end Jr. 
            Como uma pessoa criativa que está sempre olhando para o futuro, tento criar projetos que 
            proporcionem a melhor experiência do usuário.
            Busco oportunidade para adquirir experiência que permita meu crescimento intelectual, 
            profissional e técnico, assim podendo contribuir com ela por muito tempo, a medida que crescemos juntos, 
            prezo sempre por trabalhar em equipe, cooperando com todos e ajudando da melhor maneira possível, com grande 
            satisfação em ensinar e aprender.
            </Texto>
         </motion.div>
    )
}

export default Sobre;