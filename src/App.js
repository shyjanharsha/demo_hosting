import React from 'react';
// import Form from './mainpage.js';
import Regform from './formikform';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-content">
          <Regform />
        </div>
      </div>
    </div>
  );
}

export default App;