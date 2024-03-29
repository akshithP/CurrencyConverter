"use client";
import React from "react";
import { Currency } from "@/types";
import Dropdown from "../dropdown/Dropdown";
import styles from "./to.module.css";
import { Abel } from "next/font/google";
import Grid from "@mui/material/Grid";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});

interface ToProps {
  selectedCurr: any;
  setSelectedCurr: any;
  inputAmount: any;
  setInputAmount: any;
  sortedCurrencies: Currency[]; // Array of the available currencies
  loading: boolean;
  setLoading(value: boolean): void;
}

const To = ({
  selectedCurr,
  setSelectedCurr,
  inputAmount,
  setInputAmount,
  sortedCurrencies,
  loading,
  setLoading,
}: ToProps) => {
  return (
    <Grid container spacing={5} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Dropdown
          fontColor="#023047"
          invFontColor="#ffb703"
          menuLabel="To"
          sortedCurrencies={sortedCurrencies}
          selectedCurrency={selectedCurr}
          onCurrencyChange={setSelectedCurr}
        ></Dropdown>
      </Grid>
      <Grid item xs={12}>
        {loading ? (
          <p className={styles.loader}></p>
        ) : (
          <p className={`${styles.resultBox} ${abel.className}`}>
            {inputAmount}
          </p>
        )}
      </Grid>
    </Grid>
  );
};

export default To;
