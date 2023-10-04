import styled from 'styled-components';

const Botao = styled.button`
   width: 115px;
   height: 30px;
   border-radius: 10px;
`;

const BotaoPrincipal = ({ children }) => {
    return(
        <>
        <Botao>{children}</Botao>
        </>
    )
}

export default BotaoPrincipal;