import React from 'react'
import Slider from 'react-slick'
import { offer } from '../data/offer'
import { Link as ScrollLink } from 'react-scroll'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Offer = () => {
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
        <div className='w-full h-[1000px] offer'>
            <div className='w-[85%] mx-auto pt-20'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h2 className='text-black font-semibold text-[30px]'>Maxsus takliflar <span className='text-[#00806b]'>va yo’nalishlar</span></h2>
                    <p className='text-black text-[20px] mt-4'>Umra va Haj safari tariflar</p>
                </div>
                <div className='w-full mt-10'>
                    <Slider {...settings}>
                        {offer.map((item, index) => (
                            <div key={index} className='px-4'>
                                <div className='custom-shadow custom-shadow-hover w-full h-[600px] bg-white rounded-[30px] cursor-pointer transform transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-lg'>
                                    <div className='w-full h-[50%] flex items-center justify-center'>
                                        <img src={item.img} alt="" className='w-[90%] h-[85%] rounded-[5px]' />
                                    </div>
                                    <div className='w-full h-[50%]'>
                                        <div className='w-[90%] mx-auto flex flex-col items-center justify-center'>
                                            <h2 className='text-black'>{item.name}</h2>
                                            <div className='w-[50px] h-0 border-[1px] border-[gold] mt-4 mb-4'></div>
                                            <p className='text-[#00806b]'>{item.data}</p>
                                            <div className='w-full h-0 border-[1px] border-[black] mt-6 mb-6'></div>
                                            <h2 className='text-black mb-4'>{item.price}</h2>
                                            <h2 className='text-black font-bold text-[30px]'>{item.relly_price} <span className='text-[18px] font-normal'>USD</span></h2>
                                            <button className='2xl:px-8 xl:px-8 lg:px-8 md:px-8 sm:px-8 px-6 2xl:py-2 xl:py-2 lg:py-2 md:py-2 sm:py-2 py-2 rounded-[6px] bg-[#00806b] text-white mt-6'>
                                                <ScrollLink to='register' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                                                    Buyurtma berish
                                                </ScrollLink>
                                            </button>
                                        </div>
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

export default Offer
