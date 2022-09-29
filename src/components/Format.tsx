import * as React from 'react';
import TextureIcon from '@mui/icons-material/Texture';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from "@mui/material/Box";
import {MouseEventHandler} from "react";

export default function ToggleButtonsMultiple() {
  //const [formats, setFormats] = React.useState('');
  const [formats, setFormats] = React.useState('orange');
  const handleFormats = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string,
  ) => {
    setFormats(newFormats);
  };

  const control = {
    value: {formats}
  ,
    onChange: handleFormats,
    exclusive: true,
  };

  return (
    <Box>
      <ToggleButtonGroup
        size={"small"} {...control}
        aria-label="text formatting"
      >
        <ToggleButton value="orange" key="orange">
          <TextureIcon/>
        </ToggleButton>
        <ToggleButton value="underlined" key="underlined">
          <FormatUnderlinedIcon/>
        </ToggleButton>
        <ToggleButton  value="hidden" key="hidden">
          <VisibilityOffIcon/>
        </ToggleButton>
      </ToggleButtonGroup>
      {formats}
    </Box>
  );
}
