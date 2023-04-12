import clsx from "clsx";

type Props = {
  className: string;
  children: string;
};

const Button = ({ className, children }: Props) => {
  return (
    <button
      className={clsx(
        "transition-opacity duration-300 hover:opacity-80",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
