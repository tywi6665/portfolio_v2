import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link
                    activeClass="active"
                    to="name-section"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Tyler Winstead</Link>
            </div>
            <div>
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
            </div>
        </nav>
    );
}

export default Navbar;