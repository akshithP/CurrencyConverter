"use client";
import React from "react";
import styles from "./inputbox.module.css";
interface InputProps {
  fontColor: string; // A string, to customise the color, so component is reusable.
  inputAmount: any;
  setInputAmount: any;
}

const Inputbox = ({ fontColor, inputAmount, setInputAmount }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAmount(event.target.value);
    console.log(inputAmount);
  };

  const handleClearClick = () => {
    setInputAmount("");
  };

  return (
    <div className={styles.inputDiv}>
      <input
        placeholder="Type amount here..."
        className={styles.inputBox}
        style={{ color: fontColor, border: "solid 1px" }}
        type="number"
        value={inputAmount}
        onChange={handleInputChange}
      />
      {inputAmount && (
        <button
          className={styles.clearButton}
          style={{ color: fontColor }}
          onClick={handleClearClick}
        >
          x
        </button>
      )}
    </div>
  );
};

export default Inputbox;
