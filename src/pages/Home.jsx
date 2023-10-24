import { Button, Tabs } from "@mui/material";
import React from "react";
import PrimarySearchAppBar from "../homeComponent/PrimarySearchAppBar";
import SelectOtherProps from "../homeComponent/SelectOtherProps";
import TwoSimplePieChart from "../TwoSimplePieChart";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <div
          style={{
            width: "346.28px",
            height: "100%",
            borderRight: "1px solid black",
            zIndex: "1500",
            backgroundColor: "white",
          }}
        >
          <h2 style={{ color: "blue", display: "flex", flexWrap: "wrap" }}>
            <span style={{ border: "2px solid blue" }}>TEXLA</span>CULTURE
          </h2>
          <p>GENERAL</p>
          <SelectOtherProps />
        </div>
        {/* <PrimarySearchAppBar /> */}
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "25%",
          // transform: "translate(-50%, -50%)",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      ></div>
      <div
        className="pages"
        style={{
          zIndex: "1200",
          position: "absolute",
          height: "fit-content",
          top: "1%",
          right: "0",
          width: "76%",
        }}
      >
        {<Outlet />}
      </div>
    </div>
  );
};

export default Home;
