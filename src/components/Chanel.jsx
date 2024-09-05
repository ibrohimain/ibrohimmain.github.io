import React from 'react';
import { BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Chanel = () => {
  return (
    <div className="w-full chanel-bg pt-20">
      <div className="w-full h-[650px] chanel flex items-center justify-center">
        <div className="w-[85%] h-[60%] flex flex-wrap">
          <div className="w-full lg:w-1/2 h-[50%] lg:h-full flex flex-col items-center justify-center">
            <p className="text-white text-center">«Baqara» surasi, 196-oyat</p>
            <div className="w-[100px] h-0 border-[2px] border-[#00806b] mt-6 mb-4"></div>
            <h2 className="text-white text-[20px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px] font-semibold text-center">
              «Alloh uchun Haj va Umrani tugal ado eting»
            </h2>
          </div>
          <div className="w-full lg:w-1/2 h-[50%] flex items-center justify-center">
            <div className="w-[100%] sm:w-[70%] md:w-[60%] h-[60%]">
              <ul className="w-full grid grid-cols-3 gap-4">
                <a href="https://t.me/AL_Saray_Travel" target="_blank" rel="noopener noreferrer">
                  <li className="w-full h-[100px] bg-[gray] bg-opacity-25 border-[3px] border-[#00806b] cursor-pointer hover:bg-[#00806b] transition duration-300 rounded-[5px] flex items-center justify-center">
                    <BsTelegram className="text-white text-[30px]" />
                  </li>
                </a>
                <a href="https://www.instagram.com/al_saray_travel/" target="_blank" rel="noopener noreferrer">
                  <li className="w-full h-[100px] bg-[gray] bg-opacity-25 border-[3px] border-[#00806b] cursor-pointer hover:bg-[#00806b] transition duration-300 rounded-[5px] flex items-center justify-center">
                    <BsInstagram className="text-white text-[30px]" />
                  </li>
                </a>
                <a href="https://www.facebook.com/Al.Saray.Travel" target="_blank" rel="noopener noreferrer">
                  <li className="w-full h-[100px] bg-[gray] bg-opacity-25 border-[3px] border-[#00806b] cursor-pointer hover:bg-[#00806b] transition duration-300 rounded-[5px] flex items-center justify-center">
                    <FaFacebook className="text-white text-[30px]" />
                  </li>
                </a>
              </ul>
              <a href="https://t.me/Muxtorov_Omonxuja" target="_blank" rel="noopener noreferrer">
                <button className="w-full h-[80px] bg-[#00806b] text-white text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold mt-6 rounded-[8px]">
                  Yangiliklardan habardor bo'ling
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chanel;
