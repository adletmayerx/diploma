import clsx from "clsx";
import { type ReactNode } from "react";

type Props = {
  className?: string;
  children: string | ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, type = "button", ...props }: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        "transition-opacity duration-300 hover:opacity-80",
        props.className && props.className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
