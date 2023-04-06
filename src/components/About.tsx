import React from "react";

const About = () => {
  return (
    <section className="flex justify-center bg-nero">
      <div className="flex w-full max-w-7xl flex-col items-center justify-start gap-14 py-16 px-4 md:gap-16 md:px-12 md:py-20 xl:py-28 xl:px-16">
        <h2 className="w-full border-b border-gray-200 pb-7 text-lg text-gray-50 md:text-xl">
          О&nbsp;проекте
        </h2>
        <div className="flex flex-col gap-14 md:flex-row md:gap-7">
          <div className="flex flex-col gap-4 md:gap-5">
            <h3 className="text-lg text-gray-50">
              Дипломный проект включал 5&nbsp;этапов
            </h3>
            <p className="text-xs text-gray-50 xl:text-sm">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и&nbsp;финальные доработки.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-50">
              На&nbsp;выполнение диплома ушло 5&nbsp;недель
            </h3>
            <p className="text-xs text-gray-50 xl:text-sm">
              У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
              нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <table className="w-full text-center align-middle text-xs xl:mt-28">
          <colgroup>
            <col className="w-1/5" />
            <col className="w-4/5" />
          </colgroup>
          <thead>
            <tr className="h-8">
              <th className="bg-shamrock">1&nbsp;неделя</th>
              <th className="bg-night-rider text-gray-50">4&nbsp;недели</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-8 text-nobel">
              <td>Back-end</td>
              <td>Front-end</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default About;
