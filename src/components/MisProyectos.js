import React from 'react'
 import { CarouselCont, CarouselTitle } from './MisProyectos.Elements' 
 import Carousel, { infinitePlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
 import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides'

export default function MisProyectos() {
  return (
    <CarouselCont id='proyectos'>
      <CarouselTitle>
        <h2 className='fs-1 fw-bolder'>Mis Proyectos</h2>
      </CarouselTitle>

      <Carousel 
        plugins={['arrows','fastSwipe','centered',
        {
          resolve: infinitePlugin,
          options: {
            numberOfInfiniteClones: 200,
          },
        }
      ]}
        draggable={false}
        slidesPerPage={3}
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          968: {
            plugins: [
              'centered', 'fastSwipe','autoplay',
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 1
               }
             },

             {
              resolve: infinitePlugin,
              options: {
                numberOfInfiniteClones: 200,
              },
            },

           ]
          },
        }}
      />
    </CarouselCont>
  )
}
