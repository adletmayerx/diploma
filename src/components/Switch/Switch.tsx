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
      className={clsx(
        "t relative inline-flex h-5 w-9 cursor-pointer rounded-2xl bg-gray-700 "
      )}
      onClick={handleLabelClick}
    >
      <span
        className={clsx(
          `t absolute top-0.5 left-0.5 h-4 w-4 transform rounded-full border-2 
           border-gray-50  transition-all duration-300`,
          [value ? "translate-x-4 bg-green-400" : "bg-gray-500"]
        )}
      ></span>
    </label>
  );
};

export default Switch;
