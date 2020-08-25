import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >Projects</Link>
            <Link
                activeClass="active"
                to="resume-section"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >Resume</Link>
            <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >Contact</Link>
        </nav>
    );
}

export default Navbar;