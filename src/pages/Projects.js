import React from 'react';
import { useEffect } from 'react';
import profileCard from '../projects/profile-card.PNG';
import parralaxWeb from '../projects/parallax-website.webp';
import tributeWeb from '../projects/tribute-website.PNG';
import furnitureWeb from '../projects/furniture-website.webp';
import tpaWeb from '../projects/time-planner-app.webp';
import lifeTimer from '../projects/life-timer-app.webp';
import randomImg from '../projects/random-image-generator.PNG';
import simpleLudo from '../projects/simple-ludo.PNG';
import bdmsWeb from '../projects/blood-donation-management-system.PNG';
import spPortal from '../projects/student-parent-portal.PNG';

function Projects(){
    useEffect(() => {document.title = 'Projects | Nayem Ahmed'}, []);
    const hcProjects = [
        { id: 1, name: 'Profile Card', link: 'https://wev-dev.netlify.app/projects/web-projects/css/profile-card/', ss: profileCard },
        { id: 2, name: 'Parallax Website', link: 'https://wev-dev.netlify.app/projects/web-projects/css/parallax-website/', ss: parralaxWeb },
        { id: 3, name: 'Tribute Website', link: 'https://wev-dev.netlify.app/projects/web-projects/css/tribute-website/', ss: tributeWeb },
        { id: 4, name: 'Furniture Website', link: 'https://wev-dev.netlify.app/projects/furniture-website/', ss: furnitureWeb },
        { id: 5, name: 'Time Planner App', link: 'https://wev-dev.netlify.app/projects/time-planner-app/', ss: tpaWeb }
    ];
    const jsProjects = [
        { id: 1, name: 'Age Calculator', link: 'https://wev-dev.netlify.app/projects/web-projects/js/life-timer-app/', ss: lifeTimer },
        { id: 2, name: 'Random Image Generator', link: 'https://wev-dev.netlify.app/projects/web-projects/js/random-image-generator/', ss: randomImg }
    ];
    const gameProjects = [
        { id: 1, name: 'Simple Ludo', link: 'https://simple-ludo-game.netlify.app/', ss: simpleLudo }
    ];
    const univProjects = [
        { id: 1, name: 'Blood Donation MS', link: 'https://uni-project1.netlify.app/', ss: bdmsWeb },
        { id: 2, name: 'Student-Parent Portal', link: 'https://github.com/nayem-ahmedz/student-parent-portal/', ss: spPortal}
    ];

    return(
        <section>
            <div className="wrapper">
                <h1 className="project-heading text-center">List of all Projects</h1>
                <p className="text-light text-readable">
                    Since I started learning web development, I tried to build projects, with as much knowledge as I gained. Thanks to some of my guides who taught me to create projects while learning. One says, "Don't just keep learning and sit doing nothing; keep learning and try to build simple projects with whatever you have learned yet." I followed them and I have created lots of projects. Here are a few of them:
                </p>
                <article className='css-projects'>
                    <h2 className="project-types-heading">1. HTML & CSS</h2>
                    <select id="sort-projects-1" className="sort-option">
                        <option value="sort">Sort</option>
                        <option value="newer">Newer</option>
                        <option value="older">Older</option>
                    </select>
                    <div className='project-outer'>
                        {
                            hcProjects.map((el) => {
                                return(
                                    <div className='project-inner' key={el.id}>
                                        <a href={el.link} target='_blank' rel='noopener noreferrer'>
                                            <img src={el.ss} alt={el.name + ' screenshot'} loading='lazy' />
                                        </a>
                                        <h3 className='project-name'> {el.name} </h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>
                <article className="js-projects">
                    <h2 className="project-types-heading">2. JavaScript Projects</h2>
                    <select id="sort-projects-2" className="sort-option">
                        <option value="newer">Newer</option>
                        <option value="older">Older</option>
                    </select>
                    <div className='project-outer'>
                        {
                            jsProjects.map((el) => {
                                return(
                                    <div className='project-inner' key={el.id}>
                                        <a href={el.link} target='_blank' rel='noopener noreferrer'>
                                            <img src={el.ss} alt={el.name + ' screenshot'} loading='lazy' />
                                        </a>
                                        <h3 className='project-name'> {el.name} </h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>
                <article className="game-projects">
                    <h2 className="project-types-heading">3. Game Projects</h2>
                    <select id="sort-projects-3" className="sort-option">
                        <option value="newer">Newer</option>
                        <option value="older">Older</option>
                    </select>
                    <div className='project-outer'>
                        {
                            gameProjects.map((el) => {
                                return(
                                    <div className='project-inner' key={el.id}>
                                        <a href={el.link} target='_blank' rel='noopener noreferrer'>
                                            <img src={el.ss} alt={el.name + ' screenshot'} loading='lazy' />
                                        </a>
                                        <h3 className='project-name'> {el.name} </h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>
                <article className="university-projects">
                    <h2 className="project-types-heading">4. University Projects</h2>
                    <select id="sort-projects-4" className="sort-option">
                        <option value="newer">Newer</option>
                        <option value="older">Older</option>
                    </select>
                    <div className='project-outer'>
                        {
                            univProjects.map((el) => {
                                return(
                                    <div className='project-inner' key={el.id}>
                                        <a href={el.link} target='_blank' rel='noopener noreferrer'>
                                            <img src={el.ss} alt={el.name + ' screenshot'} loading='lazy' />
                                        </a>
                                        <h3 className='project-name'> {el.name} { el.id === 2 && <i className="fa-brands fa-github github-link"></i> } </h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Projects;