import React from "react";
import { render } from "react-dom";

import Pager from "./";

function App() {
  const [value, setState] = React.useState(0);

  const BackButton = (props) => (
    <button style={buttonStyle} onClick={() => setState(value - 1)} {...props}>
      Back
    </button>
  );

  const NextButton = () => (
    <button style={buttonStyle} onClick={() => setState(value + 1)}>
      Next
    </button>
  );

  return (
    <Pager value={value} onRequestChange={i => setState(i)}>
      <div style={base}>
        <div style={card}>
          <h2>Card #1</h2>
          <div>
            <BackButton disabled />
            <NextButton />
          </div>
        </div>
      </div>

      <div style={{ ...base, backgroundColor: "pink" }}>
        <div style={card}>
          <h2>Card #2</h2>
          <div>
            <BackButton />
            <NextButton />
          </div>
        </div>
      </div>

      <div style={base}>
        <div style={card}>
          <h2>Card #3</h2>
          <div>
            <BackButton />
            <NextButton />
          </div>
        </div>
      </div>

      <div style={base}>
        <div style={card}>
          <h2>Card #4</h2>
          <div>
            <BackButton />
            <NextButton />
          </div>
        </div>
      </div>
      <div style={{ ...base, background: "pink" }}>
        <div style={card}>
          <h2>Card #4</h2>
          <div>
            <BackButton />
            <button onClick={() => setState(0)}>Reset</button>
          </div>
        </div>
      </div>
    </Pager>
  );
}

const base = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const buttonStyle = {
  margin: 8,
  borderRadius: 4,
  backgroundColor: "transparent",
  color: "black"
};

const card = {
  padding: 80,
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  width: 800,
  maxWidth: "100%",
  borderRadius: 4,
  margin: "0 8px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.25)"
};

render(<App />, window.root)
