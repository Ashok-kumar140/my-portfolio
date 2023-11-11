import React from 'react';

const Header = () => {
    return (
        <nav>
            <NavContent />
        </nav>
    )
};

const NavContent = () => (
    <>
        
        <div className="logo">&#8826; Ashok Kumar &#8725; &#8827;</div>
        <div>
            <a href="#home">Home</a>
            <a href="#work">Project</a>
            <a href="#timeline">Experience</a>
            <a href="#skill">Skill</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
        <a href="mailto:ashok.1@iitj.ac.in">
            <button>Email</button>
        </a>
    </>
)

export default Header
