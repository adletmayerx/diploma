import { Button, Switch } from "./shared";

const Search = () => {
  return (
    <div className="flex flex-col items-center gap-11 px-4 pt-20 pb-4 md:px-7 xl:px-16">
      <div className="flex gap-2 md:gap-7 w-full">
        <input
          type="text"
          className="h-11 grow rounded bg-dark-charcoal p-4 text-xs text-suva-grey placeholder:text-suva-grey"
          placeholder="Введите название фильма"
        />
        <Button className="h-11 w-16 rounded-full bg-royal-blue text-xs text-gray-50 ">
          Найти
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Switch />
        <p className="text-xs text-gray-50">Короткометражки</p>
      </div>
      <div className="h-px w-full bg-charcoal"></div>
    </div>
  );
};

export default Search;
