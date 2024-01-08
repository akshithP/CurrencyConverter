"use client";
import React from "react";
import styles from "./swap.module.css";
import { AiOutlineSwap } from "react-icons/ai";
import { TbCircleFilled } from "react-icons/tb";
import { Currency } from "@/types";

interface SwapProps {
  fromCurr: Currency | null;
  setFromCurr: any;
  toCurr: Currency | null;
  setToCurr: any;
}

const Swap = ({ fromCurr, setFromCurr, toCurr, setToCurr }: SwapProps) => {
  const handleOnClick = () => {
    setFromCurr(toCurr);
    setToCurr(fromCurr);
  };
  return (
    <div className={styles.btnContainer}>
      <div className={styles.blueBackground}>
        <button
          className={styles.swapBtn}
          type="button"
          onClick={handleOnClick}
        >
          <AiOutlineSwap size="10em" />
        </button>
      </div>
    </div>
  );
};

export default Swap;
