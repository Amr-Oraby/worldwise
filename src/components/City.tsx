// import { useParams,useSearchParams } from "react-router-dom";
// import { CitiesProvider, useCities } from "../contexts/CitiesContext";
// import { useEffect } from "react";
import styles from "./City.module.css";
// import Spinner from "./Spinner";
import BackButton from "./BackButton";
import useCity from "../features/cities/useCity";
import Spinner from "./Spinner";

const formatDate = (date: Date | undefined) => {
  if (!date) return "";
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
};

function City() {
  const { city, isLoading } = useCity();
  const { emoji, date, cityName, notes } = city ?? {};
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton>&larr; Back</BackButton>
      </div>
    </div>
  );
}

export default City;
