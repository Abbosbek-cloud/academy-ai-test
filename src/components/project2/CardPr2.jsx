import { Stack } from "@mui/material";
import React from "react";
import { CardTypo, StyledRound } from "./StyledComponents";

const CardPr2 = ({ img, name }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
    >
      <StyledRound>
        <img width="120px" src={img} alt={name} />
      </StyledRound>
      <CardTypo>{name}</CardTypo>
    </Stack>
  );
};

export default CardPr2;
