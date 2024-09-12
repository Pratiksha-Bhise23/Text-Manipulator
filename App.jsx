import React from 'react';
import InputText from './component/InputText';
import Navbar from './component/Navbar';




const App = () => {
  return (
    <>
    <Navbar/>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Welcome to Text Manipulator</h1>
        <InputText />
      </div>
    </>
  );
};

export default App;
