import React from "react";
function ContactForm() {
    return(
        <div>
            <section id="contact-form" className="py-3">
                <div className="container">
                    <h1 className="l-heading"><span className="text-primary">Contact </span>Us</h1>
                    <p>Please fill out the form below to contact us</p>

                    <form action="process.php" className="py-3">
                        <div className="form-group">
                            <label htmlFor="name" id="name">Name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" id="email">Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" id="message">Message</label>
                            <textarea type="text" name="message" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>

            </section>
        </div>
    )
}
export default ContactForm;