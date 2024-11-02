import React from 'react';

function Contact(){
    return(
        <section className="contact-section">
            <div className="contact-form-field">
                <h1>Contact Me!</h1>
                <form action="/pages/message.html" name="Contact-Form" method="POST" data-netlify-recaptcha="true" data-netlify="true" className="contact-form">
                    <input type="text" id="name" name="name" placeholder="Your Name" />
                    <input type="email" id="email" name="email" placeholder="Your Email" />
                    <textarea id="message" name="message" placeholder="How can I help you?"></textarea>
                    <div data-netlify-recaptcha="true" className="captcha-div"></div>
                    <p id="error-message" style={{display: 'none'}}>Error.message</p>
                    <p style={{color: 'red'}}>
                        Under Construction
                    </p>
                    <input type="submit" value="Send" id="send-btn" disabled />
                </form>
            </div>
        </section>
    );
}

export default Contact;