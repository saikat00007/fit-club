import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import Hero_image from '../assets/hero_image.png';
import Hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';
import NumberCounter from 'number-counter';

import { motion } from 'framer-motion'
const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* the best add */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '178px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}>
                    </motion.div>

                    <span>the best fitness club in the town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>
                            Shape
                        </span>
                        <span>
                            Your
                        </span>
                    </div>
                    <div>
                        <span>
                            Ideal body
                        </span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* fegures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={1} delay="4" preFix="+"></NumberCounter>
                        </span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={1} delay="4" preFix="+"></NumberCounter></span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={1} delay="4" preFix="+"></NumberCounter></span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* hero imgs */}
                <img src={Hero_image} alt="" className='Hero_image' />
                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    src={Hero_image_back} alt="" className='Hero_image_back' />
                {/* Calories  */}
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="Calories"
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}
export default Hero;