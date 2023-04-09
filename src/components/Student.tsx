import React from "react";
import { SectionHeading, SectionText } from "./shared";

const Student = () => {
  return (
    <section className="flex justify-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col items-center justify-start">
        <SectionHeading text="Студент" />
        <h3 className="mt-14 text-3xl tracking-tighter text-gray-50 md:mt-20 md:text-5xl xl:mt-24">
          Артур
        </h3>
      </div>
    </section>
  );
};

export default Student;
