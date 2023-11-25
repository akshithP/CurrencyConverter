"use client";
import React, { useState } from "react";
import styles from "./dropdown.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Type of the props
type SortedCurrenciesType = Record<string, string>;
interface DropdownProps {
  fontColor: string; // A string
  sortedCurrencies: SortedCurrenciesType;
}

const Dropdown = ({ fontColor, sortedCurrencies }: DropdownProps) => {
  // State for the selected currencies in the dropdown
  const [selectedCurr, setSelectedCurr] = useState("");

  // Handle change
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCurr(event.target.value);
  };

  return (
    <section>
      <FormControl
        className={styles.form}
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel
          id="demo-simple-select-standard-label"
          sx={{
            color: "#ACB3BA",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#ACB3BA",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ACB3BA",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ACB3BA",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
        >
          From
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedCurr}
          onChange={handleChange}
          label="Age"
          className={styles.selectionMenu}
          sx={{
            color: fontColor,
            "& .MuiSelect-icon": {
              color: fontColor, // Change the color of the dropdown arrow
              fontSize: "40px",
            },
          }}
        >
          {Object.entries(sortedCurrencies).map(([currCode, currName]) => (
            <MenuItem key={currCode} value={`${currCode} - ${currName}`}>
              {currCode} - {currName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <select
        className={styles.selectionMenu}
        style={{ backgroundColor: bgColor }}
        name="currencies"
      >
        {Object.entries(sortedCurrencies).map(([currCode, currName]) => (
          <option key={currCode} value={currCode}>
            {currCode} - {currName}
          </option>
        ))}
      </select> */}
    </section>
  );
};

export default Dropdown;
