import React from 'react';
import { Link } from 'react-router-dom';

function RecentUpdates(){
    return(
        <article className='wrapper recent-updates'>
            <h1>Recent Updates</h1>
            <ul className='recent-ul'>
                <li>
                    Exam is done, spending holidays
                </li>
                <li>
                    Appeared : Semester Final Exam
                </li>
                <li>
                    Prepared a Machine Learning Project using Online Shoppers Purchasing Intention Dataset <a href='https://github.com/nayem-ahmedz/ml-final-project' target='_blank' rel='noopener noreferrer'>Check Out <i className="fa-brands fa-github"></i> </a>
                </li>
                <li>
                    Completed the Python Programming and Basic Data Science training program <a href='https://www.linkedin.com/posts/nayem-ahmedz_pds-python-datascience-activity-7270836319881203714-3UBM?utm_source=share&utm_medium=member_desktop' target='_blank' rel='noopener noreferrer'>Read Post <i className="fa-brands fa-linkedin"></i> </a>
                </li>
                <li>
                    Read more about me in my <Link to='/pages/blog'>Blog <i className='fa-solid fa-blog'></i> </Link>
                </li>
            </ul>
        </article>
    );
}

export default RecentUpdates;