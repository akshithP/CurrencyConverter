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
  const [fromAmount, setFromAmount] = useState<number | string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromAmount(event.target.value);
  };

  const handleClearClick = () => {
    setFromAmount("");
  };

  const handleSubmit = () => {
    setInputAmount(fromAmount);
  };

  return (
    <div className={styles.inputDiv}>
      <input
        placeholder="Type amount here..."
        className={styles.inputBox}
        type="number"
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
