import { motion } from 'framer-motion';
import './index.css';

const Rodape = () => {
    return (
        <motion.footer animate={{ y: 100 }} className='Div_rodape'>
            <motion.h3 className='Nome_developer'>Developer Henrique</motion.h3>
        </motion.footer>
    )
}

export default Rodape;