import React, { useState } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import ThemeContext from "./context/theme/ThemeContext";

const App = () => {
  const [theme, changeTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={`App ${theme}`}>
        <Header logo={logo} className="App-header">
          <p>
            Edit <code>src/App.js</code>!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
