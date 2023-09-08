import { Box } from "@mui/material";
import React from "react";
import "./Login.css";
import Logo from "./assets/Logo.png";
import HeroImage from "./assets/HeroPic.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  return (
    <div className="Login">
      <Box
        sx={{
          padding: "40px",
          width: "100%",
          height: "100%",
          bgcolor: "#F1F7Fd",
        }}
        className="Login"
      >
        <div className="App">
          <img src={Logo} alt="Logo" className="Logo" />
          <p>Welcome To The KarmaDev.in !</p>
          <img src={HeroImage} alt="HeroImage" className="Hero" />
        </div>

        <Box className="Form">
          <p>Sign in to your account</p>
          <h5>Email</h5>
          <TextField
            id="outlined-basic"
            label="Admin@gmail.com"
            variant="outlined"
          />
          <h5>Password</h5>
          <TextField
            id="outlined-basic"
            label="Enter Your Password"
            variant="outlined"
          />
          <h6>Remember me</h6>

          <Checkbox {...label} />

          <h6>Forgot Password?</h6>

          <div className="button">
            <Button variant="contained">Login as Admin</Button>
            <Button variant="contained">Login as Team Manager</Button>
            <Button variant="contained">Login in as Developer</Button>
            <Button variant="contained">Login as Client</Button>
          </div>
        </Box>
        <h5>Copyright @2023KarmaDev.in.</h5>
      </Box>
    </div>
  );
};

export default Login;
