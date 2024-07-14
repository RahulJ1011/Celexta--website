import React from 'react'
import "./certificate.css"
const Certificate = () => {
  return (
    <div className='certificate-container'>
        <div className='certificate-heading'>
        <h3>COURSES &gt; SYLLABUS &gt; LECTURE &gt; FINAL PROJ &gt; CERTFICATE</h3>
        </div>
        <div className='certificate-contents'>
            <div className='certificate-greetings'>
            <h3>
            Congratulations on 
            </h3>
            <h3>
            completeting the course!
            </h3>
            </div>
           <p style={{
            fontSize:"24px",
            marginTop:"30px",
            textAlign: "center",
            marginBottom:"30px"
           }}>
            Here is Your Certificate
           </p>
           <div className='user-certficate'>

           </div>
           <button className='btn'>
            Download Certficate
           </button>
        </div>
    </div>
  )
}

export default Certificate
