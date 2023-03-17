import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import MaskInput from "./MaskInput";
import {
  GeneralHeaderComponent,
  StyledButtonContainedReq,
  StyledInputBase,
} from "./StyledComponents";

const Requests = () => {
  return (
    <Container>
      <Stack>
        <GeneralHeaderComponent my={2}>ОСТАВЬТЕ ЗАЯВКУ</GeneralHeaderComponent>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <StyledInputBase placeholder="Ваше имя:" />
          </Grid>
          <Grid item xs={12} md={3}>
            <MaskInput />
          </Grid>
          <Grid item xs={12} md={3}>
            <StyledInputBase placeholder="Email:" />
          </Grid>
          <Grid item xs={12} md={3}>
            <StyledButtonContainedReq sx={{ height: "100%" }}>
              Оставить заявку
            </StyledButtonContainedReq>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Requests;
