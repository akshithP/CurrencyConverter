"use client";
import React, { useState } from "react";
import styles from "./inputbox.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { MdClear } from "react-icons/md";

interface InputProps {
  fontColor: string; // A string, to customise the color, so component is reusable.
  inputAmount: any;
  setInputAmount: any;
}

const Inputbox = ({ fontColor, inputAmount, setInputAmount }: InputProps) => {
  const [fromAmount, setFromAmount] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // sET THE NEW UPDATED INPUT VALUE CONMPRISING OF THE COMMAS
    let value = event.target.value;
    value = value.replace(/[^0-9.]+/g, "");

    // Convert the cleaned value to a number and format it with commas
    const formattedValue = value
      ? parseInt(value.split(",").join("")).toLocaleString()
      : "";
    setFromAmount(formattedValue);

    //setFromAmount(event.target.value);
  };

  const handleClearClick = () => {
    setFromAmount("");
  };

  const handleSubmit = () => {
    const numericValue = parseFloat(fromAmount.replace(/,/g, ''));
    setInputAmount(numericValue);
    //setInputAmount(fromAmount);
  };

  return (
    <div className={styles.inputDiv}>
      <input
        placeholder="Type amount here..."
        className={styles.inputBox}
        type="text"
        value={fromAmount}
        onChange={handleInputChange}
      />
      <button
        className={styles.clearButton}
        style={{
          color: fontColor,
          visibility: fromAmount ? "visible" : "hidden",
        }}
        onClick={handleClearClick}
      >
        <MdClear size="5em" />
      </button>
      <p
        style={{
          color: "#7A838C",
          fontSize: "50px",
          visibility: fromAmount ? "visible" : "hidden",
        }}
      >
        |
      </p>
      <button className={styles.submitBtn} onClick={handleSubmit}>
        <FaArrowRight size="4em" />
      </button>
    </div>
  );
};

export default Inputbox;
