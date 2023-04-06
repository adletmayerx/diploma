import clsx from "clsx";

type Props = {
  text: string;
  borderColor: string;
};

const SectionHeading = ({ text, borderColor }: Props) => {
  return (
    <h2
      className={clsx(
        "w-full border-b border-gray-200 pb-7 text-lg text-gray-50 md:text-xl",
        borderColor && borderColor
      )}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
