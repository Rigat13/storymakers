import React from 'react';

const SidebarMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="side-bar-button" onClick={onClose}>
                <img src="logo-burger-inverted.svg" alt="Side bar" />
            </button>
            <div className="menu">
                <a className="side-bar-category-button" href="@/sections/sidebar/SidebarMenu#">Repte TEDx</a>
                <a className="side-bar-category-button" href="@/sections/sidebar/SidebarMenu#">Soc marca</a>
                <a className="side-bar-category-button" href="@/sections/sidebar/SidebarMenu#">Sobre nosaltres</a>
            </div>
            <div className="language-selector">
                <button className="language-button">ca</button>
                <div className="dropdown-content">
                    <a href="/es">es</a>
                    <a href="/en">en</a>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
