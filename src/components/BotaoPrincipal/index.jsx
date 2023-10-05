import { motion } from 'framer-motion';
import './index.css';

const BotaoPrincipal = ({ children }) => {
    return(
        <>
        <motion.button className='Botao' >{children}</motion.button>
        </>
    )
}

export default BotaoPrincipal;