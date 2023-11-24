import React from "react";
import styles from "./dropdown.module.css";

// Type of the props
type SortedCurrenciesType = Record<string, string>;
interface DropdownProps {
  bgColor: string; // A string
  sortedCurrencies: SortedCurrenciesType;
}

const Dropdown = ({ bgColor, sortedCurrencies }: DropdownProps) => {
  return (
    <section>
      <select
        className={styles.selectionMenu}
        style={{ backgroundColor: bgColor }}
        name="currencies"
      >
        {Object.entries(sortedCurrencies).map(([currCode, currName]) => (
          <option key={currCode} value={currCode}>
            {currCode} - {currName}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Dropdown;
