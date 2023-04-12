import { LinkComponent } from "./shared";

const Footer = () => {
  const LINKS = [
    { name: "Яндекс.Практикум", link: "https://practicum.yandex.ru/" },
    { name: "Github", link: "https://github.com/AdletMayerx" },
    { name: "Telegram", link: "https://t.me/artur_webdev" },
  ] as const;

  return (
    <footer className="flex justify-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col items-center justify-start gap-7 px-4 pt-16 pb-3 md:px-7 md:pb-5 xl:px-16">
        <h2 className="w-full border-b border-charcoal pb-5 text-center text-xs text-suva-grey md:text-sm">
          Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
        </h2>
        <div className="flex w-full flex-col items-center justify-start gap-7 md:flex-row-reverse md:justify-between">
          <ul className="flex flex-col items-center justify-start gap-3 p-0 text-xs text-gray-50 md:flex-row md:text-sm">
            {LINKS.map((link, i) => {
              return (
                <li key={i}>
                  <LinkComponent link={link.link}>{link.name}</LinkComponent>
                </li>
              );
            })}
          </ul>
          <span className="text-xs text-suva-grey md:text-sm">&copy; 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
