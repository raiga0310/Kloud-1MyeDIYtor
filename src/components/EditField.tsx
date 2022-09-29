import React, { useState } from "react";
import { View } from "./View";
import { Grid } from "@mui/material";
import ToggleButtonsMultiple from "./Format";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const DEFAULT_MD = "hoge";

export const EditField = () => {
  const [md, setMd] = useState((DEFAULT_MD));
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMd(e.target.value)
  }
  return (
    <Grid container direction={"row"} justifyContent={"center"} xs={{ padding: 3 }}>
      <Grid xs={12}>
        <ToggleButtonsMultiple />
      </Grid>
      <Grid xs={6}><textarea onChange={handleChange} value={md}/></Grid>
      <Grid xs={6}><View md={md}/></Grid>
    </Grid>
  );
}
