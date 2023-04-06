import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
};

const SectionText = ({ text, className }: Props) => {
  return (
    <p
      className={clsx(
        "text-xs text-gray-50 xl:text-sm",
        className && className
      )}
    >
      {text}
    </p>
  );
};

export default SectionText;
