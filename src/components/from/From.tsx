"use client";
import React, { useState } from "react";
import { Currency } from "@/types";
import Dropdown from "../dropdown/Dropdown";
import Inputbox from "../inputbox/Inputbox";
import styles from "./from.module.css";

interface FromProps {
  fontColor: string; // A string
  invFontColor: string; // A string
  menuLabel: string; // A string to represent if the dropdown is from or to
  sortedCurrencies: Currency[]; // Array of the available currencies
}

const From = ({
  fontColor,
  invFontColor,
  menuLabel,
  sortedCurrencies,
}: FromProps) => {
  // useState to for the selected state and the input's current value
  const [selectedCurr, setSelectedCurr] = React.useState<Currency | null>({
    code: "AUD",
    desc: "Australian Dollar",
  });
  const [inputAmount, setInputAmount] = useState<number | string>("");

  return (
    <section className={styles.fromContainer}>
      <div className={styles.fromMenu}>
        <Dropdown
          fontColor="#ffb703"
          invFontColor="#023047"
          menuLabel="From"
          sortedCurrencies={sortedCurrencies}
          selectedCurrency={selectedCurr}
          onCurrencyChange={setSelectedCurr}
        ></Dropdown>
      </div>
      <div className={styles.fromInputBox}>
        <Inputbox
          fontColor="#ffb703"
          inputAmount={inputAmount}
          setInputAmount={setInputAmount}
        />
      </div>
    </section>
  );
};

export default From;
