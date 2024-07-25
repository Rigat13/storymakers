import React from 'react';
import {dictionary} from "@/content";
import IconButton from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import  Button  from '@mui/material/Button';
import { Typography } from '@mui/material';

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
    lang: string; // Define the type of lang as string
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose, lang }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
           
            <IconButton className="side-bar-button w-max-md mx-auto flex bg-white rounded-md hover:bg-black" 
            variant="contained" onClick={onClose} >
            <MenuIcon className='fill-black bg-white h-16 w-16 hover:bg-black hover:fill-white'/>
            </IconButton>

            <div className="menu">
               {/*  <a className="side-bar-category-button" href="https://tally.so/r/wk6oN1">{dictionary[lang]?.btn_tedx_challenge}</a>
                <a className="side-bar-category-button" href="https://tally.so/r/mBG4E1">{dictionary[lang]?.btn_im_brand}</a>
                <a className="side-bar-category-button" href="https://www.instagram.com/storymakers.es/">{dictionary[lang]?.btn_about_us}</a>
                */}
                <Button variant="contained" className='side-bar-category-button font-sans' style={{ textTransform: 'none'}} href="https://tally.so/r/wk6oN1">
                {dictionary[lang]?.btn_tedx_challenge}
                </Button>

                <Button variant="contained" className='side-bar-category-button font-sans' style={{ textTransform: 'none'}} href="https://tally.so/r/wk6oN1">
                {dictionary[lang]?.btn_im_brand}
                </Button>

                <Button variant="contained" className='side-bar-category-button font-sans' style={{ textTransform: 'none'}} href="https://tally.so/r/wk6oN1">
                {dictionary[lang]?.btn_about_us}
                </Button>
            </div>
            <div className="language-selector">
                <button className="language-button">{lang}</button>
                <div className="dropdown-content">
                    {lang !== 'es' && <a href="/">es</a>}
                    {lang !== 'en' && <a href="?lang=en">en</a>}
                    {lang !== 'ca' && <a href="?lang=ca">ca</a>}
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
