import React from "react";
import clsx from "clsx";

type SwitchType = {
  value: boolean;
};

const Switch = ({ value }: SwitchType) => {
  return (
    <label className="relative inline-flex h-5 w-9">
      <input type="checkbox" className="h-0 w-0 opacity-0" />
      <span
        className={clsx(
          `absolute top-0 left-0 right-0 bottom-0 rounded-2xl bg-gray-700 
        before:absolute before:top-0.5 before:h-4 before:w-4 before:rounded-full before:border before:border-gray-50 before:bg-green-400 before:content-[""]`,
          [value === false ? "before:left-0.5" : "before:right-0.5"]
        )}
      ></span>
    </label>
  );
};

export default Switch;
