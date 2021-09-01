import React from 'react'

export default function Navbar() {
    return (
       
            <nav class="navbar gradient-background">
                <a href="#" class="nav-logo">Rome.K</a>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="/#aboutMe" class="nav-link">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a href="/#skills" class="nav-link">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="/#projects" class="nav-link">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="/#certifications" class="nav-link">Certifications</a>
                    </li>
                    <li style={{backgroundColor:'#FFF3E4'}} class="nav-item">
                        <a style={{fontWeight:"900"}} href="/#contact" class="nav-link">Say Hello</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
    )
}
