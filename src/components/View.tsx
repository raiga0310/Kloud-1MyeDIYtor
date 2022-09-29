import React from "react";
import Box from "@mui/material/Box";
import { convertToHTMLString } from "../markdown";
type Props = {
  md: string;
  className?: string;
}

export const View = ({ md, className }: Props) => {
  return (
    <Box
      className={className}
      dangerouslySetInnerHTML={{__html: convertToHTMLString(md)}}
    />
  );
}
