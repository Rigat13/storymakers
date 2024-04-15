"use client";
import React, { useState } from 'react';
import Layout from './layout';
import Carrousel from './carrousel';
import SidebarMenu from "@/app/SidebarMenu";
import {defaultLang, dictionary} from "@/content";
import {useSearchParams } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();
    const lang = searchParams.get('lang') || defaultLang;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <Layout>
            {/* |||||||||||||||||||||||||||||||||| BARRA XARXES |||||||||||||||||||||||||||||||||| */}
            <div className="social-networks">
                <button className="social-network-button">
                    <a href="https://www.instagram.com/storymakers.es/" target="_blank">
                        <img src="logo_instagram.svg" alt="Instagram"/>
                    </a>
                </button>
                {/*<button className="social-network-button">
                    <a href="https://www.instagram.com/storymakers.es/" target="_blank">
                        <img src="logo_tiktok.svg" alt="TikTok"/>
                    </a>
                </button>*/}
                <button className="social-network-button">
                    <a href="https://www.linkedin.com/company/stoymakers-es" target="_blank">
                        <img src="logo_linkedin.svg" alt="LinkedIn"/>
                    </a>
                </button>
            </div>
            {/* |||||||||||||||||||||||||||||||||| BARRA LATERAL |||||||||||||||||||||||||||||||||| */}

            <button className="side-bar-button" onClick={toggleSidebar}>
                <img src="logo-burger.svg" alt="Side bar" />
            </button>
            <SidebarMenu  isOpen={isSidebarOpen} onClose={toggleSidebar} lang={lang}/>

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
                <img src="logo-storymakers.png" alt="Logotip - Storymakers" className="mb-20"/>
                    {/* |||||||||||||||||||||||||||||||||| GALERIA |||||||||||||||||||||||||||||||||| */}
                <div className="mt-10">
                    <div className="">
                        <div className="">
                            <Carrousel />
                        </div>
                    </div>
                </div>
                {/* |||||||||||||||||||||||||||||||||| REPTES |||||||||||||||||||||||||||||||||| */}
                <h1 className="text-6xl font-bold mt-60 mb-10 text-[#F57712]">{dictionary[lang]?.title_challenges}</h1>
                <div className="banner-container bg-[url('../../public/orange-reel.png')]">
                    <a href={"https://tally.so/r/wk6oN1"} target="_blank">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front bg-[url('../../public/tedx2024-challenge.png')]"></div>
                                <div
                                    className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-ca.png')]"></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* |||||||||||||||||||||||||||||||||| MARQUES |||||||||||||||||||||||||||||||||| */}
                <h1 className="text-6xl font-bold mt-20 mb-10 text-[#0059A6]">{dictionary[lang]?.title_brands}</h1>
                <div className="banner-container bg-[url('../../public/blue-reel.png')]">
                    <a href={"https://www.lavanguardia.com/economia/innovacion/20240408/9590083/tedxupfmataro-busca-inspirar-jovenes-universitarios-empresas-e-startups-septima-edicion-tecnocampus-brl.html"} target="_blank">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front bg-[url('../../public/vanguardia-business.png')]"></div>
                                <div className="flip-card-back bg-[url('../../public/tedx-back-card.png')]"></div>
                            </div>
                        </div>
                    </a>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/tedx-business.png')]"></div>
                            <div className="flip-card-back bg-[url('../../public/storymakers-back-card.png')]"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-[url('../../public/nosense-business.png')]"></div>
                            <div className="flip-card-back bg-[url('../../public/storymakers-back-card.png')]"></div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
