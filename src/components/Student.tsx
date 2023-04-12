import { SectionHeading, SectionText, LinkComponent } from "./shared";
import Image from "next/image";
import clsx from "clsx";
import MemoLinkArrowIcon from "./icons/LinkArrowIcon";

const Student = () => {
  const SOCIALS = [
    { name: "Github", link: "https://github.com/AdletMayerx" },
    { name: "Telegram", link: "https://t.me/artur_webdev" },
  ] as const;
  const PORTFOLIO = [
    {
      name: "Статичный сайт",
      link: "https://github.com/AdletMayerx",
    },
    {
      name: "Адаптивный сайт",
      link: "https://github.com/AdletMayerx",
    },
    {
      name: "Одностраничное приложение",
      link: "https://github.com/AdletMayerx",
    },
  ] as const;

  return (
    <section className="flex justify-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col items-center justify-start py-16 px-4 md:px-12 md:py-24 xl:px-16">
        <SectionHeading text="Студент" />
        <div className="mt-14 flex w-full flex-col items-center justify-start gap-10 md:mt-16 md:flex-row-reverse md:items-stretch md:gap-12">
          <div className="relative h-80 w-72 shrink-0 overflow-hidden rounded-lg md:h-80 md:w-64">
            <Image
              src="/portrait.jpg"
              alt="photo of young web developer named Artur"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex w-full flex-col md:justify-between">
            <div className="flex w-full flex-col items-start justify-start md:items-start">
              <h3 className="text-3xl tracking-tighter text-gray-50 md:text-5xl">
                Артур
              </h3>
              <p className="mt-5 text-xs font-medium leading-none text-gray-50 xl:text-lg">
                Фронтенд-разработчик, 30&nbsp;лет
              </p>
              <SectionText className="mt-5 md:max-w-xl xl:text-sm">
                Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
                экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
                слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал
                кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ
                Контур&raquo;. После того, как прошёл курс
                по&nbsp;веб-разработке, начал заниматься фриланс-заказами
                и&nbsp;ушёл с&nbsp;постоянной работы.
              </SectionText>
            </div>
            <ul className="mt-10 flex gap-6 p-0 text-sm font-medium text-gray-50">
              {SOCIALS.map((social, i) => {
                return (
                  <li key={i}>
                    <LinkComponent link={social.link}>
                      {social.name}
                    </LinkComponent>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex w-full flex-col gap-10 md:gap-12">
          <h3 className="text-sm text-nobel md:text-lg">Портфолио</h3>
          <ul className="flex flex-col gap-5 p-0 text-lg leading-relaxed tracking-tighter text-gray-50 md:text-3xl">
            {PORTFOLIO.map((project, i) => {
              return (
                <li
                  key={i}
                  className={clsx(
                    i !== PORTFOLIO.length - 1 &&
                      "border-b border-gray-200 pb-5"
                  )}
                >
                  <LinkComponent
                    link={project.link}
                    className="inline-flex w-full justify-between"
                  >
                    <span>{project.name}</span>
                    {/* <span>&#8599;</span> */}
                    <MemoLinkArrowIcon />
                  </LinkComponent>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Student;
