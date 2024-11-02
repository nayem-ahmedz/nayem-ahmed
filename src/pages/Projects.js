import React from 'react';
import profileCard from '../projects/profile-card.PNG';
import parralaxWeb from '../projects/parallax-website.webp';
import tributeWeb from '../projects/tribute-website.PNG';
import furnitureWeb from '../projects/furniture-website.webp';
import lifeTimer from '../projects/life-timer-app.webp';
import randomImg from '../projects/random-image-generator.PNG';
import simpleLudo from '../projects/simple-ludo.PNG';
import bdmsWeb from '../projects/blood-donation-management-system.PNG';
import spPortal from '../projects/student-parent-portal.PNG';

function Projects(){
    return(
        <section>
            <div className="wrapper">
                <h1 className="project-heading text-center">List of all Projects</h1>
                <p className="text-light text-readable">
                    Since I started learning web development, I tried to build projects, with as much knowledge as I gained. Thanks to some of my guides who taught me to create projects while learning. One says, "Don't just keep learning and sit doing nothing; keep learning and try to build simple projects with whatever you have learned yet." I followed them and I have created lots of projects. Here are a few of them:
                </p>
                <article className="css-projects">
                    <h2 className="project-types-heading">1. HTML & CSS</h2>
                    <select id="sort-projects-1" className="sort-option">
                        <option value="sort">Sort</option>
                        <option value="newer">Newer</option>
                        <option value="older">Older</option>
                    </select>
                    <div className="project-outer">
                        <div className="project-inner">
                            <a href="https://wev-dev.netlify.app/projects/web-projects/css/profile-card/" target="_blank" rel="noopener noreferrer">
                                <img src={profileCard} alt="Profile Card screenshot" />
                            </a>
                            <h3 className="project-name">Profile Card</h3>
                        </div>
                        <div className="project-inner">
                            <a href="https://wev-dev.netlify.app/projects/web-projects/css/parallax-website/" target="_blank" rel="noopener noreferrer">
                                <img src={parralaxWeb} alt="Parallax Website screenshot" />
                            </a>
                            <h3 className="project-name">Parallax Website</h3>
                        </div>
                        <div className="project-inner">
                            <a href="https://wev-dev.netlify.app/projects/web-projects/css/tribute-website/" target="_blank" rel="noopener noreferrer">
                                <img src={tributeWeb} alt="Tribute Website screenshot" />
                            </a>
                            <h3 className="project-name">Tribute Website</h3>
                        </div>
                        <div className="project-inner">
                            <a href="https://wev-dev.netlify.app/projects/furniture-website/" target="_blank" rel="noopener noreferrer">
                                <img src={furnitureWeb} alt="Furniture Website screenshot" />
                            </a>
                            <h3 className="project-name">Furniture Website</h3>
                        </div>
                    </div>
                </article>
                <article className="js-projects">
                    <h2 className="project-types-heading">2. JavaScript Projects</h2>
                    <select id="sort-projects-2" className="sort-option">
                        <option value="newer">Newer</option>
                        <option value="older">Older</option>
                    </select>
                    <div className="project-outer">
                        <div className="project-inner">
                            <a href="https://wev-dev.netlify.app/projects/web-projects/js/life-timer-app/" target="_blank" rel="noopener noreferrer">
                                <img src={lifeTimer} alt="Life Timer App screenshot" />
                            </a>
                            <h3 className="project-name">Age Calculator</h3>
                        </div>
                        <div className="project-inner">
                            <a href="https://wev-dev.netlify.app/projects/web-projects/js/random-image-generator/" target="_blank" rel="noopener noreferrer">
                                <img src={randomImg} alt="Random Image Generator screenshot" />
                            </a>
                            <h3 className="project-name">Random Image Generator</h3>
                        </div>
                    </div>
                </article>
                <article className="game-projects">
                    <h2 className="project-types-heading">3. Game Projects</h2>
                    <select id="sort-projects-3" className="sort-option">
                        <option value="newer">Newer</option>
                        <option value="older">Older</option>
                    </select>
                    <div className="project-outer">
                        <div className="project-inner">
                            <a href="https://simple-ludo-game.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img src={simpleLudo} alt="Simple Ludo screenshot" />
                            </a>
                            <h3 className="project-name">Simple Ludo</h3>
                        </div>
                    </div>
                </article>
                <article className="university-projects">
                    <h2 className="project-types-heading">4. University Projects</h2>
                    <select id="sort-projects-4" className="sort-option">
                        <option value="newer">Newer</option>
                        <option value="older">Older</option>
                    </select>
                    <div className="project-outer">
                        <div className="project-inner">
                            <a href="https://uni-project1.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img src={bdmsWeb} alt="Blood Donation Management System screenshot" />
                            </a>
                            <h3 className="project-name">Blood Donation MS</h3>
                        </div>
                        <div className="project-inner">
                            <a href="https://github.com/nayem-ahmedz/student-parent-portal" target="_blank" rel="noopener noreferrer" title="GitHub repository link">
                                <img src={spPortal} alt="Student-Parent Portal screenshot" />
                            </a>
                            <h3 className="project-name">
                                Student-Parent Portal
                                <i className="fa-brands fa-github github-link"></i>
                            </h3>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Projects;