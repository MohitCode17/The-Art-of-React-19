import React from "react";
import phoneIcon from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";

const Contact = ({ img, name, phone, email }) => {
  return (
    <article className="contact-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneIcon} alt="phone icon" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mail} alt="mail icon" />
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Contact;
