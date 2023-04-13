import { Button, Switch } from "./shared";

const Search = () => {
  return (
    <div className="flex flex-col items-center gap-11 px-4 pt-20 pb-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="h-11 grow rounded bg-dark-charcoal p-4 text-xs text-suva-grey placeholder:text-suva-grey"
          placeholder="Введите название фильма"
        />
        <Button className="h-11 w-16 rounded-full bg-royal-blue text-xs text-gray-50 ">
          Найти
        </Button>
      </div>
      <Switch />
      <div className="h-px w-full bg-charcoal"></div>
    </div>
  );
};

export default Search;
