import Image from "next/image";
import Dropdown from "@/components/dropdown/Dropdown";
import Inputbox from "@/components/inputbox/Inputbox";
import { Poppins } from "next/font/google";
import styles from "./page.module.css";
import getCurrencies from "@/api/getCurrencies";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default async function Home() {

  const currencies = await getCurrencies();
  const currencyArray = Object.entries(currencies);
  const sortedCurrencyArray = currencyArray.sort((a, b) => a[0].localeCompare(b[0]));
  const sortedCurrencies = Object.fromEntries(sortedCurrencyArray);
  console.log(sortedCurrencies)

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={`${poppins.className} ${styles.title}`}>
          Currency Converter
        </h1>
      </div>
      <div className={styles.fromMenu}>
        <Dropdown bgColor="#023047" sortedCurrencies={sortedCurrencies}></Dropdown>
      </div>
      <div>
        <Inputbox></Inputbox>
      </div>
    </div>
  );
}
