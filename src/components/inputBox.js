import React, {useState} from 'react'
export default function InputBox(props){

  const [text, setText]= useState('Enter The Text Here..');

  const handleClick=()=>{
  
    setText(text.toUpperCase())
    props.showAlert('Success. Uppercase completed.', 'success');
  }

  const handleChange=(e)=>{
  
    setText(e.target.value);

  }


    return (
      <>
        <div className="container  p-4">
          <h1
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {props.heading}
          </h1>
          <div className="form-floating">
            <textarea
              className="form-control"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#343a40",
                color: props.mode === "light" ? "black" : "white",
              }}
              placeholder="Leave a comment her${props.mode==='light'?'dark':'light'"
              onChange={handleChange}
              value={text}
              id="floatingTextarea"
            ></textarea>
            <button className="btn mt-4 btn-primary" onClick={handleClick}>
              Click to UpperCase
            </button>
          </div>
        </div>

        <div className="container">
          <h2
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Text Summary
          </h2>
          <p
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {" "}
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {0.008 * text.split(" ").length} Minutes Read
          </p>
          <h2
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Preview
          </h2>
          <p
            style={{
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {text}
          </p>
        </div>
      </>
    );
}
