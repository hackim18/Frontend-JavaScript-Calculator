import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [formulaDisplay, setFormulaDisplay] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  const handleNumber = (num) => {
    setEvaluated(false);
    if (display === "0" || evaluated) {
      setDisplay(num);
      setFormulaDisplay(num);
    } else {
      setDisplay(display + num);
      setFormulaDisplay(formulaDisplay + num);
    }
  };

  const handleOperator = (operator) => {
    if (!evaluated) {
      const lastChar = formulaDisplay.trim().slice(-1);
      const secondLastChar = formulaDisplay.trim().slice(-2, -1);

      if ("+-*/".includes(lastChar) && operator !== "-") {
        let updatedFormula = formulaDisplay;
        while ("+-*/".includes(updatedFormula.trim().slice(-1))) {
          updatedFormula = updatedFormula.slice(0, -1).trim();
        }
        updatedFormula += ` ${operator} `;
        setDisplay(operator);
        setFormulaDisplay(updatedFormula);
      } else if (lastChar === "-" && "+*/".includes(secondLastChar)) {
        const updatedFormula = formulaDisplay.slice(0, -2) + operator + " ";
        setDisplay(operator);
        setFormulaDisplay(updatedFormula);
      } else {
        setDisplay(operator);
        setFormulaDisplay(formulaDisplay + " " + operator + " ");
      }
    } else {
      setDisplay(operator);
      setFormulaDisplay(display + " " + operator + " ");
      setEvaluated(false);
    }
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setFormulaDisplay(formulaDisplay + ".");
      setEvaluated(false);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setFormulaDisplay("");
    setEvaluated(false);
  };

  const handleEquals = () => {
    let result;
    try {
      const sanitizedFormula = formulaDisplay.replace(/--/g, "+");
      result = eval(sanitizedFormula);
      setDisplay(result.toString());
      setFormulaDisplay(formulaDisplay + " = " + result.toString());
      setEvaluated(true);
    } catch (error) {
      setDisplay("Error");
      setFormulaDisplay("");
      setEvaluated(true);
    }
  };

  const handleClick = (event) => {
    const value = event.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        handleClear();
        break;
      case "equals":
        handleEquals();
        break;
      case "decimal":
        handleDecimal();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperator(value);
        break;
      default:
        handleNumber(value);
        break;
    }
  };

  return (
    <div id="calculator">
      <div id="formulaDisplay">{formulaDisplay}</div>
      <div id="display">{display}</div>
      <button id="zero" onClick={handleClick} data-value="0">
        0
      </button>
      <button id="one" onClick={handleClick} data-value="1">
        1
      </button>
      <button id="two" onClick={handleClick} data-value="2">
        2
      </button>
      <button id="three" onClick={handleClick} data-value="3">
        3
      </button>
      <button id="four" onClick={handleClick} data-value="4">
        4
      </button>
      <button id="five" onClick={handleClick} data-value="5">
        5
      </button>
      <button id="six" onClick={handleClick} data-value="6">
        6
      </button>
      <button id="seven" onClick={handleClick} data-value="7">
        7
      </button>
      <button id="eight" onClick={handleClick} data-value="8">
        8
      </button>
      <button id="nine" onClick={handleClick} data-value="9">
        9
      </button>
      <button id="add" onClick={handleClick} data-value="+">
        +
      </button>
      <button id="subtract" onClick={handleClick} data-value="-">
        -
      </button>
      <button id="multiply" onClick={handleClick} data-value="*">
        *
      </button>
      <button id="divide" onClick={handleClick} data-value="/">
        /
      </button>
      <button id="decimal" onClick={handleClick} data-value="decimal">
        .
      </button>
      <button id="clear" onClick={handleClick} data-value="clear">
        AC
      </button>
      <button id="equals" onClick={handleClick} data-value="equals">
        =
      </button>
    </div>
  );
};

export default Calculator;
