import useCreateCity from "../features/cities/useCreateCity";
import useDeleteCity from "../features/cities/useDeleteCity";
import type { CityType } from "../types/cityTypes";
import styles from "./Cityitem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const flagemojiToPNG = (flag: string) => {
  const countryCode = Array.from(flag, (codeUnit: string) =>
    codeUnit.codePointAt(0),
  )
    .map((char) => String.fromCharCode((char as number) - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function Cityitem({ city }: { city: CityType }) {
  const { cityName, emoji, date, id, lat, lng } = city;
  const { deleteCity } = useDeleteCity();
  const { currentCity } = useCreateCity();

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity?.id ? styles[`cityItem--active`] : ""}`}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName} </h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default Cityitem;
