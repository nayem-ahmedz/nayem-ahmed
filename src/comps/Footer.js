import React from 'react';

function Footer(){
    return(
        <footer>
            <div className="wrapper footer-cont">
                <div className="footer-links">
                    <p>Follow me on</p>
                    <a href="http://www.linkedin.com/in/nayem-ahmedz" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/nayem-ahmedz/" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.youtube.com/@nayemscanvas" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="footer-right">
                    <p>
                        <a href="https://wev-dev.netlify.app/" title="Check out my Practice Tasks" target="_blank">Front-end Journey</a> :: <a href="/pages/blog.html">Blog</a> :: <a href="/pages/contact.html">Contact</a>
                    </p>
                    <p>@Nayem's Portfolio | <span id="footer-date-update">September 2024</span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;