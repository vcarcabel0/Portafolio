import styled from "styled-components";

export const CarouselCont = styled.div`
    display: flex;
    vertical-align: center;
    align-items: center;
    background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0.223),#111);
    padding: 30px 0 30px 0;
    @media screen and (max-width: 968px){
        flex-direction: column;
    }
`;

export const CarouselTitle = styled.div`
    color: white;
    width: 40%;
    text-align: center;
    font-size: 30px;
    padding: 0 100px 0 100px;
    @media screen and (max-width: 968px){
        width: 100%;
        text-align: center;
        padding: 50px 0 50px 0;
    }
`;

export const SlideCont = styled.div`
    height: 80%;
    border-radius: 40px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    
    @media screen and (max-width: 968px){
        width: 100%;
    }
`;
export const SlideDesc = styled.div`
    background-color: black;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    padding-left: 30px;
    border-top-left-radius: 20px;
    opacity: 0.8;
    
`;
export const Span = styled.span`
    color: white;
    display: block;
    font-size: 22px;
    padding: 20px 0 20px 10px;
`;