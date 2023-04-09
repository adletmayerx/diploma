import clsx from "clsx";

type Props = {
  children: string;
  className?: string;
};

const SectionText = ({ children, className }: Props) => {
  return (
    <p
      className={clsx(
        "text-xs text-gray-50 xl:text-sm",
        className && className
      )}
    >
      {children}
    </p>
  );
};

export default SectionText;
