import styled from "styled-components";

export const ContText = styled.div`
    width: 550px;
    font-family: 'Roboto', sans-serif;
`;

export const Main = styled.div`
    width: 1130px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 968px) { 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center; 
    }
`;

export const H1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-transform: capitalize;
    margin-bottom: 20px;
`;
export const H2 = styled.h2`
 width: 13%;
 border-bottom: 1px solid #ff2200;
 @media screen and (max-width: 968px) { 
    width: 20%;
 }
`;

export const H5 = styled.h5`
    color: #fff;
    font-size: 25px;
    text-transform: capitalize;
    margin-bottom: 25px;
    letter-spacing: 2px;
`;
export const Span = styled.span`
        color: #ff2200;
        font-weight: bold;
`;

export const P = styled.p`
    color: #fff;
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
`;

export const Boton = styled.button`
    background: #ff2200;
    color: #fff;
    text-decoration: none;
    border: 2px solid transparent;
    font-weight: bold;
    padding: 13px 30px;
    border-radius: 30px;
    transition: .4s;
    font-size: 13.5px;
     &:hover{
        background: transparent;
        border: 2px solid #ff2200;
        cursor: pointer;

     }
`;

export const Skills = styled.div`
    font-size: 20px;
`;

export const Barra = styled.ul`

`;