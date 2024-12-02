import React, { useState, useEffect } from "react";
import Papa from "papaparse"; // For parsing CSV
import xyz from "./finalconstds.csv"; // Import the CSV file

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [showTranslateOptions, setShowTranslateOptions] = useState(false);
  const [translatedResult, setTranslatedResult] = useState(null);

  // Load and parse the CSV file on component mount
  useEffect(() => {
    Papa.parse(xyz, {
      download: true,
      header: true,
      complete: (parsedData) => {
        console.log("Parsed Data:", parsedData.data); // Log the parsed dataset to check data
        setData(parsedData.data);
      },
      error: (err) => {
        console.error("Error loading CSV file:", err);
      },
    });
  }, []);

  const handleSearch = () => {
    if (!data || data.length === 0) {
      alert("Dataset is not available or loading.");
      return;
    }

    const found = data.find(
      (item) =>
        item.crime?.toLowerCase() === input.toLowerCase() ||
        item.law?.toLowerCase() === input.toLowerCase()
    );

    if (found) {
      console.log("Search Result:", found); // Log the found result
      setResult(found);
      setTranslatedResult(null); // Reset translation when a new result is shown
    } else {
      setResult(null);
    }
  };

  const handleTranslate = (language) => {
    if (result) {
      // Translate based on language choice
      const translated = {
        crime: result[`crime_${language}`],
        law: result[`law_${language}`],
        punishment: result[`punishment_${language}`],
        description: result[`description_${language}`],
      };

      setTranslatedResult(translated);
    }
    setShowTranslateOptions(false); // Hide language selection after translation
  };

  return (
    <div className="app-container">
      <h1>Learn Constitution in Simple Manner</h1>
      <div className="search-container">
        <label htmlFor="input" className="input-label">
          <b>Enter Crime or Law:</b>
        </label>
        <input
          type="text"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-field"
        />
      </div>

      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      {result ? (
        <div className="result-container">
          <h2>Result:</h2>
          <p>
            <b>Crime:</b> {result.crime}
          </p>
          <p>
            <b>Law:</b> {result.law}
          </p>
          <p>
            <b>Punishment:</b> {result.punishment}
          </p>
          <p>
            <b>Description:</b> {result.description}
          </p>

          <button
            className="translate-button"
            onClick={() => setShowTranslateOptions(true)}
          >
            Translate
          </button>

          {/* Language Selection Modal */}
          {showTranslateOptions && (
            <div className="translate-options">
              <h3>Select Language for Translation:</h3>
              <button
                className="language-button"
                onClick={() => handleTranslate("hi")}
              >
                Hindi
              </button>
              <button
                className="language-button"
                onClick={() => handleTranslate("mr")}
              >
                Marathi
              </button>
            </div>
          )}

          {/* Translated Result */}
          {translatedResult && (
            <div className="translated-result">
              <h2>Translated Result:</h2>
              <p>
                <b>Crime:</b> {translatedResult.crime || "Data not available"}
              </p>
              <p>
                <b>Law:</b> {translatedResult.law || "Data not available"}
              </p>
              <p>
                <b>Punishment:</b>{" "}
                {translatedResult.punishment || "Data not available"}
              </p>
              <p>
                <b>Description:</b>{" "}
                {translatedResult.description || "Data not available"}
              </p>
            </div>
          )}
        </div>
      ) : (
        input && (
          <div className="no-results">
            No results found for "{input}".
          </div>
        )
      )}
    </div>
  );
};

export default App;

// CSS Styling (added inline within the same file)
const style = `
  /* Global Styles */
  body {
    font-family: "Arial", sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f6f9;
    color: #333;
  }

  .app-container {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
  }

  h1 {
    font-size: 36px;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .search-container {
    margin-bottom: 20px;
  }

  .input-label {
    font-size: 18px;
    color: #34495e;
  }

  .input-field {
    width: 100%;
    padding: 12px;
    margin-top: 8px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border-color 0.3s;
  }

  .input-field:focus {
    outline: none;
    border-color: #3498db;
  }

  .search-button {
    padding: 12px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s;
  }

  .search-button:hover {
    background-color: #2980b9;
  }

  .result-container {
    margin-top: 30px;
    padding: 20px;
    background-color: #ecf0f1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .result-container h2 {
    color: #2980b9;
    margin-bottom: 15px;
  }

  .result-container p {
    font-size: 18px;
    line-height: 1.6;
  }

  .translate-button {
    padding: 12px 20px;
    background-color: #f39c12;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
  }

  .translate-button:hover {
    background-color: #e67e22;
  }

  .translate-options {
    margin-top: 20px;
    padding: 20px;
    background-color: #f9e5a3;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .language-button {
    padding: 10px 15px;
    background-color: #8e44ad;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s;
  }

  .language-button:hover {
    background-color: #9b59b6;
  }

  .translated-result {
    margin-top: 20px;
    padding: 20px;
    background-color: #ecf0f1;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .translated-result h2 {
    color: #27ae60;
    margin-bottom: 15px;
  }

  .translated-result p {
    font-size: 18px;
    line-height: 1.6;
  }

  .no-results {
    color: #e74c3c;
    font-size: 18px;
    margin-top: 20px;
  }
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = style;
document.head.appendChild(styleElement);
