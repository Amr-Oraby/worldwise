import type { CountryType } from "../types/countryTypes";
import styles from "./CountryItem.module.css";

function CountryItem({ country }: { country: CountryType }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
