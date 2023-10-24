import React from "react";
import PrimarySearchAppBar from "../homeComponent/PrimarySearchAppBar";
import { Link } from "react-router-dom";

const ClientPage = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <div>
        <h3> Client Management</h3>
        <div style={{ display: "flex" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Dashboard</p>
          </Link>
          <Link to="/clientDetails">
            <p style={{ marginLeft: "20px" }}>Clients details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
