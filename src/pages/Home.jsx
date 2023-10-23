import { Button, Tabs } from "@mui/material";
import React from "react";
import PrimarySearchAppBar from "../homeComponent/PrimarySearchAppBar";
import SelectOtherProps from "../homeComponent/SelectOtherProps";
import TwoSimplePieChart from "../TwoSimplePieChart";

const Home = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <div
          style={{
            width: "346.28px",
            height: "100%",
            borderRight: "1px solid black",
          }}
        >
          <h2 style={{ color: "blue", display: "flex", flexWrap: "wrap" }}>
            <span style={{ border: "2px solid blue" }}>TEXLA</span>CULTURE
          </h2>
          <p>GENERAL</p>
          <SelectOtherProps />
        </div>
        <PrimarySearchAppBar />
      </div>
      <h3 style={{ position: "absolute", top: "60px", left: "25%" }}>
        Client Management
      </h3>
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "25%",
          display: "flex",
        }}
      >
        <p style={{ marginRight: "15px", borderBottom: "1px solid green" }}>
          Dashboard
        </p>
        <p>Clients Details</p>
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
      >
        <div
          style={{
            // backgroundColor: "red",
            width: "450px",
            height: "179px",
            border: "none",
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

        <div
          style={{
            // backgroundColor: "blue",
            width: "400px",
            height: "179px",
            border: "none",
          }}
        >
          <p style={{ marginLeft: "10px" }}>Companies Status</p>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            <div
              style={{
                width: "130px",
                height: "100px",
                borderLeft: "2px solid blue",
              }}
            >
              <p style={{ marginLeft: "5px" }}>Total</p>
              <h2 style={{ color: "blue", marginLeft: "5px" }}>20</h2>
            </div>
            <div
              style={{
                width: "130px",
                height: "100px",
                borderLeft: "2px solid green",
              }}
            >
              <p style={{ marginLeft: "5px" }}>Active</p>
              <h2 style={{ color: "green", marginLeft: "5px" }}>15</h2>
            </div>
            <div
              style={{
                width: "130px",
                height: "100px",
                borderLeft: "2px solid blue",
              }}
            >
              <p style={{ marginLeft: "5px" }}>New</p>
              <h2 style={{ color: "blue", marginLeft: "5px" }}>3</h2>
            </div>
          </div>
        </div>

        <div
          style={{
            // backgroundColor: "yellow",
            width: "250px",
            height: "179px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "none",
          }}
        >
          <p style={{ marginLeft: "5px" }}>Active User Base</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            ></div>
            <span>89% App User</span>
            <div
              style={{
                backgroundColor: "green",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            ></div>
            <span>11% Web User</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                width: "60%",
                height: "15px",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                width: "30%",
                height: "15px",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "25%",
          // transform: "translate(-50%, -50%)",
          display: "flex",
          // flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div
          style={{
            // backgroundColor: "black",
            width: "850px",
            height: "350px",
          }}
        >
          <p>Onboarded Companies</p>
          <div>
            <select
              style={{
                width: "30%",
                height: "40px",
                marginBottom: "5px",
                marginRight: "5px",
              }}
            >
              <option value="item1">All</option>
              <option value="item2">All 2</option>
              <option value="item3">All 3</option>
            </select>
            <input
              placeholder=" Search client or invoice number..."
              style={{
                width: "65%",
                height: "36px",
                marginBottom: "5px",
                marginLeft: "10px",
              }}
            ></input>
          </div>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ marginBottom: "10px" }}>
                <th style={{ border: "none", padding: "8px" }}>Company Name</th>
                <th style={{ border: "none", padding: "8px" }}>
                  Onboarding date
                </th>
                <th style={{ border: "none", padding: "8px" }}>Go-live Date</th>
                <th style={{ border: "none", padding: "8px" }}>
                  Total User base
                </th>
                <th style={{ border: "none", padding: "8px" }}>Last Billing</th>
                <th style={{ border: "none", padding: "8px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ marginBottom: "10px" }}>
                <td
                  style={{
                    border: "none",
                    padding: "8px",
                    backgroundColor: "#e6f0ff",
                  }}
                >
                  Texlaculture <p>INV-17048</p>
                </td>
                <td style={{ border: "none", padding: "8px" }}>12 Jan 2022</td>
                <td style={{ border: "none", padding: "8px" }}>07 Aug 2022</td>
                <td style={{ border: "none", padding: "8px" }}>244</td>
                <td style={{ border: "none", padding: "8px" }}>07 Aug 2022</td>
                <td
                  style={{
                    border: "none",
                    padding: "8px",

                    color: "#00b300",
                  }}
                >
                  <button
                    style={{ backgroundColor: "#99ffbb", border: "none" }}
                  >
                    Active
                  </button>
                </td>
              </tr>
              <tr style={{ marginBottom: "10px" }}>
                <td
                  style={{
                    border: "none",
                    padding: "8px",
                    backgroundColor: "#e6f0ff",
                  }}
                >
                  Pinch Life <p>INV-17049</p>
                </td>
                <td style={{ border: "none", padding: "8px" }}>11 Feb 2022</td>
                <td style={{ border: "none", padding: "8px" }}>06 May 2022</td>
                <td style={{ border: "none", padding: "8px" }}>1000</td>
                <td style={{ border: "none", padding: "8px" }}>07 Aug 2022</td>
                <td
                  style={{
                    border: "none",
                    padding: "8px",

                    color: "#00b300",
                  }}
                >
                  <button
                    style={{ backgroundColor: "#99ffbb", border: "none" }}
                  >
                    Active
                  </button>
                </td>
              </tr>
              <tr style={{ marginBottom: "10px" }}>
                <td
                  style={{
                    border: "none",
                    padding: "8px",
                    backgroundColor: "#ffe6f9",
                  }}
                >
                  O Buddy <p>INV-13042</p>
                </td>
                <td style={{ border: "none", padding: "8px" }}>10 sept 2022</td>
                <td style={{ border: "none", padding: "8px" }}>05 Oct 2022</td>
                <td style={{ border: "none", padding: "8px" }}>150</td>
                <td style={{ border: "none", padding: "8px" }}>207 Aug 2022</td>
                <td
                  style={{
                    border: "none",
                    padding: "8px",

                    color: "#000000",
                  }}
                >
                  <button
                    style={{ backgroundColor: "#cccccc", border: "none" }}
                  >
                    Draft
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ position: "absolute", top: "-5%", left: "60%" }}>
          Regional Matrics
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: "10%",
            left: "60%",
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

        <TwoSimplePieChart />
      </div>
    </div>
  );
};

export default Home;
