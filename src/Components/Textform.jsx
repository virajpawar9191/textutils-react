import { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to Upper Case...!", "success ");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case...!", "success ");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared...!", "success ");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is Copied on clipboard...!", "success ");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed...!", "success ");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-3 "> {props.heading} </h1>
        <div className="mb-3 ">
          <textarea
            className="form-control my-3"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            placeholder="Enter Your text here"
          ></textarea>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>

          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>

          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-success mx-2 my-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>

          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-danger mx-2 my-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
};

export default Textform;
