"use client";
import React, { useState } from "react";
import styles from "./inputbox.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { Abel } from "next/font/google";
import Grid from "@mui/material/Grid";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});
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
    setInputAmount("");
  };

  const handleSubmit = () => {
    setInputAmount(fromAmount);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={styles.inputGridContainer}
    >
      <Grid item xs={1} />
      <Grid item xs={8}>
        <input
          className={`${styles.inputBox} ${abel.className}`}
          placeholder="Type amount here..."
          type="number"
          value={fromAmount}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={1}>
        <button
          className={styles.clearButton}
          style={{
            color: fontColor,
            visibility: fromAmount ? "visible" : "hidden",
          }}
          onClick={handleClearClick}
        >
          <MdClear className={styles.clearIcon} />
        </button>
      </Grid>
      <Grid item xs={1}>
        <button className={styles.submitBtn} onClick={handleSubmit}>
          <FaArrowRight className={styles.submitIcon} />
        </button>
      </Grid>
    </Grid>
  );
};

export default Inputbox;
