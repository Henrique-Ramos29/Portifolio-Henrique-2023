import { motion } from 'framer-motion';
import './index.css';

const BotaoPrincipal = ({ children }) => {
    return(
        <>
        <motion.button animate={{ scale: 1.0 }} className='Botao' >{children}</motion.button>
        </>
    )
}

export default BotaoPrincipal;