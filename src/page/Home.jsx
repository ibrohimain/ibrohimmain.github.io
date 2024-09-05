import React from 'react';
import Header from '../components/Header';
import HomeText from '../components/HomeText';
import AboutUs from '../components/AboutUs';
import Title from '../components/Title';
import Offer from '../components/Offer';
import Partner from '../components/Partner';
import Chanel from '../components/Chanel';
import FotoCarousel from '../components/FotoCarousel';
import Document from '../components/Document';
import Muttafqun from '../components/Muttafqun';
import VideoCarousel from '../components/VideoCarousel';
import Quesion from '../components/Quesion';
import Register from '../components/register/Register';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='2xl:w-[1500px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-auto mx-auto'>
            <div className='bg-img w-[100%] 2xl:h-[1000px] xl:h-[900px] lg:h-[800px] md:h-[800px] sm:h-[800px] h-[650px]'>
                <Header />

                <section id='homeText'>
                    <HomeText />
                </section>

                <section id='aboutUs'>
                    <AboutUs />
                </section>

                <section id='title'>
                    <Title />
                </section>

                <section id='offer'>
                    <Offer />
                </section>

                {/* <section id='partner'>
                    <Partner />
                </section> */}

                <section id='chanel'>
                    <Chanel />
                </section>

                <section id='document'>
                    <Document />
                </section>

                <section id='muttafqun'>
                    <Muttafqun />
                </section>

                <section id='fotoCarousel'>
                    <FotoCarousel />
                </section>

                <section id='videoCarousel'>
                    <VideoCarousel />
                </section>

                <section id='quesion'>
                    <Quesion />
                </section>

                <section id='register'>
                    <Register />
                </section>

                <section id='footer'>
                    <Footer />
                </section>
            </div>
        </div>
    );
}

export default Home;

