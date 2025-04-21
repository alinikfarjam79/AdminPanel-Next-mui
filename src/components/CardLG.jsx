"use client";
import React from "react";

import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

export default function CardLG() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(0,167,111)",
      },
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        background:
          "linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)",
        padding: "30px",
        alignItems: "center",
        gap: 4,
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ color: "rgb(0, 75, 80)", fontSize: "24px", fontWeight: "700" }}
          align="left"
        >
          Welcome back 👋<br></br>
          Jaydon Frankie
        </Typography>
        <Typography
          sx={{
            color: "rgb(0, 75, 80)",
            fontSize: "14px",
            fontWeight: "100",
            margin: "1.25rem 0",
            width: "90%",
          }}
          align="left"
        >
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything.
        </Typography>
        <ThemeProvider theme={theme}>
          <Button
            sx={{
              width: "fit-content",
              fontWeight: "700",
              fontSize: "12px",
              textTransform: "none",
              borderRadius: "0.5rem",
              boxShadow: "none",
            }}
            variant="contained"
            className="bg-[rgb(0,167,111)]"
          >
            Go Now
          </Button>
        </ThemeProvider>
      </Box>
      <Box sx={{ position: "relative" }}>
        <img src="./images/app.png" sx={{ width: "90%" }} alt="" />
        <img
          src="./images/character.png"
          className="absolute top-4 w-[26%] right-4"
          alt=""
        />
      </Box>
    </Box>
  );
}
