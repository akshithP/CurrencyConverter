"use client";
import React, { useState } from "react";
import styles from "./inputbox.module.css";
interface InputProps {
  fontColor: string; // A string, to customise the color, so component is reusable.
  inputAmount: any;
  setInputAmount: any;
}

const Inputbox = ({ fontColor, inputAmount, setInputAmount }: InputProps) => {
  const [fromAmount, setFromAmount] = useState<number | string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromAmount(event.target.value);
  };

  const handleClearClick = () => {
    setInputAmount("");
  };

  const handleSubmit = () => {
    setInputAmount(fromAmount);
  };

  return (
    <div className={styles.inputDiv}>
      <input
        placeholder="Type amount here..."
        className={styles.inputBox}
        style={{ color: fontColor, border: "solid 1px" }}
        type="number"
        value={fromAmount}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {/* {inputAmount && (
        <button
          className={styles.clearButton}
          style={{ color: fontColor }}
          onClick={handleClearClick}
        >
          x
        </button>
      )} */}
    </div>
  );
};

export default Inputbox;
