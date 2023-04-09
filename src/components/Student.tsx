import { SectionHeading, SectionText } from "./shared";
import Image from "next/image";

const Student = () => {
  return (
    <section className="flex justify-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col items-center justify-start py-16 px-4">
        <SectionHeading text="Студент" />
        <div className="relative mt-14 h-80 w-72 shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/portrait.jpg"
            alt="photo of young web developer named Artur"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h3 className="mt-14 text-3xl tracking-tighter text-gray-50 md:mt-20 md:text-5xl xl:mt-24">
          Артур
        </h3>
      </div>
    </section>
  );
};

export default Student;
