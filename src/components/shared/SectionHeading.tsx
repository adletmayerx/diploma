import clsx from "clsx";

type Props = {
  text: string;
  borderColor?: string;
};

const SectionHeading = ({ text, borderColor = "border-gray-200" }: Props) => {
  return (
    <h2
      className={clsx(
        "w-full border-b pb-7 text-lg text-gray-50 md:text-xl",
        borderColor
      )}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
