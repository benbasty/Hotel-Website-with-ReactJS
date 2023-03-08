import {React} from "react";
import ShowCase from "./ShowCase";
import {Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const homeClass = location.pathname === "/Hotel-Website-with-ReactJS" ? "current" : "";
    const aboutClass = location.pathname === "/Hotel-Website-with-ReactJS/about" ? "current" : "";
    const contactClass = location.pathname === "/Hotel-Website-with-ReactJS/contact" ? "current" : "";

    return (
        <div>
            <header>
                <nav id="navbar">
                    <div className="container">
                        <h1 className="logo"><Link to="/">MIRACLE</Link></h1>
                            <ul>
                                <li><Link to="/Hotel-Website-with-ReactJS" className={homeClass}>Home</Link></li>
                                <li><Link to="Hotel-Website-with-ReactJS/about" className={aboutClass}>About</Link></li>
                                <li><Link to="Hotel-Website-with-ReactJS/contact" className={contactClass}>Contact</Link></li>
                            </ul>
                    </div>
                </nav>
                <ShowCase />
            </header>
        </div>
    );
}
export default Header;