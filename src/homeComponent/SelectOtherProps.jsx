import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SpeedIcon from "@mui/icons-material/Speed";
import { Link } from "react-router-dom";

export default function SelectOtherProps() {
  const [age, setAge] = React.useState("");

  const buttonStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 16px",
    textTransform: "none",
    backgroundColor: "#e6e6ff",
    color: "black",
    width: "100%",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" style={buttonStyle}>
            <SpeedIcon style={{ color: "green" }} />
            Dashboard
            <ArrowForwardIosIcon />
          </Button>
        </Link>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <Link to="/companies" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" style={buttonStyle}>
            <AccountBalanceIcon />
            Companies
            <ArrowForwardIosIcon />
          </Button>
        </Link>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Link to="/support-ticket" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" style={buttonStyle}>
            <AccountBalanceIcon />
            Support & Ticket
            <ArrowForwardIosIcon />
          </Button>
        </Link>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <Link to="/user-admin" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" style={buttonStyle}>
            <AccountBalanceIcon />
            User Admin
            <ArrowForwardIosIcon />
          </Button>
        </Link>
      </FormControl>
    </div>
  );
}
