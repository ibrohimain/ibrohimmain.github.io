import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const HomeText = () => {
    return (
        <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[100%]  hometext'>
            <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[100%] w-[100%] mx-auto pt-[100px] flex items-center justify-center'>
                <div className='w-[70%] 2xl:h-[700px] xl:h-[700px] lg:h-[650px] md:h-[650px] sm:h-[600px] h-[500px]  border-white flex flex-col items-center justify-center'>
                    <p className='text-white 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[12px] text-center'>Rasululloh ﷺ (sollallohu alayhi va sallam) hayotlari davomida to'rt marotaba Umra va bitta Haj qilganlar.</p>
                    <h2 className='2xl:text-[70px] xl:text-[66px] lg:text-[58px] md:text-[50px] sm:text-[44px] text-[24px] font-semibold text-center  text-white'>Allohning mehmoni bo'ling <br className='2xl:block xl:block lg:block md:block sm:hidden hidden' /> UMRA 2023 - 2024</h2>
                    <button className='2xl:px-10 xl:px-10 lg:px-10 md:px-8 sm:px-8 px-6 2xl:py-4 xl:py-4 lg:py-4 md:py-3 sm:py-3 py-2 rounded-[10px] text-white bg-[gray] bg-opacity-40 mt-4'>
                        <ScrollLink to='offer' smooth={true} duration={500} className='flex items-center gap-1 cursor-pointer'>
                            Ariza berish
                        </ScrollLink>
                    </button>
                    <Link to='https://t.me/Muxtorov_Omonxuja'>
                        <p className='mt-4 underline cursor-pointer'>Maslahat olish</p>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default HomeText
