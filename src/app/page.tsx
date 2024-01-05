import React, { useState } from "react";
import From from "@/components/from/From";
import To from "@/components/to/To";
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
      <From sortedCurrencies={convertedArray}></From>
      <To sortedCurrencies={convertedArray}></To>
    </div>
  );
}
