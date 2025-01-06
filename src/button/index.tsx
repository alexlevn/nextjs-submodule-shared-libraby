import * as React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (
  { label 
    , onClick } : ButtonProps

) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
