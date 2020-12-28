import React from 'react'
import Muhammad_Arsalan from '../images/pic.png'


import AOS from 'aos';

const AboutMe = () => {

    
    AOS.init();
   
    

    return (
        <div className="container mx-auto my-5" id="aboutme">
            <div className="row" >
                <div className="col-md-6 my-5" data-aos="fade-down" >
                    <h2 className="my-5 heading ">
                        About Me
                    </h2>
                        <p style={{fontStyle:"italic"}}>
                        
                        Hello! I'm Muhammad Arsalan, an undergraduate student at SSUET university of engineering and technology Karachi. I'm currently in my third year of bachelor's in Computer Science. I consume much of my time working on self-projects associated with web technologies often and on their deployment. I relish learning new technologies and I continually try to keep myself updated.
                    
                        </p>
                    
                    
                </div>
                <div className="col-md-6 my-5 py-5" style={{ textAlign: 'center' }} data-aos="flip-left">
                    <img src={Muhammad_Arsalan} alt="me" className="img-thumbnail" style={{height:'70vh'}} />
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
