import React from 'react';
import { useEffect, useState } from 'react';

function Contact(){
    useEffect(() => {document.title = 'Contact | Nayem Ahmed'}, []);
    const [error, setError] = useState('');
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
        if(inputs.name === '' && inputs.email === '' && inputs.message === ''){
            setError('All Fields are required!');
            console.log('error found')
        } else if(inputs.name === ''){
            setError('Name is required!');
        } else if(inputs.email === ''){
            setError('Email is required!');
        } else if(inputs.message === ''){
            setError('Did you forget to write a message?');
        } else{
            setError('');
            console.log(inputs.name, inputs.email, inputs.message)
        }
    }
    return(
        <section className="contact-section">
            <div className="contact-form-field">
                <h1>Contact Me!</h1>
                <form name="Contact-Form" method="POST" data-netlify-recaptcha="true" data-netlify="true" className="contact-form" onSubmit={(e) => handleSubmit(e)}>

                    <input type="text" id="name" name="name" value={inputs.name} onChange={(e) => handleInputs(e)} placeholder="Your Name" />


                    <input type="email" id="email" name="email" value={inputs.email} onChange={(e) => handleInputs(e)} placeholder="Your Email" />

                    <textarea id="message" name="message" value={inputs.message} onChange={(e) => handleInputs(e)} placeholder="How can I help you?"></textarea>

                    <div data-netlify-recaptcha="true" className="captcha-div"></div>
                    {
                        error ? <p id="error-message"> { error } </p> : <p className='invisible-text'>invisible</p>
                    }
                    <input type="submit" value="Send" id="send-btn" />
                </form>
            </div>
        </section>
    );
}

export default Contact;