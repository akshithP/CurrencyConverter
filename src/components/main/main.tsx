"use client";
import React, { useState, useEffect } from "react";
import { Currency } from "@/types";
import From from "../from/From";
import To from "../to/To";
import convertCurrencies from "@/api/convertCurrencies";
import { Console } from "console";

interface MainProps {
  sortedCurrencies: Currency[]; // Array of the available currencies
}

const Main = ({ sortedCurrencies }: MainProps) => {
  // useState to for the selected state and the input's current value
  const [fromCurr, setFromCurr] = React.useState<Currency | null>({
    code: "AUD",
    desc: "Australian dollar",
  });
  const [fromAmount, setFromAmount] = useState<number | string>("");

  // To currency
  const [toCurr, setToCurr] = React.useState<Currency | null>({
    code: "USD",
    desc: "United States dollar",
  });
  const [toAmount, setToAmount] = useState<number | string>("");

  const [results, setResult] = useState<any>();

  //Use the useEffect to fetch the new data
  useEffect(() => {
    // Convert the currency
    if (fromCurr && toCurr && fromAmount) {
      const fetchConvertion = async () => {
        const data = await convertCurrencies({
          fromCode: fromCurr?.code,
          toCode: toCurr?.code,
          amount: fromAmount,
        });

        console.log(data);
        setResult(data);
        setToAmount(data["rates"][toCurr["code"]]["rate_for_amount"]);
        return data;
      };
      // Call the function
      const result = fetchConvertion();
    }
  }, [fromCurr, fromAmount, toCurr]);

  return (
    <>
      <From
        selectedCurr={fromCurr}
        setSelectedCurr={setFromCurr}
        inputAmount={fromAmount}
        setInputAmount={setFromAmount}
        sortedCurrencies={sortedCurrencies}
      ></From>
      <To
        selectedCurr={toCurr}
        setSelectedCurr={setToCurr}
        inputAmount={toAmount}
        setInputAmount={setToAmount}
        sortedCurrencies={sortedCurrencies}
      ></To>
    </>
  );
};

export default Main;
