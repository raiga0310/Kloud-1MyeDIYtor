import React from "react";
import './App.css';
import { Header } from "./components/Header";
import {EditField} from "./components/EditField";
import {Grid} from "@mui/material";

function App() {
  return (
    <div className="App">
        <Grid container spacing={4} direction={"column"}>
            <Grid><Header /></Grid>
            <Grid><EditField/></Grid>
        </Grid>
    </div>
  );
}

export default App;
