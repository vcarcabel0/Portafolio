import React, { useState } from 'react';
import {Link } from "react-router-dom";
import { Collapse } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import { Boton, ContText, H1, H5, Main, P, Span, Skills, Barra, H2 } from './SobreMi.Elements';
import { DiJavascript1, DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { BsTerminalFill, BsBootstrapFill } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
import { SiVisualstudio } from "react-icons/si"

export default function SobreMi() {

  const [open, setOpen] = useState(false);

  return (
    <section className='about' id='sobremi'>
      <H2 className='text-center text-light '>Sobre Mi</H2>
      <br />
      <Main>
        <img src='./media/yo.jpeg' className='imgSM' style={{ width: "250px" }}></img>
        <ContText>
          <H1>Valentin Carcabelo</H1>
          <H5>Desarrollador <Span> Front-end </Span></H5>
          <P className='text-center'>
            Soy un Desarrollador web Front-end que esta en busca de su primera experiencia laboral.
            Estudie Desarrollo web en un curso de <a href='https://matea.social'>Matea</a>.
            </P>
          <Boton
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Habilidades
          </Boton>
          <Collapse in={open} className="skills">
            <Skills id="example-collapse-text" className='p-5 text-light'>
              <Barra className='p-2'>JavaScript
              <DiJavascript1 className='float-start fs-1 m-2'/>
              <ProgressBar now={90} variant="danger" className='barra' />
              </Barra>
              <Barra className='p-3'>React
              <DiReact className='float-start fs-1 m-2'/>
              <ProgressBar now={85} variant="danger" className='barra' />
              </Barra>
              <Barra className='p-3'>CSS
              <DiCss3 className='float-start fs-1 m-2'/>
              <ProgressBar now={70} variant="danger" className='barra' />
              </Barra>
              <Barra className='p-3'>HTML
              <DiHtml5 className='float-start fs-1 m-2'/>
              <ProgressBar now={100} variant="danger" className='barra' />
              </Barra>
              <Barra className='p-3'>BootStrap
              <BsBootstrapFill className='float-start fs-1 m-2'/>
              <ProgressBar now={90} variant="danger" className='barra' />
              </Barra>
              <Barra className='p-3'>Terminal
              <BsTerminalFill className='float-start fs-1 m-2'/>
              <ProgressBar now={75} variant="danger" className='barra' />
              </Barra>
              <Barra className='p-3'>GitHub
              <AiFillGithub className='float-start fs-1 m-2'/>
              <ProgressBar now={50} variant="danger" className='barra' />
              </Barra>
              <Barra className='p-3'>VisualStudioCode
              <SiVisualstudio className='float-start fs-1 m-2'/>
              <ProgressBar now={77} variant="danger" className='barra' />
              </Barra>

              {/* Este seria el "boton" */}

              <Link type="button" to="/SobreMiSection" className='btn-SMi btn btn-outline-light'>Conoceme Más</Link>
            
         
            </Skills>
          </Collapse>
        </ContText>
      </Main>
    </section>
  )
}
