import styled from 'styled-components';
import Foto from '../../../public/imagem/foto.jpeg';
import BotaoPrincipal from '../BotaoPrincipal';
import {motion} from 'framer-motion';


const Logo = styled.h1`
    font-size: 20px;
`;

const Imagem = styled.img`
  border-radius: 360px;
`;

const DivBotao = styled.div`
   align-items: center;
   display: flex;
   justify-content: center;
   gap: 15px;
   margin-top: 10px;

`;

const Menu = () => {
    return(
        <>
        <motion.div animate={{ y: 100 }}>
            <Imagem src={Foto} width={180} height={180}/>
          <Logo>Olá meu nome é Henrique Ramos</Logo>
          <Logo>Developer Front-End</Logo>
        <DivBotao>
            <BotaoPrincipal>Curriculo</BotaoPrincipal>
            <BotaoPrincipal>Contato</BotaoPrincipal>
        </DivBotao>
        </motion.div>
        </>

    )
}

export default Menu;