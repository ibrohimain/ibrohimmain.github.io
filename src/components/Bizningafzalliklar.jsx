import React from 'react'
import { title } from '../data/Title'

const Bizningafzalliklar = () => {
    return (
        <div className='w-[85%] mx-auto mt-20'>
            <div className='w-[100%] flex justify-center mb-10'>
                <h2 className='text-[30px] text-black font-semibold'>Bizning <span className='text-[#008075]'>Afzalliklarimiz</span></h2>
            </div>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6'>
                {title.map((item, index) => (
                    <div key={index} className='[transition:0.4s] custom-shadow custom-shadow-hover w-full 2xl:h-[170px] xl:h-[160px] lg:h-[150px] md:h-[150px] sm:h-[140px] h-[140px] bg-white rounded-[30px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-lg'>
                        <div className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[60%] sm:w-[60%] w-[70%] p-4 flex items-center justify-center '>
                            <div className='w-[90%] h-[85%] flex items-start flex-col justify-between gap-8'>
                                <h2 className='font-semibold'>{item.number}</h2>
                                <p className='text-black 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[13px]'>{item.name}</p>
                            </div>
                        </div>
                        <div className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[40%] sm:w-[40%] w-[30%] flex items-center justify-center'>
                            <img className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[55%] sm:w-[50%] w-[55%] h-[100%] object-cover rounded-[30px]' src={item.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bizningafzalliklar
