import React from 'react';
import { Link } from 'react-router-dom';

function Services(){
    return(
        <section id="service-section">
            <article className="wrapper services-cont">
                <h3 className="text-center fs-h2">My Services</h3>
                <div className="services-row">
                    <div className="services-col">
                        <i className="fa-brands fa-figma"></i>
                        <h3>Web Design</h3>
                        <p>
                            I can turn your ideas into amazing figma design, from scratch. I have more then two years experience in this field. I am familiar with designing platform like Figma, Canva and Adobe Tools such as Photoshop and Illustrator
                        </p>
                        <Link to='/pages/contact'>Share Your Ideas</Link>
                    </div>
                    <div className="services-col">
                        <i className="fa-solid fa-laptop-code"></i>
                        <h3>Front-end Web Development</h3>
                        <p>
                            I can transform your any design ideas into Responsive website. I can provide you best and clean code. When I work on a project, I keep 4 tabs open so that I can develop a web application to suit well in all devices
                        </p>
                        <Link to='/pages/projects'>View Live Projects</Link>
                    </div>
                    <div className="services-col">
                        <i className="fa-solid fa-database"></i>
                        <h3>Backend and Database Management</h3>
                        <p>
                            I am capable to perform backend task using PHP. It is a very simple and easy programming language that was created only for web. I have a good understanding in Structured Database System such as MySQL
                        </p>
                        <a href="https://github.com/nayem-ahmedz/" target="_blank" rel="noopener noreferrer">View Github Repo</a>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Services;