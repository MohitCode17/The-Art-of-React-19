import React, { useEffect, useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordo",
    image: "http://i.imgflip.com/1bij.jpg",
  });
  const [memes, setMemes] = useState([]);

  /**
   * Challenge:
   * Get an array of memes from the imgflip API as soon as
   * this component renders for the first time.
   * Check the imgflip documentation for the correct URL.
   * Save the array of memes (not the whole response
   * data) to state. (For this app, we'll randomly choose
   * one of the memes from this array when the user clicks
   * the "Get a new meme image" button, but we'll do that in
   * a separate challenge.)
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  // Fetching memes
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  console.log(memes);

  // Handle Input Change
  const handleChange = (event) => {
    const { value, name } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.image} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
