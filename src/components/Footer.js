import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FooterCont, Box, P, Ul, Li, A, FotterB, Pbottom } from '../components/Footer.Element.js'

export default function Footer() {
  return (
    <FooterCont>
      <Box>
        <img src='./media/footer.png' style={{width: "200px"}}></img>
        <P>El arte desafia a la tecnologia y la tecnologia <br /> <span style={{color: "rgb(255, 85, 0)"}}>inspira al arte</span></P>
        <Ul>
          <Li><A href='https://www.linkedin.com/in/valentin-carcabelo-105938236/'> <FaLinkedinIn /> </A></Li>
          <Li><A href='https://twitter.com/Z0lTr0n'> <FaTwitter /> </A></Li>
          <Li><A href='https://www.instagram.com/vcarcabelo/'> <BsInstagram /> </A></Li>
        </Ul>
      </Box>
      <FotterB>
        <Pbottom>copyright &copy; 2022 VC. - DERECHOS RESERVADOS - </Pbottom>
      </FotterB>
    </FooterCont>
  )
}
