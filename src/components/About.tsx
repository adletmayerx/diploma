import React from "react";

const About = () => {
  return (
    <section className="flex justify-center bg-gray-900">
      <div className="flex w-full max-w-7xl flex-col items-center justify-start py-16 px-4">
        <h2 className="w-full border-b border-gray-200 pb-7 text-lg text-gray-50">
          О&nbsp;проекте
        </h2>
        <div className="mt-14 flex flex-col justify-start gap-14">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-50">
              Дипломный проект включал 5&nbsp;этапов
            </h3>
            <p className="text-xs text-gray-50">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и&nbsp;финальные доработки.
            </p>
          </div>
          <div className="">
            <h3 className="text-lg text-gray-50">
              На&nbsp;выполнение диплома ушло 5&nbsp;недель
            </h3>
            <p className="text-xs text-gray-50">
              У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
              нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
