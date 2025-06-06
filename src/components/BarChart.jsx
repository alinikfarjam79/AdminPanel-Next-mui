import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Sun", "Mon", "Thu", "Wed", "Thur", "Fri", "Sa"];
function SimpleBarChart() {
  return (
    <BarChart
      height={300}
      series={[
        { data: pData, label: "pv", id: "pvId" },
        { data: uData, label: "uv", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
      yAxis={[{ width: 50 }]}
    />
  );
}

export default SimpleBarChart;
