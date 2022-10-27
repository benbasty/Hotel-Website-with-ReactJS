import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div>
            <footer id="main-footer">
            <p>
                <span><Link to="/">Hotel Miracle</Link> </span>&copy; 2022 All Rights Reserved.
            </p>
            </footer>
        </div>
    );
}
export default Footer;