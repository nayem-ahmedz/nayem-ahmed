import React from 'react';
import { useEffect, useState } from 'react';

function Contact(){
    useEffect(() => {document.title = 'Contact | Nayem Ahmed'}, []);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleInputs = (e) => {
        const {name, value} = e.target;
        setInputs((prev) => ({
            ...prev, [name] : value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputs.name || !inputs.email || !inputs.message){
            setError(
                !inputs.name ? 'Name is required!' :
                !inputs.email ? 'Email is required!' :
                'Did you forget to write a message?'
            );
            return;
        }
        setError('');
        setSubmitted(true);
        const formData = new URLSearchParams(inputs).toString();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData
        })
            .then(() => setSubmitted(true))
            .catch(() => setError('Form submission failed! Please try again'));
    }
    return(
        <section className="contact-section">
            <div className="contact-form-field">
                <h1>Contact Me</h1>
                {
                    submitted ? (
                        <h3 className='success-message'>Thank you for your message. <br /> I will get back to you soon</h3>
                    ) : (
                        <form name="Contact-Form" method="POST" className="contact-form" onSubmit={(e) => handleSubmit(e)}>
                            {/* data-netlify-recaptcha="true" data-netlify="true" */}
                            <input type="hidden" name="form-name" value="Contact-Form" />

                            <input type="text" id="name" name="name" value={inputs.name} onChange={(e) => handleInputs(e)} placeholder="Your Name" />

                            <input type="email" id="email" name="email" value={inputs.email} onChange={(e) => handleInputs(e)} placeholder="Your Email" />

                            <textarea id="message" name="message" value={inputs.message} onChange={(e) => handleInputs(e)} placeholder="How can I help you?"></textarea>

                            <div data-netlify-recaptcha="true" className="captcha-div"></div>
                            {
                                error ? <p id="error-message"> { error } </p> : <p className='invisible-text'>invisible</p>
                            }
                            <input type="submit" value="Send" id="send-btn" />
                        </form>
                    )
                }
            </div>
        </section>
    );
}

export default Contact;