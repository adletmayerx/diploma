import { SectionHeading } from "./shared";

const Technologies = () => {
  const technologiesArray = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Git",
    "Express.js",
    "MongoDB",
  ];

  return (
    <section className="flex justify-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col items-center justify-start py-16 px-4 md:px-12 md:py-24 xl:py-24 xl:px-16">
        <SectionHeading text="Технологии" />
        <h3 className="mt-14 text-3xl tracking-tighter text-gray-50 md:mt-20 md:text-5xl xl:mt-24">
          7&nbsp;технологий
        </h3>
        <p className="mt-6 text-center text-xs tracking-tighter text-gray-50">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <ul className="column mt-12 flex w-44 flex-wrap justify-between gap-2 p-0 text-xs text-gray-50 md:mt-20 md:w-full md:justify-center md:gap-3 xl:mt-24">
          {technologiesArray.map((tech, i) => {
            return (
              <li
                key={i}
                className="flex h-14 w-20 grow items-center justify-center rounded-lg bg-night-rider md:grow-0"
              >
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
