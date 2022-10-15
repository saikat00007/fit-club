import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOPened] = useState(false);
    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />
            {menuOpened === false && mobile === true ? (
                <div
                    style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
                    onClick={() => setMenuOPened(true)}
                >
                    <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className='header-menu'>
                    <li>
                        <Link
                            onClick={() => setMenuOPened(false)}
                            to='home'
                            activeClass="active"
                            // span={true}
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>

                        <Link

                            onClick={() => setMenuOPened(false)}
                            to='programs'

                            // span={true}
                            smooth={true}
                        >Programs</Link></li>
                    <li>
                        <Link

                            onClick={() => setMenuOPened(false)}
                            to='Reasons'

                            // span={true}
                            smooth={true}
                        >Why us</Link></li>
                    <li>
                        <Link

                            onClick={() => setMenuOPened(false)}
                            to='plans'

                            // span={true}
                            smooth={true}
                        >Plans</Link></li>
                    <li

                    >
                        <Link
                            onClick={() => setMenuOPened(false)}
                            to='Testimonials'

                            // span={true}
                            smooth={true}
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            )}
        </div>

    );
};

export default Header;