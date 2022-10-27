import React from "react";
function Testimonials() {
    return(
        <div>
            <section id="testimonials" class="py-3">
                <div className="container">
                    <h2 className="l-heading py-2">What Our Guests Say</h2>
                    <div className="testimonial bg-primary">
                        <img src="./img/person1.jpg" alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro ducimus eos inventore nulla quia quae iure 
                            quidem neque dicta explicabo!
                        </p>
                    </div>
                    <div className="testimonial bg-primary">
                        <img src="./img/person2.jpg" alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro ducimus eos inventore nulla quia quae iure 
                            quidem neque dicta explicabo!
                        </p>
                    </div>
                    <div className="testimonial bg-primary">
                        <img src="./img/person3.jpg" alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro ducimus eos inventore nulla quia quae iure 
                            quidem neque dicta explicabo!
                        </p>
                    </div>
                </div>
            </section> 
        </div>
    );
}
export default Testimonials;