import React from "react";

const ActiveUserBase = () => {
  return (
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
  );
};

export default ActiveUserBase;
