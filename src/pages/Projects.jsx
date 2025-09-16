import { useState , useEffect } from 'react';
import { hcProjects, jsProjects, gameProjects, univProjects } from '../assets/project-data';
import ProjectModal from '../comps/ProjectModal';

function Projects(){
    useEffect(() => {document.title = 'Projects | Nayem Ahmed'}, []);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loadImages, setLoadImages] = useState(false);
    return(
        <section className='projects'>
            <h1 className='section-title text-center'>List of all Projects</h1>
            <p className='texts'>
                Since I started learning web development, I tried to build projects, with as much knowledge as I gained. Thanks to some of my guides who taught me to create projects while learning. One says, 'Don't just keep learning and sit doing nothing; keep learning and try to build simple projects with whatever you have learned yet.' I followed them and I have created lots of projects. Here are a few of them:
            </p>
            <article className='css-projects'>
                <h2 className='article-header'>1. HTML & CSS</h2>
                <select id='sort-projects-1' className='sort-option'>
                    <option value='sort'>Sort</option>
                    <option value='newer'>Newer</option>
                    <option value='older'>Older</option>
                </select>
                <div className='project-outer'>
                    {
                        hcProjects.map((el) => {
                            return (
                                <div className={`project-inner ${loadImages || 'loading-image'}`} key={el.id} onClick={() => setSelectedProject(el)}>
                                    <img src={el.ss} alt={el.name + ' screenshot'} loading='lazy' className='project-ss' onLoad={() => setLoadImages(true)} />
                                    <div className='learn-more'>
                                        <i className='fa-solid fa-circle-info'></i>
                                        <h3 className='project-name'> {el.name} </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            <article className='js-projects'>
                <h2 className='article-header'>2. JavaScript Projects</h2>
                <select id='sort-projects-2' className='sort-option'>
                    <option value='newer'>Newer</option>
                    <option value='older'>Older</option>
                </select>
                <div className='project-outer'>
                    {
                        jsProjects.map((el) => {
                            return (
                                <div className={`project-inner ${loadImages || 'loading-image'}`} key={el.id} onClick={() => setSelectedProject(el)}>
                                    <img src={el.ss} alt={el.name + ' screenshot'} loading='lazy' className='project-ss' onLoad={() => setLoadImages(true)} />
                                    <div className='learn-more'>
                                        <i className='fa-solid fa-circle-info'></i>
                                        <h3 className='project-name'> {el.name} </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            <article className='game-projects'>
                <h2 className='article-header'>3. Game Projects</h2>
                <select id='sort-projects-3' className='sort-option'>
                    <option value='newer'>Newer</option>
                    <option value='older'>Older</option>
                </select>
                <div className='project-outer'>
                    {
                        gameProjects.map((el) => {
                            return (
                                <div className={`project-inner ${loadImages || 'loading-image'}`} key={el.id} onClick={() => setSelectedProject(el)}>
                                    <img src={el.ss} alt={el.name + ' screenshot'} loading='lazy' className='project-ss' onLoad={() => setLoadImages(true)} />
                                    <div className='learn-more'>
                                        <i className='fa-solid fa-circle-info'></i>
                                        <h3 className='project-name'> {el.name} </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            <article className='university-projects'>
                <h2 className='article-header'>4. University Projects</h2>
                <select id='sort-projects-4' className='sort-option'>
                    <option value='newer'>Newer</option>
                    <option value='older'>Older</option>
                </select>
                <div className='project-outer'>
                    {
                        univProjects.map((el) => {
                            return (
                                <div className={`project-inner ${loadImages || 'loading-image'}`} key={el.id} onClick={() => setSelectedProject(el)}>
                                    <img src={el.ss} alt={el.name + ' screenshot'} loading='lazy' className='project-ss' onLoad={() => setLoadImages(true)} />
                                    <div className='learn-more'>
                                        <i className='fa-solid fa-circle-info'></i>
                                        <h3 className='project-name'> {el.name} </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            {
                selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )
            }
        </section>
    );
}

export default Projects;