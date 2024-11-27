import React from "react";
import phone from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";

const Contact = (props) => {
  // console.log(props); // getting object that we passed in.
  return (
    <article className="contact-card">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phone} alt="phone icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mail} alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
};

export default Contact;
