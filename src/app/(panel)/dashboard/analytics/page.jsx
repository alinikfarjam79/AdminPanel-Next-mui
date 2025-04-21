"use client";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, useTheme } from "@mui/material";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { data } from "./randomData";
import useAuth from "@/hooks/Auth";

export default function page() {
  const theme = useTheme();
  useAuth();
  return (
    <Box
      sx={{
        width: "95%",
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        flexGrow: 1,
      }}
      padding={4}
    >
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            valueFormatter: (value) =>
              value == null ? "NaN" : value.toString(),
          },
          {
            data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
          },
          {
            data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
            valueFormatter: (value) => (value == null ? "?" : value.toString()),
          },
        ]}
        height={600}
        margin={{ bottom: 10 }}
      />

      <ScatterChart
        height={300}
        sx={{ marginTop: "80px" }}
        series={[
          {
            label: "Series A",
            data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
          },
          {
            label: "Series B",
            data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
    </Box>
  );
}
