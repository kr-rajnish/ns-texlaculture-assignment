import React from "react";

const OnBoardCompanies = () => {
  return (
    <div
      style={{
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
            width: "45%",
            height: "36px",
            marginBottom: "5px",
            marginLeft: "10px",
          }}
        ></input>
      </div>
      <table style={{ borderCollapse: "collapse", width: "80%" }}>
        <thead>
          <tr style={{ marginBottom: "10px" }}>
            <th style={{ border: "none", padding: "8px" }}>Company Name</th>
            <th style={{ border: "none", padding: "8px" }}>Onboarding date</th>
            <th style={{ border: "none", padding: "8px" }}>Go-live Date</th>
            <th style={{ border: "none", padding: "8px" }}>Total User base</th>
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
              <button style={{ backgroundColor: "#99ffbb", border: "none" }}>
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
              <button style={{ backgroundColor: "#99ffbb", border: "none" }}>
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
              <button style={{ backgroundColor: "#cccccc", border: "none" }}>
                Draft
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OnBoardCompanies;
