import React, { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

const App = () => {
  const [mode, setMode] = useState("light");
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
      <Navbar title="TxtUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Textform
          heading="TextUtils - Word Counter | Chracter Counter | Remove Extra Spaces"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
};

export default App;
