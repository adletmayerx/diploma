import { retryDelay } from "@trpc/client/dist/internals/retryDelay";
import { SectionHeading, SectionText } from "./shared";
import Image from "next/image";

const Student = () => {
  const SOCIALS = [
    { name: "telegram", link: "url" },
    { name: "telegram", link: "url" },
  ];

  return (
    <section className="flex justify-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col items-center justify-start py-16 px-4">
        <SectionHeading text="Студент" />
        <div className="flex w-full flex-col items-center justify-start">
          <div className="relative mt-14 h-80 w-72 shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/portrait.jpg"
              alt="photo of young web developer named Artur"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex w-full flex-col items-center justify-start">
            <h3 className="mt-14 text-3xl tracking-tighter text-gray-50 md:mt-20 md:text-5xl xl:mt-24">
              Артур
            </h3>
            <p className="mt-5 text-xs font-medium text-gray-50">
              Фронтенд-разработчик, 30&nbsp;лет
            </p>
            <SectionText className="mt-5">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </SectionText>
            <ul className="flex p-0 text-gray-50">
              {SOCIALS.map((social, i) => {
                return <li key={i}>{social.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
