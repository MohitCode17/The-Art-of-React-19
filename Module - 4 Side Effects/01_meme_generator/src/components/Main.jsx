import React, { useEffect, useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordo",
    image: "http://i.imgflip.com/1bij.jpg",
  });
  const [memes, setMemes] = useState([]);

  // Fetching memes
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  /**
   * Challenge: Get a random image from the array of
   * allMemes when the user clicks the button. Once
   * you've gotten a random image from the array, make
   * sure to write the code that will display that
   * random meme image to the page.
   */

  // Get random image
  const getMemeImage = () => {
    // Get a random number from 0 to arrays.length
    const randomNumber = Math.floor(Math.random() * memes.length);
    // Use the random number to get the random meme
    const memeImage = memes[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      image: memeImage,
    }));
  };

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
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
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
