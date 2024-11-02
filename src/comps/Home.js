import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/nayem-ahmed.png';

function Home(){
    return(
        <section>
            <div className="wrapper main-cont">
                <div>
                    <img src={profileImg} alt="nayem ahmed's pictures" className="user-image" />
                </div>
                <div className="main-cont-right">
                    <p className="mcr-hey">Hey There, I am</p>
                    <h1 className="mcr-name">Nayem Ahmed</h1>
                    <h3 className="mcr-rule">I am a <span id="mcr-rule-title">Front-end Web Developer</span></h3>
                    <Link to='/pages/contact' className='lets-talk'>Let's talk</Link>
                </div>
            </div>
        </section>
    );
}

export default Home;