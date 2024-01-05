"use client";
import React, { useState } from "react";
import { Currency } from "@/types";
import Dropdown from "../dropdown/Dropdown";
import Inputbox from "../inputbox/Inputbox";

interface ToProps {
  fontColor: string; // A string
  invFontColor: string; // A string
  menuLabel: string; // A string to represent if the dropdown is from or to
  sortedCurrencies: Currency[]; // Array of the available currencies
}

const To = ({
  fontColor,
  invFontColor,
  menuLabel,
  sortedCurrencies,
}: ToProps) => {
  // useState to for the selected state and the input's current value
  const [selectedCurr, setSelectedCurr] = React.useState<Currency | null>({
    code: "USD",
    desc: "United States dollar",
  });
  const [inputAmount, setInputAmount] = useState<string>("");

  return (
    <section>
      <div>
        <Dropdown
          fontColor="#023047"
          invFontColor="#ffb703"
          menuLabel="To"
          sortedCurrencies={sortedCurrencies}
          selectedCurrency={selectedCurr}
          onCurrencyChange={setSelectedCurr}
        ></Dropdown>
      </div>
      <div>
        <Inputbox fontColor="#ffb703" />
      </div>
    </section>
  );
};

export default To;
