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
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <Button variant="contained" color="primary" style={buttonStyle}>
          <SpeedIcon style={{ color: "green" }} />
          Dashboard
          <ArrowForwardIosIcon />
        </Button>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <Button variant="contained" color="primary" style={buttonStyle}>
          <AccountBalanceIcon />
          Companies
          <ArrowForwardIosIcon />
        </Button>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Button variant="contained" color="primary" style={buttonStyle}>
          <AccountBalanceIcon />
          Support & Ticket
          <ArrowForwardIosIcon />
        </Button>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <Button variant="contained" color="primary" style={buttonStyle}>
          <AccountBalanceIcon />
          User Admin
          <ArrowForwardIosIcon />
        </Button>
      </FormControl>
    </div>
  );
}
