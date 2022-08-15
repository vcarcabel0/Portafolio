import styled from 'styled-components';
  
export const BotonUp = styled.div`
   width: 50px;
   height: 50px;
   background-color: salmon;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   border-radius: 50%;
   font-size: 20px;
   position: fixed;
   bottom: 20px;
   left: 20px;
   cursor: pointer;
   border: 4px solid transparent;
   transition: all 300ms ease;
   
   &:hover{
    transform: scale(1.1);
    border-color: rgba(0,0,0,0.1);
   }
`;