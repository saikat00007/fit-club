import React from 'react';
import './Reasons.css';
import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Image3 from '../../assets/image3.png';
import Image4 from '../../assets/image4.png';
import Nb from '../../assets/nb.png';
import Adidas from '../../assets/adidas.png';
import Nike from '../../assets/nike.png';
import Tick from '../../assets/tick.png';

const Reasons = () => {
    return (
        <div className="Reasons" id="Reasons">
            <div className="left-r">
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
            </div>
            <div className="right-r">
                <span>some reasons</span>
                <div>
                    <span className="stroke-text">why</span>
                    <span>choose us?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={Tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{
                    color: "var(--gray)",
                    fontWight: "normal",
                }}>
                    OUR PARTNERS
                </span>
                <div className="partners">
                    <img src={Nb} alt="" />
                    <img src={Adidas} alt="" />
                    <img src={Nike} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Reasons;