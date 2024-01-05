import React, { useState } from "react";
import Dropdown from "@/components/dropdown/Dropdown";
import Inputbox from "@/components/inputbox/Inputbox";
import { Poppins } from "next/font/google";
import styles from "./page.module.css";
import getCurrencies from "@/api/getCurrencies";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default async function Home() {
  const currencies = await getCurrencies();
  const currencyArray = Object.entries(currencies);
  const sortedCurrencyArray = currencyArray.sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  const sortedCurrencies = Object.fromEntries(sortedCurrencyArray);
  const convertedArray = Object.entries(sortedCurrencies).map(
    ([code, desc]) => ({
      code,
      desc: String(desc), //explicitly specifying the type of desc from unknown to string
    })
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={`${poppins.className} ${styles.title}`}>
          Currency Converter
        </h1>
      </div>
      <section className={styles.fromContainer}>
        <div className={styles.fromMenu}>
          <Dropdown
            fontColor="#ffb703"
            invFontColor="#023047"
            menuLabel="From"
            sortedCurrencies={convertedArray}
          ></Dropdown>
        </div>
        <div className={styles.fromInputBox}>
          <Inputbox fontColor="#ffb703"></Inputbox>
        </div>
      </section>
      <section className={styles.toContainer}>
        <div className={styles.toMenu}>
          <Dropdown
            fontColor="#023047"
            invFontColor="#ffb703"
            menuLabel="To"
            sortedCurrencies={convertedArray}
          ></Dropdown>
        </div>
        <div className={styles.fromInputBox}>
          <Inputbox fontColor="#023047"></Inputbox>
        </div>
      </section>
    </div>
  );
}
