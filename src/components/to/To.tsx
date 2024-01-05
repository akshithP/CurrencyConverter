"use client";
import React, { useState } from "react";
import { Currency } from "@/types";
import Dropdown from "../dropdown/Dropdown";
import Inputbox from "../inputbox/Inputbox";
import styles from "./to.module.css";

interface ToProps {
  sortedCurrencies: Currency[]; // Array of the available currencies
}

const To = ({ sortedCurrencies }: ToProps) => {
  // useState to for the selected state and the input's current value
  const [selectedCurr, setSelectedCurr] = React.useState<Currency | null>({
    code: "USD",
    desc: "United States dollar",
  });
  const [inputAmount, setInputAmount] = useState<number | string>("");

  return (
    <section className={styles.toContainer}>
      <div className={styles.toMenu}>
        <Dropdown
          fontColor="#023047"
          invFontColor="#ffb703"
          menuLabel="To"
          sortedCurrencies={sortedCurrencies}
          selectedCurrency={selectedCurr}
          onCurrencyChange={setSelectedCurr}
        ></Dropdown>
      </div>
      <div className={styles.fromInputBox}>
        <Inputbox
          fontColor="#023047"
          inputAmount={inputAmount}
          setInputAmount={setInputAmount}
        />
      </div>
    </section>
  );
};

export default To;
