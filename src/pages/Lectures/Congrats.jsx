import React from 'react'
import './Congrats.css'
const Congrats = () => {
  return (
    <div className='congrats-container'>
        <div className='congrats-heading'>
        <h3>COURSES &gt; SYLLABUS &gt; LECTURE &gt; FINAL PROJ</h3>
        </div>
        <div className='congrats-contents'>
           <h2>
           Congratulations!
           </h2>
           <p>
           You Have completed all the modules of the course.
           </p>
           <p>
           Submit the Final project and receive certificate  
           </p>
        </div>
        <div className='final-work'>
            <h2>
                FINAL PRACTICAL WORK
            </h2>
            <h4>Name</h4>
            <p>
            VFundamental Principles: Understand the foundational 
                    principles of design, including layout, typography, color theory, 
                    and composition. These principles form the basis of effective visual 
                    communication.
            </p>
            <p className='final-assignment-link'>
                        Paste the link of the assignment here
                    </p>
        </div>
        <button
                className='btn'
                >
                    Mark Complete
                </button>
    </div>
  )
}

export default Congrats
