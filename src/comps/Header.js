import React from 'react';
import Nav from './Nav';

function Header(){
    return(
        <header>
            <div className="header-cont wrapper">
            <h1>Experimental React</h1>
            <Nav />
            </div>
        </header>
    );
}

export default Header;