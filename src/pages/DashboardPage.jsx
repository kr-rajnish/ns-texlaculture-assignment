import React from "react";

import "./dashboard.css";
import { Link } from "react-router-dom";
import PrimarySearchAppBar from "../homeComponent/PrimarySearchAppBar";

import OnBoardCompanies from "./OnBoardCompanies";
import ActiveUserBase from "./ActiveUserBase";
import CompaniesStatus from "./CompaniesStatus";

import Level from "./Level";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <PrimarySearchAppBar />
      <div>
        <h3> Client Management</h3>
        <div style={{ display: "flex" }}>
          <Link to="/">
            <p>Dashboard</p>
          </Link>
          <Link to="/client" style={{ textDecoration: "none" }}>
            <p style={{ marginLeft: "20px" }}>Clients details</p>
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            // backgroundColor: "red",
            width: "450px",
            height: "179px",
            border: "none",
            flexWrap: "wrap",
          }}
        >
          <p style={{ marginLeft: "10px" }}>Key Performance Indicator</p>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            <div
              style={{
                width: "150px",
                height: "100px",
                borderLeft: "2px solid blue",
              }}
            >
              <p style={{ marginLeft: "5px" }}>Client Retention Rate</p>
              <h2 style={{ color: "purpal", marginLeft: "5px" }}>55%</h2>
            </div>
            <div
              style={{
                width: "130px",
                height: "100px",
                borderLeft: "2px solid blue",
              }}
            >
              <p style={{ marginLeft: "5px" }}>Client Satisfaction</p>
              <h2 style={{ color: "blue", marginLeft: "5px" }}>55%</h2>
            </div>
            <div
              style={{
                width: "150px",
                height: "100px",
                borderLeft: "2px solid green",
              }}
            >
              <p style={{ marginLeft: "5px" }}>Revenue Generated</p>
              <h2 style={{ color: "green", marginLeft: "5px" }}>55%</h2>
            </div>
          </div>
        </div>

        <CompaniesStatus />

        <ActiveUserBase />
      </div>

      <div className="table-chart-container">
        <OnBoardCompanies />

        <div style={{ marginRight: "10%" }}>
          {/* regional matrics--------- */}
          <p>Regional Matrics</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>East</span>
            <div
              style={{
                backgroundColor: "#ff751a",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                marginRight: "30px",
              }}
            ></div>
            <span>North</span>
            <div
              style={{
                backgroundColor: "#00cc66",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                marginRight: "30px",
              }}
            ></div>
            <span>South</span>
            <div
              style={{
                backgroundColor: "orange",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                marginRight: "30px",
              }}
            ></div>
            <span>West</span>
            <div
              style={{
                backgroundColor: "#1a1aff",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            ></div>
          </div>

          <Level />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
