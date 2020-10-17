import React, { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext";

const Header = ({ logo, children }) => {
	const { theme, changeTheme } = useContext(ThemeContext);
	console.log('theme ', theme)
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
			<button type='button' onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>Change Mode</button>  
      {children}
    </header>
  );
};

export default Header;
