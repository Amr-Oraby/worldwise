import useCities from "../features/cities/useCities";
import type { CityType } from "../types/cityTypes";
import type { CountryType } from "../types/countryTypes";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities?.length)
    return (
      <Message message="Add your first Country by clicking on a country on the map" />
    );

  // logic code for preventing repeating countries
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el: CityType) => el.country).includes(city.country)) {
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country: CountryType) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
