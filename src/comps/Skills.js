import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../assets/skills.css';

function Skills(){
    const [ref, inView] = useInView({
        threshold: 0.5, // Trigger when 50% visible
        triggerOnce: true, // Only trigger once
    });
    const techName = [
        {id: 1, name: 'HTML', score: '98%'},
        {id: 2, name: 'CSS', score: '97%'},
        {id: 3, name: 'JavaScript', score: '90%'},
        {id: 4, name: 'Bootstrap', score: '70%'},
        {id: 5, name: 'React Js', score: '80%'}
    ];
    return(
        <section ref={ref} className='skills-section wrapper'>
            <h2 className='fs-h2 text-center'>My Skills</h2>
            <p className='text-readable skill-texts'>
                I started learning web dev since July 2023. Since than I have explored various web technology. I started my journy, learning HTML (Hyper Text Markup Language) from w3school. Everything is changing day by day. Developer accepting new and new technology, frameworks in every moment. My learning journey at a glance:
            </p>
            <article>
                <h2>Web Technology</h2>
                {
                    techName.map((tech) => {
                        return(
                            <div className='tech-boxs' key={tech.id}>
                                <div className='box-outer'>
                                    <div className='box-inner' style={{ width: inView ? tech.score : '0%' }}> { inView && `${tech.name}...` } </div>
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