import styled from "styled-components";

export const FooterCont = styled.div`
    background: #111;
    height: auto;
    width: 100%;
    font-family: "Roboto", sans-serif;
    padding-top: 40px;
    color: #fff;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export const H3 = styled.h3`
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
`;


export const P = styled.p`
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
`;

export const Li = styled.li`
    margin: 0 10px;
`;
export const A = styled.a`
    text-decoration: none;
    color: #fff;
    transition: 0.5s all ease-in;
    font-size: 25px;
    &:hover{
        color:rgb(255, 85, 0);
        transform: scale(120%);
    }
`;
export const FotterB = styled.div`
    background: #000;
    width: 100%;
    padding: 20px 0;
    text-align: center;
`;

export const Pbottom = styled.p`
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
`;
export const Span = styled.span`
    text-transform: uppercase;
    opacity: 0.4;
    font-weight: 200;
`;