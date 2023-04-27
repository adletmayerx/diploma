type CardComponentType = {
  type: "movies" | "favourites";
  image: string;
  description: string;
  title: string;
  duration: string;
  isSaved: boolean;
};

export default CardComponentType;
