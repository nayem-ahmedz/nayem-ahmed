import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Nav(){
    return(
        <>
            <nav>
                <div className='hamburger'>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <ul className='top-nav'>
                    <li> <Link to='/' className='top-nav-active'>Home</Link> </li>
                    <li> <Link to='/pages/about'>About</Link> </li>
                    <li> <Link to='/pages/contact'>Contact</Link> </li>
                    <li> <Link to='/pages/projects'>Projects</Link> </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Nav;