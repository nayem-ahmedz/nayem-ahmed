import React from 'react';
import { Link } from 'react-router-dom';

function NoPage(){
    return(
        <section className="wrapper message-section">
            <article id="success-message" className="error-404">
                <Link id="sm-cross-btn" to='/pages/contact'>Report</Link>
                <h2>404 Page Not Found</h2>
                <h3>Looks like you've followed a broken link or entered a URL that doesn't exist on my site. In case of missing page, Hit report!</h3>
                <Link to="/" className="back-home-link"> <i className="fa-solid fa-arrow-left"></i>Back to Home</Link>
            </article>
        </section>
    );
}

export default NoPage;