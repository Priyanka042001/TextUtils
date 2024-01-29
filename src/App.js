// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode can be enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode can be enabled", "success")

    }
  }
  return (
    <>
      <Router>
        <Navbar title="textutils" About="About us " mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>

            <Route exact path="/">
              <Textform heading="Please enter your text here below" mode={mode} showAlert={showAlert} />

            </Route>
          </Switch>
          
        </div>
      </Router>
    </>
  );
}

export default App;
