import {React} from "react";
import ShowCase from "./ShowCase";
import {Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const homeClass = location.pathname === "/miraclehotel" ? "current" : "";
    const aboutClass = location.pathname === "/miraclehotel/about" ? "current" : "";
    const contactClass = location.pathname === "/miraclehotel/contact" ? "current" : "";

    return (
        <div>
            <header>
                <nav id="navbar">
                    <div className="container">
                        <h1 className="logo"><Link to="/">MIRACLE</Link></h1>
                            <ul>
                                <li><Link to="/miraclehotel" className={homeClass}>Home</Link></li>
                                <li><Link to="miraclehotel/about" className={aboutClass}>About</Link></li>
                                <li><Link to="miraclehotel/contact" className={contactClass}>Contact</Link></li>
                            </ul>
                    </div>
                </nav>
                <ShowCase />
            </header>
        </div>
    );
}
export default Header;