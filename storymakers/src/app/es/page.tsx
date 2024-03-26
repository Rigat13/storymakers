import React from 'react';
import Layout from '../layout';

export default function Page() {
    return (
        <Layout>
            <div className="foreground-image"></div>
            {/* |||||||||||||||||||||||||||||||||| SELECTOR D'IDIOMA |||||||||||||||||||||||||||||||||| */}
            <div className="language-selector">
                <button className="language-button">es</button>
                <div className="dropdown-content">
                    <a href="/">ca</a>
                    <a href="/en">en</a>
                </div>
            </div>
            <main className="flex flex-col items-center justify-center min-h-screen p-24">
                <div className="flex flex-row">
                    {/* |||||||||||||||||||||||||||||||||| LOGOS/BOTONS |||||||||||||||||||||||||||||||||| */}
                    <div className="w-1/2 p-4 mr-20">
                        <img src="logo-storymakers.png" alt="Logotip - Storymakers" className="mb-10"/>
                        <img src="tagline-es.png" alt="Logotip - Storymakers" className="mb-10"/>
                        <div className="flex justify-center">
                            <a href="#" className="button-with-hover-es">
                                <span className="hover-image"></span>
                                <img src="button-business-es.png" alt="Left Button" className="button-image" />
                            </a>
                            <a href="#" className="button-with-hover-es">
                                <span className="hover-image"></span>
                                <img src="button-user-es.png" alt="Right Button" className="button-image" />
                            </a>
                        </div>
                    </div>
                    {/* |||||||||||||||||||||||||||||||||| GALERIA |||||||||||||||||||||||||||||||||| */}
                    <div className="w-1/2 p-4 ml-20">
                        <img src="gallery-base.png" alt="Gallery base"/>
                    </div>
                    {/* |||||||||||||||||||||||||||||||||| TODO ADD CARROUSEL |||||||||||||||||||||||||||||||||| */}

                </div>
                {/* |||||||||||||||||||||||||||||||||| REPTES |||||||||||||||||||||||||||||||||| */}
                <h1 className="text-6xl font-bold mt-20 mb-10 text-[#FF4A00]">Retos</h1>
                <div className="banner-container bg-[url('../../public/orange-reel.png')]">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx2024-challenge.png')]"></div>
                            <div className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-es.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx2024-challenge.png')]"></div>
                            <div className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-es.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx2024-challenge.png')]"></div>
                            <div className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-es.png')]"></div>
                        </div>
                    </div>
                </div>
                {/* |||||||||||||||||||||||||||||||||| MARQUES |||||||||||||||||||||||||||||||||| */}
                <h1 className="text-6xl font-bold mt-20 mb-10 text-[#0035FF]">Marcas</h1>
                <div className="banner-container bg-[url('../../public/blue-reel.png')]">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx-business.png')]"></div>
                            <div className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-es.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx-business.png')]"></div>
                            <div className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-es.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx-business.png')]"></div>
                            <div className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-es.png')]"></div>
                        </div>
                    </div>
                </div>
                <div className="footer-image"></div>
            </main>
        </Layout>
    );
}
