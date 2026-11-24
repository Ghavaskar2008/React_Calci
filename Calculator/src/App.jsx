
import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("0");
    }
    else if (value === "DEL") {
      setDisplay((prev) =>
        prev.length > 1 ? prev.slice(0, -1) : "0"
      );
    }
    else if (value === "=") {
      try {
        const expression = display.replace(/×/g, "*").replace(/÷/g, "/");

        if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
          throw new Error("Invalid expression");
        }

        const result = Function(
          '"use strict"; return (' + expression + ")"
        )();

        if (!Number.isFinite(result)) {
          throw new Error("Invalid result");
        }

        setDisplay(String(Number(result.toFixed(8))));
      }
      catch {
        setDisplay("Error");
      }
    }
    else {
      setDisplay((prev) =>
        prev === "0" || prev === "Error"
          ? value
          : prev + value
      );
    }
  };

  const buttons = [
    "C", "DEL", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">

        <h2>Simple Calculator</h2>

        <div className="display">
          {display}
        </div>

        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className={
                btn === "="
                  ? "equal"
                  : ["+", "-", "×", "÷", "%"].includes(btn)
                  ? "operator"
                  : ["C", "DEL"].includes(btn)
                  ? "special"
                  : ""
              }
            >
              {btn}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
