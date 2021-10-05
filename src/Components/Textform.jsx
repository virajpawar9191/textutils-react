import { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");
  
  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };

  // This function is used for  converting lowerCase to upperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    
    // console.log("Uppercase was clicked");

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
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied on clipboard...!", "success ");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra sspaces are removed...!", "success ");
      }
      
    

  // This function used for writing in textarea we can't write or change in text area because of value in textArea
  // with the help event.target.value we able to change the input
  
  return (
    <>
      <div className="container" style = {{color: props.mode=== 'dark'?'white':'black'}}>
      <h1 className="mb-3 "> {props.heading} </h1>
      <div className="mb-3 ">
        <textarea
          className="form-control my-3" style={{backgroundColor: props.mode==='dark'?'grey': 'white', color:props.mode=== 'dark'?'white':'black'}}
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="8"
          placeholder="Enter Your text here"
        ></textarea>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button 
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        
        <button 
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button 
          type="button"
          className="btn btn-success mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button 
          type="button"
          className="btn btn-danger mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        
      </div>
    </div>

      <div className="container " style={{color: props.mode=== 'dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{(text.split(" ").length)-1} words and {text.length} characters.</p>
          {/* <p>{0.008 * text.split(" ").length} Minutes to read.</p> */}
          <h2>Preview</h2>
          <p>{text.length>0?text: "Enter something in the above textbox to preview it here"}</p>

      </div>
    </>
  );
};

export default Textform;
