import styled from "styled-components";

export const NavBarContainer = styled.div`
    width: 100%;
    height: 88px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: hsl (0,0, 100%, 0.1);
    backdrop-filter: blur(0.5rem);
    @media screen and (max-width: 968px){
        background-color:  rgba(0, 0, 0, 0.416);
        backdrop-filter: none;
    }
`;

export const NavBarWrapper = styled.div`
    margin:auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start ;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: #ebc88b;
    padding-left: 1rem;
`;

export const Logo = styled.img`
    width: 65px;
    padding-left: 10px;

`;

export const Menu = styled.ul`
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 100px;
    @media screen and (max-width: 968px){
        background-color: hsl (0,0, 100%, 0.1);
        backdrop-filter: blur(0.5rem);
        width: 100%;
        padding-right: 0;
        height: 98vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color:  rgba(0, 0, 0, 0.416);
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    &:hover{
        background-color: rgba(255, 85, 0, 0.636);
        transition: 0.5s ease;
    }
    @media screen and (max-width: 968px){
        height: 100px;
        font-size: 1.7rem;
        &:hover{
            background-color: transparent;
            border-bottom: 0;
        }
    }
`;

export const IconLogoMobile = styled.div`
    display:none;

    @media screen and (max-width: 968px) {
        display: flex;
        color: #f56a2a;
        font-size: 2rem;
        padding-right: 1rem;
    }
`;