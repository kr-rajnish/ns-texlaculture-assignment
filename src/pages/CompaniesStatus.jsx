import React from "react";

const CompaniesStatus = () => {
  return (
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
  );
};

export default CompaniesStatus;
