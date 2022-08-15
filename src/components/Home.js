import React from 'react'
import LazyHero from 'react-lazy-hero';
import { Name, Porta, Bar, Effect} from './Home.Elements';

export default function Home() {
  return (
    <div id='home'>
      <LazyHero imageSrc="./media/heroSL.png"
      opacity={0}
      minHeight={'80vh'}>
        <Porta>Portafolio <Bar>|</Bar> <Name>Valentin</Name> </Porta>
        <Effect>Mis proyectos y conocimientos</Effect>
      </LazyHero>
    </div>
  )
}
