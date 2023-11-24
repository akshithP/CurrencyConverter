import Image from "next/image";
import Dropdown from "@/components/dropdown/Dropdown";
import { Poppins } from "next/font/google";
import styles from "./page.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={`${poppins.className} ${styles.title}`}>
          Currency Converter
        </h1>
      </div>
      <div>
        <Dropdown></Dropdown>
      </div>
    </div>
  );
}
