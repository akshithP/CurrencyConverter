import React from "react";
import Main from "@/components/main/main";
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
      <Main sortedCurrencies={convertedArray}></Main>
    </div>
  );
}
