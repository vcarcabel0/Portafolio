import React from "react";
import {SlideCont, SlideDesc, Span} from "./MisProyectos.Elements"


const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt: "Proyecto 1",
        desc: "proyecto 1"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "Proyecto 2",
        desc: "proyecto 2"
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "Proyecto 3",
        desc: "proyecto 3"
    }
]

const slides = slidesInfo.map (slide =>(
    <SlideCont className="slide-container">
        <img src={slide.src} alt={slide.alt} className="slide-img" />
        <SlideDesc className="slide-desc">
            <Span>{slide.desc}</Span>
        </SlideDesc>
    </SlideCont>
))

export default slides;