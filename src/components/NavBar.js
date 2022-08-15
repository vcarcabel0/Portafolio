import React, { useState } from 'react'
import { IconLogo, IconLogoMobile, Logo, Menu, MenuItem, NavBarContainer, NavBarWrapper, N1 } from './NavBar.Elements.js'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function NavBar() {
    const [click, setClick] = useState(false)
    const changeClick = () =>{
        setClick(!click)
    };
  return (
    <>
    <NavBarContainer>
        <NavBarWrapper>
            <IconLogo>
                <Logo src='./media/logo.png'></Logo>
            </IconLogo>

            <IconLogoMobile onClick={() =>changeClick()}>
                {click ? <FaTimes /> : <FaBars /> }
            </IconLogoMobile>

            <Menu click ={click}>
                <MenuItem onClick={() =>changeClick()}>
                    <Link  type='button' to="home" spy={true} smooth={true} offset={50} duration={100} className='links'>Home</Link>
                </MenuItem>
                <MenuItem onClick={() =>changeClick()}>
                    <Link type='button' to="sobremi" spy={true} smooth={true} offset={50} duration={100} className='links'>Sobre mi</Link>
                </MenuItem>
                <MenuItem onClick={() =>changeClick()}>
                    <Link type='button' to="proyectos" spy={true} smooth={true} offset={50} duration={100} className='links'>Mis proyectos</Link>
                </MenuItem>
            </Menu>
        </NavBarWrapper>
    </NavBarContainer>
    </>
  )
}
