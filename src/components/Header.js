import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ menuOpen,setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>&#8826; Ashok Kumar &#8725; &#8827;</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Project
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#skill">
        Skill
      </a>
      <a onClick={() => setMenuOpen(false)} href="#about">
        About
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:official.6packprogrammer@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;