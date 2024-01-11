"use client";
import React from "react";
import { Currency } from "@/types";
import Dropdown from "../dropdown/Dropdown";
import Inputbox from "../inputbox/Inputbox";
import Grid from "@mui/material/Grid";

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
    <Grid container spacing={10} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Dropdown
          fontColor="#ffb703"
          invFontColor="#023047"
          menuLabel="From"
          sortedCurrencies={sortedCurrencies}
          selectedCurrency={selectedCurr}
          onCurrencyChange={setSelectedCurr}
        ></Dropdown>
      </Grid>
      <Grid item xs={12}>
        <Inputbox
          fontColor="#ffb703"
          inputAmount={inputAmount}
          setInputAmount={setInputAmount}
        />
      </Grid>
    </Grid>
  );
};

export default From;
