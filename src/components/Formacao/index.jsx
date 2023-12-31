import { motion } from 'framer-motion';
import './index.css'
import alura from '../../../public/imagem/alura.png';

const Formacao = () => {
    return(
        <motion.div animate={{ y: 100 }} className='div_formacao'>
          <motion.h1 className='titulo_formacao'>Formação Acadêmica</motion.h1>
          <motion.img className='imagem_formacao' src={alura} width={230} height={265} />
          <motion.h2 className='subtitulo_formacao'>Front-End</motion.h2>
        </motion.div>
    )
}

export default Formacao;