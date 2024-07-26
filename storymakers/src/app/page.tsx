"use client";
import React, {useEffect, useState} from 'react';
import Layout from './layout';
import CarrouselData from './UI/carrousel';
import SidebarMenu from "@/app/UI/SidebarMenu";
import {defaultLang, dictionary} from "@/content";
import {useSearchParams } from "next/navigation";
import { Suspense } from 'react';
import {DataLoader} from './dataLoaders/dataLoader';
import ResponsiveAppBar from './UI/appBar';  //NAVEGADOR BARRA

//MUI
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Typography } from '@mui/material';

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


   // DATOS DE MARCAS DESDE UN JSON, TODO: PASAR JSON AL SERVER
   type marcasData = { url:string ,card_front:string, card_back:string}
   var marcas = DataLoader('marcas');
  
    return (
       
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="">
                    {/* |||||||||||||||||||||||||||||||||| LOGOS/BOTONS |||||||||||||||||||||||||||||||||| */}
                    {/*   <div className="w-1/2 p-4 mr-20">
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
                <div className="m-10">
                    <div className="">
                        <div className="">
                           {/*<Carrousel />*/} 
                           
                           <CarrouselData data={'reels'}/>
                        </div>
                    </div>
                </div>
                {/* |||||||||||||||||||||||||||||||||| REPTES ||||||||||||||||||||||||||||||||||
                bg-[url('../../public/orange-reel.png')]
                
                */}
                <Typography variant="h1" className="storymakers-header style-color-creadores font-sans">{dictionary[lang]?.title_challenges}</Typography>   
                <Box className='banner-container max-w-100 mx-auto max-h-40 style-background-creadores'> 
                    <a href={"https://tally.so/r/wk6oN1"} target="_blank">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front bg-[url('../../public/tedx2024-challenge.png')]"></div>
                                <div
                                    className="flip-card-back bg-[url('../../public/tedx2024-challenge-rewards-ca.png')]"></div>
                            </div>
                        </div>
                    </a>
                    </Box>
               
                {/* |||||||||||||||||||||||||||||||||| MARQUES |||||||||||||||||||||||||||||||||| */}

                <Typography variant="h1" className="storymakers-header style-color-marcas  font-sans">{dictionary[lang]?.title_brands}</Typography>   
                <div className='banner-container' >
                <Box className='banner-container max-w-100 mx-auto max-h-40 style-background-marcas'>
                    <div className="banner-content">
                      { 
                      marcas.map( (marca:marcasData, i) => (
                      
                        <a href={marca.url} target="_blank" key={i} >
                       
                        <div className="flip-card">
                            <div className="flip-card-inner">
                           
                            <div className='flip-card-front' style={{backgroundImage:`url('./${marca['card_front']}')`}} ></div>
                            <div className='flip-card-back'  style={{backgroundImage:`url('./${marca['card_back']}')`}}  ></div>
                               
                            </div>
                        </div>
                        </a> 
 
                      ))
                     
                      }      

                     
                    </div>
                    
                </Box>
                </div>
               {/**  <Button variant="contained" style={{ textTransform: 'none'}} href="https://tally.so/r/mBG4E1" className='p-6 max-w-sm mx-auto rounded-[30px] items-center flex ' >
                      <Typography variant="h3" className="font-sans italic font-bold" >
                      {dictionary[lang]?.next_brand}
                      </Typography>
                </Button>*/}
                
                <a href="https://tally.so/r/mBG4E1" target="_blank">
                    <h1 className="brand_link">{dictionary[lang]?.next_brand}</h1>
                </a>               
                
                <div data-behold-id="L6ni5jBOB5sAV4XLLBy1"></div>

                <h1 className="more_info">{dictionary[lang]?.more_info}
                    <a className="more_info_link" href="https://www.instagram.com/storymakers.es/" target="_blank">@storymakers.es</a>
                </h1>
            </main>
      
    );
}






            {/* |||||||||||||||||||||||||||||||||| BARRA XARXES |||||||||||||||||||||||||||||||||| */}
            {/*<div className="social-networks">
               <div className='social-network-button' >
                    <IconButton href="https://www.instagram.com/storymakers.es/"  variant="contained" 
                    className=' bg-black max-w-1 mx-auto flex  rounded-xl hover:bg-white'>
                    <InstagramIcon className='w-10 h-10 hover:fill-black'/>
                    </IconButton>
               </div>
               <div className='social-network-button' >
                    <IconButton href="https://www.linkedin.com/company/stoymakers-es"  variant="contained" 
                    className=' bg-black max-w-1 mx-auto flex rounded-xl hover:bg-white'>
                    <LinkedInIcon className='w-10 h-10 hover:fill-black'/>
                    </IconButton>
               </div>
                
            </div> */}
            {/* |||||||||||||||||||||||||||||||||| BARRA LATERAL |||||||||||||||||||||||||||||||||| */}
           {/* <IconButton className="side-bar-button w-max-md mx-auto flex bg-black rounded-md hover:bg-white" 
            variant="contained"   onClick={toggleSidebar}>
            <MenuIcon className='fill-white bg-black h-16 w-16 hover:bg-white hover:fill-black'/>
            </IconButton>
            <SidebarMenu  isOpen={isSidebarOpen} onClose={toggleSidebar} lang={lang}/>*/}
          