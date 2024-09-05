import React from 'react'

const Title = () => {
    return (
        <div className='title-bg'>
            <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[500px] mx-auto title flex items-center justify-center'>
                <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[80%] h-[70%] flex flex-col items-center justify-center'>
                    <h2 className='text-white 2xl:text-[40px] xl:text-[38px] lg:text-[38px] md:text-[34px] sm:text-[30px] text-[20px] font-semibold text-center'>Payg‘ambarimiz Muhammad (s.a.v.)ﷺ:</h2>
                    <div className='w-[50px] rounded-[20px] h-0 border-[2px] border-[#00806b] mt-10 mb-6'></div>
                    <p className='text-white text-center'>«Ramazonda qilingan bir Umra bir Haj bilan barobardir»</p>
                    <p className='text-[#00806b] mt-8'>Imom at-Termiziy</p>
                </div>
            </div>
        </div>
    )
}

export default Title
