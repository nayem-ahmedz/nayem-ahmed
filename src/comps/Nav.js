import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Nav(){
    const location = useLocation();
    const [isNavOpen, setNav] = useState(false);
    const toggleNav = () => setNav(!isNavOpen);
    return(
        <>
            <nav>
                <div className={`hamburger ${(isNavOpen) ? 'h-change' : ''}`} onClick={toggleNav}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <ul className={`top-nav ${(isNavOpen) ? 'tnc-change' : ''}`}>
                    <li> <Link to='/' className={location.pathname === '/' ? 'top-nav-active' : ''}>Home</Link> </li>
                    <li> <Link to='/pages/about' className={location.pathname === '/pages/about' ? 'top-nav-active' : ''}>About</Link> </li>
                    <li> <Link to='/pages/contact' className={location.pathname === '/pages/contact' ? 'top-nav-active' : ''}>Contact</Link> </li>
                    <li> <Link to='/pages/projects' className={location.pathname === '/pages/projects' ? 'top-nav-active' : ''}>Projects</Link> </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Nav;