import React from 'react';
import {dictionary} from "@/content";

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
    lang: string; // Define the type of lang as string
}

const SidebarMenuNotHome: React.FC<SidebarMenuProps> = ({ isOpen, onClose, lang }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="side-bar-button" onClick={onClose}>
                <img src="logo-burger-inverted.svg" alt="Side bar" />
            </button>
            <div className="menu">
                <a className="side-bar-category-button-special" href="/">Storymakers</a>
                <a className="side-bar-category-button" href="https://tally.so/r/wk6oN1">{dictionary[lang]?.btn_tedx_challenge}</a>
                <a className="side-bar-category-button" href="https://tally.so/r/mBG4E1">{dictionary[lang]?.btn_im_brand}</a>
                <a className="side-bar-category-button" href="https://www.instagram.com/storymakers.es/">{dictionary[lang]?.btn_about_us}</a>
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

export default SidebarMenuNotHome;
