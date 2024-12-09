import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/nayem-ahmed.webp';

function Home(){
    useEffect(() => {document.title = 'Nayem Ahmed | Front-end Web Developer'}, []);
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
                    <a href="/cv-nayem-ahmed.pdf" download="Nayem_Ahmed_CV.pdf" target="_blank" rel="noopener noreferrer" className="lets-talk">Download CV</a>
                    <Link to='/pages/contact' className='lets-talk'>Let's talk</Link>
                </div>
            </div>
        </section>
    );
}

export default Home;