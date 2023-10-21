import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data2 = [
  { label: 'Group A', value: 2400 },
  { label: 'Group B', value: 4567 },
  { label: 'Group C', value: 1398 },
  { label: 'Group D', value: 9800 },
  { label: 'Group E', value: 3908 },
  { label: 'Group F', value: 4800 },
];

export default function TwoSimplePieChart() {
  return (
    <PieChart
      series={[
        {
          data: data2,
          cx: 500,
          cy: 200,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    >
      {/* Render data labels */}
      {data2.map((item, index) => (
        <text
          key={index}
          x={500 + Math.cos(2 * Math.PI * index / data2.length) * 90}
          y={200 + Math.sin(2 * Math.PI * index / data2.length) * 90}
          fill="black" // Label text color
          textAnchor="middle"
          fontSize="14"
        >
          {`${item.label} (${item.value})`}
        </text>
      ))}
    </PieChart>
  );
}
