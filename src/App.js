import React, { useState } from "react";
import Alert from "./Components/Alert";
// import About from './Components/About'
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light"); // dark mode is enaled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled..!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled..!", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TxtUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Switch> */}
          {/* <Route exact  path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <div className="container my-3">
              <Textform
                heading="Enter the text to Analyze Below"
                mode={mode}
                showAlert={showAlert}
              />
              {/* <About/> */}
            </div>
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </>
  );
};

export default App;
