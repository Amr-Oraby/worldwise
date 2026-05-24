import useCities from "../features/cities/useCities";
import Cityitem from "./Cityitem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities?.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <Cityitem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
