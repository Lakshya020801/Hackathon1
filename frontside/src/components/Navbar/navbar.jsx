import React from 'react'
import "./navbar.css"
import "./aos.css"

export default function navbar() {
    return (
        <div>

<section id="navigation">
        <nav className="navbar smart-scroll navbar-custom  navbar-expand-md navbar-light"> 
            <a className="navbar-brand" href="https://hatch-ed.github.io/Homepage/"><img id="navigation-brand" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse  navbar-collapse" id="navbarToggleExternalContent">
                <ul className="navbar-nav  ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://hatch-ed.github.io/Homepage/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://hatch-ed.github.io/About/">About Us</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="https://hatch-ed.github.io/Courses/">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav> 
    </section>
            
        </div>
    )
}
