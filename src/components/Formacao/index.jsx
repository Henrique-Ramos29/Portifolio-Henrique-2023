import { motion } from 'framer-motion';
import './index.css'
import alura from '../../../public/imagem/alura.png';

const Formacao = () => {
    return(
        <motion.div animate={{ y: 100 }} className='div_formacao'>
          <motion.h1 className='titulo_formacao'>Formação Acadêmica</motion.h1>
          <motion.img className='imagem_formacao' src={alura} width={200} height={150} />
          <motion.h2 className='subtitulo_formacao'>Front-End</motion.h2>
          <motion.h2 className='subtitulo_formacao'>React</motion.h2>
          <motion.h2 className='subtitulo_formacao'>Business Agility</motion.h2>
          <motion.h2 className='subtitulo_formacao'>Sql com MySql_Server</motion.h2>
        </motion.div>
    )
}

export default Formacao;