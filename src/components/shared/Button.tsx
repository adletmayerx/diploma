import clsx from "clsx";
import { type ReactNode } from "react";

type Props = {
  className?: string;
  children: string | ReactNode;
};

const Button = ({ className, children }: Props) => {
  return (
    <button
      className={clsx(
        "transition-opacity duration-300 hover:opacity-80",
        className && className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
