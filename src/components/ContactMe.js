import React from 'react'
import '../styles/contact.css'

const ContactMe = () => {
    return (
        <div className="container text-center my-5" id="contact">
            <h3>Get In Touch With Me</h3>
            <div className="container  mx-auto text-center contact-container ">
                <a href="https://github.com/MArsalanAI3" className="contact-link" data-aos="fade-down" target="blank">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://twitter.com/mag_arsalan" className="contact-link" data-aos="fade-down" target="blank">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-arsalan-13b554202/" className="contact-link" data-aos="fade-down" target="blank">
                    <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="mailto:marsalan8@outlook.com" className="contact-link" data-aos="fade-down" target="blank">
                    <i className="fa fa-envelope"></i>
                </a>
            </div>
        </div>

    )
}

export default ContactMe
