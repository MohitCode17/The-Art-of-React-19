import React from "react";
import location from "../assets/marker.png";

const Entry = ({ img, title, country, googleMapsLink, dates, text }) => {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={img.src} alt={img.alt} />
      </div>
      <div className="info-container">
        <div className="top-info">
          <div>
            <img className="marker" src={location} alt="map marker icon" />
            <span className="country">{country}</span>
          </div>
          <a href={googleMapsLink}>View on Google Maps</a>
        </div>
        <h2 className="entry-title">{title}</h2>
        <p className="trip-dates">{dates}</p>
        <p className="entry-text">{text}</p>
      </div>
    </article>
  );
};

export default Entry;

// Location:
// Japan

// Google Maps Link:
// https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu

// Dates:
// 12 Jan, 2021 - 24 Jan, 2021

// Text:
// Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
