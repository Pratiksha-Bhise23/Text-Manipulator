import React, { useState } from 'react';

const Navbar = ({ title, about }) => {
  // State to manage Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State to manage text transformations
  const [text, setText] = useState(title);

  // State to manage Navbar color
  const [navbarColor, setNavbarColor] = useState('navbar-light bg-light');

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#ffffff' : '#343a40'; // Change body background color
    document.body.style.color = isDarkMode ? '#000000' : '#ffffff'; // Change text color
  };

  // Function to change text to Uppercase
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  // Function to change text to Lowercase
  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  // Function to clear text
  const handleClear = () => {
    setText('');
  };

  // Function to change Navbar color to light blue
  const handleChangeColor = () => {
    setNavbarColor('navbar-light bg-primary');
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : navbarColor}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{text}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{about}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleChangeColor}>
                  Change
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={handleUppercase}>Uppercase</a></li>
                  <li><a className="dropdown-item" href="#" onClick={handleLowercase}>Lowercase</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#" onClick={handleClear}>Clear</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={toggleDarkMode}
                checked={isDarkMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
