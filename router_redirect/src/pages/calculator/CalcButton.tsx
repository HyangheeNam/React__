import React from "react";

interface ButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>; 
  name: string | number;  
  value: string | number; 
  className?: string;     
  display?: string;       
  result?: string;        
  backspace?: () => void; 
  clear?: () => void;     
}

const Button = ({
  handleClick,
  name,
  value,
  className,
  display,
  result,
  backspace,
  clear,
}: ButtonProps) => {
  return (
      <button className={className} onClick={handleClick} name={String(name)}>
        {value}
      </button>
  );
};

export default Button;
