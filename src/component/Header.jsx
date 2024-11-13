import React,{useState} from 'react';
import './Header.css';
import shoppingBagIcon from '../assets/shopping-bag-regular-24.png'; 

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };
    

    return (
        <>
            <header>
                <h2 className="logo">Bravo</h2>
                {!sidebarOpen && (
                    <nav>
                        <ul>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                )}
                <button className="header-button" onClick={handleSidebarToggle}>
                    <img src={shoppingBagIcon} alt="Shopping bag icon" />
                </button>
            </header>

            {/* Sidebar */}
            {sidebarOpen && (
                <>
                    <div className="sidebar-overlay" onClick={handleSidebarToggle} />
                    <div className="sidebar">
                        <button className="close-button" onClick={handleSidebarToggle}>
                            ×
                        </button>
                        <nav className="sidebar-nav">
                            <ul>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;