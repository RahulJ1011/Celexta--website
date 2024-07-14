import React from 'react';
import './Lectures.css';
import Playbtnicon from '../../assets/icons/Playbtnicon.png';

const Lectures = () => {
    return (
        <div className='lecture-container'>
            <div className='lecture-heading'>
                <h3>COURSES &gt; SYLLABUS &gt; LECTURE</h3>
            </div>
            <div className='video-contents'>
                <div className='video-container-wrapper'>
                    <div className='lecture-video'>
                        <img
                            src={Playbtnicon}
                            alt='video-icon'
                            className='video-icon'
                        />
                    </div>
                </div>
                <div className='lecture-topic'>
                    <h2>Module n &gt; Topic &gt;</h2>
                    <p className='video-desc'>Video Description</p>
                </div>
                <div className='lecture-assignment'>
                    <h2>
                        Assignment - Module n
                    </h2>
                    <h5>
                        Name of the Assignment
                    </h5>
                    <p>
                        Fundamental Principles: Understand the foundational 
                        principles of design, including layout, typography, color theory, 
                        and composition. These principles form the basis of effective visual 
                        communication.
                    </p>
                    <p className='assignment-link'>
                        Paste the link of the assignment here
                    </p>
                </div>
                <button className='btn'>
                    Mark Complete
                </button>
            </div>
        </div>
    );
};

export default Lectures;
