import React from "react";
import {Link} from "react-router-dom";

function HomeInfo() {
    return(
        <div>
            <section id="home-info" className="bg-dark">
            <div className="info-img">

            </div>
            <div className="info-content">
                <h2><span className="text-primary">The History </span>Of Our Hotel</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Earum rerum voluptatem qui distinctio molestiae eligendi 
                    quibusdam, cumque repellat corporis quia, iusto 
                    cupiditate minima doloribus quasi eius modi vitae, 
                    fuga aliquid!
                </p>
                <Link to="/about" className="btn btn-light">Read More</Link>
            </div>
        
            </section>
        </div>
    )
}
export default HomeInfo;