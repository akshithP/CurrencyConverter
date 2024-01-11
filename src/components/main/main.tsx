"use client";
import React, { useState, useEffect } from "react";
import { Currency } from "@/types";
import From from "../from/From";
import To from "../to/To";
import convertCurrencies from "@/api/convertCurrencies";
import Swap from "../swap/Swap";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material";

interface MainProps {
  sortedCurrencies: Currency[]; // Array of the available currencies
}

const Main = ({ sortedCurrencies }: MainProps) => {
  const [loading, setLoading] = useState(false);
  // useState to for the selected state and the input's current value
  const [fromCurr, setFromCurr] = React.useState<Currency | null>({
    code: "AUD",
    desc: "Australian dollar",
  });
  const [fromAmount, setFromAmount] = useState<number | string>("");

  // Hold the values for selected To currency and set the result
  const [toCurr, setToCurr] = React.useState<Currency | null>({
    code: "USD",
    desc: "United States dollar",
  });
  const [toAmount, setToAmount] = useState<number>();

  // Set the result from the API
  const [results, setResult] = useState<any>();

  //Use the useEffect to fetch the new data
  useEffect(() => {
    // Convert the currency
    if (fromCurr && toCurr && fromAmount) {
      const fetchConvertion = async () => {
        setLoading(true);
        const data = await convertCurrencies({
          fromCode: fromCurr?.code,
          toCode: toCurr?.code,
          amount: fromAmount,
        });

        setResult(data);
        //setToAmount(data["rates"][toCurr["code"]]["rate_for_amount"]);
        let convertedAmount = data["rates"][toCurr["code"]]["rate_for_amount"];
        setToAmount(((convertedAmount * 100) | 0) / 100);
        setLoading(false);
        return data;
      };
      // Call the function
      const result = fetchConvertion();
    }
  }, [fromCurr, fromAmount, toCurr]);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <From
          selectedCurr={fromCurr}
          setSelectedCurr={setFromCurr}
          inputAmount={fromAmount}
          setInputAmount={setFromAmount}
          sortedCurrencies={sortedCurrencies}
        ></From>
      </Grid>
      <Grid item xs={12}>
        <Swap
          fromCurr={fromCurr}
          setFromCurr={setFromCurr}
          toCurr={toCurr}
          setToCurr={setToCurr}
        ></Swap>
      </Grid>
    </Grid>

    // <>

    /* <Swap
        fromCurr={fromCurr}
        setFromCurr={setFromCurr}
        toCurr={toCurr}
        setToCurr={setToCurr}
      ></Swap>
      <To
        selectedCurr={toCurr}
        setSelectedCurr={setToCurr}
        inputAmount={toAmount}
        setInputAmount={setToAmount}
        sortedCurrencies={sortedCurrencies}
        loading={loading}
        setLoading={setLoading}
      ></To> */
  );
};

export default Main;
