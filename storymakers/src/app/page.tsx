import React from 'react';
import Layout from './layout';

export default function Home() {
    return (
        <Layout>
            <main className="flex flex-col items-center justify-center min-h-screen p-24">
                <div className="flex flex-row">
                    <div className="w-1/2 p-4 mr-20">
                        <img src="logo-storymakers.png" alt="Logotip - Storymakers" className="mb-10"/>
                        <img src="tagline-ca.png" alt="Logotip - Storymakers" className="mb-10"/>
                        <div className="flex justify-center">
                            <a href="#" className="button-with-hover">
                                <span className="hover-image"></span>
                                <img src="button-business-ca.png" alt="Left Button" className="button-image" />
                            </a>
                            <a href="#" className="button-with-hover">
                                <span className="hover-image"></span>
                                <img src="button-user-ca.png" alt="Right Button" className="button-image" />
                            </a>
                        </div>
                    </div>
                    <div className="w-1/2 p-4 ml-20">
                        <img src="gallery-base.png" alt="Gallery base"/>
                    </div>
                </div>
                <h1 className="text-6xl font-bold mt-20 mb-10 text-[#FF4A00]">Reptes</h1>
                <div className="banner-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"></div>
                            <div className="flip-card-back"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"></div>
                            <div className="flip-card-back"></div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"></div>
                            <div className="flip-card-back"></div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
