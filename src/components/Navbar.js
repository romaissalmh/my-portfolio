import React from 'react'

export default function Navbar() {
    return (
       
            <nav className="navbar gradient-background">
                <a href="#" className="nav-logo">Rome.K</a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/#aboutMe" className="nav-link">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="/#skills" className="nav-link">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="/#projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="/#certifications" className="nav-link">Certifications</a>
                    </li>
                    <li style={{backgroundColor:'#FFF3E4'}} className="nav-item">
                        <a style={{fontWeight:"900"}} href="/#contact" className="nav-link">Say Hello</a>
                    </li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
    )
}
