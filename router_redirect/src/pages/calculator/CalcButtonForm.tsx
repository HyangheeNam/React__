import React from "react";
import Button from "./CalcButton";

interface ButtonFormProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    operatorClick: (operator: string) => void;
    handleEqual: () => void;
    clear: () => void;
    backspace: () => void;
}

const ButtonForm = ({ handleClick, operatorClick, handleEqual, clear, backspace }: ButtonFormProps) => {
    return (
        <div className="btn-wrapper">
        <div className="btn-container">
            <Button handleClick={handleClick} name={1} value={1} />
            <Button handleClick={handleClick} name={2} value={2} />
            <Button handleClick={handleClick} name={3} value={3} />
            <Button handleClick={() => operatorClick("+")} className="colored-btn" name="+" value="+" />
        </div>
        <div className="btn-container">
            <Button handleClick={handleClick} name={4} value={4} />
            <Button handleClick={handleClick} name={5} value={5} />
            <Button handleClick={handleClick} name={6} value={6} />
            <Button handleClick={() => operatorClick("-")} className="colored-btn" name="-" value="-" />
        </div>
        <div className="btn-container">
            <Button handleClick={handleClick} name={7} value={7} />
            <Button handleClick={handleClick} name={8} value={8} />
            <Button handleClick={handleClick} name={9} value={9} />
            <Button handleClick={() => operatorClick("*")} className="colored-btn" name="*" value="*" />
        </div>
        <div className="btn-container">
            <Button handleClick={handleClick} name={0} value={0} />
            <Button handleClick={handleEqual} className="span-two colored-btn" name="=" value="=" />
            <Button handleClick={() => operatorClick("/")} className="colored-btn" name="/" value="/" />
        </div>
        <div className="btn-container">
            <Button handleClick={clear} className="colored-btn" name="C" value="C" />
            <Button handleClick={backspace} className="colored-btn" name="←" value="←" />
        </div>
        </div>
    );
};

export default ButtonForm;
