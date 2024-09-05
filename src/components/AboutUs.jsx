import React from 'react'
import Bizningafzalliklar from './Bizningafzalliklar'
import { Link as ScrollLink } from 'react-scroll'

const AboutUs = () => {
    return (
        <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[1500px] xl:h-[1500px] lg:h-[1480px] md:h-[1750px] sm:h-[1650px] h-[2500px] aboutus pb-20'>
            <div className='2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[85%] w-[85%] mx-auto pt-20'>
                <div>
                    <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] flex justify-center'>
                        <h2 className='text-[30px] text-black font-semibold'>Biz <span className='text-[#00806b]'>haqimizda</span></h2>
                    </div>
                    <div className='w-[100%] 2xl:flex xl:flex lg:flex md:flex sm:block block justify-between mt-10'>
                        <div className='2xl:w-[49%] xl:w-[49%] lg:w-[48%] md:w-[60%] sm:w-[100%] w-[100%] 2xl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[450px] sm:h-[400px] h-[550px] bg-white rounded-[30px] shadow-2xl flex items-center justify-center'>
                            <div className='w-[90%] h-[80%]'>
                                <div className='w-[100%] h-[50%]'>
                                    <p className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px] text-black'>2023-yilda Allohning marhamati bilan Umra safariga ziyoratchilarni yuborish dasturi – AL SARAY TRAVEL dasturini yo‘lga qo‘ydik. Dasturni boshlaganimizdan asosiy maqsad musulmonlarga Umra ziyoratini ado etishda yordam ko'rsatib, Islomning beshinchi rukni bo'lmish Haj amalni bajarishga ko'maklashishdir.</p>
                                    <p className='2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px] text-black 2xl:mt-[40px] xl:mt-[38px] lg:mt-[36px] md:mt-[10px] sm:mt-[30px] mt-[30px]'>Allohning marhamati bilan bu fursat ichida - bizning jamoamiz juda ko'p tajriba va bilimlarni to'plab ulgurdi. Umra ziyoratini eng yaxshi sharoitlarda ado etishingiz uchun ushbu tajribalarni qo'llashga tayyormiz.</p>
                                    <ScrollLink
                                        to='offer'
                                        smooth={true}
                                        duration={500}
                                        className='flex items-center gap-1 cursor-pointer'>
                                        <button className='mt-8 2xl:px-10 xl:px-10 lg:px-10 md:px-8 sm:px-8 px-6 2xl:py-4 xl:py-4 lg:py-4 md:py-3 sm:py-3 py-2 rounded-[10px] text-white bg-[#008066]  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[15px] sm:text-[14px] text-[13px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden'>Ariza berish</button>

                                    </ScrollLink>
                                </div>
                                <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex justify-between  w-[100%] h-[45%] mt-8'>
                                    <div className='2xl:w-[47%] xl:w-[47%] lg:w-[47%] md:w-[100%] sm:w-[47%] w-[47%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[48%] sm:h-[100%] h-[95%] bg-white rounded-[20px] about1'></div>
                                    <div className='2xl:w-[47%] xl:w-[47%] lg:w-[47%] md:w-[100%] sm:w-[47%] w-[47%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[48%] sm:h-[100%] h-[95%] bg-white rounded-[20px] about2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-3 sm:mt-0 mt-0'></div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[49%] xl:w-[49%] lg:w-[48%] md:w-[38%] sm:w-[100%] w-[100%] 2xl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[450px] sm:h-[450px] h-[400px] 2xl:flex xl:flex lg:flex md:block sm:hidden hidden justify-between 2xl:mt-0 lg:mt-0 xl:mt-0 md:mt-0 sm:mt-8 mt-8'>
                            <div className='2xl:w-[47%] xl:w-[47%] lg:w-[47%] md:w-[100%] sm:w-[48%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[48%] sm:h-[100%] h-[70%] bg-white rounded-[30px] about1'></div>
                            <div className='2xl:w-[47%] xl:w-[47%] lg:w-[47%] md:w-[100%] sm:w-[48%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[48%] sm:h-[100%] h-[70%] bg-white rounded-[30px] about2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-3 sm:mt-0 mt-4'></div>
                        </div>
                    </div>
                </div>
            </div >
            <Bizningafzalliklar />
        </div >
    )
}

export default AboutUs
