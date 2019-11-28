import React, { useState } from 'react';
import Header from './Header';
import MainMenu from './MainMenu';

const Layout = ({
    children,
    categories,
    addCategory,
    selectCategory,
}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    }

    return (
        <div className="Layout">
            <Header toggleMenu={toggleMenu} activeMenu={activeMenu} />
            <div className="Layout-content">
                <MainMenu
                    activeMenu={activeMenu}
                    categories={categories}
                    addCategory={addCategory}
                    selectCategory={selectCategory}
                />
                <div className="Layout-children">
                    {children} 
                </div>    
            </div>
        </div>
    );
}

export default Layout;