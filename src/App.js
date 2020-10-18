import React, { useState } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import ThemeContext from "./context/theme/ThemeContext";

import Parent from './renderChildren/Parent';
import FirstChild from './renderChildren/FirstChild';
import SecondChild from './renderChildren/SecondChild';

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
					<div>hello I'm a child of Header</div>
        </Header>
				{/* Render props Parent and Children components */}
				<Parent>
					<FirstChild />
					<SecondChild />
				</Parent>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
