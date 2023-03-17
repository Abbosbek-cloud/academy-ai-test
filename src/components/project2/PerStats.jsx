import { Stack, Typography } from "@mui/material";
import React from "react";

const PerStats = ({ number, name }) => {
  return (
    <Stack direction="column">
      <Typography
        sx={{
          fontFamily: "'Allerta Stencil'",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "60px",
          lineHeight: "117.2%",
          textAlign: "center",
          background: "linear-gradient(90deg, #F4013D 2.52%, #DA0E3C 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {number}
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Laviossa RUS'",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "117.2%",
          textAlign: "center",
          background: "linear-gradient(0deg, #FFFFFF, #FFFFFF)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
};

export default PerStats;
