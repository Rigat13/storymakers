"use client";
import React, {useEffect, useState} from 'react';
import Layout from './layout';
import Carrousel from './carrousel';
import SidebarMenu from "@/app/SidebarMenu";
import {defaultLang, dictionary} from "@/content";
import {useSearchParams } from "next/navigation";
import { Suspense } from 'react';

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeContent />
        </Suspense>
    );
}

function HomeContent() {
    const searchParams = useSearchParams();
    const lang = searchParams ? searchParams.get('lang') || defaultLang : defaultLang;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://w.behold.so/widget.js";
        document.head.appendChild(script);
    }, []);

    return (
        <Layout>
            {/* |||||||||||||||||||||||||||||||||| BARRA XARXES |||||||||||||||||||||||||||||||||| */}
            <div className="social-networks">
                <button className="social-network-button">
                    <a href="https://www.instagram.com/storymakers.es/" target="_blank">
                        <img src="logo_instagram.png" alt="Instagram"/>
                    </a>
                </button>
                <button className="social-network-button">
                    <a href="https://www.linkedin.com/company/stoymakers-es" target="_blank">
                        <img src="logo_linkedin.png" alt="LinkedIn"/>
                    </a>
                </button>
            </div>
            {/* |||||||||||||||||||||||||||||||||| BARRA LATERAL |||||||||||||||||||||||||||||||||| */}

            <button className="side-bar-button" onClick={toggleSidebar}>
                <img src="logo-burger.svg" alt="Side bar" />
            </button>
            <SidebarMenu  isOpen={isSidebarOpen} onClose={toggleSidebar} lang={lang}/>


            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="">
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
                    {/* |||||||||||||||||||||||||||||||||| INSTAGRAM |||||||||||||||||||||||||||||||||| */}
                <img className="central-logo" src="logo-storymakers.png" alt="Logotip - Storymakers"/>
                    {/* |||||||||||||||||||||||||||||||||| GALERIA |||||||||||||||||||||||||||||||||| */}
                <div className="mt-10">
                    <div className="">
                        <div className="">
                            <Carrousel />
                        </div>
                    </div>
                </div>
                {/* |||||||||||||||||||||||||||||||||| REPTES |||||||||||||||||||||||||||||||||| */}
                <h1 className="storymakers-header text-[#F57712]">{dictionary[lang]?.title_challenges}</h1>
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
                <h1 className="storymakers-header text-[#0059A6]">{dictionary[lang]?.title_brands}</h1>
                <div className="banner-container bg-[url('../../public/blue-reel.png')]">
                    <div className="banner-content">
                        <a href={"https://www.lavanguardia.com/economia/innovacion/20240408/9590083/tedxupfmataro-busca-inspirar-jovenes-universitarios-empresas-e-startups-septima-edicion-tecnocampus-brl.html"} target="_blank">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-[url('../../public/vanguardia-business.png')]"></div>
                                    <div className="flip-card-back bg-[url('../../public/tedx-back-card.png')]"></div>
                                </div>
                            </div>
                        </a>
                        <a href={"https://tedxupfmataro.es/"} target="_blank">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-[url('../../public/tedx-business.png')]"></div>
                                    <div className="flip-card-back bg-[url('../../public/storymakers-back-card.png')]"></div>
                                </div>
                            </div>
                        </a>
                        <a href={"https://nosense.es/"} target="_blank">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-[url('../../public/nosense-business.png')]"></div>
                                    <div className="flip-card-back bg-[url('../../public/storymakers-back-card.png')]"></div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
                <a href="https://tally.so/r/mBG4E1" target="_blank">
                    <h1 className="brand_link">{dictionary[lang]?.next_brand}</h1>
                </a>
                <div data-behold-id="L6ni5jBOB5sAV4XLLBy1"></div>

                <h1 className="more_info">{dictionary[lang]?.more_info}
                    <a className="more_info_link" href="https://www.instagram.com/storymakers.es/" target="_blank">@storymakers.es</a>
                </h1>
            </main>
        </Layout>
    );
}
