import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const profileImg = '/media/nayem-ahmed.webp';
import Services from './Services';
import Skills from './Skills';
import RecentUpdates from './RecentUpdates';

function Home(){
    useEffect(() => {document.title = 'Nayem Ahmed | Front-end Web Developer'}, []);
    // const job = 'Front-end Web Developer';
    // const [displayedText, setDisText] = useState('');
    // const [jobIndex, setJobIndex] = useState(0);
    // useEffect(()=>{
    //     if(jobIndex < job.length){
    //         setDisText((prev) => prev + job[jobIndex]);
    //         setJobIndex((prev) => prev + 1);
    //     }
    // }, [displayedText, jobIndex]);
    return(
        <>
            <section>
                <div className='wrapper main-cont'>
                    <div className='user-image-section'>
                        <img src={profileImg} alt="nayem ahmed's pictures" className='user-image' />
                    </div>
                    <div className='main-cont-right'>
                        <p className='mcr-hey'>Hey There, I am</p>
                        <h1 className='mcr-name'>Nayem Ahmed</h1>
                        <h3 className='mcr-rule'>I am a <span id='mcr-rule-title'> Front-end Web Developer </span></h3>
                        {/* { displayedText ? displayedText : 'Front-end Web Developer' } */}
                        <a href='/cv-nayem-ahmed.pdf' download='Nayem_Ahmed_CV.pdf' target='_blank' rel='noopener noreferrer' className='lets-talk'>Download CV</a>
                        <Link to='/pages/contact' className='lets-talk'>Let's talk</Link>
                    </div>
                </div>
            </section>
            <Services />
            <Skills />
            <RecentUpdates />
        </>
    );
}

export default Home;