import React from 'react';
import '../CSS/styles.css';
import Navbar from '../components/Navbar';
import Image from '../media/vision.png';

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <div className='header-div'>
                <div className='header-content'>
                    <h1>Kick Start your <br></br>
                        <span className='gradient-text'>Open Source</span> Journey</h1>
                    <p>
                        A community to get you started with open source and build your network. <br></br>
                        Get hands on with some cool open source projects and pave your way to boundless opportunities.
                    </p>
                    <a href='https://github.com/Code-For-Comm'>
                        <button type='button' className='header-button github-button'>Start Contribution</button>
                    </a>
                    <a href='http://discord.gg/ejXJkd64Jg'>
                        <button type='button' className='header-button discord-button'><i class="fa-brands fa-discord"></i>Join the community</button>
                    </a>
                </div>
                <div className='header-image'>
                    <img src={Image} alt='open-source'></img>
                </div>
            </div>
        </div>
    )
}

export default Header;