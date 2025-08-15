import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Nav(){
    const location = useLocation();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    return(
        <>
            <nav className='top-nav'>
                <div className={`hamburger ${(isNavOpen) ? 'h-change' : ''}`} onClick={toggleNav}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <ul className={`${(isNavOpen) ? 'visible' : ''}`}>
                    <li> <Link to='/' className={location.pathname === '/' ? 'link-active' : ''}>Home</Link> </li>
                    <li> <Link to='/pages/about' className={location.pathname === '/pages/about' ? 'link-active' : ''}>About</Link> </li>
                    <li> <Link to='/pages/contact' className={location.pathname === '/pages/contact' ? 'link-active' : ''}>Contact</Link> </li>
                    <li> <Link to='/pages/projects' className={location.pathname === '/pages/projects' ? 'link-active' : ''}>Projects</Link> </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Nav;