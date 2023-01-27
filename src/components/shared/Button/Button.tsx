import clsx from "clsx";

type ButtonProps = {
  text: string;
  type: "general" | "transparent" | "login";
  className: string;
};

const Button = ({ text, type = "general", className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex transform cursor-pointer items-center justify-center rounded text-xs text-gray-50 transition duration-300 ease-in hover:opacity-80",
        {
          "h-11 w-96 bg-blue-600 ": type === "general",
          "h-9 w-32 text-gray-900 opacity-60": type === "transparent",
          "h-6 w-14 bg-green-400 text-gray-900": type === "login",
        },
        className && className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
