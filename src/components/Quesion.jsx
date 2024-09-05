import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
    <div className="border border-gray-200 rounded mb-2">
        <button
            className="w-full rounded-[10px] flex justify-between items-center p-4 bg-gray-100 focus:outline-none"
            onClick={onClick}
        >
            <span className='text-[black] font-semibold'>{title}</span>
            {isOpen ? (
                <div className='border px-2 py-2 rounded-[50%] bg-[#00806d] '>
                    <BiDownArrow className="text-white" />
                </div>
            ) : (
                <div className='border px-2 py-2 rounded-[50%] bg-[gray] bg-opacity-10'>
                    <BiUpArrow className=" text-[#00806d]" />
                </div>
            )}
        </button>
        {isOpen && (
            <div className="p-4 text-black text-[14px] mt-4 bg-white rounded-[10px]">
                {Array.isArray(content) ? (
                    <ul className="list-disc pl-5">
                        {content.map((line, index) => (
                            <li key={index} className="mb-1">{line}</li>
                        ))}
                    </ul>
                ) : (
                    content
                )}
            </div>
        )}
    </div>
);

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            title: "Umraning Hajdan farqlari?",
            content: [
                "Umra farz emas balki sunnat",
                "Umraning muayyan vaqti yo‘q;",
                "Arofatda turish yo‘q;",
                "Muzdalifada turish yo‘q;",
                "Shaytonga tosh otish yo‘q;",
                "Ikki namozni jamlash yo‘q;",
                "Xutba yo‘q;",
                "Tavofi qudum va vido yo‘q.",
            ],
        },
        {
            title: "Umra so'zi nimani anglatadi?",
            content: "Umra so'zi lug‘atda “Ziyorat qilish” ma'nosini anglatadi. Istilohda esa “maxsus shartlar bilan Baytullohni ziyorat qilish umra deyiladi”.",
        },
        {
            title: "Umra ibodatida nima amallar bajariladi",
            content: [
                "Ehrom bog‘lanadi",
                "Ka'bani tavof qilinadi",
                "Safo va Marva orasida sa'yi qilinadi",
                "Soch to‘liq oldiriladi yoki qisqartiriladi",

            ]
        },
        {
            title: "Umraga 18 yoshgacha bo'lgan bola bilan borish mumkinmi?",
            content: "Ha, umra ziyoratiga 12 yoshdan bola bilan borish mumkin.",
        },
        {
            title: "Umra safarini turoperatorsiz ziyorat qilsa bo'ladimi",
            content: "Afsuski yo'q, Saudiya Arabistoni Podshohligi elchixonasi mamlakatga mustaqil ravishda kirishni xohlovchi ziyoratchilarga viza bermaydi. Hujjatlar faqat guruhlab beriladi.",
        },
        {
            title: "Umrani qachon va qaysi vaqt bajarsa bo'ladi.",
            content: "Umra ziyoratini muayyan vaqti yo'q ya'ni yil o'n ikki oy davomida bajarish mumkin ammo Haj uchun ajratilgan kunlar (Arafa kuni, Iydu-Qurbon hayitining birinchi kuni va tashriq (Zulhijjaning 11-, 12-, 13-kunlari) bundan mustasno. Chunki bu kunlar Haj arkonlari bajariladigan kunlardir.",
        },
        {
            title: "Ziyoratchilar uchun qaysi vaksina bilan emlanish talab etiladi",
            content: "Umra safariga boruvchi fuqaro COVID-19 ga qarshi “Astra-Zeneca”, “Moderna”, “Pfizer” yoki “Johnson & Johnson” vaksinalari bilan to‘liq emlanib, sertifikatga ega bo‘lishi lozim. Talab qilingan vaksinalarni emas, balki “Sputnik V” va O‘zbekiston-Xitoy kabi vaksinalar bilan to‘liq emlangan fuqarolar yuqorida sanalgan vaksinalardan biri bilan 1 marta emlanishi kifoya qiladi.",
        },


    ];

    return (
        <div className='w-[100%] question h-[auto] pt-6 pb-6'>
            <div className='w-[85%] h-[100%] mx-auto'>
                <div className="w-[100%] mx-auto grid grid-cols-1 gap-4">
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => toggleOpen(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
