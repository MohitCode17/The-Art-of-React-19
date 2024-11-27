import React from "react";
import whiskerson from "../assets/mr-whiskerson.png";
import phone from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";

const Contact = () => {
  return (
    <article className="contact-card">
      <img src={whiskerson} alt="Photo of Mr. Whiskerson" />
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img src={phone} alt="phone icon" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src={mail} alt="mail icon" />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </article>
  );
};

export default Contact;
