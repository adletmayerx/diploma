import clsx from "clsx";
import { type ReactNode } from "react";

type Props = {
  className?: string;
  children: string | ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, type = "button", className, onClick }: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        "transition-opacity duration-300 hover:opacity-80",
        className && className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
