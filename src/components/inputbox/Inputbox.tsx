"use client";
import React, { useState } from "react";
import styles from "./inputbox.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { Abel } from "next/font/google";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material";

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
          <MdClear className={styles.clearIcon}/>
        </button>
      </Grid>
      <Grid item xs={1}>
        <button className={styles.submitBtn} onClick={handleSubmit}>
          <FaArrowRight className={styles.submitIcon}/>
        </button>
      </Grid>
    </Grid>
    // </Grid>
    // <div className={styles.inputDiv}>
    //   <input
    //     placeholder="Type amount here..."
    //     className={`${styles.inputBox} ${abel.className}`}
    //     type="number"
    //     value={fromAmount}
    //     onChange={handleInputChange}
    //   />
    //   <button
    //     className={styles.clearButton}
    //     style={{
    //       color: fontColor,
    //       visibility: fromAmount ? "visible" : "hidden",
    //     }}
    //     onClick={handleClearClick}
    //   >
    //     <MdClear size="5em" />
    //   </button>
    //   <p
    //     style={{
    //       color: "#7A838C",
    //       fontSize: "50px",
    //       visibility: fromAmount ? "visible" : "hidden",
    //     }}
    //   >
    //     |
    //   </p>
    //   <button className={styles.submitBtn} onClick={handleSubmit}>
    //     <FaArrowRight size="4em" />
    //   </button>
    // </div>
  );
};

export default Inputbox;
