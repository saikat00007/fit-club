import React from 'react';
import '.Join.css';

const Join = () => {
    // const form = useRef()
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
                <from /* ref={form} **/ className="email-container">
                    <input type="email" name='user email' placeholder='Enter your Email address' /> 
                    <button className="btn btn-j">Join Now</button>
                </from>
            </div>
        </div>
    )
}

export default Join;