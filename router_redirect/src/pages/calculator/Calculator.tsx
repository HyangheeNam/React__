import React, { useState } from "react";
import Button from "./CalcButton";
import ButtonForm from "./CalcButtonForm";
import './CalcCssForm.css';

const Calculator = () => {
  const [display, setDisplay] = useState<string>(""); 
  const [result, setResult] = useState<string>("");   

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetValue = e.currentTarget.name;

    if (["+", "-", "*", "/"].includes(targetValue) && display === "") {
      return; 
    }

    setDisplay(display + targetValue);
  };

  const operatorClick = (operator: string) => {
    const lastCharacter = display.slice(-2); 
    const operatorArray = ["+ ", "- ", "* ", "/ "];

    if (display === "" || operatorArray.includes(lastCharacter)) return;

    setDisplay((prevDisplay) => prevDisplay + " " + operator + " ");
  };

  const handleEqual = () => {
    const operatorArray = ["+ ", "- ", "* ", "/ "];

    if (operatorArray.includes(display.slice(-2))) return;

    try {
      const resultValue = calculate(display);
      setResult(resultValue);
    } catch (error) {
      setDisplay("Error");
    }
  };

  // 계산 함수
  const calculate = (expression: string): string => {
    const tokens = expression.split(" ");
    let resultValue = parseInt(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = parseInt(tokens[i + 1]);

      if (isNaN(nextNumber)) return "Error"; 

      switch (operator) {
        case "+":
          resultValue += nextNumber;
          break;
        case "-":
          resultValue -= nextNumber;
          break;
        case "*":
          resultValue *= nextNumber;
          break;
        case "/":
          if (nextNumber === 0) return "Error"; 
          resultValue /= nextNumber;
          break;
        default:
          return "Error";
      }
    }

    return resultValue.toString();
  };

  const clear = () => {
    setDisplay("");
    setResult("");
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <div className="calc">
      <div>
        <Button
          handleClick={handleClick}
          name={display}
          value={result || display || "0"}
          className="display"
          />
        <ButtonForm
          handleClick={handleClick}
          operatorClick={operatorClick}
          handleEqual={handleEqual}
          clear={clear}
          backspace={backspace}
          />
      </div>
    </div>
  );
};

export default Calculator;
