import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const StyledListItemTypo = styled(Typography)(() => ({
  fontFamily: "'DM Sans'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "26px",
  color: "#FFFFFF",
}));

const ListItem = ({ name }) => {
  return (
    <Stack direction="row" justifyContent="start" alignItems="center">
      <KeyboardArrowRightIcon sx={{ color: "#DA0E3C" }} />
      <StyledListItemTypo>{name}</StyledListItemTypo>
    </Stack>
  );
};

export default ListItem;
