import React from "react";

type ButtonProps = {
  text: string;
  className?: string;
};

const Button = ({ text, className = "" }: ButtonProps) => {
  return (
    <button
      className={`inline-flex h-11 w-96 cursor-pointer items-center justify-center rounded bg-blue-600 text-gray-50 transition duration-300 ease-in hover:opacity-80 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
