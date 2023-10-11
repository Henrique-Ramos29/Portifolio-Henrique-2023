import { motion } from 'framer-motion';
import './index.css';

const BotaoPrincipal = ({ children }) => {
    return(
        <>
            <motion.button 
                    whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    }} 
                    className='Botao'
            >
                    {children}
             </motion.button>
        </>
    )
}

export default BotaoPrincipal;