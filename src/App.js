import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "✌🏻": "Victory",
  "👋🏻": "Waving",
  "🖖🏻": "Vulcan Salute",
  "🤙🏻": "Call Me",
  "👊🏻": "Oncoming Fist",
  "👍🏻": "Thumbs Up",
  "🤞🏻": "Crossed Fingers",
  "👆🏻": "Pointing Up",
  "👏🏻": "Clapping",
  "👌🏻": "OK",
  "🖐🏻": "Splayed",
  "🙏🏻": "Floded",
  "✍🏻": "Writing",
  "🤘🏻": "Horns",
  "🙌🏻": "Raising",
  "🤛🏻": "Fist",
  "🤏🏻": "Pinching",
  "🤟🏻": "love You",
  "👎🏻": "Thumbs Down"
};

let emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    const inEmoji = event.target.value;
    setEmoji(inEmoji);
    if (inEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inEmoji]);
    } else {
      setMeaning("I don't know about this one.");
    }
  }

  function clickEmojiHandler(inputItem) {
    setEmoji(inputItem);
    setMeaning(emojiDictionary[inputItem]);
  }

  return (
    <div className="App">
      <nav>
        <h1 className="mainHeading">Hand Gestures Recognition </h1>
      </nav>
      <section>
        <input
          type="text"
          onChange={(item) => inputHandler(item)}
          style={{ padding: "0.4rem" }}
          placeholder="Paste your emoji here!"
        />
        <p style={{ marginTop: "2rem", marginBottom: "0", fontSize: "4rem" }}>
          {emoji}
        </p>
        <p style={{ marginTop: "0rem", fontSize: "2rem", fontWeight: "bold" }}>
          {meaning}
        </p>
        {emojiList.map((item) => {
          return (
            <span
              key={item}
              style={{
                margin: "1 rem",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "1rem",
                lineHeight: "4rem"
              }}
              onClick={() => clickEmojiHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </section>
      <footer className="footer">
        <p className="footer-title"></p>
      </footer>
    </div>
  );
}
