"use client";
import React, { useState } from "react";
import styles from "./dropdown.module.css";
import { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

// Type of the items in the array
type Currency = {
  code: string;
  desc: string;
};

// Type of the props
interface DropdownProps {
  fontColor: string; // A string
  menuLabel: string; // A string to represent if the dropdown is from or to
  sortedCurrencies: Currency[]; // Array of the available currencies
}

const Dropdown = ({
  fontColor,
  menuLabel,
  sortedCurrencies,
}: DropdownProps) => {
  // Creating custom styles for the autoplete MUI components
  console.log(menuLabel)
  const theme = createTheme({
    components: {
      // Changing the color of the dropwdown icon
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: fontColor,
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: fontColor,
            fontSize: 20,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#ACB3BA",
            fontSize: 16,
          },
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          slotProps: {
            paper: {
              elevation: 6,
            },
          },
        },
        styleOverrides: {
          option: {
            borderBottom: "1px solid #4B5056",
            backgroundColor: fontColor,
            fontSize: "18px",
          },
        },
      },
    },
  });

  // State for the selected currencies in the dropdown
  const defaultProps = {
    options: sortedCurrencies,
    getOptionLabel: (option: Currency) => `${option.code} - ${option.desc}`,
  };

  return (
    <ThemeProvider theme={theme}>
      <section className={styles.mainContainer}>
        <Stack spacing={2} sx={{ margin: "auto" }} width="250px">
          <Autocomplete
            {...defaultProps}
            className={styles.autocomplete}
            id="disable-close-on-select"
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField {...params} label={menuLabel} variant="standard" />
            )}
            autoSelect={true}
          />
        </Stack>
      </section>
    </ThemeProvider>
  );
};

export default Dropdown;
