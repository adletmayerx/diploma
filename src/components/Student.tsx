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
        <SectionText>
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
          экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать
          музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015
          года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как
          прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами
          и&nbsp;ушёл с&nbsp;постоянной работы.
        </SectionText>
      </div>
    </section>
  );
};

export default Student;
