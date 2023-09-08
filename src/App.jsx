import { Paper } from "@mui/material";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <Paper
      elevation={0}
      style={{
        Height: "90%",
        borderRadius: "0%"
      }}
    className="Paper">
      <Login />
    </Paper>
  );
}

export default App;
