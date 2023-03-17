import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Person from "./Person";
import { GeneralHeaderComponent } from "./StyledComponents";

const Sertificates = () => {
  return (
    <Container>
      <Stack>
        <GeneralHeaderComponent>СЕРТИФИКАТЫ</GeneralHeaderComponent>
        <Grid container justifyContent="center">
          {data.map((item, indx) => {
            if (indx !== 1) {
              return (
                <Grid item key={item} xs={12} md={3} mt={4}>
                  <Person img={item} isOnTop={false} />
                </Grid>
              );
            } else {
              return (
                <Grid item key={item} xs={12} md={3}>
                  <Person img={item} isOnTop={true} />
                </Grid>
              );
            }
          })}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Sertificates;

const data = ["/person1.png", "/person2.png", "/person3.png"];
