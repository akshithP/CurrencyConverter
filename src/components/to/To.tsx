"use client";
import React from "react";
import { Currency } from "@/types";
import Dropdown from "../dropdown/Dropdown";
import styles from "./to.module.css";

interface ToProps {
  selectedCurr: any;
  setSelectedCurr: any;
  inputAmount: any;
  setInputAmount: any;
  sortedCurrencies: Currency[]; // Array of the available currencies
}

const To = ({
  selectedCurr,
  setSelectedCurr,
  inputAmount,
  setInputAmount,
  sortedCurrencies,
}: ToProps) => {
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
      <p className={styles.resultBox}>{inputAmount}</p>
    </section>
  );
};

export default To;
