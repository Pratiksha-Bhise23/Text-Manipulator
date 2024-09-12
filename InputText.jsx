import React, { useState } from "react";

export const InputText = () => {
  const [text, setText] = useState("");
  const [lastText, setLastText] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(true);
  const [count, setCount] = useState(0);

  const uppercaseClicked = () => {
    console.log("Uppercase clicked");
    setCount(count + 1);
    setText(text.toUpperCase());
    setBold(false); // Use false directly
  };

  const lowercaseClicked = () => {
    console.log("Lowercase clicked");
    setText(text.toLowerCase());
    setBold(false); // Use false directly
  };

  const clearClicked = () => {
    console.log("Clear clicked");
    setText('');
  };

  const handleInputChange = (event) => {
    setText(event.target.value); // Set text directly
    console.log(event.target.value);
  };

  let countStyle = {};
  if (count >= 11) {
    countStyle = { color: 'red' };
  }

  const handleBold = () => {
    setBold(!bold);
  };

  const handleItalic = () => {
    setItalic(!italic);
  };

  const handleClipBoard = () => {
    navigator.clipboard.writeText(text);
  };

  const calculateReadingTime = () => {
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    return Math.ceil((words / 200) * 60);
  };

  return (
    <div>
      {/* <h1>Welcome to TextManipulator</h1> */}
      <div style={{ textAlign: 'center' }}>
        <textarea
          style={{
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
            fontSize: '20px',
            fontWeight: bold ? 'bold' : 'normal',
            fontStyle: italic ? 'italic' : 'normal',
          }}
          rows="8"
          cols="100"
          className="form-control"
          placeholder="Leave a comment here"
          value={text}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <span>
          <button onClick={uppercaseClicked} className="btn btn-primary my-3 m-5">Uppercase</button>
          <button onClick={lowercaseClicked} className="btn btn-success my-3 m-5">Lowercase</button>
          <button onClick={clearClicked} className="btn btn-danger my-3 m-5">Clear</button>
          <button onClick={handleBold} className="btn btn-danger my-3 m-5">Bold</button>
          <button onClick={handleItalic} className="btn btn-danger my-3 m-5">Italic</button>
          <button onClick={handleClipBoard} className="btn btn-danger my-3 m-5">ClipBoard</button>
        </span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2>Btn Clicked: <span style={{ color: count > 10 ? 'blue' : 'red', backgroundColor: count > 10 ? 'white' : 'black' }}>{count}</span></h2>
        <h2>Text Summary</h2>
        <h3 style={{ textAlign: 'center', marginBottom: '0px', color: count >= 11 ? 'red' : 'black' }}>Count: {count}</h3>
        <p style={{ marginBottom: '5px' }}>Number of characters: {text.length}</p>
        <p style={{ marginBottom: '5px' }}>Number of words: {text.trim().split(/\s+/).filter((word) => word.length > 0).length}</p>
        <p style={{ marginBottom: '5px' }}>Estimated reading time: {calculateReadingTime()} seconds</p>
      </div>
    </div>
  );
};

export default InputText;
