import React, { useRef } from 'react';
import './join.css';
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target.name['user_email']);

        emailjs.sendForm('service_j05eh4i', 'template_boz8ed4', form.current, 'mirEG__VLIbLo7QAe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="Join" id="join-us">
            <div className='left-j'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className='right-j'>
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your Email address' />
                    <button className="btn btn-j" type="submit">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join;