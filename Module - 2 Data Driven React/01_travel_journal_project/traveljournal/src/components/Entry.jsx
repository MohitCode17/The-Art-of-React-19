import React from "react";
import location from "../assets/marker.png";

const Entry = ({ journal }) => {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={journal.img.src}
          alt={journal.img.alt}
        />
      </div>
      <div className="info-container">
        <div className="top-info">
          <div>
            <img className="marker" src={location} alt="map marker icon" />
            <span className="country">{journal.country}</span>
          </div>
          <a href={journal.googleMapsLink}>View on Google Maps</a>
        </div>
        <h2 className="entry-title">{journal.title}</h2>
        <p className="trip-dates">{journal.dates}</p>
        <p className="entry-text">{journal.text}</p>
      </div>
    </article>
  );
};

export default Entry;
