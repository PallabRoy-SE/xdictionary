import { useState } from "react";

const customDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleSearch = () => {
    if (inputText.length) {
      const wordFound = customDictionary.find(
        (item) =>
          item.word.trim().toLowerCase() === inputText.trim().toLowerCase()
      );
      setSuggestedText(
        wordFound?.meaning ?? "Word not found in the dictionary."
      );
    } else setSuggestedText("Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="Search for a word..."
      />
      <button onClick={() => handleSearch()}>Search</button>
      <p style={{ fontWeight: "bold" }}>Definition:</p>

      {suggestedText && <p>{suggestedText}</p>}
    </div>
  );
}

export default App;
