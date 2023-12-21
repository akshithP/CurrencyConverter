import React from "react";
import styles from "./inputbox.module.css";
interface InputProps {
  fontColor: string; // A string, to customise the color, so component is reusable.
}

const Inputbox = ({ fontColor }: InputProps) => {
  return (
    <div className={styles.inputDiv}>
      <input
        placeholder="Type amount here..."
        className={styles.inputBox}
        style={{ color: fontColor }}
        type="number"
      ></input>
    </div>
  );
};

export default Inputbox;
