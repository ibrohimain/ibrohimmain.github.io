import React from 'react'
import { travel } from '../data/travel'
import maslahat from '../assets/maslahat.png'
import { Link } from 'react-router-dom'

const Document = () => {
    return (
        <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[1100px] xl:h-[1100px] lg:h-[1100px] md:h-[1700px] sm:h-[1700px] h-[1200px] mx-auto document flex items-center justify-center'>
            <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[85%] w-[85%] 2xl:h-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[85%] bg-white shadow-2xl rounded-[30px] flex items-center justify-center'>
                <div className='w-[85%] 2xl:h-[85%] xl:h-[85%] lg:h-[85%] md:h-[95%] sm:h-[85%] h-[95%] 2xl:flex xl:flex lg:flex md:block sm:block block justify-between'>
                    <div className='2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[60%] sm:h-[60%] h-[70%]'>
                        <div className='w-[100%] h-[20%] leading-10'>
                            <h2 className='2xl:text-[40px] xl:text-[38px] lg:text-[36px] md:text-[34px] sm:text-[32px] text-[30px] text-[black] font-semibold'>Umra safari uchun</h2>
                            <span className='2xl:text-[40px] xl:text-[38px] lg:text-[36px] md:text-[34px] sm:text-[32px] text-[30px] text-[#00806b] font-semibold'>kerakli hujjatlar</span>
                        </div>
                        <div className='w-[100%] h-[80%] grid grid-cols-2 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 sm:gap-6 gap-4'>
                            {travel.map((item, index) => (
                                <div key={index} className=' w-[100%] 2xl:h-[270px] xl:h-[270px] lg:h-[270px] md:h-[270px] sm:h-[270px] h-[250px] '>
                                    <div>
                                        <img src={item.img} alt="img" className='w-[140px] rounded-[30px]' />
                                    </div>
                                    <div>
                                        <h2 className='text-black 2xl:text-[24px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] mt-5'>{item.common_name}</h2>
                                        <p className='text-[#adadad] mt-6 w-[100%] 2xl:text-[18px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[16px] text-[10px] '>{item.text_name}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='2xl:w-[40%] xl:w-[40%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[40%] sm:h-[40%] h-[30%] flex items-center justify-end'>
                        <div className='2xl:w-[350px] xl:w-[350px] lg:w-[350px] md:w-[100%] sm:w-[100%] w-[100%] h-[90%]'>
                            <div className='w-[100%] h-[70%]'>
                                <img src={maslahat} alt="img" className='w-[100%] h-[100%] shadow-2xl rounded-[30px]' />
                            </div>
                            <div className='w-[100%] h-[30%]'>
                                <Link to='https://t.me/Muxtorov_Omonxuja'>
                                    <button className='w-[100%] h-[60px] bg-[#00806b] text-white text-[18px] font-medium rounded-[15px] mt-10'>Bepul Maslahat</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Document
