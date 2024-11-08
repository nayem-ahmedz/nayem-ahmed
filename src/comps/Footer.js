import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <div className="wrapper footer-cont">
                <div className="footer-links">
                    <p>Follow me on</p>
                    <a href="http://www.linkedin.com/in/nayem-ahmedz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/nayem-ahmedz/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="https://web.facebook.com/nayemAhmedz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.youtube.com/@nayemscanvas" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="footer-right">
                    <p>
                        <a href="https://wev-dev.netlify.app/" title="Check out my Practice Tasks" target="_blank" rel="noopener noreferrer">Front-end Journey</a> :: <Link to="/pages/blog">Blog</Link> :: <Link to="/pages/contact">Contact</Link>
                    </p>
                    <p>@Nayem's Portfolio | <span id="footer-date-update">Nov 2024</span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;