# Ex04 Simple Calculator - React Project
## Date:24-11-2026
## Name : Ghavaskar VR
## Reg No :212225040093

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open http://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM
App.css
```

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.calculator-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #141e30, #243b55);
  font-family: Arial, sans-serif;
  padding: 20px;
}

.calculator {
  width: 350px;
  background: #1e293b;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.calculator h2 {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

.display {
  width: 100%;
  min-height: 75px;
  background: #0f172a;
  color: white;
  font-size: 30px;
  text-align: right;
  padding: 20px 12px;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow-x: auto;
  white-space: nowrap;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.buttons button {
  height: 60px;
  border: none;
  border-radius: 12px;
  background: #334155;
  color: white;
  font-size: 22px;
  cursor: pointer;
  transition: 0.2s;
}

.buttons button:hover {
  background: #475569;
  transform: scale(1.04);
}

.buttons .operator {
  background: #f59e0b;
}

.buttons .operator:hover {
  background: #d97706;
}

.buttons .special {
  background: #64748b;
}

.buttons .equal {
  background: #22c55e;
  grid-column: span 2;
}

.buttons .equal:hover {
  background: #16a34a;
}

@media (max-width: 400px) {
  .calculator {
    width: 100%;
    padding: 18px;
  }

  .buttons {
    gap: 8px;
  }

  .buttons button {
    height: 55px;
  }
}

```
App.jsx
```

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
```


## OUTPUT
![alt text](<Screenshot 2026-11-24 155640.png>)
![alt text](<Screenshot 2026-11-24 155647.png>)
## RESULT
The program for developing a simple calculator in React.js is executed successfully.