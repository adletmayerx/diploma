import { type ReactNode } from "react";
import clsx from "clsx";

type Props = {
  link: string;
  children: string | ReactNode;
  className?: string;
};

const LinkComponent = ({ link, children, className }: Props) => {
  return (
    <a
      href={link}
      className={clsx(
        "transition-opacity duration-300 hover:opacity-70",
        className && className
      )}
    >
      {children}
    </a>
  );
};

export default LinkComponent;
