import React from "react";
import { Link } from "react-router-dom";

function ShowCase() {
    return (
        <div className="showcase">
            <div className="container">
                <div className="showcase-content">
                    <h1><span className="text-primary">Enjoy</span> your stay</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, unde? Magni error incidunt inventore ab, nemo quod fugit quibusdam quis tenetur tempore reiciendis saepe accusamus qui deleniti fugiat, voluptate explicabo.</p>
                    <Link to="/about" className="btn">About Our Hotel</Link>
                </div>
            </div>
        </div>
    );
}
export default ShowCase;
