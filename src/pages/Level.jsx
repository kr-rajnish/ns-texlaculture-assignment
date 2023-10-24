import { Box } from "@mui/material";
import React from "react";
import TwoSimplePieChart from "../TwoSimplePieChart";

const customBoxStyle1 = {
  width: "80px",
  height: "70px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  borderRadius: "20%",
  position: "absolute",
  top: "70%",
  left: "82%",
  justifyContent: "center",
};
const customBoxStyle2 = {
  width: "80px",
  height: "70px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  borderRadius: "20%",
  position: "absolute",
  top: "70%",
  left: "58%",
  justifyContent: "center",
};
const customBoxStyle3 = {
  width: "80px",
  height: "70px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  borderRadius: "20%",
  position: "absolute",
  top: "85%",
  left: "66%",
  justifyContent: "center",
};
const customBoxStyle4 = {
  width: "80px",
  height: "70px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  borderRadius: "20%",
  position: "absolute",
  top: "54%",
  left: "70%",
  justifyContent: "center",
};

const Level = () => {
  return (
    <div style={{ marginTop: "15%" }}>
      <Box sx={customBoxStyle1}>
        <p>20 Clients</p>
        <p>50000</p>
      </Box>
      <Box sx={customBoxStyle2}>
        <p>6 Clients</p>
        <p>25000</p>
      </Box>
      <Box sx={customBoxStyle3}>
        <p>5 Clients</p>
        <p>25000</p>
      </Box>
      <Box sx={customBoxStyle4}>
        <p>1 Clients</p>
        <p>15000</p>
      </Box>
      <TwoSimplePieChart />
    </div>
  );
};

export default Level;
