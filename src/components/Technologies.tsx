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
    <section className="flex justify-center bg-charleston-green">
      <div className=" flex w-full max-w-7xl flex-col">
        <SectionHeading text="Технологии" />
        <h3>7&nbsp;технологий</h3>
        <p>
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <ul>
          {technologiesArray.map((tech, i) => {
            return <li key={i}>{tech}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
