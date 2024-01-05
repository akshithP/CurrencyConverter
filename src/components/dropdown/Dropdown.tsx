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
            fontSize: 20,
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

  // // UseState to
  // const [selectedCurr, setSelectedCurr] = React.useState<Currency | null>({
  //   code: "AUD",
  //   desc: "Australian Dollar",
  // });

  return (
    <ThemeProvider theme={theme}>
      <section className={styles.mainContainer}>
        <Stack spacing={2} sx={{ margin: "auto" }} width="250px">
          <Autocomplete
            {...defaultProps}
            className={styles.autocomplete}
            id="disable-close-on-select"
            value={selectedCurrency}
            onChange={(event: any, newCurr: Currency | null) => {
              // setSelectedCurr(newCurr);
              onCurrencyChange(newCurr)
            }}
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
