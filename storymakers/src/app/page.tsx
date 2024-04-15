import React from 'react';
import Layout from './layout';
import Carrousel from './carrousel';

export default function Home() {
    return (
        <Layout>
            {/* |||||||||||||||||||||||||||||||||| SELECTOR D'IDIOMA |||||||||||||||||||||||||||||||||| */}
            <div className="language-selector">
                <button className="language-button">ca</button>
                <div className="dropdown-content">
                    <a href="/es">es</a>
                    <a href="/en">en</a>
                </div>
            </div>
            <main className="flex flex-col items-center justify-center min-h-screen p-24">
                <div className="flex flex-row relative">
                    {/* |||||||||||||||||||||||||||||||||| LOGOS/BOTONS |||||||||||||||||||||||||||||||||| */}
                    { /* <div className="w-1/2 p-4 mr-20">
                        <img src="logo-storymakers.png" alt="Logotip - Storymakers" className="mb-10"/>
                        <img src="tagline-ca.png" alt="Logotip - Storymakers" className="mb-10"/>
                        <div className="flex justify-center">
                            <a href="#" className="button-with-hover">
                                <span className="hover-image"></span>
                                <img src="button-business-ca.png" alt="Left Button" className="button-image"/>
                            </a>
                            <a href="#" className="button-with-hover">
                                <span className="hover-image"></span>
                                <img src="button-user-ca.png" alt="Right Button" className="button-image"/>
                            </a>
                        </div>
                    </div>*/}
                </div>
                <img src="logo-storymakers.png" alt="Logotip - Storymakers" className="mb-10"/>
                    {/* |||||||||||||||||||||||||||||||||| GALERIA |||||||||||||||||||||||||||||||||| */}
                    <div className="grid w-1/2 p-4 ml-20 relative justify-center items-center">
                        <div className="col-start-1 row-start-1 relative">

                            <div className="absolute top-20 left-0 right-0 flex justify-center">
                                <Carrousel />
                            </div>
                        </div>
                    </div>
                {/* |||||||||||||||||||||||||||||||||| REPTES |||||||||||||||||||||||||||||||||| */}
                <h1 className="text-6xl font-bold mt-20 mb-10 text-[#FF4A00]">Reptes</h1>
                <div className="banner-container bg-[url('../../public/orange-reel.png')]">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx2024-challenge.png')]"></div>
                            <div
                                className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-ca.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx2024-challenge.png')]"></div>
                            <div
                                className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-ca.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx2024-challenge.png')]"></div>
                            <div
                                className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-ca.png')]"></div>
                        </div>
                    </div>
                </div>
                {/* |||||||||||||||||||||||||||||||||| MARQUES |||||||||||||||||||||||||||||||||| */}
                <h1 className="text-6xl font-bold mt-20 mb-10 text-[#0035FF]">Marques</h1>
                <div className="banner-container bg-[url('../../public/blue-reel.png')]">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx-business.png')]"></div>
                            <div
                                className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-ca.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx-business.png')]"></div>
                            <div
                                className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-ca.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx-business.png')]"></div>
                            <div
                                className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-ca.png')]"></div>
                        </div>
                    </div>
                </div>
                <div className="footer-image"></div>
            </main>
        </Layout>
    );
}
