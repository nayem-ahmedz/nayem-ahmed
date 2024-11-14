import React from 'react';
import '../assets/skills.css';

function Skills(){
    const techName = [
        {id: 1, name: 'HTML', score: '98%'},
        {id: 2, name: 'CSS', score: '97%'},
        {id: 3, name: 'JavaScript', score: '90%'},
        {id: 4, name: 'Bootstrap', score: '70%'},
        {id: 5, name: 'React Js', score: '85%'}
    ];
    return(
        <section className='skills-section wrapper'>
            <h2 className='fs-h2 text-center'>My Skills</h2>
            <p>
                I started learning web dev since July 2023. Since than I have explored various web technology. I started my journy, learning HTML (Hyper Text Markup Language) from w3school. Everything is changing in day by day. Developer accepting new and new technology, frameworks in every moment. My learning curve is shared below
            </p>
            <article>
                <h2>Web technology</h2>
                {
                    techName.map((tech) => {
                        return(
                            <div className='tech-boxs' key={tech.id}>
                                <h3>{tech.name}</h3>
                                <div className='box-outer'>
                                    <div className='box-inner' style={{width: tech.score}}></div>
                                </div>
                            </div>
                        );
                    })
                }                
            </article>
        </section>
    );
}

export default Skills;