"use client";
import React, { useState } from "react";
import styles from "./dropdown.module.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Currency } from "@/types";

// Type of the props
interface DropdownProps {
  fontColor: string; // A string
  invFontColor: string; // A string representing inverses of the font color
  menuLabel: string; // A string to represent if the dropdown is from or to
  sortedCurrencies: Currency[]; // Array of the available currencies
  selectedCurrency: any;
  onCurrencyChange: any;
}

const Dropdown = ({
  fontColor,
  invFontColor,
  menuLabel,
  sortedCurrencies,
  selectedCurrency,
  onCurrencyChange,
}: DropdownProps) => {
  // Creating custom styles for the autoplete MUI components
  const basicTheme = createTheme();
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
      // This is the text in the dropdwon menu
      MuiInput: {
        styleOverrides: {
          root: {
            color: fontColor,
            fontSize: 18,
            [basicTheme.breakpoints.up("sm")]: {
              fontSize: 22, // Font size for screens wider than 600px
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#8a8a8a",
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
            color: invFontColor,
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
      <Stack
        spacing={2}
        sx={{
          margin: "auto",
          width: {
            xs: "210px", // Full width on extra-small devices
            sm: "320px", // 320px width on small devices and up
          },
        }}
      >
        <Autocomplete
          {...defaultProps}
          className={styles.autocomplete}
          id="disable-close-on-select"
          value={selectedCurrency}
          onChange={(event: any, newCurr: Currency | null) => {
            onCurrencyChange(newCurr);
            console.log(newCurr);
          }}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} label={menuLabel} variant="standard" />
          )}
          autoSelect={true}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default Dropdown;
