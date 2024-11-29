import React from "react";
import Header from "./components/Header";
import "./App.css";
import Entry from "./components/Entry";
import data from "./data";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        {data.map((journal) => (
          <Entry
            key={journal.id}
            img={{
              src: journal.img.src,
              alt: journal.img.alt,
            }}
            title={journal.title}
            country={journal.country}
            googleMapsLink={journal.googleMapsLink}
            dates={journal.dates}
            text={journal.text}
          />
        ))}
      </main>
    </>
  );
};

export default App;
