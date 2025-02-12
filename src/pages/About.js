import React, { useEffect } from 'react';
import userImg from '../assets/nayem-ahmed.webp';
import Services from '../comps/Services';
import Skills from '../comps/Skills';

function About(){
    useEffect(() => {document.title = 'About | Nayem Ahmed'}, []);
    return(
        <>
            <section>
                <div className="wrapper about-main">
                    <div className="about-top">
                        <div className='user-image-section'>
                            <img src={userImg} alt="Nayem Ahmed, Front-end Web Developer" className="user-image" />
                        </div>
                        <h1 className="mcr-name">Nayem Ahmed</h1>
                        <ul>
                            <li>Front-End Web Developer</li>
                            <li>Content Creator</li>
                            <li>Programmer</li>
                        </ul>
                    </div>
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            Hey! I am Nayem Ahmed. A third-year student of B.Sc in Computer Science and Engineering at Metropolitan University, Sylhet. I am passionate about Web Develpment. I started learning web development from July 2023. Since them I explored HTML, CSS, Js, Bootstrap, React Js and a lot more. In my university, I have created a Project named Student-Parent Portal using php and mySql. Thus I have some knowledge about backend as well. But I am planning to use Javascript for both front-end and backend. My goal is to be a Full-stack Web Developer. Am I following path of MERN stack?
                        </p>
                        <p>
                            During first-year in my university, learnt 'C' as my first Programming language. C is amazing. Day by day, I have got chance to explore C++, Java and many other programming language. I could not forget about Java. Using java (Spring boot) as backend programming language? No, my answer is negative. 
                        </p>
                    </div>
                </div>
            </section>
            <Services />
            <Skills />
        </>
    );
}

export default About;