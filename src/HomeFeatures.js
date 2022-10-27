import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import {faBowlFood} from "@fortawesome/free-solid-svg-icons";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";

function HomeFeatures() {
    return(
        <div>
            <section id="features">
                <div className="box bg-light">
                    <FontAwesomeIcon icon={faHotel} size={"2x"} />
                    <h3>Great Location</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Alias assumenda odit optio voluptas.
                    </p>
                </div>
                <div className="box bg-primary">
                    <FontAwesomeIcon icon={faBowlFood} size={"2x"} />
                    <h3>Free Meals</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Alias assumenda odit optio voluptas.
                    </p>
                </div>
                <div className="box bg-light">
                    <FontAwesomeIcon icon={faDumbbell} size={"2x"} />
                    <h3>Fitness Meals</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Alias assumenda odit optio voluptas.
                    </p>
                </div>
            </section>
        </div>
    )
}
export default HomeFeatures;