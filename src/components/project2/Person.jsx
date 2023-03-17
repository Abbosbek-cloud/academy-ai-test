import { Box, Stack } from "@mui/material";
import React from "react";

const Person = ({ isOnTop, img }) => {
  return (
    <Stack
      p={2}
      sx={{
        borderBottom: isOnTop ? "1px solid rgba(211, 27, 27, 1)" : "",
        paddingBottom: isOnTop ? "20px" : 0,
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      />
    </Stack>
  );
};

export default Person;
