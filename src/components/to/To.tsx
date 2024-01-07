"use client";
import React from "react";
import { Currency } from "@/types";
import Dropdown from "../dropdown/Dropdown";
import Inputbox from "../inputbox/Inputbox";
import styles from "./to.module.css";
import { blue } from "@mui/material/colors";

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
      <div className={styles.fromInputBox}>
        <p
          style={{ backgroundColor: "red", color: "#023047", fontSize: "60px" }}
        >
          {inputAmount}
        </p>
      </div>
    </section>
  );
};

export default To;
