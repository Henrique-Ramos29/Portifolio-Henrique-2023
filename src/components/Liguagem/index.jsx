import './index.css';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import db from '../../../db.json';
import { useEffect, useRef, useState } from 'react';

export default function Liguagem() {


    const [width, setWidth] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    
    const parametros = useParams();

    const dbRecomendado = db.filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id).slice(0, 8);

    return(
        <motion.div className='container'>
           <motion.h1  className='titulo' animate={{ y: 130 }}>Tecnologia que eu uso no meu dia</motion.h1>            
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }} >
                
                <motion.div className='inner'  
                   drag="x"
                   dragConstraints={{ right: 0, left: -width }} 
                   initial={{ x: 100 }} 
                   animate={{ x: 30 }}>

                    {dbRecomendado.map((post) => (
                        <motion.div 
                            className='item' 
                            key={post} 
                            animate={{ y: 0 }}
                            >
                            <motion.img className='imagem' src={post.img} alt="Foto Liguagem" width={170} height={220} />
                            <motion.h3 className='title'>{post.title}</motion.h3>
                        </motion.div>
                    ))}   

          </motion.div>
         </motion.div>
        </motion.div>
    )
}

