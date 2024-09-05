import React from 'react'
import Slider from 'react-slick'
import { offer } from '../data/offer'
import { Link as ScrollLink } from 'react-scroll'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { carousel } from '../data/Carousel'

const FotoCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='w-full h-[500px] offer'>
            <div className='w-[85%] mx-auto pt-20'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h2 className='text-black font-semibold text-[30px]'>FOTO <span className='text-[#00806b]'>GALEREYA</span></h2>
                </div>
                <div className='w-full mt-10'>
                    <Slider {...settings}>
                        {carousel.map((item, index) => (
                            <div key={index} className='px-4'>
                                <div className='custom-shadow custom-shadow-hover w-full h-[300px] bg-white rounded-[30px] cursor-pointer transform transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-lg flex items-center justify-center'>
                                    <div className='w-full h-[90%] flex items-center justify-center'>
                                        <img src={item.img} alt="alsaray" className='w-[90%] h-[95%] rounded-[5px] object-contain' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FotoCarousel
