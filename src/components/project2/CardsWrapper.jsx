import { Container, Grid } from "@mui/material";
import React from "react";
import CardPr2 from "./CardPr2";
import { CartWrapper } from "./StyledComponents";

const CardsWrapper = () => {
  return (
    <Container sx={{ py: 3 }}>
      <CartWrapper direction="row" p={2}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item xs={12} md={3}>
            <CardPr2 img="/microscope.png" name="Labaratory" />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardPr2 img="/users.png" name="Community" />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardPr2 img="/wallet.png" name="Finance" />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardPr2 img="/graduation-cap.png" name="Knowledge" />
          </Grid>
        </Grid>
      </CartWrapper>
    </Container>
  );
};

export default CardsWrapper;
