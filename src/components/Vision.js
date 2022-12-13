import React from 'react';
import '../CSS/styles.css';
import Team from '../media/team.png';

const Vision = () => {
    return (
        <>
            <div className='vision'>
                <div className='vision-image'>
                    <img src={Team} alt="openSource"></img>
                </div>
                <div className='vision-div'>
                    <div className='our-vision'>
                        <h1>Our <span className='gradient-text'>Vision</span></h1>
                        <div className='bullet-points'>
                            <div className='bullet'>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                            <div className='points'>
                                <p>Real world open source projects on our GitHub organization to stand out in public.</p>
                            </div>
                        </div>
                        <div className='bullet-points'>
                            <div className='bullet'>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                            <div className='points'>
                                <p>Valuable Mentorship, hands-on YouTube tutorials and a progressive Open-Source Community</p>
                            </div>
                        </div>
                        <div className='bullet-points'>
                            <div className='bullet'>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                            <div className='points'>
                                <p>Hand-picked resources and blogs to expand the ocean of your knowledge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vision;