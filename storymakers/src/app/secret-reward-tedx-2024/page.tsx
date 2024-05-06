"use client";
import React, {useEffect, useState} from 'react';
import Layout from '@/app/layout';
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
                {/*<button className="social-network-button">
                    <a href="https://www.instagram.com/storymakers.es/" target="_blank">
                        <img src="logo_tiktok.svg" alt="TikTok"/>
                    </a>
                </button>*/}
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

            <div className="centered-div">
                <h2 className="big-title">{dictionary[lang]?.reward}</h2>
                <h1 className="subtitle">{dictionary[lang]?.lessons_title}</h1>
                <h1 className="subtitle2">{dictionary[lang]?.tedx_2024}</h1>

                {/* VIDEO 1 */}
                <div className="youtube-title"> <h1>Marco Guadalupi</h1> </div>
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=LgMSyUvBYgcC8idL&amp;list=PLVUgk3RWiKOHAhoE9ctORnWFhuI-OlYd5" allowFullScreen ></iframe>
                </div>

                {/* VIDEO 2 */}
                <div className="youtube-title"> <h1>Maria Berruezo</h1> </div>
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/usVonz0fHrc?si=9GuAsB7WjBWLmpNo" allowFullScreen ></iframe>
                </div>

                {/* VIDEO 3 */}
                <div className="youtube-title"> <h1>Berta Segura</h1> </div>
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nYxxIrzRQc4?si=l_JEjwWds_Wo3F5C" allowFullScreen ></iframe>
                </div>
            </div>
        </Layout>
    );
}