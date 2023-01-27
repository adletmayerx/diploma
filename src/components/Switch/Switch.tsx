import clsx from "clsx";
import { useRef } from "react";

type SwitchType = {
  value: boolean;
  setValue: (value: boolean) => void;
};

const Switch = ({ value, setValue }: SwitchType) => {
  //   const checkboxRef = useRef(null);
  const handleLabelClick = () => {
    setValue(!value);
  };

  return (
    <label
      className="relative inline-flex h-5 w-9 cursor-pointer"
      onClick={handleLabelClick}
    >
      {/* <input
        type="checkbox"
        className="h-0 w-0 opacity-0"
        ref={checkboxRef}
        checked={value}
      /> */}
      <span
        className={clsx(
          `absolute top-0 left-0 right-0 bottom-0 transform rounded-2xl 
        bg-gray-700 before:absolute before:top-0.5 before:left-0.5 before:h-4 before:w-4 before:rounded-full 
        before:border before:border-gray-50 before:bg-green-400 before:transition-transform 
        before:duration-300 before:content-[""]`,
          [value && "before:translate-x-4"]
        )}
      ></span>
    </label>
  );
};

export default Switch;
