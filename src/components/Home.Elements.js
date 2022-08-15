import styled from "styled-components";


export const Img = styled.div`
    width: auto;
    @media screen and (max-width: 968px){  
        
    }
`;

export const Porta = styled.h1`
    font-size: 45px;
    width: auto;
    font-family: 'Roboto', sans-serif;
    color: #fff;
`;

export const Name = styled.span`
    margin-left: -25px;
    font-size: 40px;
    color: #FF2E00;
`;

export const Bar = styled.span`
    color: #000;
    font-size: 100px;
    font-family: 'Courier New', Courier, monospace;
    margin-left: -25px;
`;

export const Effect = styled.span`
    font-size: 20px;
    margin-left: 50px;
    color: #fff;
    display: block;
    font-family:monospace;
    white-space: nowrap;
    border-right: 4px solid;
    width: 30ch;

    animation: typing 2s steps(30),
    blink .5s infinite step-end alternate;
    overflow: hidden;
    @keyframes typing {
        from {width:0}
    }
    @keyframes blink {
        50% {border-color:transparent}
    }
`;