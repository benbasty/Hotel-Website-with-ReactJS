import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function ContactInfo() {
    return(
        <div>
            <section id="contact-info" className="bg-dark">
                <div className="container">
                    <div className="box">
                        <FontAwesomeIcon icon={faHotel} size={"2x"} />
                        <h3>Location</h3>
                        <p> 100 Main Street Bangkok, Thailand
                        </p>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={faPhone} size={"2x"} />
                        <h3>Phone Number</h3>
                        <p>(167) 345-5555</p>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
                        <h3>Email address</h3>
                        <p>frontdesk@hotelmiracle.co</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ContactInfo;