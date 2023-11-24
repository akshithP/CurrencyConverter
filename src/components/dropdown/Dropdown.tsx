import React from "react";
import styles from "./dropdown.module.css";

const Dropdown = () => {
  return (
    <section>
      <select className={styles.selectionMenu} name="currencies">
        <option value="AUD - Dollars">AUD - Dollars </option>
        <option value="INR - Rupees">INR - Rupees </option>
        <option value="USD - Dollars">USD - Dollars </option>
      </select>
    </section>
  );
};

export default Dropdown;
