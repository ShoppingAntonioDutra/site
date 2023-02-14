import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imagem1 from '../public/imagem.jpg'
import Image from 'next/image';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className='w-screen md:w-auto '>
                <Carousel showArrows={true} autoPlay interval={3000}infiniteLoop transitionTime={800}>
                    <div className="h-44 md:h-[650px]">
                        <Image src={imagem1} alt="imagem1"
                        />
                    </div>
                    <div  className="h-44 md:h-[650px]">
                        <Image src={imagem1} alt="imagem2" 
                        className=""/>
                    </div>
                    <div className="h-44 md:h-[650px]">
                        <Image src={imagem1} alt="imagem3" 
                        />
                    </div>

                </Carousel>

            </div>
        );
    }
};