import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data2 = [
  { label: "20 Clients", value: 50000, color: "#00cc66" }, //green
  { label: "5 Clients", value: 25000, color: "orange" },
  { label: "6 Clients", value: 25000, color: "#ff751a" }, //yellow
  { label: "1 clients", value: 15000, color: "#1a1aff" }, //blue
];

export default function TwoSimplePieChart() {
  return (
    <PieChart
      series={[
        {
          data: data2,
          cx: 100,
          cy: 100,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    >
      {data2.map((item, index) => (
        <text
          key={index}
          x={500 + Math.cos((2 * Math.PI * index) / data2.length) * 90}
          y={200 + Math.sin((2 * Math.PI * index) / data2.length) * 90}
          fill={item.color}
          textAnchor="middle"
          fontSize="14"
        >
          {`${item.label} (${item.value})`}
        </text>
      ))}
    </PieChart>
  );
}
