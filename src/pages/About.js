import React, { useEffect } from 'react';
import userImg from '../assets/nayem-ahmed.webp';
import Services from '../comps/Services';
import Skills from '../comps/Skills';

function Education(){
    const edu = {
        degree: 'B.Sc',
        dept: 'Computer Science and Engineering',
        from: '23 Jan 2022',
        to: 'Present',
        university: 'Metropolitan University',
        uniLoc: 'Sylhet',
        courses: ['Machine Learning', 'Data Strucutre', 'Algorithm', 'Database', 'Object Oriented Programming']
    };
    return(
        <article className='edu'>
            <h2> <i className='fa-solid fa-user-graduate about-icons'></i> Education</h2>
            <hr className='hr-gray' />
            <h3> {edu.degree} in {edu.dept} </h3>
            <h4> {edu.university}, {edu.uniLoc} </h4>
            <p className='edu-session'> {edu.from} - {edu.to} </p>
            <p> Courseworks : { edu.courses.join(', ') }... </p>
        </article>
    );
}

function About(){
    const mySelf = {
        name: 'Nayem Ahmed',
        profession: ['Front-End Web Developer', 'Content Creator', 'Programmer'],
        age: 25,
        address: 'Bhadeshwar, Sylhet, Bangladesh'
    };
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
                            {
                                mySelf.profession.map((el, ind) => {
                                    return <li key={'p' + ind}> {el} </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="about-text">
                        <h2> <i className='fa-solid fa-user about-icons'></i> About Me</h2>
                        <hr className='hr-gray' />
                        <p>
                            Hey! I am Nayem Ahmed. A final-year student of Computer Science and Engineering at Metropolitan University. I am passionate about Web Develpment. <br /> I started learning web development from July 2023. Since then I explored HTML, CSS, Js, Bootstrap, React Js and a lot more. In my university, I have created a Project named Student-Parent Portal using php and mySQL. Thus I have some knowledge about backend as well. But I am planning to use Javascript for both front-end and backend. My goal is to be a Full-stack Web Developer. Am I following path of MERN stack?
                        </p>
                        <p>
                            During first-year in my university, learnt 'C' as my first Programming language. C is amazing. Day by day, I have got chance to explore C++, Java and many other programming language. Although I have experience with Java, I prefer using JavaScript for full-stack development rather than Spring Boot, a framework of Java. 
                        </p>
                    </div>
                    <Education />
                </div>
            </section>
            <Services />
            <Skills />
        </>
    );
}

export default About;