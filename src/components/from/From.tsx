"use client";
import React, { useState } from "react";
import { Currency } from "@/types";
import Dropdown from "../dropdown/Dropdown";
import Inputbox from "../inputbox/Inputbox";
import styles from "./from.module.css";

interface FromProps {
  selectedCurr: any;
  setSelectedCurr: any;
  inputAmount: any;
  setInputAmount: any;
  sortedCurrencies: Currency[]; // Array of the available currencies
}

const From = ({
  selectedCurr,
  setSelectedCurr,
  inputAmount,
  setInputAmount,
  sortedCurrencies,
}: FromProps) => {
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
