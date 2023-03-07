import React from "react";
import ShowCase from "./ShowCase";
import {Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    if (location.pathname === '/miraclehotel') {
        return (
            <div>
                <header>          
                    <nav id="navbar">
                        <div className="container">
                            <h1 className="logo"><Link to="/">MIRACLE</Link></h1>
                                <ul>
                                    <li><Link className="current" to="/miraclehotel">Home</Link></li>
                                    <li><Link to="miraclehotel/about">About</Link></li>
                                    <li><Link to="miraclehotel/contact">Contact</Link></li>
                                </ul> 
                        </div>
                    </nav>
                    <ShowCase />                
                </header>
            </div>
        );
    }
    if (location.pathname === '/about') {
        return (
            <div>
                <header>          
                    <nav id="navbar">
                        <div className="container">
                            <h1 className="logo"><Link to="/">MIRACLE</Link></h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link className="current" to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul> 
                        </div>
                    </nav>
                    <ShowCase />                
                </header>
            </div>
        );
    }
    if (location.pathname === '/contact') {
        return (
            <div>
                <header>          
                    <nav id="navbar">
                        <div className="container">
                            <h1 className="logo"><Link to="/">MIRACLE</Link></h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link className="current" to="/contact">Contact</Link></li>
                                </ul> 
                        </div>
                    </nav>
                    <ShowCase />                
                </header>
            </div>
        );
    }
    
}
export default Header;