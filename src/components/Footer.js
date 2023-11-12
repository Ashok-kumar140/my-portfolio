import React from 'react'

import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from 'react-icons/ai';
import pic from '../assets/profilepic.jpg'
const Footer = () => {
    return (
        <footer>
            <div>
                <img src={pic} alt="Founder" />
                <h3>Ashok</h3>
                <p><span>Designed and Developed by Ashok &nbsp; </span> <span> Copyright &#169; 2023</span></p>
            </div>
            <div>
                <h3>Connect With Me</h3>
                <article>
                    <a href="https://www.linkedin.com/in/ashok-kumar-117b65204/" target='_blank'>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/Ashok-kumar140" target='_blank'>
                        <AiOutlineGithub />
                    </a>
                    <a href="https://www.instagram.com/a.k.daukiya/" target='_blank'>
                        <AiFillInstagram />
                    </a>
                </article>
            </div>
            <a href="#home">Home</a>
        </footer>
    )
}

export default Footer
