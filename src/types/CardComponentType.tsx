type CardComponentType = {
  type: "movies" | "favorites";
  image: string;
  description: string;
  title: string;
  duration: string;
  isSaved: boolean;
};

export default CardComponentType;
