import React from "react";
function AboutInfo() {
    return(
        <div>
            <section id="about-info" className="bg-light py-4">
            <div className="container">
                <div className="info-left">
                    <h1 className="l-heading py-2"> <span className="text-primary">About</span> Miracle Hotel</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Commodi inventore quos, nulla officia perspiciatis velit 
                        blanditiis quibusdam dolore delectus ipsa non cupiditate 
                        deserunt corrupti provident quasi magnam. 
                        Hic, suscipit iste?
                    </p>
                </div>
                <div className="info-right py-2">
                    <img src="./img/hotel2.jpg" alt=""/>
                </div>
            </div>
            </section>
        </div>
    )
}
export default AboutInfo;